# bilibili_api.py

from datetime import datetime, timedelta
from .bilibili_client import BilibiliClient


class BilibiliAPI:
    def __init__(self, client: BilibiliClient):
        self.client = client

    def get_login_info(self) -> dict:
        """
        获取当前登录用户的基本信息
        """
        res = self.client.get(
            "https://api.bilibili.com/x/web-interface/nav", desc="获取登录信息"
        )
        return res.get("data", {})

    def check_login(self) -> bool:
        """
        判断当前 cookie 是否有效
        """
        return self.get_login_info.get("isLogin", False)

    def get_user_info(self, mid: int) -> dict:
        """
        获取 用户空间详细信息
        """
        url = "https://api.bilibili.com/x/space/wbi/acc/info"
        params = {"mid": str(mid)}
        res = self.client.get(
            url, params=params, sign=True, desc=f"获取 UP 主信息 mid={mid}"
        )
        return res["data"]

    def get_user_card(self, mid: int, with_photo: bool = True) -> dict:
        """
        获取用户的名片信息
        https://api.bilibili.com/x/web-interface/card
        """
        url = "https://api.bilibili.com/x/web-interface/card"
        params = {"mid": str(mid), "photo": "true" if with_photo else "false"}
        res = self.client.get(url, params=params, desc=f"获取用户名片 mid={mid}")
        return res.get("data", {})

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
            res = self.client.get(
                url, params=params, sign=True, desc=f"获取视频列表 page={page}"
            )

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

    def get_videos_public(self, mid: int, days: int = 10, keyword: str = "") -> list:
        """
        使用无需鉴权的新接口，根据 UP 主 mid 获取指定关键词的视频（默认所有），并过滤最近 days 天内发布的
        https://api.bilibili.com/x/series/recArchivesByKeywords
        """
        url = "https://api.bilibili.com/x/series/recArchivesByKeywords"
        cutoff_time = datetime.now() - timedelta(days=days)
        videos = []
        page = 1

        while True:
            params = {
                "mid": str(mid),
                "keywords": keyword,
                "ps": "20",
                "pn": str(page),
                "orderby": "pubdate",
            }

            res = self.client.get(url, params=params, desc=f"获取视频 page={page}")
            if res.get("code") != 0 or "archives" not in res.get("data", {}):
                break

            archive_list = res["data"]["archives"]
            if not archive_list:
                break

            for video in archive_list:
                pub_time = datetime.fromtimestamp(video.get("pubdate", 0))
                if pub_time < cutoff_time:
                    return videos
                videos.append(video)

            page += 1

        return videos

    def get_video_info(self, bvid: str) -> dict:
        """
        获取视频详细信息（通过 bvid）
        """
        url = "https://api.bilibili.com/x/web-interface/view"
        params = {"bvid": bvid}
        res = self.client.get(url, params=params, desc=f"获取视频信息 {bvid}")
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
        res = self.client.get(url, params=params, sign=True, desc="获取AI摘要")
        try:
            return res["data"]["model_result"].get("summary", "无摘要")
        except:
            return "无摘要"

    def search(
        self, keyword: str, content_type: str = "video", limit: int = 20
    ) -> list:
        """
        通用搜索接口
        - content_type 可选: video, media_bangumi
        """
        url = "https://api.bilibili.com/x/web-interface/search/type"
        params = {"search_type": content_type, "keyword": keyword, "page": 1}
        res = self.client.get(
            url, params=params, sign=True, desc=f"搜索类型={content_type}：{keyword}"
        )

        return res.get("data", {}).get("result", [])[:limit]
