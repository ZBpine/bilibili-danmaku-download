import requests


# 从 cookie.txt 读取 Cookie 字符串（只读取第一行）
def load_cookie_from_file(file_path="bilibili_crawler/cookie.txt"):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return f.readline().strip()
    except FileNotFoundError:
        print("⚠️ 警告：未找到 cookie.txt，部分接口可能请求失败")
        return ""


# 可选：你自己的登录 Cookie（不需要可留空）
BILIBILI_COOKIE = load_cookie_from_file()

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://www.bilibili.com/",
}
if BILIBILI_COOKIE:
    HEADERS["Cookie"] = BILIBILI_COOKIE


def http_get(url, params=None, desc=""):
    """
    GET 请求封装：返回 JSON，失败打印信息
    """
    try:
        response = requests.get(url, params=params, headers=HEADERS, timeout=10)
        print(f"🌐 请求：{desc or url}")
        print(f"  ↳ 状态码: {response.status_code}")
        print(f"  ↳ URL: {response.url}")
        response.raise_for_status()

        # 安全解析 JSON
        try:
            return response.json()
        except Exception:
            print("❌ JSON解析失败，返回内容前200字符：")
            print(response.text[:200])
            raise
    except Exception as e:
        print(f"🚫 网络请求失败：{desc or url}")
        raise e


def http_get_text(url, params=None, desc=""):
    """
    GET 请求返回文本（用于获取 XML 弹幕）
    """
    try:
        response = requests.get(url, params=params, headers=HEADERS, timeout=10)
        response.encoding = "utf-8"
        print(f"🌐 请求：{desc or url}")
        print(f"  ↳ 状态码: {response.status_code}")
        print(f"  ↳ URL: {response.url}")
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"🚫 文本请求失败：{desc or url}")
        raise e
