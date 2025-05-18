export class BiliDanmakuPlayer {
    constructor() {
        this.danmakuList = [];
        this.danmakuEnabled = true;
        this.isLoaded = false;
        this.scrollTracks = [];
        this.topTracks = [];
        this.bottomTracks = [];
        this.LINE_HEIGHT = 30;
        this.lastVideoElement = null;
        this.container = document.createElement('div');
        this.container.id = 'danmaku-player-container';
        Object.assign(this.container.style, {
            position: 'absolute',
            overflow: 'hidden',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '9998'
        });
        this.logStyle = {
            tag: 'Danmaku Player',
            style: 'background: #FF0000; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;',
            errorStyle: 'background: black; color: #FF0000; padding: 2px 6px; border-radius: 3px; font-weight: bold;'
        };
    }
    logTag(...args) {
        console.log(`%c${this.logStyle.tag}`, this.logStyle.style, ...args);
    }
    logTagError(...args) {
        console.error(`%c${this.logStyle.tag}`, this.logStyle.errorStyle, ...args);
    }
    init() {
        if (!document.getElementById('danmaku-player-container')) {
            player = this.getValidVideoWrapper();
            if (!player) return;
            player.style.position = 'relative'; // 确保 relative 定位
            player.appendChild(this.container);
        }
        this.updateTracks();
        window.addEventListener('resize', () => this.updateTracks());
        this.bindVideo(document.querySelector('video'));

        this.observe();
        this.injectAnimationStyle();
    }
    getValidVideoWrapper() {
        const video = document.querySelector('video');
        if (!video) return null;

        const player = document.querySelector('.html5-video-player');
        if (player) return player;

        let parent = video.parentElement;
        while (parent) {
            const rect = parent.getBoundingClientRect();
            if (rect.height > 0 && rect.width > 0) return parent;
            parent = parent.parentElement;
        }
        return null;
    }
    injectAnimationStyle() {
        if (document.getElementById('danmaku-style')) return; // 防止重复添加
        const style = document.createElement('style');
        style.id = 'danmaku-style';
        style.textContent = `
            @keyframes move {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
            }`;
        document.head.appendChild(style);
    }
    load(danmakuData) {
        this.danmakuList = danmakuData || [];
        this.danmakuList.forEach(dm => delete dm._shown); // 清空标记

        this.isLoaded = true;
        this.logTag(`载入弹幕${this.danmakuList.length}条`);
    }
    toggle() {
        this.danmakuEnabled = !this.danmakuEnabled;
        if (!this.danmakuEnabled) {
            // ✅ 清除所有已有弹幕节点
            Array.from(this.container.children).forEach(child => child.remove());
        }
    }
    updateTracks() {
        const player = this.getValidVideoWrapper();
        const rect = player?.getBoundingClientRect();
        if (!rect) return;

        const height = rect.height;
        const maxTracks = Math.floor(height / this.LINE_HEIGHT);
        const trackCount = Math.max(3, Math.min(maxTracks, 30)); // 最少 3 条，最多 30 条

        this.scrollTracks = new Array(trackCount).fill(null);
        this.topTracks = new Array(Math.floor(trackCount / 3)).fill(null);
        this.bottomTracks = new Array(Math.floor(trackCount / 3)).fill(null);
        this.logTag(`轨道分配：滚动 ${this.scrollTracks.length} 行，顶部 ${this.topTracks.length}，底部 ${this.bottomTracks.length}`);
    }
    getFreeTrack(tracks, dmid) {
        for (let i = 0; i < tracks.length; i++) {
            if (!tracks[i]) {
                tracks[i] = dmid;
                return i;
            }
        }
        const index = Math.floor(Math.random() * tracks.length);    //未找到则随机一条
        tracks[index] = dmid;
        return index;
    }
    showDanmaku(dm) {
        if (!this.danmakuEnabled) return;

        // 样式设置
        const el = document.createElement('div');
        el.textContent = dm.content;
        el.style.position = 'absolute';
        el.style.whiteSpace = 'nowrap';
        el.style.fontSize = `${dm.fontsize || 18}px`;
        el.style.color = `#${(dm.color || 0xffffff).toString(16).padStart(6, '0')}`;
        el.style.fontWeight = 'bold';
        el.style.textShadow = '1px 1px 2px black';
        el.style.pointerEvents = 'none';
        el.style.zIndex = '10000';

        if (dm.mode === 5) {
            // 顶部弹幕
            const track = this.getFreeTrack(this.topTracks, dm.dmid);
            el.style.top = `${track * this.LINE_HEIGHT + 5}px`;
            el.style.left = '50%';
            el.style.transform = 'translateX(-50%)';
            this.container.appendChild(el);
            setTimeout(() => {
                if (this.topTracks[track] === dm.dmid) this.topTracks[track] = null;
                el.remove();
            }, 4000);
        } else if (dm.mode === 4) {
            // 底部弹幕
            const track = this.getFreeTrack(this.bottomTracks, dm.dmid);
            el.style.bottom = `${track * this.LINE_HEIGHT + 5}px`;
            el.style.left = '50%';
            el.style.transform = 'translateX(-50%)';
            this.container.appendChild(el);
            setTimeout(() => {
                if (this.bottomTracks[track] === dm.dmid) this.bottomTracks[track] = null;
                el.remove();
            }, 4000);
        } else {
            // 滚动弹幕
            const track = this.getFreeTrack(this.scrollTracks, dm.dmid);
            el.style.top = `${track * this.LINE_HEIGHT}px`;
            el.style.left = '100%';
            el.style.transition = 'transform 6s linear';
            this.container.appendChild(el);

            // 启动滚动动画
            requestAnimationFrame(() => {
                const totalWidth = el.getBoundingClientRect().width;
                el.style.transform = `translateX(-${window.innerWidth + totalWidth}px)`;
            });

            // 提前释放轨道
            setTimeout(() => {
                if (this.scrollTracks[track] === dm.dmid) this.scrollTracks[track] = null;
            }, 2000);
            setTimeout(() => {
                el.remove();
            }, 6500);
        }
    }
    bindVideo(video) {
        if (!video) return;
        this.lastVideoElement = video;

        video.addEventListener('seeked', () => {
            this.danmakuList.forEach(dm => dm._shown = false);
            Array.from(this.container.children).forEach(child => child.remove());
        });

        video.addEventListener('loadedmetadata', () => {
            this.updateTracks();
        });
        this.logTag('[🎯 绑定 video 事件]');
    }
    observe() {
        if (this._observerTimer) return;
        this._observerTimer = setInterval(() => {
            if (!this.isLoaded || !this.danmakuEnabled) return;
            const video = document.querySelector('video');
            if (video !== this.lastVideoElement) this.bindVideo(video);
            if (!video || video.paused) return;

            const now = video.currentTime * 1000;
            const windowSize = 300;

            for (const dm of this.danmakuList) {
                if (!dm._shown && Math.abs(dm.progress - now) <= windowSize) {
                    this.showDanmaku(dm);
                    dm._shown = true;
                }
            }
        }, 200);
    }
    clear() {
        this.danmakuList = [];
        this.isLoaded = false;

        Array.from(this.container.children).forEach(el => el.remove());
        this.logTag('🔻 弹幕已清空');
    }
}
