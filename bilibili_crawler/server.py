# server.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from bilibili_client import BilibiliClient
from bilibili_api import BilibiliAPI
from danmaku_util import parse_danmaku_xml
import time
import os
import json
import difflib

app = Flask(__name__)
CORS(app)

# client = BilibiliClient()
api = BilibiliAPI(BilibiliClient("bilibili_crawler/cookie.txt"))


def similar(a, b):
    """返回两个字符串的相似度（0~1）"""
    return difflib.SequenceMatcher(None, a, b).ratio()


@app.route("/search")
def search():
    keyword = request.args.get("keyword", "").strip().lower()
    content_type = request.args.get("type", "video")  # "video" or "media_bangumi"
    if not keyword:
        return jsonify({"error": "Missing keyword"}), 400

    results = []

    # 1. 在线搜索
    try:
        online_results = api.search(keyword, content_type)
        for item in online_results:
            item["source"] = "bilibili"
        results.extend(online_results)
    except Exception as e:
        return jsonify({"error": f"Bilibili 搜索失败: {str(e)}"}), 500

    # 2. 本地搜索
    try:
        local_root = "downloads"
        for mid in os.listdir(local_root):
            mid_dir = os.path.join(local_root, mid)
            if not os.path.isdir(mid_dir):
                continue
            for bvid in os.listdir(mid_dir):
                bvid_dir = os.path.join(mid_dir, bvid)
                info_path = os.path.join(bvid_dir, "video_info.json")
                if not os.path.exists(info_path):
                    continue
                with open(info_path, "r", encoding="utf-8") as f:
                    info = json.load(f)
                    title = info.get("title", "").lower()
                    if similar(keyword, title) >= 0.5:
                        results.append(
                            {
                                "bvid": bvid,
                                "title": info.get("title"),
                                "author": info.get("owner", {}).get(
                                    "name", f"UP主 {mid}"
                                ),
                                "play": info.get("stat", {}).get("view", 0),
                                "video_review": info.get("stat", {}).get("danmaku", 0),
                                "duration": info.get("duration", 0),
                                "source": "local",
                            }
                        )
    except Exception as e:
        print(f"[WARN] 本地搜索失败：{e}")

    return jsonify(results)


@app.route("/video")
def get_video():
    bvid = request.args.get("bvid", "")
    source = request.args.get("source", "bilibili")
    if not bvid:
        return jsonify({"error": "Missing bvid"}), 400

    if source == "local":
        try:
            base_dir = "downloads"
            for mid in os.listdir(base_dir):
                mid_dir = os.path.join(base_dir, mid)
                bvid_dir = os.path.join(mid_dir, bvid)
                json_path = os.path.join(bvid_dir, f"{bvid}.json")
                if os.path.exists(json_path):
                    with open(json_path, "r", encoding="utf-8") as f:
                        data = json.load(f)
                        data["source"] = "local"
                        return jsonify(data)
            return jsonify({"error": f"未找到本地弹幕：{bvid}"}), 404
        except Exception as e:
            return jsonify({"error": f"读取本地弹幕失败：{e}"}), 500

    try:
        video_info = api.get_video_info(bvid)
        cid = video_info["cid"]
        dm_xml = api.get_danmaku_xml(cid)
        danmaku = parse_danmaku_xml(dm_xml)
        return jsonify(
            {
                "bvid": bvid,
                "cid": cid,
                "videoData": video_info,
                "danmakuData": danmaku,
                "fetchtime": int(time.time()),
            }
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/bangumi")
def get_bangumi():
    ep_id = request.args.get("ep_id")
    if not ep_id:
        return jsonify({"error": "Missing ep_id"}), 400

    try:
        ep_id = int(ep_id)
        bangumi = api.get_bangumi_info_by_epid(ep_id)
        cid = bangumi["episodes"][0]["cid"]
        dm_xml = api.get_danmaku_xml(cid)
        danmaku = parse_danmaku_xml(dm_xml)
        return jsonify(
            {
                "ep_id": ep_id,
                "cid": cid,
                "seasonData": bangumi,
                "danmakuData": danmaku,
                "fetchtime": int(time.time()),
            }
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=13245, debug=True)
