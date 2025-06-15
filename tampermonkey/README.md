# 🎬 YouTube 弹幕播放脚本（加载本地 B站 弹幕）

> 一款用于在 YouTube 上加载本地B站弹幕并显示同步弹幕的油猴用户脚本（配合 [B站弹幕爬虫](../bilibili_crawler/README.md) 或 [B站弹幕下载脚本](https://greasyfork.org/zh-CN/scripts/534432) 获取B站弹幕），支持顶部/底部弹幕、颜色字号等功能。


## ✨ 功能特色

* ✅ 点击🔍搜索B站同名视频弹幕
* ✅ 或载入本地弹幕（xml格式文件或json格式文件）
* ✅ 自动同步弹幕播放，自动分配弹幕轨道，防止重叠
* ✅ 支持顶部 / 底部 / 滚动弹幕，支持显示弹幕颜色、字号
* ✅ 支持设置视频对齐，以便对齐同步弹幕
* ✅ 支持缓存弹幕，下次打开页面自动恢复
* ✅ 支持快捷键`D`开关弹幕，`S`搜索弹幕
* ✅ 支持配置[服务器](../bilibili_crawler/README.md#-bilibili-弹幕接口服务serverpy)地址，通过服务器搜索B站同名视频弹幕
* `1.3版本`支持在B站播放弹幕（倒不是脱裤子放屁，可以尝试在补档视频看原视频弹幕）


## 🖼️ 效果预览

![demo01](../images/youtube-danmaku-player-example01.png)

![demo02](../images/youtube-danmaku-player-example02.png)


## 📦 弹幕json格式示意

```json
{
  "bvid": "BV1xx4117xYz",
  "cid": 12345678,
  "videoData": {
    "title": "...",
    "pic": "...",
    ...
  },
  "danmakuData": [
    {
      "progress": 12340,
      "mode": 1,
      "fontsize": 25,
      "color": 16777215,
      "ctime": 1615020559,
      "pool": 1,
      "midHash": "abcdef",
      "dmid": "123456789",
      "weight": 0,
      "content": "哈哈哈哈"
    }
  ],
  "fetchtime": 1747363751
}
```





