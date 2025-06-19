# bilibili_api.py

from datetime import datetime, timedelta
from .bilibili_client import BilibiliClient


class BilibiliAPI:
    def __init__(self, client: BilibiliClient):
        self.client = client

    def get_login_info(self) -> dict:
        """
        获取导航栏用户信息
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/login/login_info.md
        """
        res = self.client.get(
            "https://api.bilibili.com/x/web-interface/nav", desc="获取登录信息"
        )
        return res.get("data", {})

    def check_login(self) -> bool:
        """
        判断当前 cookie 是否登录
        """
        return self.get_login_info().get("isLogin", False)

    def get_user_info(self, mid: int) -> dict:
        """
        获取用户空间详细信息
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/user/info.md#用户空间详细信息
        """
        url = "https://api.bilibili.com/x/space/wbi/acc/info"
        params = {"mid": str(mid)}
        res = self.client.get(
            url, params=params, sign=True, desc=f"获取用户空间详细信息 mid={mid}"
        )
        return res["data"]

    def get_user_card(self, mid: int, with_photo: bool = True) -> dict:
        """
        获取用户的名片信息
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/user/info.md#用户名片信息
        """
        url = "https://api.bilibili.com/x/web-interface/card"
        params = {"mid": str(mid), "photo": "true" if with_photo else "false"}
        res = self.client.get(url, params=params, desc=f"获取用户名片 mid={mid}")
        return res["data"]

    def get_multi_user_cards(self, mids: list[int]) -> dict:
        """
        获取多用户详细信息
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/user/info.md#多用户详细信息
        """
        url = "https://api.bilibili.com/x/polymer/pc-electron/v1/user/cards"
        params = {"uids": ",".join(map(str, mids))}
        res = self.client.get(url, params=params, desc="获取多用户详细信息")
        return res["data"]

    def get_user_followings(self, mid: int, ps: int = 50, pn: int = 1) -> dict:
        """
        查询用户关注明细
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/user/relation.md#查询用户关注明细
        """
        url = "https://api.bilibili.com/x/relation/followings"
        params = {"vmid": str(mid), "ps": str(ps), "pn": str(pn)}
        res = self.client.get(
            url, params=params, sign=True, desc=f"获取用户关注明细 mid={mid}"
        )
        return res["data"]

    def get_videos(self, mid: int, days: int = 10) -> list:
        """
        查询用户投稿视频明细
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/user/space.md#查询用户投稿视频明细
        """
        url = "https://api.bilibili.com/x/space/wbi/arc/search"
        cutoff_time = datetime.now() - timedelta(days=days)
        videos = []
        MAX_PAGES = 10
        page = 1

        while page <= MAX_PAGES:
            params = {"mid": str(mid), "pn": str(page), "ps": "30", "order": "pubdate"}
            res = self.client.get(
                url,
                params=params,
                sign=True,
                desc=f"获取视频列表 mid={mid} page={page}",
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
        根据关键词查找视频（无需鉴权）
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/video/collection.md#根据关键词查找视频
        """
        url = "https://api.bilibili.com/x/series/recArchivesByKeywords"
        cutoff_time = datetime.now() - timedelta(days=days)
        videos = []
        MAX_PAGES = 10
        page = 1

        while page <= MAX_PAGES:
            params = {
                "mid": str(mid),
                "keywords": keyword,
                "ps": "20",
                "pn": str(page),
                "orderby": "pubdate",
            }

            res = self.client.get(
                url, params=params, desc=f"获取视频列表 mid={mid} page={page}"
            )
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
        获取视频详细信息
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/video/info.md
        """
        url = "https://api.bilibili.com/x/web-interface/view"
        params = {"bvid": bvid}
        res = self.client.get(url, params=params, desc=f"获取视频信息 {bvid}")
        return res["data"]

    def get_episode_info(self, ep_id: int) -> dict:
        """
        获取剧集明细（epid方式）
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/bangumi/info.md#获取剧集明细web端ssidepid方式
        """
        url = "https://api.bilibili.com/pgc/view/web/season"
        params = {"ep_id": ep_id}
        res = self.client.get(url, params=params, desc=f"获取番剧详情 ep_id={ep_id}")
        return res["result"]

    def get_danmaku_xml(self, cid: int) -> str:
        """
        获取实时弹幕 XML 文本
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/danmaku/danmaku_xml.md
        """
        url = f"https://api.bilibili.com/x/v1/dm/list.so"
        return self.client.get(url, {"oid": cid}, desc=f"获取弹幕 XML cid={cid}")

    def get_danmaku_pb_view(self, cid: int, avid: int, duration: int = 0):
        """
        获取弹幕个人配置与互动弹幕及BAS（代码）弹幕专包（web端）
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/danmaku/danmaku_view_proto.md
        """
        url = "https://api.bilibili.com/x/v2/dm/web/view"
        params = {"type": 1, "oid": cid, "pid": avid}
        if duration > 0:
            params["duration"] = duration
        return self.client.get(url, params=params, desc="获取弹幕元数据")

    def get_danmaku_pb_seg(
        self, cid: int, avid: int, segment_index: int, ps: int = None, pe: int = None
    ):
        """
        获取protobuf弹幕
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/danmaku/danmaku_proto.md
        """
        url = "https://api.bilibili.com/x/v2/dm/wbi/web/seg.so"
        params = {"type": 1, "oid": cid, "pid": avid, "segment_index": segment_index}
        if ps is not None:
            params["ps"] = ps
        if pe is not None:
            params["pe"] = pe
        return self.client.get(
            url,
            params=params,
            sign=True,
            desc=f"获取protobuf弹幕片段seg={segment_index}",
        )

    def get_ai_summary(self, bvid: str, cid: int, mid: int) -> str:
        """
        获取AI总结内容
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/video/summary.md
        """
        url = "https://api.bilibili.com/x/web-interface/view/conclusion/get"
        params = {"bvid": bvid, "cid": str(cid), "up_mid": str(mid)}
        res = self.client.get(url, params=params, sign=True, desc="获取AI摘要")
        try:
            return res["data"]["model_result"].get("summary", "无摘要")
        except:
            return "无摘要"

    def search(self, keyword: str, search_type: str = "video", page: int = 1) -> list:
        """
        分类搜索
        https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/search/search_request.md#分类搜索web端
        """
        url = "https://api.bilibili.com/x/web-interface/search/type"
        params = {"search_type": search_type, "keyword": keyword, "page": page}
        res = self.client.get(
            url, params=params, sign=True, desc=f"搜索类型={search_type}：{keyword}"
        )

        return res.get("data", {}).get("result", [])
