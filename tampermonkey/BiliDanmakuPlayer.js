class DMPlayerDOMAdapter {
    constructor(playerInstance) {
        this.videoEl = null;
        this.player = playerInstance;
        this._handlers = {};
    }
    injectStyle(id, content) {
        if (!id) return;
        let styleEl = document.getElementById(id);
        if (styleEl) {
            styleEl.textContent = content;
        } else {
            const style = this.createElement({ elId: id, elName: 'style', elContent: content });
            document.head.appendChild(style);
        }
    }
    injectElement(parent = document.body, element, replace = false) {
        if (!parent || !element) return;
        if (element.id) {
            const existing = document.getElementById(element.id);
            if (existing) {
                if (replace) existing.remove();
                else return;
            }
        }
        parent.appendChild(element);
    }
    createElement({ elName = 'div', elId = '', elContent = '', elStyle = {}, elClass }) {
        const element = document.createElement(elName);
        if (elId) element.id = elId;
        if (elContent) element.textContent = elContent;
        if (elClass) {
            if (Array.isArray(elClass)) {
                element.classList.add(...elClass);
            } else if (typeof elClass === 'string') {
                element.classList.add(elClass);
            }
        }
        Object.assign(element.style, elStyle);
        return element;
    }
    addContainer(container) {
        const wrapper = this.getVideoWrapper();
        if (!wrapper) return;
        if (getComputedStyle(wrapper).position === 'static') {
            console.log('[❗] wrapper改为定位元素');
            wrapper.style.position = 'relative';
        }
        this.injectElement(wrapper, container, true);
    }
    getVideoWrapper() {
        const video = document.querySelector('video');
        if (!video) return null;
        const videoRect = video.getBoundingClientRect();

        let parent = video.parentElement;
        while (parent) {
            const rect = parent.getBoundingClientRect();
            const widthDiff = Math.abs(rect.width - videoRect.width) / videoRect.width;
            const heightDiff = Math.abs(rect.height - videoRect.height) / videoRect.height;
            if (widthDiff < 0.2 && heightDiff < 0.2) return parent;
            parent = parent.parentElement;
        }
        return null;
    }
    init() {
        this.unbindVideoEvent();
        this.bindVideoEvent();
    }
    bindVideoEvent() {
        const video = document.querySelector('video');
        if (!video || video === this.videoEl) return;
        this.videoEl = video;
        this._handlers.onSeeked = () => this.player.seek();
        this._handlers.onLoaded = () => this.player.resize();
        this._handlers.onPause = () => this.player.pause();
        this._handlers.onPlay = () => this.player.play();
        video.addEventListener('seeked', this._handlers.onSeeked);
        video.addEventListener('loadedmetadata', this._handlers.onLoaded);
        video.addEventListener('pause', this._handlers.onPause);
        video.addEventListener('play', this._handlers.onPlay);
        this._resizeObserver = new ResizeObserver(() => {
            this.player.resize?.();
        });
        this._resizeObserver.observe(video);
    }
    unbindVideoEvent() {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = null;
        }
        if (!this.videoEl || !this._handlers) return;
        this.videoEl.removeEventListener('seeked', this._handlers.onSeeked);
        this.videoEl.removeEventListener('loadedmetadata', this._handlers.onLoaded);
        this.videoEl.removeEventListener('pause', this._handlers.onPause);
        this.videoEl.removeEventListener('play', this._handlers.onPlay);
        this.videoEl = null;
        this._handlers = {};
    }
    get video() {
        return new Proxy({}, {
            get: (_, prop) => this.videoEl?.[prop],
            set: (_, prop, value) => {
                if (this.videoEl) {
                    this.videoEl[prop] = value;
                    return true;
                }
                return false;
            },
            has: (_, prop) => prop in (this.videoEl || {})
        });
    }
}

