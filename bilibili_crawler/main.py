import os
import time
import json
import random
import argparse
import schedule
from datetime import datetime
from bilibili_client import BilibiliClient
from bilibili_api import BilibiliAPI
from structure_tracker import StructureTracker
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
    parser.add_argument(
        "--downloads",
        type=str,
        default="downloads",
        help="保存目录（默认 ./downloads）",
    )
    parser.add_argument(
        "--save-xml", action="store_true", help="是否保存原始弹幕 XML 文件"
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


def safe_sleep(min_sec=10.0, max_sec=30.0, reason="等待中..."):
    """人类化 sleep，防止触发 B 站风控"""
    duration = round(random.uniform(min_sec, max_sec), 2)
    print(f"😴 {reason}，休眠 {duration}s")
    time.sleep(duration)


# 主任务
def download_videos():
    tracker = StructureTracker(DOWNLOAD_DIR)
    login_info = api.get_login_info()
    is_login = login_info.get("isLogin", False)
    if is_login:
        print(
            f"😄 登录账号：{login_info.get('mid',0)}，账号名：{login_info.get('uname','未知')}"
        )
    else:
        print("😢 未登录状态...")

    UP_MIDS = load_up_mids()
    for mid in UP_MIDS:
        try:
            log(f"[{datetime.now()}] 正在处理 UP 主：{mid}")

            if is_login:
                uploader_info = api.get_uploader_info(mid)
                up_dir = os.path.join(DOWNLOAD_DIR, str(mid))
                os.makedirs(up_dir, exist_ok=True)
                with open(
                    os.path.join(up_dir, "info.json"), "w", encoding="utf-8"
                ) as f:
                    json.dump(uploader_info, f, ensure_ascii=False, indent=2)

            if is_login:
                videos = api.get_videos(mid)
            else:
                videos = api.get_videos_public(mid)

            for video in videos:
                try:
                    bvid = video["bvid"]
                    title = video["title"]
                    log(f"  ⏬ 下载视频：{title} ({bvid})")

                    video_info = api.get_video_info(bvid)
                    cid = video_info["cid"]
                    danmaku_xml = api.get_danmaku_xml(cid)
                    if is_login:
                        summary = api.get_ai_summary(bvid, cid, mid)

                    save_path = os.path.join(DOWNLOAD_DIR, str(mid), bvid)
                    os.makedirs(save_path, exist_ok=True)

                    # 保存视频信息
                    with open(
                        os.path.join(save_path, "video_info.json"),
                        "w",
                        encoding="utf-8",
                    ) as f:
                        json.dump(video_info, f, ensure_ascii=False)

                    # 保存弹幕
                    if args.save_xml:
                        with open(
                            os.path.join(save_path, "danmaku.xml"),
                            "w",
                            encoding="utf-8",
                        ) as f:
                            f.write(danmaku_xml)

                    # 解析 danmaku.xml 为 JSON
                    try:
                        danmaku_json = parse_danmaku_xml(danmaku_xml)
                    except Exception as e:
                        log(
                            f"[⚠️ 弹幕解析失败] bvid={bvid} 错误：{type(e).__name__}: {e}"
                        )
                        danmaku_json = []

                    # 构建统一结构
                    combined_data = {
                        "bvid": bvid,
                        "cid": cid,
                        "videoData": video_info,
                        "danmakuData": danmaku_json,
                        "fetchtime": int(time.time()),
                    }

                    # 保存为 BVxxxxx.json（或 full_video.json）
                    with open(
                        os.path.join(save_path, f"{bvid}.json"), "w", encoding="utf-8"
                    ) as f:
                        json.dump(combined_data, f, ensure_ascii=False)

                    public_time = datetime.fromtimestamp(
                        video_info.get("pubdate", 0)
                    ).strftime("%Y-%m-%d %H:%M:%S")
                    download_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    # 保存摘要和下载时间
                    with open(
                        os.path.join(save_path, "summary.txt"), "w", encoding="utf-8"
                    ) as f:
                        f.write(f"视频标题：{title}\n")
                        f.write(f"发布时间：{public_time}\n")
                        f.write(f"下载时间：{download_time}\n")
                        if is_login:
                            f.write(f"AI摘要：{summary}\n")

                    tracker.update(
                        mid, bvid, title, public_time, download_time, save_path
                    )

                    safe_sleep(reason=f"处理完一个视频（bvid={bvid}）后冷却")
                except Exception as e:
                    log(
                        f"[❌ 错误] 处理 mid = {mid}, bvid = {bvid} 时出错：{type(e).__name__}: {e}"
                    )
            safe_sleep(reason=f"处理完一个UP主（mid={mid}）后冷却")

        except Exception as e:
            log(f"[❌ 错误] 处理 mid = {mid} 时出错：{type(e).__name__}: {e}")

    tracker.save()
    print(f"😊 完成一轮下载 [{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}]")


UP_MIDS = load_up_mids()
args = parse_args()
VIDEO_LOOKBACK_DAYS = args.days
DOWNLOAD_DIR = args.downloads

# client = BilibiliClient()
api = BilibiliAPI(BilibiliClient("bilibili_crawler/cookie.txt"))

if __name__ == "__main__":
    # 定时任务：每小时执行一次
    schedule.every(1).hours.do(download_videos)

    log("[启动] 正在立即执行首次任务...")

    download_videos()

    log("[守候] 每小时自动轮询...")
    while True:
        schedule.run_pending()
        time.sleep(60)
