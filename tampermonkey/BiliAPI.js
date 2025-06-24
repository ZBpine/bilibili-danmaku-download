export class BiliAPI {
    constructor(client) {
        this.client = client;
    }
    async getUserCard(mid) {
        const userCardRes = await this.client.request({
            url: 'https://api.bilibili.com/x/web-interface/card',
            params: { mid, photo: 'true' },
            desc: `获取用户名片信息 ${mid}`
        });
        return userCardRes.data || {};
    }
    async getVideoData(bvid) {
        const videoDataRes = await this.client.request({
            url: 'https://api.bilibili.com/x/web-interface/view',
            params: { bvid },
            desc: `获取视频信息 ${bvid}`
        });
        return videoDataRes.data || {};
    }
    async getEpisodeData(ep_id) {
        const episodeDataRes = await this.client.request({
            url: 'https://api.bilibili.com/pgc/view/web/season',
            params: { ep_id },
            desc: `获取剧集明细 ${ep_id}`
        });
        return episodeDataRes.result || {};
    }
    async getEpisodeInfo(ep_id) {
        const episodeInfoRes = await this.client.request({
            url: 'https://api.bilibili.com/pgc/season/episode/web/info',
            params: { ep_id },
            desc: `获取剧集信息 ${ep_id}`
        });
        return episodeInfoRes.data || {};
    }
    async getDanmakuXml(cid, responseType = 'document') {
        return await this.client.request({
            url: 'https://api.bilibili.com/x/v1/dm/list.so',
            params: { oid: cid },
            responseType,
            desc: `获取弹幕 XML cid=${cid}`
        });
    }
    async getDanmakuPbWebView(cid, avid, duration) {
        return await this.client.request({
            url: 'https://api.bilibili.com/x/v2/dm/web/view',
            params: { "type": 1, "oid": cid, "pid": avid, duration },
            responseType: 'arraybuffer',
            desc: `获取弹幕元数据 cid=${cid}`
        });
    }
    async getDanmakuPbSeg(cid, avid, segment_index) {
        return await this.client.request({
            url: 'https://api.bilibili.com/x/v2/dm/web/seg.so',
            params: { type: 1, oid: cid, pid: avid, segment_index },
            responseType: 'arraybuffer',
            desc: `获取弹幕片段 ${segment_index} cid=${cid}`
        });
    }
    async getDanmakuHisDate(cid, month) {
        const hisDateRes = await this.client.request({
            url: 'https://api.bilibili.com/x/v2/dm/history/index',
            params: { type: 1, oid: cid, month },
            responseType: 'json',
            desc: `获取弹幕历史日期 month=${month} cid=${cid}`
        });
        return hisDateRes.data || [];
    }
    async getDanmakuHisPb(cid, date) {
        return await this.client.request({
            url: 'https://api.bilibili.com/x/v2/dm/web/history/seg.so',
            params: { type: 1, oid: cid, date },
            responseType: 'arraybuffer',
            desc: `获取弹幕历史片段 date=${date} cid=${cid}`
        });
    }
    async searchVideo(keyword, search_type = 'video') {
        const searchRes = await this.client.request({
            url: 'https://api.bilibili.com/x/web-interface/search/type',
            params: { search_type, keyword, page: 1 },
            sign: true,
            desc: `搜索${search_type} ${keyword}`
        });
        return searchRes.data?.result || [];
    }
}