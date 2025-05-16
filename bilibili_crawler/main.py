import os
import sys
import time
import json
import random
import argparse
import schedule
from datetime import datetime, timedelta
from bilibili_client import BilibiliClient
from bilibili_api import BilibiliAPI
from danmaku_util import parse_danmaku_xml

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


UP_MIDS = load_up_mids()
args = parse_args()
VIDEO_LOOKBACK_DAYS = args.days

client = BilibiliClient()
api = BilibiliAPI(client)


def safe_sleep(min_sec=10.0, max_sec=30.0, reason="等待中..."):
    """人类化 sleep，防止触发 B 站风控"""
    duration = round(random.uniform(min_sec, max_sec), 2)
    print(f"😴 {reason}，休眠 {duration}s")
    time.sleep(duration)


def build_full_video_json(bvid, cid, video_info, danmaku_json):
    return {
        "bvid": bvid,
        "cid": cid,
        "videoData": video_info,
        "danmakuData": danmaku_json,
        "fetchtime": int(time.time()),
    }


# 主任务
def download_videos():
    UP_MIDS = load_up_mids()
    for mid in UP_MIDS:
        try:
            log(f"[{datetime.now()}] 正在处理 UP 主：{mid}")

            # 保存 UP 主信息
            uploader_info = api.get_uploader_info(mid)
            up_dir = os.path.join("downloads", str(mid))
            os.makedirs(up_dir, exist_ok=True)
            with open(os.path.join(up_dir, "info.json"), "w", encoding="utf-8") as f:
                json.dump(uploader_info, f, ensure_ascii=False, indent=2)

            videos = api.get_videos(mid)

            for video in videos:
                bvid = video["bvid"]
                title = video["title"]
                pub_time = datetime.fromtimestamp(video["created"]).strftime(
                    "%Y-%m-%d %H:%M:%S"
                )
                log(f"  ⏬ 下载视频：{title} ({bvid})")

                video_info = api.get_video_info(bvid)
                cid = video_info["cid"]
                danmaku_xml = api.get_danmaku_xml(cid)
                summary = api.get_ai_summary(bvid, cid, mid)

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
                try:
                    danmaku_json = parse_danmaku_xml(danmaku_xml)
                except Exception as e:
                    log(f"[⚠️ 弹幕解析失败] bvid={bvid} 错误：{e}")
                    danmaku_json = []

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


if __name__ == "__main__":
    # 定时任务：每小时执行一次
    schedule.every(1).hours.do(download_videos)

    log("[启动] 正在立即执行首次任务...")
    if not api.check_login():
        log("❌ Cookie 登录失败，退出")
        exit()

    download_videos()

    log("[守候] 每小时自动轮询...")
    while True:
        schedule.run_pending()
        time.sleep(60)
