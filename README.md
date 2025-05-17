# 🎬 Bilibili 弹幕采集与播放

本项目是一个完整的系统：从 **B 站弹幕爬取**，到 **弹幕查询 API 服务**，再到 **前端油猴脚本在 YouTube 上显示弹幕**。

- ⏬ 自动抓取指定 UP 主的视频与弹幕（定时任务）
- 📡 提供 REST 接口供前端访问视频和弹幕内容（支持搜索 B站 & 本地弹幕资源）
- 🧩 Tampermonkey 脚本将弹幕叠加在 YouTube 视频上播放

> 如果你看的up主在两边都上传视频，且B站视频总有被删的风险，那么很适合本工具。不想用爬虫的话也可以用 [bilibili 视频弹幕统计](https://greasyfork.org/zh-CN/scripts/534432-bilibili-%E8%A7%86%E9%A2%91%E5%BC%B9%E5%B9%95%E7%BB%9F%E8%AE%A1-%E4%B8%8B%E8%BD%BD-%E6%9F%A5%E8%AF%A2%E5%8F%91%E9%80%81%E8%80%85) 手动下载弹幕并在油管上看。



## ✨ 功能

### 1️⃣ 弹幕采集（Python 爬虫）

* 定时采集指定 UP 主（支持多个up主）
* 获取视频信息、弹幕 XML、AI 摘要
* 弹幕转为 JSON 格式
* 保存路径：`downloads/<mid>/<bvid>/BVxxxxx.json`

📄 详细说明：[📡 弹幕爬虫 README](./bilibili_crawler/README.md)

---

### 2️⃣ 弹幕查询 API 服务（Flask）

* 主要接口

| 路径                    | 描述               |
| --------------------- | ---------------- |
| `/search?keyword=xxx` | 模糊搜索视频（包括本地与 B站） |
| `/video?bvid=xxx`     | 获取视频信息 + 弹幕      |

📄 详细说明：[📡 弹幕接口服务 README](./bilibili_crawler/README.md#-bilibili-弹幕接口服务serverpy)

---

### 3️⃣ 油猴脚本：YouTube 显示 B 站弹幕

* 可将前面爬取的弹幕用于油管显示
* 安装脚本后，打开任意 YouTube 视频
* 点击悬浮控制面板 → 选择本地 BVxxxx.json 弹幕文件
* 或者配置服务器地址 → 点击🔍直接搜索B站同名视频弹幕&下载到本地的弹幕
* 弹幕将自动与视频播放同步

📄 详细说明：[📎 油猴脚本 README](./tampermonkey/README.md)
