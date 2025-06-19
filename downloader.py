import os
import time
import json
import random
import schedule
from datetime import datetime
from bilibili_crawler import (
    BilibiliClient,
    BilibiliAPI,
    StructureTracker,
    get_danmaku_full,
)


class BiliDmDownloader:
    def __init__(
        self,
        cookie_path="config/cookie.txt",
        download_dir="downloads",
        logs_dir="logs",
        sleep_min=10,
        sleep_max=30,
    ):
        self.cookie_path = cookie_path
        self.download_dir = download_dir
        self.sleep_min = sleep_min
        self.sleep_max = sleep_max

        os.makedirs(self.download_dir, exist_ok=True)
        os.makedirs(logs_dir, exist_ok=True)
        self.log_file_path = os.path.join(
            logs_dir, f"run_{datetime.now().strftime('%Y-%m-%d')}.log"
        )
        self.tracker = StructureTracker(self.download_dir)
        # self.load_cookie()

    def load_cookie(self):
        if os.path.exists(self.cookie_path):
            self.api = BilibiliAPI(BilibiliClient(self.cookie_path))

            login_info = self.api.get_login_info()
            self.is_login = login_info.get("isLogin", False)
            if self.is_login:
                self.log(
                    f"😄 登录账号：{login_info.get('mid')}，账号名：{login_info.get('uname')}"
                )
            else:
                self.log("😢 未登录状态...")

    def log(self, msg):
        timestamp = datetime.now().strftime("[%Y-%m-%d %H:%M:%S]")
        full_msg = f"{timestamp} {msg}"
        print(full_msg)
        with open(self.log_file_path, "a", encoding="utf-8") as f:
            f.write(full_msg + "\n")

    def safe_sleep(self, reason="等待中..."):
        """人类化 sleep，防止触发 B 站风控"""
        duration = round(random.uniform(self.sleep_min, self.sleep_max), 2)
        print(f"😴 {reason}，休眠 {duration}s")
        time.sleep(duration)

    def download_up_list(self, up_list_path="config/up_list.txt", lookback_days=10):
        UP_MIDS = []
        try:
            with open(up_list_path, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line and line.isdigit():
                        UP_MIDS.append(int(line))
        except FileNotFoundError:
            self.log(f"[ERROR] 找不到 UP 主列表文件：{up_list_path}")

        for mid in UP_MIDS:
            try:
                self.log(f"正在处理 UP 主：{mid}")

                uploader_info = self.api.get_user_card(mid)
                up_dir = os.path.join(self.download_dir, str(mid))
                os.makedirs(up_dir, exist_ok=True)
                with open(
                    os.path.join(up_dir, "info.json"), "w", encoding="utf-8"
                ) as f:
                    json.dump(uploader_info, f, ensure_ascii=False, indent=4)

                self.tracker.set_up_info(mid, uploader_info.get("card", {}))

                videos = (
                    self.api.get_videos(mid, lookback_days)
                    if self.is_login
                    else self.api.get_videos_public(mid, lookback_days)
                )

                for video in videos:
                    bvid = video["bvid"]
                    video_info = self.api.get_video_info(bvid)
                    self.process_video(mid, video_info)
                    self.safe_sleep(reason=f"处理完一个视频（bvid={bvid}）后冷却")

                self.safe_sleep(reason=f"处理完一个 UP 主（mid={mid}）后冷却")

            except Exception as e:
                self.log(f"[❌ 错误] 处理 mid={mid} 时出错：{type(e).__name__}: {e}")

        self.tracker.save()
        self.log("😊 完成一轮下载")

    def download_bvid(self, bvid):
        try:
            video_info = self.api.get_video_info(bvid)
            mid = video_info["owner"]["mid"]
            self.process_video(mid, video_info)
            self.tracker.save()
        except Exception as e:
            self.log(f"[❌ 错误] 处理 bvid={bvid} 时出错：{type(e).__name__}: {e}")

    def process_video(self, mid, video_info):
        try:
            bvid = video_info["bvid"]
            title = video_info["title"]
            cid = video_info["cid"]
            self.log(f"  ⏬ 下载视频：{title} ({bvid})")

            summary = self.api.get_ai_summary(bvid, cid, mid) if self.is_login else ""

            save_path = os.path.join(self.download_dir, str(mid), bvid)
            os.makedirs(save_path, exist_ok=True)

            with open(
                os.path.join(save_path, "video_info.json"), "w", encoding="utf-8"
            ) as f:
                json.dump(video_info, f, ensure_ascii=False)

            danmaku_list = get_danmaku_full(self.api, video_info)
            combined_data = {
                "bvid": bvid,
                "cid": cid,
                "videoData": video_info,
                "danmakuData": danmaku_list,
                "fetchtime": int(time.time()),
            }

            with open(
                os.path.join(save_path, f"{bvid}.json"), "w", encoding="utf-8"
            ) as f:
                json.dump(combined_data, f, ensure_ascii=False)

            summary_data = self.tracker.update(mid=mid, data=combined_data)
            with open(
                os.path.join(save_path, "summary.txt"), "w", encoding="utf-8"
            ) as f:
                for line in summary_data["lines"]:
                    f.write(f"{line}\n")
                if summary:
                    f.write(f"AI摘要       ：{summary}\n")

        except Exception as e:
            self.log(
                f"[❌ 错误] 处理 mid={mid}, bvid={video_info.get('bvid')} 时出错：{type(e).__name__}: {e}"
            )


if __name__ == "__main__":
    downloader = BiliDmDownloader()
    downloader.load_cookie()
    # 定时任务：每小时执行一次
    schedule.every(1).hours.do(downloader.download_up_list)

    downloader.log("[启动] 正在立即执行首次任务...")
    downloader.download_up_list()

    downloader.log("[守候] 每小时自动轮询...")
    while True:
        schedule.run_pending()
        time.sleep(60)
