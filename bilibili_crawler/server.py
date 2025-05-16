# server.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from bilibili_client import BilibiliClient
from bilibili_api import BilibiliAPI
from danmaku_util import parse_danmaku_xml
import time

app = Flask(__name__)
CORS(app)

client = BilibiliClient()
api = BilibiliAPI(client)


@app.route("/search")
def search():
    keyword = request.args.get("keyword", "")
    content_type = request.args.get("type", "video")  # "video" or "media_bangumi"
    if not keyword:
        return jsonify({"error": "Missing keyword"}), 400

    try:
        result = api.search(keyword, content_type)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/video")
def get_video():
    bvid = request.args.get("bvid", "")
    if not bvid:
        return jsonify({"error": "Missing bvid"}), 400

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
