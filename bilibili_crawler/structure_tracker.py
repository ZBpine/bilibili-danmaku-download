# structure_tracker.py

import os
import json
from datetime import datetime, timedelta


class StructureTracker:
    def __init__(self, base_dir):
        self.base_dir = base_dir
        self.structure_file = os.path.join(base_dir, "structure.json")
        self.data = {}
        self._load()

    def _load(self):
        if os.path.exists(self.structure_file):
            with open(self.structure_file, "r", encoding="utf-8") as f:
                raw = json.load(f)
                for mid, entries in raw.items():
                    self.data[int(mid)] = entries

    def set_up_info(self, mid, info):
        """设置 UP 主基础信息"""
        self.data.setdefault(mid, {})
        self.data[mid]["name"] = info.get(
            "name", self.data[mid].get("name", "未知UP主")
        )
        self.data[mid]["sex"] = info.get("sex", self.data[mid].get("sex", ""))
        self.data[mid]["sign"] = info.get("sign", self.data[mid].get("sign", ""))
        self.data[mid]["fans"] = info.get("fans", self.data[mid].get("fans", 0))
        self.data[mid]["recent"] = []

    def update(self, mid, data):
        bvid = data.get("bvid", "未知BVID")
        video_data = data.get("videoData", {})
        title = video_data.get("title", "未知标题")
        duration = video_data.get("duration", 0)
        pubdate = video_data.get("pubdate", 0)
        fetchtime = data.get("fetchtime", 0)
        expected_danmaku = video_data.get("stat", {}).get("danmaku", 0)
        actual_danmaku = len(data.get("danmakuData", []))
        if mid not in self.data:
            self.data[mid] = {
                "recent": [],
                "video": {},
            }
        else:
            self.data[mid].setdefault("video", {})
            self.data[mid].setdefault("recent", [])
        video_info = {
            "bvid": bvid,
            "title": title,
            "duration": duration,
            "pubdate": pubdate,
            "fetchtime": fetchtime,
            "danmaku_count": {
                "expected": expected_danmaku,
                "actual": actual_danmaku,
            },
        }
        self.data[mid]["video"][bvid] = video_info
        self.data[mid]["recent"].append(bvid)
        return self.get_tree_data_item(bvid, video_info)

    def save(self):
        json_data = {str(mid): entries for mid, entries in self.data.items()}
        with open(self.structure_file, "w", encoding="utf-8") as f:
            json.dump(json_data, f, ensure_ascii=False, indent=4)
        self.export_txt()

    def get_tree_data(self):
        result = []
        for mid, info in self.data.items():
            name = info.get("name", "未知UP主")
            sign = info.get("sign", "")
            fans = info.get("fans", 0)
            user = {
                "mid": mid,
                "name": name,
                "lines": [
                    f"用户签名     ：{sign}",
                    f"粉丝数量     ：{fans:,}",
                ],
            }
            recent_set = set(info.get("recent", []))
            video_dict = info.get("video", {})

            videos = []
            for bvid, video in sorted(
                video_dict.items(),
                key=lambda i: i[1].get("pubdate", 0),
                reverse=True,
            ):
                video_info = self.get_tree_data_item(bvid, video)
                video_info["is_new"] = bvid in recent_set
                videos.append(video_info)
            result.append((user, videos))
        return result

    def get_tree_data_item(self, bvid, video):
        title = video.get("title", "未知标题")
        duration = str(timedelta(seconds=video.get("duration", 0)))
        pubdate = datetime.fromtimestamp(video.get("pubdate", 0)).strftime(
            "%Y-%m-%d %H:%M:%S"
        )
        fetchtime = datetime.fromtimestamp(video.get("fetchtime", 0)).strftime(
            "%Y-%m-%d %H:%M:%S"
        )
        danmaku_count = video.get("danmaku_count", {})
        actual = danmaku_count.get("actual", "?")
        expected = danmaku_count.get("expected", "?")
        return {
            "bvid": bvid,
            "lines": [
                f"视频标题     ：{title}",
                f"视频时长     ：{duration}",
                f"发布时间     ：{pubdate}",
                f"下载时间     ：{fetchtime}",
                f"弹幕数量     ：{actual} / {expected}",
            ],
        }

    def export_txt(self, txt_path=None):
        if not txt_path:
            txt_path = os.path.join(self.base_dir, "structure.txt")
        lines = []
        for user, videos in self.get_tree_data():
            mid = user["mid"]
            name = user["name"]
            lines.append(f" 📁  [{mid}]{name} ：")
            for line in user["lines"]:
                lines.append(f"  │   {line}")
            for video in videos:
                bvid = video["bvid"]
                mark = " 【NEW】" if video["is_new"] else ""
                lines.append(f"  │")
                lines.append(f"  ├─  {bvid}{mark}")
                for line in video["lines"]:
                    lines.append(f"  │   {line}")
            lines.append("")

        with open(txt_path, "w", encoding="utf-8") as f:
            f.write("\n".join(lines))


# ✅ 运行该脚本会自动重建结构索引
if __name__ == "__main__":
    BASE_DIR = "downloads"
    tracker = StructureTracker(BASE_DIR)

    for mid_dir in os.listdir(BASE_DIR):
        mid_path = os.path.join(BASE_DIR, mid_dir)
        if not os.path.isdir(mid_path) or not mid_dir.isdigit():
            continue

        mid = int(mid_dir)

        info_path = os.path.join(mid_path, "info.json")
        if os.path.exists(info_path):
            try:
                with open(info_path, "r", encoding="utf-8") as f:
                    info_json = json.load(f)
                    card = info_json.get("card", {})
                    tracker.set_up_info(mid=mid, info=card)
            except Exception as e:
                print(f"[⚠️ 忽略 info.json 错误] {mid}: {type(e).__name__}: {e}")
        else:
            print(f"[⚠️ 缺失 info.json] {mid_path}")

        for video_dir in os.listdir(mid_path):
            video_path = os.path.join(mid_path, video_dir)
            if not os.path.isdir(video_path):
                continue

            json_path = os.path.join(video_path, f"{video_dir}.json")
            if not os.path.exists(json_path):
                continue

            try:
                with open(json_path, "r", encoding="utf-8") as f:
                    data = json.load(f)

                tracker.update(mid=mid, data=data)
            except Exception as e:
                print(f"[⚠️ 忽略错误] {video_dir}: {type(e).__name__}: {e}")

    tracker.save()
