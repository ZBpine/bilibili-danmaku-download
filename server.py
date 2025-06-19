# server.py

import time
import os
import json
import difflib
from flask import Flask, request, jsonify
from flask_cors import CORS
from bilibili_crawler import (
    BilibiliClient,
    BilibiliAPI,
    DanmakuParser,
    get_danmaku_full,
)


def create_server_app(cookie_path="config/cookie.txt", download_dir="downloads"):
    app = Flask(__name__)
    CORS(app)

    # client = BilibiliClient()
    api = BilibiliAPI(BilibiliClient(cookie_path))

    def similar(a, b):
        """返回两个字符串的相似度（0~1）"""
        return difflib.SequenceMatcher(None, a, b).ratio()

    @app.route("/search")
    def search():
        keyword = request.args.get("keyword", "").strip().lower()
        search_type = request.args.get("type", "video")

        print(
            f"🔍 服务器收到 /search 请求：keyword={request.args.get('keyword')}, type={request.args.get('type')}"
        )

        if not keyword:
            return jsonify({"error": "Missing keyword"}), 400

        results = []

        # 1. 在线搜索
        try:
            online_results = api.search(keyword, search_type)[:20]
            for item in online_results:
                item["source"] = "bilibili"
            results.extend(online_results)
        except Exception as e:
            return jsonify({"error": f"Bilibili 搜索失败: {str(e)}"}), 500

        # 2. 本地搜索
        try:
            for mid in os.listdir(download_dir):
                mid_dir = os.path.join(download_dir, mid)
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
                                    "video_review": info.get("stat", {}).get(
                                        "danmaku", 0
                                    ),
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

        print(f"📺 服务器收到 /video 请求：bvid={bvid}, source={source}")

        if not bvid:
            return jsonify({"error": "Missing bvid"}), 400

        if source == "local":
            try:
                for mid in os.listdir(download_dir):
                    mid_dir = os.path.join(download_dir, mid)
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
            danmaku_list = get_danmaku_full(api, video_info)
            return jsonify(
                {
                    "bvid": bvid,
                    "cid": cid,
                    "videoData": video_info,
                    "danmakuData": danmaku_list,
                    "fetchtime": int(time.time()),
                }
            )
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return app


if __name__ == "__main__":
    create_server_app().run(port=13245, debug=True)
