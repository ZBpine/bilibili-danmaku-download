import os
import sys
import time
import json
import random
import argparse
import schedule
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
from wbi_sign import encWbi, getWbiKeys
from http_util import http_get, http_get_text


log_dir = "bilibili_crawler/logs"
os.makedirs(log_dir, exist_ok=True)
log_file_path = os.path.join(log_dir, f"run_{datetime.now().strftime('%Y-%m-%d')}.log")


def log(msg):
    timestamp = datetime.now().strftime("[%Y-%m-%d %H:%M:%S]")
    full_msg = f"{timestamp} {msg}"
    print(full_msg)
    with open(log_file_path, "a", encoding="utf-8") as f:
        f.write(full_msg + "\n")


def parse_args():
    parser = argparse.ArgumentParser(description="Bilibili 视频弹幕下载器")
    parser.add_argument(
        "--days", type=int, default=10, help="下载最近几天的视频（默认10天）"
    )
    return parser.parse_args()


def load_up_mids(file_path="bilibili_crawler/up_list.txt"):
    mids = []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and line.isdigit():
                    mids.append(int(line))
    except FileNotFoundError:
        log(f"[ERROR] 找不到 UP 主列表文件：{file_path}")
    return mids


# UP主 mid 列表
UP_MIDS = load_up_mids()
args = parse_args()
VIDEO_LOOKBACK_DAYS = args.days

# 缓存一次 Wbi keys，避免多次请求
IMG_KEY, SUB_KEY = getWbiKeys()


def safe_sleep(min_sec=10.0, max_sec=30.0, reason="等待中..."):
    """人类化 sleep，防止触发 B 站风控"""
    duration = round(random.uniform(min_sec, max_sec), 2)
    print(f"😴 {reason}，休眠 {duration}s")
    time.sleep(duration)


def parse_danmaku_xml(xml_text):
    danmakus = []
    try:
        root = ET.fromstring(xml_text)
        for d in root.findall("d"):
            p = d.get("p")
            if not p:
                continue
            parts = p.split(",")
            if len(parts) < 8:
                continue
            danmaku = {
                "progress": int(float(parts[0]) * 1000),
                "mode": int(parts[1]),
                "fontsize": int(parts[2]),
                "color": int(parts[3]),
                "ctime": int(parts[4]),
                "pool": int(parts[5]),
                "midHash": parts[6],
                "dmid": parts[7],
                "weight": int(parts[8]) if len(parts) > 8 else 0,
                "content": (d.text or "").strip(),
            }
            danmakus.append(danmaku)
        return danmakus
    except Exception as e:
        log(f"[⚠️ 弹幕解析失败] {e}")
        return []


def build_full_video_json(bvid, cid, video_info, danmaku_json):
    return {
        "bvid": bvid,
        "cid": cid,
        "videoData": video_info,
        "danmakuData": danmaku_json,
    }


def check_login():
    res = http_get("https://api.bilibili.com/x/web-interface/nav", desc="验证登录状态")
    is_login = res.get("data", {}).get("isLogin", False)
    if is_login:
        log("✅ 当前处于登录状态，Cookie 有效")
    else:
        log("❌ 当前未登录，请检查 cookie.txt")
        sys.exit(1)


# 获取 UP 主信息
def get_uploader_info(mid):
    url = "https://api.bilibili.com/x/space/wbi/acc/info"
    params = {"mid": str(mid)}
    signed_params = encWbi(params, IMG_KEY, SUB_KEY)
    res = http_get(url, params=signed_params, desc=f"获取 UP 主信息 mid={mid}")
    return res["data"]


# 获取 UP 主视频列表
def get_videos(mid):
    videos = []
    page = 1
    cutoff_time = datetime.now() - timedelta(days=VIDEO_LOOKBACK_DAYS)

    while True:
        url = "https://api.bilibili.com/x/space/wbi/arc/search"
        params = {"mid": str(mid), "pn": str(page), "ps": "30", "order": "pubdate"}
        signed_params = encWbi(params, IMG_KEY, SUB_KEY)
        res = http_get(url, signed_params, desc="获取视频列表")

        if res["code"] != 0 or "list" not in res["data"]:
            print(res)
            break

        for v in res["data"]["list"]["vlist"]:
            pubdate = datetime.fromtimestamp(v["created"])
            if pubdate < cutoff_time:
                return videos
            videos.append(v)

        if not res["data"]["list"]["vlist"]:
            break
        page += 1

    return videos


