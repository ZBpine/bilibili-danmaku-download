# 📡 Bilibili 弹幕爬虫（`downloader.py`）

> 这是一个定时抓取指定 Bilibili UP 主的视频、弹幕、AI 摘要等信息的爬虫脚本，支持 Wbi 鉴权签名，支持弹幕解析为标准 JSON 格式，用于离线分析或前端弹幕显示。
> 
> 感谢 [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/) ，所有接口均获取自此文档。

---

## ✨ 功能特色

* ✅ 支持多个 UP 主 `mid`
* ✅ 定时每小时爬取一次UP主10天内的视频弹幕
* ✅ 获取 UP 主视频信息、弹幕、AI 摘要
* ✅ 弹幕保存为原始 XML 和标准 JSON 格式（配合[前端播放器](../tampermonkey/README.md)使用）
* ✅ 保存数据结构整洁清晰，按 mid/BV 分目录管理
* ✅ 支持动态设置爬取天数

---

## 🚀 使用方法

### 📝 1. 配置 UP 主列表

在 `config/up_list.txt` 中每行添加一个 UP 主的 `mid`，例如：

```
123456789
316568752
```

---

### 📎 2. 设置 Cookie

将 Cookie 复制粘贴到 `config/cookie.txt` 中（整段字符串一行即可）。

**Cookie要求：**
* `downloader.py` 可用可不用。使用已登录的cookie可以获取up信息、AI总结（不是重要信息），未登陆的cookie/不设置cookie 就获取不到。
* `server.py` 必须cookie，已登录的未登录的都行。


## ⚠️ 注意事项

* 建议使用登录 cookie 获取完整接口
* 请求过快可能会被风控，脚本已自动添加间隔
* 视频封面、弹幕等为公开资源，请合理合法使用数据



# 📡 Bilibili 弹幕接口服务（`server.py`）

该模块基于 Flask 实现，提供对B站弹幕或爬虫(`downloader.py`)下载到本地的弹幕统一搜索与访问接口，供前端（如 [YouTube B站弹幕播放器](../tampermonkey/README.md)）查询使用。



## 🔌 提供的 API 接口

### `GET /search?keyword=xxx&type=video`

* 搜索 B站 视频标题（调用 B站 API）和本地已下载弹幕
* 支持模糊匹配本地数据标题（可修改阈值`if similar(keyword, title) >= 0.5`）

#### 示例：

```
/search?keyword=敢杀我的马&type=video
```

---

### `GET /video?bvid=BVxxxxx`

* 获取指定视频的基本信息、弹幕 XML 解析结果
* 可用于播放弹幕

#### 示例：

```
/video?bvid=BV1xx411c7qA
```

---

## 🧪 前端配合

推荐使用配套的 Tampermonkey 用户脚本（[YouTube B站弹幕播放器](../tampermonkey/README.md)），可在 YouTube 页面自动查询 B站视频弹幕并播放。


