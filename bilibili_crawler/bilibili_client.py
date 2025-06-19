# bilibili_client.py

import os
import time
import requests
import urllib.parse
from functools import reduce
from hashlib import md5


class BilibiliClient:
    def __init__(self, cookie_file="cookie.txt", cookie_string=None, cookie_force=True):
        self.session = requests.Session()
        self.session.headers.update(
            {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                "Referer": "https://www.bilibili.com/",
            }
        )
        self.setCookie(cookie_file, cookie_string, cookie_force)
        self.img_key, self.sub_key = self._get_wbi_keys()

    def setCookie(
        self, cookie_file="cookie.txt", cookie_string=None, cookie_force=True
    ):
        """
        设置 Cookie。如果提供了 cookie_string，优先使用它；
        否则尝试从文件加载；如仍无效且cookie_force为真，则访问 bilibili.com 获取 Cookie。
        """
        try:
            # 情况1：直接使用传入的 cookie 字符串
            if cookie_string:
                self._set_cookie_string(cookie_string)
                print("✅ 已使用传入的 Cookie 字符串")
                return

            # 情况2：尝试从文件中读取
            if os.path.exists(cookie_file):
                with open(cookie_file, "r", encoding="utf-8") as f:
                    file_cookie = f.readline().strip()
                    if file_cookie:
                        self._set_cookie_string(file_cookie)
                        print(f"✅ 成功从 {cookie_file} 读取 Cookie")
                        return

            if cookie_force:
                # 情况3：自动访问 bilibili.com 获取 Cookie
                print("⚠️ 未提供有效 Cookie，自动访问 bilibili.com 获取...")
                response = self.session.get("https://www.bilibili.com/")
                response.raise_for_status()

                # # 将 session 中的 Cookie 整合为字符串
                # generated_cookie = "; ".join(
                #     [f"{k}={v}" for k, v in self.session.cookies.get_dict().items()]
                # )
                # print(f"✅ 自动获取 Cookie 成功：{generated_cookie}")

                # # 写入到文件
                # with open(cookie_file, "w", encoding="utf-8") as f:
                #     f.write(generated_cookie + "\n")
                #     print(f"📝 Cookie 已保存到 {cookie_file}")
            else:
                print("ℹ️ 未设置 Cookie，部分接口可能不可用")

        except Exception as e:
            print(f"❌ 设置 Cookie 失败：{e}")

    def _set_cookie_string(self, cookie: str):
        for part in cookie.split(";"):
            if "=" in part:
                k, v = part.strip().split("=", 1)
                self.session.cookies.set(k, v)

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

    def get(self, url, params=None, sign=False, desc="", response_type=""):
        try:
            if sign and params:
                params = self.sign_params(params)
            res = self.session.get(url, params=params, timeout=10)
            print(f"🌐 GET 请求：{desc or url}")
            print(f" ↳ 状态码: {res.status_code}")
            print(f" ↳ URL: {res.url}")
            res.raise_for_status()
            if response_type == "response":
                return res

            content_type = res.headers.get("Content-Type", "").lower()
            if not response_type:
                if "application/json" in content_type:
                    response_type = "json"
                elif "text/" in content_type:
                    response_type = "text"
                else:
                    response_type = "content"
            if response_type == "json":
                data = res.json()
                code = data.get("code")
                message = data.get("message")
                if code is not None and message is not None:
                    print(f'  ↳ B站返回: code={code}, message="{message}"')
                return data
            elif response_type == "text":
                res.encoding = "utf-8"
                return res.text
            elif response_type == "content":
                return res.content
            else:
                raise ValueError(f"不支持的response_type: {response_type}")
        except Exception as e:
            print(f"🚫 网络请求失败：{desc or url}")
            raise e

    def post(self, url, data=None, csrf=False, desc=""):
        """
        通用 POST 请求方法，支持自动加 csrf 参数（从 Cookie 中获取 bili_jct）
        """
        try:
            if csrf:
                cookies = self.session.cookies.get_dict()
                bili_jct = cookies.get("bili_jct")
                if not bili_jct:
                    raise ValueError("❌ Cookie 中缺少 csrf（bili_jct）字段")
                if data is None:
                    data = {}
                data["csrf"] = bili_jct

            res = self.session.post(url, data=data, timeout=10)
            print(f"🌐 POST 请求：{desc or url}")
            print(f"  ↳ 状态码: {res.status_code}")
            print(f"  ↳ URL: {res.url}")
            res.raise_for_status()
            try:
                data = res.json()
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
            print(f"🚫 POST 请求失败：{desc or url}")
            raise e
