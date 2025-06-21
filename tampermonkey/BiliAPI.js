export class BiliAPI {
    constructor(client) {
        this.client = client;
    }
    async getUserCard(mid) {
        const userCardRes = await this.client.request({
            url: 'https://api.bilibili.com/x/space/acc/info',
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
    async getEpisodeInfo(ep_id){
        const episodeInfoRes = await this.client.request({
            url: 'https://api.bilibili.com/pgc/season/episode/web/info',
            params: { ep_id },
            desc: `获取剧集信息 ${ep_id}`
        });
        return episodeInfoRes.data || {};
    }
    async getDanmakuXml(cid) {
        return await this.client.request({
            url: 'https://api.bilibili.com/x/v1/dm/list.so',
            params: { oid: cid },
            responseType: 'document',
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
    async searchVideo(keyword) {
        const searchRes = await this.client.request({
            url: 'https://api.bilibili.com/x/web-interface/search/type',
            params: { search_type: 'video', keyword, page: 1 },
            sign: true,
            desc: `搜索视频 ${keyword}`
        });
        return searchRes.data?.result || [];
    }
}