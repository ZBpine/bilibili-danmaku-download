# 📡 Bilibili 弹幕爬虫（Wbi 签名 + AI 摘要 + 弹幕 JSON 输出）

> 这是一个定时抓取指定 Bilibili UP 主的视频、弹幕、AI 摘要等信息的爬虫脚本，支持 Wbi 鉴权签名，支持弹幕解析为标准 JSON 格式，用于离线分析或前端弹幕显示。
> 
> 感谢 [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/) 所有接口均获取自此文档。

---

## ✨ 功能特色

* ✅ 支持多个 UP 主 `mid`，读取自本地 `up_list.txt`
* ✅ 定时每小时抓取一次（可配置）
* ✅ 获取 UP 主视频信息、弹幕、AI 摘要
* ✅ 弹幕保存为原始 XML 和标准 JSON 格式（配合[前端播放器](../tampermonkey/README.md)使用）
* ✅ 保存数据结构整洁清晰，按 mid/BV 分目录管理
* ✅ 支持动态设置爬取天数

---

## 🚀 使用方法

### 📝 1. 配置 UP 主列表

在 `up_list.txt` 中每行添加一个 UP 主的 `mid`，例如：

```
123456789
316568752
```

---

### 📎 2. 设置 Cookie

将你登录 B 站后的 Cookie 复制粘贴到 `cookie.txt` 中（整段字符串一行即可）。

---

### ▶️ 3. 启动爬虫脚本

```bash
python main.py --days 10
```

---

## ⚠️ 注意事项

* 建议使用登录 cookie 获取完整接口（包括 AI 摘要）
* 请求过快可能会被风控，脚本已自动添加间隔
* 视频封面、弹幕等为公开资源，请合理合法使用数据
