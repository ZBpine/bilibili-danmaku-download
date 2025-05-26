# structure_tracker.py

import os
import json
from collections import defaultdict
from datetime import datetime


class StructureTracker:
    def __init__(self, base_dir):
        self.base_dir = base_dir
        self.structure_file = os.path.join(base_dir, "index.json")
        self.data = defaultdict(list)
        self._recent_updates = set()
        self._load()

    def _load(self):
        if os.path.exists(self.structure_file):
            with open(self.structure_file, "r", encoding="utf-8") as f:
                raw = json.load(f)
                for mid, entries in raw.items():
                    self.data[int(mid)] = entries

    def update(self, mid, data):
        bvid = data.get("bvid", "未知BVID")
        video_data = data.get("videoData", {})
        danmaku_data = data.get("danmakuData", [])
        title = video_data.get("title", "未知标题")
        pub_timestamp = video_data.get("pubdate", 0)
        pubdate = datetime.fromtimestamp(pub_timestamp).strftime("%Y-%m-%d %H:%M:%S")
        fetchtime = data.get("fetchtime", 0)
        download_time = datetime.fromtimestamp(fetchtime).strftime("%Y-%m-%d %H:%M:%S")
        expected_danmaku = video_data.get("stat", {}).get("danmaku", 0)
        actual_danmaku = len(danmaku_data)
        entry = {
            "bvid": bvid,
            "title": title,
            "pubdate": pubdate,
            "download_time": download_time,
            "danmaku_count": {
                "expected": expected_danmaku,
                "actual": actual_danmaku,
            },
        }
        entries = self.data[mid]
        for i, item in enumerate(entries):
            if item.get("bvid") == bvid:
                entries[i] = entry
                break
        else:
            entries.append(entry)

        self._recent_updates.add(bvid)

    def save(self):
        for entries in self.data.values():
            entries.sort(key=lambda x: x["pubdate"], reverse=True)
        json_data = {str(mid): entries for mid, entries in self.data.items()}
        with open(self.structure_file, "w", encoding="utf-8") as f:
            json.dump(json_data, f, ensure_ascii=False, indent=4)
        self.export_txt()

    def export_txt(self, txt_path=None):
        if not txt_path:
            txt_path = os.path.join(self.base_dir, "structure.txt")

        lines = []
        for mid, entries in self.data.items():
            lines.append(f" 📁  UP主 {mid} ：")
            for entry in entries:
                bvid = entry.get("bvid", "未知BVID")
                title = entry.get("title", "未知标题")
                pubdate = entry.get("pubdate", "未知时间")
                download_time = entry.get("download_time", "未知时间")
                expected = entry.get("danmaku_count", {}).get("expected", "未知")
                actual = entry.get("danmaku_count", {}).get("actual", "未知")

                is_new = entry["bvid"] in self._recent_updates
                mark = " 【NEW】" if is_new else ""
                lines.append(f"  │")
                lines.append(f"  ├─  {bvid}{mark}")
                lines.append(f"  │   视频标题     ：{title}")
                lines.append(f"  │   发布时间     ：{pubdate}")
                lines.append(f"  │   下载时间     ：{download_time}")
                lines.append(f"  │   弹幕数量     ：{actual} / {expected}")
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
