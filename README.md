# 🎬 Bilibili 弹幕下载

> 一个完整的弹幕系统：从 **B 站弹幕爬取**，到 **本地网页播放预览**，再到 **油猴脚本在 YouTube 上显示弹幕**。如果你看的up主在两边都上传视频，且B站视频总有被删的风险，那么很适合本工具。不想用爬虫的话也可以用 [bilibili 视频弹幕统计](https://greasyfork.org/zh-CN/scripts/534432-bilibili-%E8%A7%86%E9%A2%91%E5%BC%B9%E5%B9%95%E7%BB%9F%E8%AE%A1-%E4%B8%8B%E8%BD%BD-%E6%9F%A5%E8%AF%A2%E5%8F%91%E9%80%81%E8%80%85) 手动下载弹幕并在油管上看。


## ✨ 功能

### 1️⃣ 弹幕采集（Python 爬虫）

* 定时采集指定 UP 主（支持多个 mid）
* 获取视频信息、弹幕 XML、AI 摘要
* 弹幕转为标准 JSON 格式
* 保存路径：`downloads/<mid>/<bvid>/BVxxxxx.json`

📄 详细说明：[📡 弹幕爬虫 README](./bilibili_crawler/README.md)

---

### 2️⃣ 本地网页查看弹幕（Flask）

* 一个简单的Python本地服务器，展示所有抓取的视频弹幕


### 3️⃣ 油猴脚本：YouTube 显示 B 站弹幕

* 可将前面爬取的弹幕用于油管显示
* 安装脚本后，打开任意 YouTube 视频
* 点击悬浮控制面板 → 选择本地 BVxxxx.json 弹幕文件
* 弹幕将自动与视频播放同步

📄 详细说明：[📎 油猴脚本 README](./tampermonkey/README.md)
