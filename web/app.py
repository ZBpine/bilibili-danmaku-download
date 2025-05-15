from flask import Flask, render_template, send_from_directory, abort
import os, json, xml.etree.ElementTree as ET
from datetime import datetime

app = Flask(__name__)
ROOT_DIR = "downloads"


def load_up_list():
    mids = []
    for mid in os.listdir(ROOT_DIR):
        if os.path.isdir(os.path.join(ROOT_DIR, mid)) and mid.isdigit():
            mids.append(mid)
    return mids


def load_up_info(mid):
    path = os.path.join(ROOT_DIR, mid, "info.json")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    return {}


def load_videos(mid):
    up_dir = os.path.join(ROOT_DIR, mid)
    videos = []
    for bv in os.listdir(up_dir):
        v_dir = os.path.join(up_dir, bv)
        info_path = os.path.join(v_dir, "video_info.json")
        if os.path.exists(info_path):
            with open(info_path, encoding="utf-8") as f:
                info = json.load(f)
            summary = ""
            summary_path = os.path.join(v_dir, "summary.txt")
            if os.path.exists(summary_path):
                with open(summary_path, encoding="utf-8") as f:
                    lines = f.readlines()
                    if len(lines) > 1:
                        summary = lines[1].replace("AI摘要：", "").strip()
            videos.append(
                {
                    "bvid": info["bvid"],
                    "title": info["title"],
                    "cover": info["pic"],
                    "pubdate": datetime.fromtimestamp(info["pubdate"]).strftime(
                        "%Y-%m-%d"
                    ),
                    "summary": summary,
                }
            )
    return videos


def parse_danmaku_xml(path):
    try:
        tree = ET.parse(path)
        root = tree.getroot()
        results = []
        for d in root.findall("d"):
            p = d.attrib.get("p", "")
            content = d.text or ""
            try:
                t = float(p.split(",")[0])
                mm = int(t // 60)
                ss = int(t % 60)
                results.append(
                    {"time_raw": t, "time_str": f"{mm:02d}:{ss:02d}", "text": content}
                )
            except:
                continue
        # ✅ 时间升序排序
        return sorted(results, key=lambda x: x["time_raw"])
    except:
        return []


@app.route("/")
def index():
    mids = load_up_list()
    up_data = []
    for mid in mids:
        info = load_up_info(mid)
        up_data.append(
            {
                "mid": mid,
                "name": info.get("name", "未知UP主"),
                "sign": info.get("sign", ""),
                "face": info.get("face", ""),
            }
        )
    return render_template("index.html", ups=up_data)


@app.route("/up/<mid>")
def up_page(mid):
    info = load_up_info(mid)
    videos = load_videos(mid)
    return render_template(
        "up.html", mid=mid, name=info.get("name", mid), videos=videos
    )


@app.route("/up/<mid>/video/<bvid>")
def video_page(mid, bvid):
    v_path = os.path.join(ROOT_DIR, mid, bvid)
    video_info_path = os.path.join(v_path, "video_info.json")
    danmaku_path = os.path.join(v_path, "danmaku.xml")

    if not os.path.exists(video_info_path):
        abort(404)

    with open(video_info_path, encoding="utf-8") as f:
        info = json.load(f)

    danmakus = parse_danmaku_xml(danmaku_path)
    return render_template("video.html", info=info, danmakus=danmakus)


@app.route("/favicon.ico")
def favicon():
    return send_from_directory("static", "favicon.ico")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
