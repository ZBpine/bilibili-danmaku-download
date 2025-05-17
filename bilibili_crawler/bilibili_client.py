# bilibili_client.py

import time
import requests
import urllib.parse
from functools import reduce
from hashlib import md5


class BilibiliClient:
    def __init__(self, cookie_file="cookie.txt", cookie_string=None):
        self.session = requests.Session()
        self.session.headers.update(
            {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                "Referer": "https://www.bilibili.com/",
            }
        )
        if cookie_string:
            self.session.headers["Cookie"] = cookie_string
        else:
            self._load_cookie(cookie_file)
        self.img_key, self.sub_key = self._get_wbi_keys()

    def _load_cookie(self, path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                cookie = f.readline().strip()
                if cookie:
                    self.session.headers["Cookie"] = cookie
        except FileNotFoundError:
            print(f"⚠️ 警告：未找到 {path}，部分接口可能请求失败")

    def _get_wbi_keys(self) -> tuple[str, str]:
        url = "https://api.bilibili.com/x/web-interface/nav"
        resp = self.session.get(url)
        resp.raise_for_status()
        data = resp.json()["data"]["wbi_img"]
        img_key = data["img_url"].rsplit("/", 1)[1].split(".")[0]
        sub_key = data["sub_url"].rsplit("/", 1)[1].split(".")[0]
        return img_key, sub_key

    def _get_mixin_key(self, origin: str) -> str:
        mixinKeyEncTab = [
            46,
            47,
            18,
            2,
            53,
            8,
            23,
            32,
            15,
            50,
            10,
            31,
            58,
            3,
            45,
            35,
            27,
            43,
            5,
            49,
            33,
            9,
            42,
            19,
            29,
            28,
            14,
            39,
            12,
            38,
            41,
            13,
            37,
            48,
            7,
            16,
            24,
            55,
            40,
            61,
            26,
            17,
            0,
            1,
            60,
            51,
            30,
            4,
            22,
            25,
            54,
            21,
            56,
            59,
            6,
            63,
            57,
            62,
            11,
            36,
            20,
            34,
            44,
            52,
        ]
        return reduce(lambda s, i: s + origin[i], mixinKeyEncTab, "")[:32]

    def sign_params(self, params: dict) -> dict:
        mixin_key = self._get_mixin_key(self.img_key + self.sub_key)
        curr_time = round(time.time())
        params["wts"] = curr_time
        params = dict(sorted(params.items()))
        params = {
            k: "".join(filter(lambda c: c not in "!'()*", str(v)))
            for k, v in params.items()
        }
        query = urllib.parse.urlencode(params)
        w_rid = md5((query + mixin_key).encode()).hexdigest()
        params["w_rid"] = w_rid
        return params

    def get(self, url, params=None, desc=""):
        try:
            res = self.session.get(url, params=params, timeout=10)
            print(f"🌐 请求：{desc or url}")
            print(f"  ↳ 状态码: {res.status_code}")
            print(f"  ↳ URL: {res.url}")
            res.raise_for_status()
            try:
                data = res.json()
                # 输出 B 站 API 的 code/message 字段（如果有）
                code = data.get("code")
                message = data.get("message")
                if code is not None and message is not None:
                    print(f'  ↳ B站返回: code={code}, message="{message}"')
                return data
            except Exception:
                print("❌ JSON解析失败，返回前200字符：")
                print(res.text[:200])
                raise
        except Exception as e:
            print(f"🚫 网络请求失败：{desc or url}")
            raise e

    def get_text(self, url, params=None, desc=""):
        try:
            res = self.session.get(url, params=params, timeout=10)
            res.encoding = "utf-8"
            print(f"🌐 请求：{desc or url}")
            print(f"  ↳ 状态码: {res.status_code}")
            print(f"  ↳ URL: {res.url}")
            res.raise_for_status()
            return res.text
        except Exception as e:
            print(f"🚫 文本请求失败：{desc or url}")
            raise e