export class BiliDanmakuPlayer {
    constructor() {
        this.domAdapter = new DMPlayerDOMAdapter(this);
        this.danmakuList = [];
        this.danmakuListOrigin = [];
        this.danmakuListMerged = [];
        this.danmakuIndex = 0;
        this.showing = true;
        this.paused = false;
        this.isLoaded = false;
        this.tracks = { scroll: [], top: [], bottom: [] };
        this.LINE_HEIGHT = 30;
        this.container = this.domAdapter.createElement({ elId: 'dmplayer-container' })
        this.logStyle = {
            tag: 'Danmaku Player',
            style: 'background: #FF0000; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;',
            errorStyle: 'background: black; color: #FF0000; padding: 2px 6px; border-radius: 3px; font-weight: bold;'
        };
        this.options = {
            displayArea: {
                value: 1,
                setValue: (value) => {
                    if (value && this.options.displayArea.value !== value) {
                        this.options.displayArea.value = value;
                        this._updateTracks();
                    }
                }
            },
            opacity: {
                value: 0.8,
                init: true,
                setValue: (value) => {
                    if (value) {
                        this.options.opacity.value = value;
                        this.options.opacity.execute();
                    }
                },
                execute: () => {
                    this.container.style.opacity = this.options.opacity.value;
                }
            },
            speed: {
                value: 6,
                setValue: (value) => {
                    if (!isNaN(value)) this.options.speed.value = Math.max(3, Math.min(9, value));
                    this._updateDuration();
                }
            },
            overlap: {
                value: true,
                setValue: (value) => {
                    this.options.overlap.value = !!value;
                }
            },
            mergeRepeats: {
                value: true,
                setValue: (value) => {
                    this.options.mergeRepeats.value = !!value;
                    this.options.mergeRepeats.execute();
                },
                execute: () => {
                    if (this.options.mergeRepeats.value) {
                        this._mergeRepeat();
                        this.danmakuList = this.danmakuListMerged;
                    } else {
                        this.danmakuList = this.danmakuListOrigin;
                    }
                    this.seek();
                }
            },
            shadowEffect: {
                value: [{ type: 0, offset: 1, radius: 1, repeat: 1 }],
                init: true,
                setValue: (value) => {
                    if (Array.isArray(value)) {
                        this.options.shadowEffect.value = value;
                        this.options.shadowEffect.execute();
                    }
                },
                execute: () => {
                    const textShadow = this.options.shadowEffect.generateTextShadow(this.options.shadowEffect.value);
                    const css = `.dmplayer-danmaku { text-shadow: ${textShadow}; }`;
                    this.domAdapter.injectStyle('dmplayer-danmaku-shadow', css);
                },
                generateTextShadow: (config) => {
                    const shadows = [];
                    for (const item of config) {
                        const { type, offset, radius, repeat } = item;
                        switch (type) {
                            case 0:
                                for (let i = 0; i < repeat; i++) {
                                    const o = offset === -1 ? 1 + i : offset;
                                    const r = radius === -1 ? 1 + i : radius;
                                    [[1, 0], [0, 1], [0, -1], [-1, 0]].forEach(([x, y]) => {
                                        shadows.push(`${x * o}px ${y * o}px ${r}px black`);
                                    });
                                }
                                break;
                            case 1:
                                for (let i = 0; i < repeat; i++) {
                                    const r = radius === -1 ? 1 + i : radius;
                                    shadows.push(`0 0 ${r}px black`);
                                }
                                break;
                            case 2:
                                for (let i = 0; i < repeat; i++) {
                                    const o = offset === -1 ? 1 + i : offset;
                                    const r = radius === -1 ? 1 + i : radius;
                                    shadows.push(`${o}px ${o}px ${r}px black`);
                                }
                                break;
                        }
                    }
                    return shadows.join(',\n');
                }
            }
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
        this.domAdapter.injectStyle('dmplayer-style', `
            @keyframes dmplayer-animate-center {
                from { opacity: 1; }
                to { opacity: 1; }
            }
            .dmplayer-danmaku {
                position: absolute;
                white-space: nowrap;
                font-weight: bold;
                pointer-events: none;
                line-height: 1;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
            }
            .dmplayer-danmaku-badge {
                position: absolute;
                padding: 0px 0.4em;
                border-radius: 0.4em;
                font-size: 0.8em;
                top: 0.125em;
            }
            .dmplayer-danmaku-scroll {
                right: 0;
                animation-name: dmplayer-animate-scroll;
            }
            .dmplayer-danmaku-top,
            .dmplayer-danmaku-bottom {
                left: 50%;
                transform: translateX(-50%);
                animation-name: dmplayer-animate-center;
            }
            #dmplayer-container {
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 999;
            }`);
        for (let key in this.options) {
            if (this.options[key].init) this.options[key].execute?.();
        }
        this.domAdapter.init();
        this.resize();
        this.logTag('✅ 弹幕播放器初始化完成');
    }
    load(danmakuData) {
        let uid = 0;
        const base = Date.now();
        danmakuData.forEach(dm => {
            dm.progress ??= 0;
            dm.id = dm.idStr || dm.id?.toString() || `${base}${uid++}`; //保证有id
        });

        this.clear();
        this.danmakuListOrigin = danmakuData.sort((a, b) => a.progress - b.progress) || [];
        this.options.mergeRepeats.execute();

        this.isLoaded = true;
        this.paused = this.domAdapter.video.paused;
        this.observe();
    }
    clear() {
        this.cleanup();
        this.danmakuList = [];
        this.danmakuListOrigin = [];
        this.danmakuListMerged = [];
        this.danmakuIndex = 0;
        this.isLoaded = false;
        if (this._observerFrame) {
            cancelAnimationFrame(this._observerFrame);
            this._observerFrame = null;
        }
        this.logTag('🔻 弹幕已清空');
    }
    toggle() {
        this.showing = !this.showing;
        if (this.showing) {
        } else {
            this.cleanup();
        }
    }
    cleanup() {
        Array.from(this.container.children).forEach(el => el.remove());
        for (let type in this.tracks) {
            if (Array.isArray(this.tracks[type])) {
                this.tracks[type].fill(null);
            }
        }
    }
    seek() {
        this.cleanup();
        this.danmakuIndex = 0;
        // const currentTime = this.domAdapter.video.currentTime * 1000;
        // const fromTime = currentTime - Math.max(this._duration.center, this._duration.scroll);
        // this.danmakuIndex = this.danmakuList.findIndex(dm => dm.progress >= fromTime);
        // if (this.danmakuIndex === -1) {
        //     this.danmakuIndex = this.danmakuList.length;
        // }
    }
    pause() {
        this.paused = true;
        Array.from(this.container.children).forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }
    play() {
        this.paused = false;
        Array.from(this.container.children).forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
    resize() {
        const rect = this.container.getBoundingClientRect();
        if (!rect) return;
        if (
            !this.containerRect ||
            this.containerRect.width !== rect.width ||
            this.containerRect.height !== rect.height
        ) {
            this.logTag(`更新尺寸：${Math.round(rect.height)}×${Math.round(rect.width)}`);
            this.containerRect = this.container.getBoundingClientRect();
            this.domAdapter.injectStyle('dmplayer-style-animation', `
                @keyframes dmplayer-animate-scroll {
                    from { transform: translateX(100%); }
                    to { transform: translateX(-${this.containerRect.width}px); }
                }`);
            this._updateTracks();
            this._updateDuration();
            const currentTime = this.domAdapter.video.currentTime * 1000;
            Array.from(this.container.getElementsByClassName('dmplayer-danmaku-scroll')).forEach(
                el => el.style.animationDelay = `${el._progress - currentTime}ms`
            );
        }
    }
    _mergeRepeat() {
        const merged = [];
        const averageColor = (a, b, count) => {
            // a: 当前已有平均值，b: 新颜色，count: 新的总数
            const toRGB = (hex) => {
                const n = typeof hex === 'number' ? hex : parseInt(hex);
                return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
            };
            const [r1, g1, b1] = toRGB(a);
            const [r2, g2, b2] = toRGB(b);
            const newR = Math.round((r1 * (count - 1) + r2) / count);
            const newG = Math.round((g1 * (count - 1) + g2) / count);
            const newB = Math.round((b1 * (count - 1) + b2) / count);
            return (newR << 16) | (newG << 8) | newB;
        };
        for (const current of this.danmakuListOrigin) {
            if (!current?.content) continue;
            const mergeWindow = this._getDuration(current.mode) / 2; //窗口为弹幕持续时间的一半
            let mergedFound = false;
            for (let i = merged.length - 1; i >= 0; i--) {
                const last = merged[i];
                if (current.progress - last.progress > mergeWindow) break; // 超过合并窗口
                if (last.content === current.content && last.mode === current.mode) {
                    last.count = (last.count || 1) + 1;
                    last.color = averageColor(last.color, current.color, last.count);
                    mergedFound = true;
                    break;
                }
            }
            if (!mergedFound) {
                merged.push({ ...current });
            }
        }
        this.danmakuListMerged = merged;
    }
    _updateTracks() {
        const height = this.containerRect.height * this.options.displayArea.value - 8;
        const maxTracks = Math.floor(height / this.LINE_HEIGHT);
        // const trackCount = Math.max(3, Math.min(maxTracks, 30)); // 最少 3 条，最多 30 条

        const keepTracks = (oldTracks, count) => {
            const newTracks = new Array(count);
            for (let i = 0; i < count; i++) {
                newTracks[i] = oldTracks?.[i] ?? null;
            }
            return newTracks;
        };
        this.tracks.scroll = keepTracks(this.tracks.scroll, maxTracks);
        this.tracks.top = keepTracks(this.tracks.top, Math.floor(maxTracks / 2));
        this.tracks.bottom = keepTracks(this.tracks.bottom, Math.floor(maxTracks / 2));
        this.logTag(`最大轨道数：${maxTracks}`);
    }
    _getFreeTrack(type, el, delayRatio) {
        if (!(type in this.tracks)) return 0;
        const tracks = this.tracks[type];
        const inter = 20;
        const id = el.id;
        const c = this.containerRect;
        const newDm = el.getBoundingClientRect();
        const newRatio = c.width / (c.width + newDm.width) - delayRatio;
        for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            // 1. 空轨道：直接插入
            if (!track || Object.keys(track).length === 0) {
                tracks[i] = { [id]: el };
                return i;
            }
            if (type === 'scroll') {
                // 2. 检查当前轨道是否全部不重叠
                let conflict = false;
                for (const key in track) {
                    const lastEl = track[key];
                    if (!lastEl || !lastEl.isConnected) continue;
                    const oldDM = lastEl.getBoundingClientRect();
                    const oldRatio = (oldDM.right - c.left + inter) / (c.width + oldDM.width);
                    if (newRatio <= oldRatio || c.right - oldDM.right <= inter) {
                        conflict = true;
                        break;
                    }
                }
                if (!conflict) {
                    track[id] = el;
                    return i;
                }
            }
        }
        // 3. 允许重叠则找最早插入的轨道
        if (this.options.overlap?.value) {
            let bestIndex = -1;
            let earliestTime = Infinity;
            for (let i = 0; i < tracks.length; i++) {
                const track = tracks[i];
                let latestStart = 0; // 同一行轨道记录最晚者
                for (const key in track) {
                    const lastEl = track[key];
                    if (!lastEl || !lastEl.isConnected) continue;
                    if (lastEl._progress > latestStart) {
                        latestStart = lastEl._progress;
                    }
                }
                if (latestStart < earliestTime) {
                    earliestTime = latestStart;
                    bestIndex = i;
                }
            }
            if (bestIndex >= 0) {
                // this.logTag("重叠轨道", type, bestIndex, el.textContent);
                tracks[bestIndex][id] = el;
                return bestIndex;
            }
        }
        return -1;
    }
    _updateDuration() {
        this._duration = {
            center: Math.round(30000 / this.options.speed.value),
            scroll: Math.round((this.containerRect.width + 400) * 30 / this.options.speed.value)
        }
        this.logTag(`弹幕持续时长：中间 ${this._duration.center / 1000}秒，滚动 ${this._duration.scroll / 1000}秒`);
    }
    _getDuration(mode) {
        if (mode === 4 || mode === 5) {
            return this._duration.center;
        } else {
            return this._duration.scroll;
        }
    }
    showDanmaku(dm, delay = 0) {
        const duration = dm.duration ?? this._getDuration(dm.mode);
        if (delay >= duration) return;

        const type = dm.type ?? (dm.mode === 5 ? 'top' : dm.mode === 4 ? 'bottom' : 'scroll');
        const el = this.domAdapter.createElement({
            elId: dm.id, elContent: dm.content,
            elClass: ['dmplayer-danmaku', `dmplayer-danmaku-${type}`],
            elStyle: {
                fontSize: `${dm.fontsize || 25}px`,
                color: `#${(dm.color || 0xffffff).toString(16).padStart(6, '0')}`,
                animationDuration: `${duration}ms`,
                animationDelay: `${- delay}ms`
            }
        });
        if (dm.count && dm.count > 1) {
            const clr = dm.color || 0xffffff;
            el.appendChild(this.domAdapter.createElement({
                elName: 'span', elContent: `×${dm.count}`, elClass: 'dmplayer-danmaku-badge',
                elStyle: { background: `rgba(${(clr >> 16) & 0xff}, ${(clr >> 8) & 0xff}, ${clr & 0xff}, 0.3)` }
            }));
        }
        el._progress = dm.progress;
        this.domAdapter.injectElement(this.container, el); //先添加后才能测量宽度
        const track = this._getFreeTrack(type, el, delay / duration);
        if (track >= 0) {
            if (type == 'top' || type == 'bottom') {
                el.style[type] = `${track * this.LINE_HEIGHT + 5}px`;
            } else if (type == 'scroll') {
                el.style.top = `${track * this.LINE_HEIGHT + Math.floor(Math.random() * 5) + 3}px`;
            } else {
                if (dm.style) Object.assign(el.style, dm.style);
            }
            el.addEventListener('animationend', () => {
                const trackList = this.tracks[type]?.[track];
                if (trackList && trackList[el.id]) delete trackList[el.id];
                el.remove();
            });
        } else {
            el.remove();
        }
    }
    observe() {
        if (this._observerFrame) return;

        let lastTime = 0;
        const loop = () => {
            this._observerFrame = requestAnimationFrame(loop);
            if (!this.isLoaded || !this.showing || this.paused) return;

            const currentTime = this.domAdapter.video.currentTime * 1000;
            if (Math.abs(currentTime - lastTime) > 1500) {
                this.logTag('检测到跳转', ((currentTime - lastTime) / 1000).toFixed(3));
                this.seek();
            }
            lastTime = currentTime;
            while (this.danmakuIndex < this.danmakuList.length) {
                const dm = this.danmakuList[this.danmakuIndex];
                if (dm.progress < currentTime) {
                    // this.logTag(this.danmakuIndex, dm.progress / 1000, dm.content);
                    this.showDanmaku(dm, currentTime - dm.progress);
                    this.danmakuIndex++;
                } else {
                    break;
                }
            }
        };
        this._observerFrame = requestAnimationFrame(loop);
    }
    setOptions(option, key) {
        if (option === null || option === undefined) return;
        if (key) {
            this.options[key]?.setValue(option);
        } else {
            for (const k in option) {
                if (this.options[k]?.setValue) {
                    this.options[k].setValue(option[k]);
                }
            }
        }
    }
}
