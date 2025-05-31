export class DanmakuDOMAdapter {
    constructor() {
        this.container = null;
        this.videoEl = null;
        this.callbacks = {};
    }
    injectStyle(id, content) {
        if (id && document.getElementById(id)) return; // 防止重复添加
        const style = this.createElement({ elId: id, elName: 'style', elContent: content });
        document.head.appendChild(style);
    }
    injectElement(parent = document.body, element) {
        if (element.id && document.getElementById(element.id)) return;
        if (!parent) return;
        parent.appendChild(element);
    }
    createElement({ elName = 'div', elId = '', elContent = '', elStyle = {} }) {
        const element = document.createElement(elName);
        if (elId) element.id = elId;
        if (elContent) element.textContent = elContent;
        Object.assign(element.style, elStyle);
        return element;
    }
    addContainer(container) {
        const wrapper = this.getVideoWrapper();
        if (!wrapper) return;
        wrapper.style.position = 'relative';
        this.injectElement(wrapper, container);
    }
    getVideoElement() {
        const video = document.querySelector('video');
        if (video !== this.videoEl) this.bindVideoEvent(video);
        return video;
    }
    bindVideoEvent(video) {
        if (!video) return;
        this.videoEl = video;
        video.addEventListener('seeked', () => {
            this.callbacks.onSeek?.();
        });
        video.addEventListener('loadedmetadata', () => {
            this.callbacks.onResize?.();
        });
    }
    getVideoWrapper() {
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
    getVideoSize() {
        const wrapper = this.getVideoWrapper();
        const rect = wrapper?.getBoundingClientRect();
        return rect;
    }
    addResizeListener() {
        window.addEventListener('resize', () => this.callbacks.onResize?.());
    }
    getPlayingState() {
        const video = this.getVideoElement();
        if (!video) return { paused: true, currentTime: 0 };
        return { paused: video.paused, currentTime: video.currentTime };
    }
}

export class BiliDanmakuPlayer {
    constructor() {
        this.domAdapter = new DanmakuDOMAdapter();
        this.danmakuList = [];
        this.danmakuEnabled = true;
        this.isLoaded = false;
        this.scrollTracks = [];
        this.topTracks = [];
        this.bottomTracks = [];
        this.LINE_HEIGHT = 30;
        this.displayArea = 1;
        this.container = this.domAdapter.createElement({
            elId: 'danmaku-player-container',
            elStyle: {
                position: 'absolute',
                overflow: 'hidden',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: '9998'
            }
        })
        this.domAdapter.callbacks.onSeek = () => {
            this.danmakuList.forEach(dm => dm._shown = false);
            Array.from(this.container.children).forEach(child => child.remove());
        };
        this.domAdapter.callbacks.onResize = () => {
            this.updateTracks();
        };
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
        this.domAdapter.addContainer(this.container);
        this.updateTracks();

        this.domAdapter.addResizeListener();
        this.domAdapter.getVideoElement();

        this.domAdapter.injectStyle('danmaku-style', `
            @keyframes move {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
            }`);
        this.observe();
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
        const rect = this.container.getBoundingClientRect();
        if (!rect) return;

        const height = rect.height * this.displayArea;
        const maxTracks = Math.floor(height / this.LINE_HEIGHT);
        // const trackCount = Math.max(3, Math.min(maxTracks, 30)); // 最少 3 条，最多 30 条
        const trackCount = Math.max(3, maxTracks); // 最少 3 条

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

        const el = this.domAdapter.createElement({
            elContent: dm.content, elStyle: {
                position: 'absolute',
                whiteSpace: 'nowrap',
                fontSize: `${dm.fontsize || 18}px`,
                color: `#${(dm.color || 0xffffff).toString(16).padStart(6, '0')}`,
                fontWeight: 'bold',
                textShadow: '1px 1px 2px black',
                pointerEvents: 'none',
                zIndex: '10000'
            }
        });
        if (dm.mode === 5) {
            // 顶部弹幕
            const track = this.getFreeTrack(this.topTracks, dm.id);
            el.style.top = `${track * this.LINE_HEIGHT + 5}px`;
            el.style.left = '50%';
            el.style.transform = 'translateX(-50%)';
            this.domAdapter.injectElement(this.container, el);
            setTimeout(() => {
                if (this.topTracks[track] === dm.id) this.topTracks[track] = null;
                el.remove();
            }, 4000);
        } else if (dm.mode === 4) {
            // 底部弹幕
            const track = this.getFreeTrack(this.bottomTracks, dm.id);
            el.style.bottom = `${track * this.LINE_HEIGHT + 5}px`;
            el.style.left = '50%';
            el.style.transform = 'translateX(-50%)';
            this.domAdapter.injectElement(this.container, el);
            setTimeout(() => {
                if (this.bottomTracks[track] === dm.id) this.bottomTracks[track] = null;
                el.remove();
            }, 4000);
        } else {
            // 滚动弹幕
            const track = this.getFreeTrack(this.scrollTracks, dm.id);
            el.style.top = `${track * this.LINE_HEIGHT}px`;
            el.style.left = '100%';
            el.style.transition = 'transform 6s linear';
            this.domAdapter.injectElement(this.container, el);

            // 启动滚动动画
            requestAnimationFrame(() => {
                const containerWidth = this.container.getBoundingClientRect().width;
                const dmWidth = el.getBoundingClientRect().width;
                el.style.transform = `translateX(-${containerWidth + dmWidth}px)`;
            });

            // 提前释放轨道
            setTimeout(() => {
                if (this.scrollTracks[track] === dm.id) this.scrollTracks[track] = null;
            }, 2000);
            setTimeout(() => {
                el.remove();
            }, 6500);
        }
    }
    observe() {
        if (this._observerTimer) return;
        this._observerTimer = setInterval(() => {
            if (!this.isLoaded || !this.danmakuEnabled) return;

            const state = this.domAdapter.getPlayingState();
            if (state.paused) return;

            const now = state.currentTime * 1000;
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
    setOpacity(value) {
        this.container.style.opacity = value;
    }
    setDisplayArea(value) {
        this.displayArea = value;
        this.updateTracks();
    }
}