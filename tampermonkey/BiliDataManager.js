export function createBiliDataManager(biliApi, pbParser, name = 'B站数据管理') {
    let console = null;
    if (name) {
        const tag = `[${name}]`;
        console = new Proxy(window.console, {
            get(target, prop, receiver) {
                return (...args) => {
                    if (args.length <= 0) return;
                    else if (args.length === 1) {
                        const arg = args[0];
                        if (typeof arg === 'string') {
                            target[prop](tag + ' ' + arg);
                        } else {
                            target[prop](tag, arg);
                        }
                    } else {
                        target[prop](tag, ...args);
                    }
                };
            }
        });
    } else {
        console = new Proxy(window.console, {
            get(target, prop, receiver) {
                return (...args) => { };
            }
        });
    }
    return class BiliDataManager {
        static api = biliApi;
        static parsePb = pbParser.parseTry.bind(pbParser) || pbParser.parse.bind(pbParser);
        static parseDanmakuXml(xml) {
            if (!xml) return [];
            const dmList = [];
            const pushDm = (p, content) => {
                if (!p) return;
                const parts = p.split(',');
                if (parts.length < 7) return;
                dmList.push({
                    progress: Math.trunc(parseFloat(parts[0]) * 1000),
                    mode: parseInt(parts[1]),
                    fontsize: parseInt(parts[2]),
                    color: parseInt(parts[3]),
                    ctime: parseInt(parts[4]),
                    pool: parseInt(parts[5]),
                    midHash: parts[6],
                    id: parseInt(parts[7]),
                    idStr: parts[7],
                    weight: parseInt(parts[8] || '0'),
                    content
                });
            }
            try {
                if (typeof xml === 'string') {
                    const regex = /<d p="([^"]+)">([^<]*)<\/d>/g;
                    let match;
                    while ((match = regex.exec(xml)) !== null) {
                        pushDm(match[1], match[2]);
                    }
                }
                else {
                    const dElements = xml.getElementsByTagName('d');
                    for (const d of dElements) {
                        pushDm(d.getAttribute('p'), d.textContent);
                    }
                }
            } catch (e) {
                console.error('解析XML弹幕失败', e);
            }
            return dmList;
        }
        static parseUrl(url) {
            let bvid;
            const bvidMatch = url.match(/BV[a-zA-Z0-9]+/);
            if (bvidMatch) bvid = bvidMatch[0];
            if (bvid) {
                const pMatch = url.match(/[?&]p=(\d+)/);
                if (pMatch) {
                    const p = parseInt(pMatch[1], 10);
                    if (!isNaN(p) && p >= 1) return { bvid, p, id: `${bvid}?p=${p}` };
                }
                return { bvid, id: bvid };
            } else {
                const epidMatch = url.match(/ep(\d+)/);
                if (epidMatch) {
                    const ep_id = parseInt(epidMatch[1], 10);
                    if (!isNaN(ep_id)) return { ep_id, id: `ep${ep_id}` };
                }
            }
            return {};
        }
        constructor() {
            // getData 或 setData 应且只应调用一次。若要处理新视频，请新建一个实例。
            this.info = {};
            this.data = {};
            this.dmDict = {};
            this.dmCount = 0;
        }
        async getData(url) {
            try {
                const idObj = this.constructor.parseUrl(url);
                if (!idObj) return;
                Object.assign(this.data, idObj);
                if ('bvid' in idObj) {
                    this.data.videoData = await this.constructor.api.getVideoData(idObj.bvid);
                } else if ('ep_id' in idObj) {
                    this.data.episodeData = await this.constructor.api.getEpisodeData(idObj.ep_id);
                    this.data.episodeInfo = await this.constructor.api.getEpisodeInfo(idObj.ep_id);
                }
                this.data.fetchtime = Math.floor(Date.now() / 1000);
                this.genInfo();
            } catch (e) {
                console.error('获取视频数据失败', e);
            }
        }
        setData(data) {
            Object.assign(this.data, data);
            this.genInfo();
            const danmakuData = this.data.danmakuData;
            if (danmakuData?.length) {
                this.dmDict = {};
                danmakuData.forEach(dm => this.addDanmaku(dm));
                this.dmCount = danmakuData.length;
            }
        }
        genInfo() {
            this.info = {};
            const info = this.info;
            const data = this.data;
            try {
                if (data.videoData) {
                    const videoData = data.videoData;
                    Object.assign(info, {
                        id: videoData.bvid,
                        aid: videoData.aid,
                        cid: videoData.cid,
                        duration: videoData.duration,
                        title: videoData.title,
                        desc: videoData.desc,
                        cover: videoData.pic,
                        pubtime: videoData.pubdate,
                        owner: {
                            mid: videoData.owner?.mid,
                            name: videoData.owner?.name,
                            face: videoData.owner?.face
                        },
                        stat: {
                            view: videoData.stat?.view,
                            like: videoData.stat?.like,
                            coin: videoData.stat?.coin,
                            favorite: videoData.stat?.favorite,
                            share: videoData.stat?.share,
                            danmaku: videoData.stat?.danmaku,
                            reply: videoData.stat?.reply
                        }
                    });
                    const pages = videoData.pages;
                    if (Array.isArray(pages)) {
                        let p = data.p ? data.p - 1 : 0;
                        const page = pages[p];
                        if (p > 0) info.id = `${videoData.bvid}?p=${p + 1}`;
                        if (pages.length > 1) info.subtitle = `第 ${p + 1} P：${page?.part || ''}`;
                        if (page) {
                            info.cid = page.cid ?? info.cid;
                            info.duration = page.duration ?? info.duration;
                        }
                    }
                    info.url = 'https://www.bilibili.com/video/' + info.id;
                }
                else if (data.episodeData) {
                    const episodeInfo = data.episodeInfo;
                    const episodeData = data.episodeData;
                    let ep_id = episodeInfo?.episode_id || data.ep_id;
                    if (!ep_id) throw new Error('ep_id 未找到');
                    let ep = null;
                    let sectionTitle = null;
                    if (Array.isArray(episodeData.episodes)) {
                        ep = episodeData.episodes.find(e => e.ep_id === ep_id || e.id === ep_id);
                        if (ep) {
                            sectionTitle = '正片';
                        }
                    }
                    if (!ep && Array.isArray(episodeData.section)) {
                        for (const section of episodeData.section) {
                            ep = section.episodes?.find(e => e.ep_id === ep_id || e.id === ep_id);
                            if (ep) {
                                sectionTitle = section.title;
                                break;
                            }
                        }
                    }
                    if (!ep) throw new Error(`未找到ep${ep_id}剧集信息`);
                    Object.assign(info, {
                        id: `ep${ep_id}`,
                        aid: ep.aid,
                        cid: ep.cid,
                        duration: Math.floor(ep.duration / 1000),
                        title: episodeData.season_title,
                        subtitle: `${sectionTitle}：${ep.show_title}`,
                        desc: episodeData.evaluate,
                        cover: ep.cover || episodeData.cover,
                        pubtime: ep.pub_time,
                        owner: {
                            mid: episodeData.up_info?.mid,
                            name: episodeData.up_info?.uname,
                            face: episodeData.up_info?.avatar
                        },
                        stat: {
                            view: ep.stat?.play || episodeData.stat?.views,
                            like: ep.stat?.likes || episodeData.stat?.likes,
                            coin: ep.stat?.coin || episodeData.stat?.coins,
                            favorite: episodeData.stat?.favorites,
                            share: episodeData.stat?.share,
                            danmaku: ep.stat?.danmakus || episodeData.stat?.danmakus,
                            reply: ep.stat?.reply || episodeData.stat?.reply
                        }
                    });
                    if (episodeInfo) {
                        Object.assign(info.owner, {
                            mid: episodeInfo.related_up?.[0]?.mid,
                            name: episodeInfo.related_up?.[0]?.uname,
                            face: episodeInfo.related_up?.[0]?.avatar
                        });
                        Object.assign(info.stat, {
                            view: episodeInfo.stat.view,
                            like: episodeInfo.stat.like,
                            coin: episodeInfo.stat.coin,
                            favorite: episodeInfo.stat.favorite,
                            share: episodeInfo.stat.share,
                            danmaku: episodeInfo.stat.dm,
                            reply: episodeInfo.stat.reply
                        });
                    }
                    info.url = 'https://www.bilibili.com/bangumi/play/' + info.id;
                }
            } catch (e) {
                console.error('生成视频信息出错', e);
            }
            if (info?.cover?.startsWith('http:')) {
                info.cover = info.cover.replace(/^http:/, 'https:');
            }
            if (info?.owner?.face?.startsWith('http:')) {
                info.owner.face = info.owner.face.replace(/^http:/, 'https:');
            }
            info.fetchtime = data.fetchtime || Math.floor(Date.now() / 1000);
            info.id ??= data.id;
            info.title ??= data.title;
            return info;
        }
        clearDmList() {
            this.dmDict = {};
            this.genDmList();
        }
        genDmList() {
            this.data.danmakuData = Object.values(this.dmDict);
            this.dmCount = this.data.danmakuData.length;
        }
        addDanmaku(danmaku) {
            const dmid = danmaku.idStr ?? String(danmaku.id);
            if (this.dmDict[dmid]) {
                Object.assign(this.dmDict[dmid], danmaku);
            } else {
                this.dmDict[dmid] = { ...danmaku };
            }
        }
        async getDanmakuXml() {
            const cid = this.info.cid;
            if (!cid) {
                console.warn('获取XML弹幕失败，未找到cid，请检查info');
                return -1;
            };
            const dmCount = this.dmCount;
            console.time('获取XML实时弹幕 总耗时');
            const xml = await this.constructor.api.getDanmakuXml(cid);
            const dmList = this.constructor.parseDanmakuXml(xml);
            dmList.forEach(d => this.addDanmaku(d));
            this.genDmList();
            console.timeEnd('获取XML实时弹幕 总耗时');
            console.log('新增弹幕', this.dmCount - dmCount);
            return this.dmCount - dmCount;
        }
        async getDanmakuPb() {
            const { cid, aid, duration } = this.info;
            if (!cid || !aid || !duration) {
                console.warn('获取Protobuf实时弹幕失败，未找到cid/aid/duration，请检查info');
                return -1;
            };
            const dmCount = this.dmCount;
            console.time('获取Protobuf实时弹幕 总耗时');
            const pbViewBuf = await this.constructor.api.getDanmakuPbWebView(cid, aid, duration);
            const pbView = this.constructor.parsePb(pbViewBuf, 'DmWebViewReply');
            const pageSize = pbView?.dmSge?.pageSize / 1000 || 360;
            const segCount = Math.floor(duration / pageSize) + 1;
            for (let segIndex = 1; segIndex <= segCount; segIndex++) {
                const segBuf = await this.constructor.api.getDanmakuPbSeg(cid, aid, segIndex);
                const segData = this.constructor.parsePb(segBuf, 'DmSegMobileReply');
                if (!segData || !segData.elems || segData.elems.length === 0) continue;
                segData.elems.forEach(elem => this.addDanmaku(elem));
            }
            this.genDmList();
            console.timeEnd('获取Protobuf实时弹幕 总耗时');
            console.log('新增弹幕', this.dmCount - dmCount);
            return this.dmCount - dmCount;
        }
        async getDanmakuHisPb(month) {
            const cid = this.info.cid;
            if (!cid) {
                console.warn('获取历史弹幕失败，未找到cid，请检查info');
                return -1;
            }
            if (!/^\d{4}-\d{2}$/.test(month)) {
                console.warn('获取历史弹幕失败，参数不合法，应为 "YYYY-MM" 格式');
                return -1;
            }
            console.time(`获取 ${month} 历史弹幕 总耗时`);
            const dates = await this.constructor.api.getDanmakuHisDate(cid, month);
            if (!Array.isArray(dates)) {
                console.warn(month, '无可用历史弹幕数据', dates);
                return -1;
            }
            const dmCount = this.dmCount;
            for (const date of dates) {
                const segBuf = await this.constructor.api.getDanmakuHisPb(cid, date);
                const segData = this.constructor.parsePb(segBuf, 'DmSegMobileReply');
                if (!segData || !segData.elems || segData.elems.length === 0) continue;
                segData.elems.forEach(elem => this.addDanmaku(elem));
            }
            this.genDmList();
            console.timeEnd(`获取 ${month} 历史弹幕 总耗时`);
            console.log('新增弹幕', this.dmCount - dmCount);
            return this.dmCount - dmCount;
        }
    }
}

export async function createBiliDataManagerImport(httpRequest, name = 'B站数据管理') {
    const { BiliProtobufParser } = await import('./BiliProtobufParser.js');
    const { BiliClient } = await import('./BiliClient.js');
    const { BiliAPI } = await import('./BiliAPI.js');
    const pbParser = new BiliProtobufParser();
    const biliClient = new BiliClient(httpRequest);
    await biliClient.init();
    const biliApi = new BiliAPI(biliClient);
    return createBiliDataManager(biliApi, pbParser, name);
}