# 获取视频详细信息
def get_video_info(bvid):
    url = f"https://api.bilibili.com/x/web-interface/view"
    res = http_get(url, {"bvid": bvid}, desc="获取视频信息")
    return res["data"]


# 获取弹幕 XML（新版 API）
def get_danmaku_xml(cid):
    url = f"https://api.bilibili.com/x/v1/dm/list.so?oid={cid}"
    return http_get_text(url, desc="获取弹幕XML")


# 获取 AI 摘要（Wbi 签名）
def get_ai_summary(bvid, cid, mid):
    url = "https://api.bilibili.com/x/web-interface/view/conclusion/get"
    params = {"bvid": bvid, "cid": str(cid), "up_mid": str(mid)}
    signed_params = encWbi(params, IMG_KEY, SUB_KEY)
    res = http_get(url, signed_params, desc="获取AI摘要")
    try:
        return res["data"]["model_result"].get("summary", "无摘要")
    except:
        return "无摘要"


# 主任务
def download_videos():
    UP_MIDS = load_up_mids()
    for mid in UP_MIDS:
        try:
            log(f"[{datetime.now()}] 正在处理 UP 主：{mid}")

            # 保存 UP 主信息
            uploader_info = get_uploader_info(mid)
            up_dir = os.path.join("downloads", str(mid))
            os.makedirs(up_dir, exist_ok=True)
            with open(os.path.join(up_dir, "info.json"), "w", encoding="utf-8") as f:
                json.dump(uploader_info, f, ensure_ascii=False, indent=2)

            videos = get_videos(mid)

            for video in videos:
                bvid = video["bvid"]
                title = video["title"]
                pub_time = datetime.fromtimestamp(video["created"]).strftime(
                    "%Y-%m-%d %H:%M:%S"
                )
                log(f"  ⏬ 下载视频：{title} ({bvid})")

                video_info = get_video_info(bvid)
                cid = video_info["cid"]
                danmaku_xml = get_danmaku_xml(cid)
                summary = get_ai_summary(bvid, cid, mid)

                save_path = os.path.join("downloads", str(mid), bvid)
                os.makedirs(save_path, exist_ok=True)

                # 保存视频信息
                with open(
                    os.path.join(save_path, "video_info.json"), "w", encoding="utf-8"
                ) as f:
                    json.dump(video_info, f, ensure_ascii=False, indent=2)

                # 保存弹幕
                with open(
                    os.path.join(save_path, "danmaku.xml"), "w", encoding="utf-8"
                ) as f:
                    f.write(danmaku_xml)

                # 解析 danmaku.xml 为 JSON
                danmaku_json = parse_danmaku_xml(danmaku_xml)

                # 构建统一结构
                combined_data = build_full_video_json(
                    bvid, cid, video_info, danmaku_json
                )

                # 保存为 danmaku.json（或 full_video.json）
                with open(
                    os.path.join(save_path, f"{bvid}.json"), "w", encoding="utf-8"
                ) as f:
                    json.dump(combined_data, f, ensure_ascii=False, indent=2)

                # 保存摘要和下载时间
                with open(
                    os.path.join(save_path, "summary.txt"), "w", encoding="utf-8"
                ) as f:
                    f.write(
                        f"下载时间：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
                    )
                    f.write(f"AI摘要：{summary}\n")

                safe_sleep(reason=f"处理完一个视频（bvid={bvid}）后冷却")

            safe_sleep(reason=f"处理完一个UP主（mid={mid}）后冷却")

        except Exception as e:
            log(f"[❌ 错误] 处理 mid={mid} 时出错：{e}")


# 定时任务：每小时执行一次
schedule.every(1).hours.do(download_videos)

log("[启动] 正在立即执行首次任务...")
check_login()
download_videos()

log("[守候] 每小时自动轮询...")
while True:
    schedule.run_pending()
    time.sleep(60)
