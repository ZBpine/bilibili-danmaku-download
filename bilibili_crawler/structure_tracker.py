# structure_tracker.py

import os
import json
from collections import defaultdict


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

    def update(self, mid, bvid, title, pub_time, down_time, save_path):
        entry = {
            "bvid": bvid,
            "title": title,
            "pubdate": pub_time,
            "download_time": down_time,
            "path": save_path,
        }
        entries = self.data[mid]
        for i, item in enumerate(entries):
            if item["bvid"] == bvid:
                entries[i] = entry  # replace to update
                break
        else:
            entries.append(entry)
        self._recent_updates.add(bvid)

    def save(self):
        json_data = {str(mid): entries for mid, entries in self.data.items()}
        with open(self.structure_file, "w", encoding="utf-8") as f:
            json.dump(json_data, f, ensure_ascii=False, indent=4)
        self.export_txt()

    def export_txt(self, txt_path=None):
        if not txt_path:
            txt_path = os.path.join(self.base_dir, "structure.txt")

        lines = []
        for mid, entries in self.data.items():
            lines.append(f" 📁  UP主 {mid}：")
            for entry in entries:
                is_new = entry["bvid"] in self._recent_updates
                mark = " 【NEW】" if is_new else ""
                lines.append(f"  ├─  {entry['bvid']}{mark}")
                lines.append(f"  │   视频标题     ：{entry['title']}")
                lines.append(f"  │   发布时间     ：{entry['pubdate']}")
                lines.append(f"  │   下载时间     ：{entry['download_time']}")
                lines.append(f"  │   保存路径     ：{entry['path']}")
                lines.append(f"  │")
            lines.append("")

        with open(txt_path, "w", encoding="utf-8") as f:
            f.write("\n".join(lines))
