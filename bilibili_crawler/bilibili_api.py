# bilibili_api.py

from datetime import datetime, timedelta
from bilibili_client import BilibiliClient


class BilibiliAPI:
    def __init__(self, client: BilibiliClient):
        self.client = client

    def check_login(self) -> bool:
        """
        判断当前 cookie 是否有效
        """
        res = self.client.get(
            "https://api.bilibili.com/x/web-interface/nav", desc="验证登录状态"
        )
        return res.get("data", {}).get("isLogin", False)

    def get_uploader_info(self, mid: int) -> dict:
        """
        获取 UP 主信息
        """
        url = "https://api.bilibili.com/x/space/wbi/acc/info"
        params = {"mid": str(mid)}
        signed = self.client.sign_params(params)
        res = self.client.get(url, params=signed, desc=f"获取 UP 主信息 mid={mid}")
        return res["data"]

    def get_videos(self, mid: int, days: int = 10) -> list:
        """
        获取 UP 主在最近几天发布的视频列表
        """
        url = "https://api.bilibili.com/x/space/wbi/arc/search"
        cutoff_time = datetime.now() - timedelta(days=days)
        videos = []
        page = 1

        while True:
            params = {"mid": str(mid), "pn": str(page), "ps": "30", "order": "pubdate"}
            signed = self.client.sign_params(params)
            res = self.client.get(url, params=signed, desc=f"获取视频列表 page={page}")

            if res["code"] != 0 or "list" not in res["data"]:
                break

            vlist = res["data"]["list"]["vlist"]
            for v in vlist:
                pubdate = datetime.fromtimestamp(v["created"])
                if pubdate < cutoff_time:
                    return videos
                videos.append(v)

            if not vlist:
                break
            page += 1

        return videos

    def get_video_info(self, bvid: str) -> dict:
        """
        获取视频详细信息（通过 bvid）
        """
        url = "https://api.bilibili.com/x/web-interface/view"
        res = self.client.get(url, {"bvid": bvid}, desc=f"获取视频信息 {bvid}")
        return res["data"]

    def get_episode_info(self, ep_id: int) -> dict:
        """
        通过 ep_id 获取番剧详情（包括剧集列表、封面、标题等）
        """
        url = "https://api.bilibili.com/pgc/view/web/season"
        params = {"ep_id": ep_id}
        res = self.client.get(url, params=params, desc=f"获取番剧详情 ep_id={ep_id}")
        return res.get("result", {})  # 可能返回 None

    def get_danmaku_xml(self, cid: int) -> str:
        """
        获取弹幕 XML 文本
        """
        url = f"https://api.bilibili.com/x/v1/dm/list.so"
        return self.client.get_text(url, {"oid": cid}, desc=f"获取弹幕 XML cid={cid}")

    def get_ai_summary(self, bvid: str, cid: int, mid: int) -> str:
        """
        获取 B 站 AI 视频摘要
        """
        url = "https://api.bilibili.com/x/web-interface/view/conclusion/get"
        params = {"bvid": bvid, "cid": str(cid), "up_mid": str(mid)}
        signed = self.client.sign_params(params)
        res = self.client.get(url, params=signed, desc="获取AI摘要")
        try:
            return res["data"]["model_result"].get("summary", "无摘要")
        except:
            return "无摘要"

    def search(
        self, keyword: str, content_type: str = "video", limit: int = 20
    ) -> list:
        """
        通用搜索接口，返回原始结构
        - content_type 可选: video, media_bangumi
        """
        url = "https://api.bilibili.com/x/web-interface/search/type"
        params = {"search_type": content_type, "keyword": keyword, "page": 1}
        signed = self.client.sign_params(params)
        res = self.client.get(
            url, params=signed, desc=f"搜索类型={content_type}：{keyword}"
        )

        return res.get("data", {}).get("result", [])[:limit]
