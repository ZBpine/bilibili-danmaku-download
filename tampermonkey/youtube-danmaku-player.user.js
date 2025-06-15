// ==UserScript==
// @name         YouTube B站弹幕播放器
// @namespace    https://github.com/ZBpine/bilibili-danmaku-download/
// @version      1.5.4
// @description  在 YouTube 视频上显示 B站视频弹幕 [ 油管 | Bilibili | 弹幕]
// @author       ZBpine
// @match        https://www.youtube.com/*
// @match        https://www.bilibili.com/*
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @connect      api.bilibili.com
// @license      MIT
// @run-at       document-end
// ==/UserScript==

(async () => {
    'use strict';

    class DanmakuControlPanel {
        constructor() {
            this.panelId = 'dm-panel';
            this.dmPlayer = new BiliDanmakuPlayer();
            this.dmPlayerCall = (methodName, ...args) => {
                if (this.dmPlayer && typeof this.dmPlayer[methodName] === 'function') {
                    return this.dmPlayer[methodName](...args);
                }
            }
            this.videoId = null;
            this.data = {};
        }
        bindHotkey() {
            if (this.hotkeyBound) return;
            this.hotkeyBound = true;

            document.addEventListener('keydown', (e) => {
                const target = e.target;
                const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
                if (isTyping) return;

                const key = e.key.toLowerCase();
                if (key === 'd') {
                    if (this.toggleBtn) {
                        this.toggleBtn.click();
                    }
                } else if (key === 's') {
                    if (this.searchBtn) {
                        this.searchBtn.click();
                    }
                }
            });
        }
        init() {
            if (document.getElementById(this.panelId)) return;

            const buttonStyle = {
                padding: '6px',
                background: '#555',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%'
            };
            if (isBilibili) {
                buttonStyle.background = '#eee';
                buttonStyle.color = 'black';
                this.dmPlayer.logStyle.style = 'background: #00a2d8; color: white; padding: 2px 6px; border-radius: 3px;';
                this.dmPlayer.logStyle.errorStyle = 'background: #ff4d4f; color: white; padding: 2px 6px; border-radius: 3px;';
            }
            this.dmPlayerCall('setOptions', dmStore.get('settings', {}));

            this.searchBtn = document.createElement('button');
            this.searchBtn.textContent = '🔍';
            this.searchBtn.title = '搜索弹幕';
            this.searchBtn.onclick = () => this.onSearch();
            Object.assign(this.searchBtn.style, buttonStyle);

            this.configBtn = document.createElement('button');
            this.configBtn.textContent = '⚙️';
            this.configBtn.title = '打开设置';
            Object.assign(this.configBtn.style, buttonStyle);
            this.configBtn.onclick = () => this.showConfigPanel();

            this.toggleBtn = document.createElement('button');
            this.toggleBtn.textContent = '✅';
            this.toggleBtn.title = '开关弹幕';
            Object.assign(this.toggleBtn.style, buttonStyle);
            this.toggleBtn.onclick = () => {
                if (!this.dmPlayer) return;
                this.dmPlayer.toggle();
                this.toggleBtn.textContent = this.dmPlayer.showing ? '✅' : '🚫';
            };

            this.loadBtn = document.createElement('button');
            this.loadBtn.id = 'dm-btn-load';
            Object.assign(this.loadBtn.style, buttonStyle);
            this.loadCtl = {
                setLoad: () => {
                    this.loadBtn.textContent = '📂';
                    this.loadBtn.title = '载入弹幕文件';
                    this.fileInput.value = '';
                    this.loadBtn.onclick = () => this.fileInput.click();
                },
                setSave: () => {
                    this.loadBtn.textContent = '💾';
                    this.loadBtn.title = '保存到浏览器本地存储';
                    this.loadBtn.onclick = () => {
                        dmStore.setCache(this.videoId, this.data[this.videoId]);
                        showTip('✅ 已保存到本地');
                        this.loadCtl.setClear();
                    };
                },
                setClear: () => {
                    this.loadBtn.textContent = '🗑️';
                    this.loadBtn.title = '释放浏览器本地存储';
                    this.loadBtn.onclick = () => {
                        dmStore.removeCache(this.videoId);
                        showTip('🗑️ 已移除本地存储');
                        this.loadCtl.setLoad();
                    };
                }
            }
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.json,.xml';
            fileInput.style.display = 'none';
            fileInput.id = 'dm-input-file';
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const text = e.target.result.trim();
                        let data;
                        if (text.startsWith('<')) {
                            // XML 文件
                            const danmakuData = parseDanmakuXml(text);
                            data = {
                                danmakuData,
                                videoData: { title: file.name }
                            };
                        } else {
                            const json = JSON.parse(e.target.result);
                            if (Array.isArray(json)) {
                                // 纯弹幕数组
                                data = {
                                    danmakuData: json,
                                    videoData: { title: file.name }
                                };
                            } else if (json.danmakuData) {
                                // 完整结构
                                data = json;
                            } else {
                                throw new Error('不支持的 JSON 格式');
                            }
                        }
                        this.loadDanmakuSuccess(data);
                        this.loadCtl.setSave();
                    } catch (err) {
                        this.dmPlayer.logTagError('❌ 加载失败', err);
                        showTip('❌ 加载失败：' + err.message);
                    }
                };
                reader.readAsText(file);
            };
            this.fileInput = fileInput;
            document.body.appendChild(fileInput);

            const panel = document.createElement('div');
            panel.id = this.panelId;
            Object.assign(panel.style, {
                position: 'fixed',
                width: '80px',
                left: '-90px',
                bottom: '40px',
                zIndex: 10000,
                transition: 'left 0.3s ease-in-out, opacity 0.3s ease',
                opacity: '0.2',
                background: '#333',
                borderRadius: '0px 20px 20px 0px',
                padding: '10px',
                paddingRight: '20px',
                display: 'grid',
                gridTemplateColumns: '36px 36px',
                gridAutoRows: '32px',
                gap: '6px'
            });
            if (isBilibili) {
                panel.style.background = '#ccc';
            }
            panel.addEventListener('mouseenter', () => {
                panel.style.left = '0px';
                panel.style.opacity = '1';
            });
            panel.addEventListener('mouseleave', () => {
                panel.style.left = '-90px';
                panel.style.opacity = '0.2';
            });

            panel.append(this.searchBtn, this.loadBtn, this.configBtn, this.toggleBtn);
            document.body.appendChild(panel);
            this.bindHotkey();
        }
        update(videoId) {
            if (!videoId) return;
            this.dmPlayer.logTag(`当前视频：${videoId}`);
            this.videoId = videoId;
            this.dmPlayerCall('clear');

            if (this.data[videoId]) {
                this.dmPlayer.init();
                this.dmPlayer.load(this.data[videoId].danmakuData);
                return;
            }
            // 检查是否已有存储的弹幕
            const saved = dmStore.getCache(videoId);
            if (saved) {
                try {
                    this.loadDanmakuSuccess(saved);
                    showTip(`📦 自动载入本地弹幕`);
                    this.loadCtl.setClear();
                } catch (err) {
                    showTip('❌ 本地弹幕解析失败：' + err.message);
                    this.dmPlayer.logTagError('❌ 本地弹幕解析失败：', err);
                    dmStore.removeCache(videoId);
                    this.loadCtl.setLoad();
                }
            } else {
                this.loadCtl.setLoad();
            }
        }
        loadDanmakuSuccess(data) {
            this.applyAlignment(data);
            this.data[this.videoId] = data;
            this.dmPlayer.init();
            this.dmPlayer.load(data.danmakuData);

            const count = data.danmakuData.length;
            const title = data.videoData?.title || '（未知标题）';
            const time = data.fetchtime ?
                new Date(data.fetchtime * 1000).toLocaleString('zh-CN', { hour12: false }) : '（未知）';
            showTip(`🎉 成功载入：\n🎬 ${title}\n💬 共 ${count} 条弹幕\n🕒 抓取时间：${time}`);
        }
        applyAlignment(data) {
            if (!data?.alignment || !Array.isArray(data.alignment) || !data.danmakuData) return;
            this.dmPlayer.domAdapter.injectStyle('dmplayer-danmaku-mark', `
                @keyframes dmplayer-animate-mark {
                    0%   { opacity: 0; }
                    5%  { opacity: 0.6; }
                    95%  { opacity: 0.4; }
                    100% { opacity: 0; }
                }
                .dmplayer-danmaku-mark {
                    left: 10px;
                    top: 10px;
                    animation-name: dmplayer-animate-mark;
                    animation-timing-function: cubic-bezier(0,1,1,0) !important;
                }`
            );
            const alignments = data.alignment.slice().sort((a, b) => (a.sourceRange?.start || 0) - (b.sourceRange?.start || 0));
            const newDanmakus = [];
            if (!data.danmakuDataOrigin) data.danmakuDataOrigin = data.danmakuData;
            const danmakus = data.danmakuDataOrigin;

            let lastSEnd = 0;
            let lastTEnd = 0;
            for (let i = 0; i <= alignments.length; i++) {
                const align = alignments[i];
                if (!align) continue;
                const { sourceRange, targetRange, mode, comment } = align;

                const sStart = sourceRange.start;
                const sEnd = sourceRange.end;
                const tStart = targetRange.start;
                const tEnd = targetRange.end;
                const sDuration = sEnd - sStart;
                const tDuration = tEnd - tStart;

                for (const d of danmakus) {
                    const time = d.progress;
                    if (time >= lastSEnd && time < sStart) {
                        const newTime = time - lastSEnd + lastTEnd;
                        newDanmakus.push({ ...d, progress: Math.round(newTime) });
                    } else if (time >= sStart && time < sEnd) {
                        let newTime = null;
                        if (mode === 'map') {
                            const ratio = (time - sStart) / sDuration;
                            newTime = tStart + ratio * tDuration;
                        } else {
                            newTime = time - sStart + tStart;
                            if (newTime < tStart || newTime >= tEnd) continue;
                        }
                        newDanmakus.push({ ...d, progress: Math.round(newTime) });
                    }
                }
                if (comment) {
                    const commentId = Date.now() * 1000 + i
                    newDanmakus.push({
                        content: `${comment}`,
                        progress: Math.round(tStart),
                        type: 'mark',
                        duration: tEnd - tStart,
                        fontsize: 32,
                        color: 0xffffff,
                        ctime: Math.floor(Date.now() / 1000),
                        pool: 0,
                        midHash: 'system',
                        id: commentId,
                        idStr: String(commentId),
                        weight: 10
                    });
                }
                lastSEnd = sEnd;
                lastTEnd = tEnd;
            }
            for (const d of danmakus) {
                const time = d.progress;
                if (time >= lastSEnd) {
                    const newTime = time - lastSEnd + lastTEnd;
                    newDanmakus.push({ ...d, progress: Math.round(newTime) });
                }
            }
            data.danmakuData = newDanmakus;
        }
        async onSearch() {
            try {
                const selected = await this.showSearchSelector();
                if (!selected) return;

                const data = await getDanmakuDataByBvid(selected.bvid, selected.source);
                this.loadDanmakuSuccess(data);
                this.loadCtl.setSave();
            } catch (err) {
                showTip(`❌ 请求失败：${err.message}`);
                this.dmPlayer.logTagError('❌ 请求失败：', err);
            }
        }
        async showSearchSelector() {
            let initialKeyword = document.title.replace(' - YouTube', '');
            if (isBilibili) {
                initialKeyword = document.title.replace(/[-_–—|]+.*?(bilibili|哔哩哔哩).*/gi, '').trim();
            }
            let resolveFn;
            const returnPromise = new Promise((resolve) => {
                resolveFn = resolve;
            });
            const overlay = this.createStyledEl('overlay');

            const panel = this.createStyledEl('panel');

            const titleEl = document.createElement('div');
            titleEl.textContent = '选择一个视频以载入弹幕：';
            titleEl.style.fontWeight = 'bold';
            titleEl.style.fontSize = '16px';

            const input = this.createStyledEl('input');
            input.type = 'text';
            input.value = initialKeyword;

            const resultsBox = document.createElement('div');
            resultsBox.style.display = 'flex';
            resultsBox.style.flexDirection = 'column';
            resultsBox.style.gap = '6px';

            const cleanup = (result = null) => {
                overlay.remove();
                resolveFn(result);
            };

            document.addEventListener('keydown', function escClose(e) {
                if (e.key === 'Escape') {
                    cleanup();
                    document.removeEventListener('keydown', escClose);
                }
            });

            overlay.onclick = (e) => {
                if (e.target === overlay) cleanup();
            };

            const formatCount = (n) => {
                n = parseInt(n || '0');
                if (isNaN(n)) return '0';
                if (n >= 1e8) return (n / 1e8).toFixed(1) + '亿';
                if (n >= 1e4) return (n / 1e4).toFixed(1) + '万';
                return n.toString();
            };
            const normalizeTimeStr = (duration) => {
                if (typeof duration === 'number' && !isNaN(duration)) {
                    // duration 是秒数，直接格式化为 h:mm:ss
                    const totalSeconds = duration;
                    const hours = Math.floor(totalSeconds / 3600);
                    const minutes = Math.floor((totalSeconds % 3600) / 60);
                    const seconds = totalSeconds % 60;
                    if (hours > 0) {
                        return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                    }
                    else {
                        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                    }
                }
                if (typeof duration === 'string' && /^\d+:\d{1,2}$/.test(duration)) {
                    const [min, sec] = duration.split(':').map(Number);
                    if (isNaN(min) || isNaN(sec)) return duration; // 原样返回不合法值
                    if (min > 99) {
                        const hours = Math.floor(min / 60);
                        const minutes = min % 60;
                        return `${hours}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
                    } else {
                        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
                    }
                }
                return duration; // 不合法或未知格式，原样返回
            };
            const renderResults = async (keyword) => {
                resultsBox.textContent = '🔍 搜索中...';
                try {
                    const list = await searchVideosByKeyword(keyword);
                    if (!Array.isArray(list) || list.length === 0) {
                        resultsBox.textContent = '❌ 没有找到相关视频';
                        return;
                    }
                    resultsBox.textContent = '';

                    // ➤ 按来源分组
                    const localResults = list.filter(item => item.source === 'local');
                    const onlineResults = list.filter(item => item.source !== 'local');

                    // ➤ 渲染分组函数
                    const renderGroup = (titleText, groupList) => {
                        if (groupList.length === 0) return;

                        const titleRow = document.createElement('div');
                        titleRow.textContent = titleText;
                        Object.assign(titleRow.style, {
                            fontWeight: 'bold',
                            marginTop: '10px',
                            marginBottom: '4px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '4px'
                        });
                        resultsBox.appendChild(titleRow);

                        groupList.forEach(item => {
                            const row = document.createElement('div');
                            Object.assign(row.style, {
                                padding: '8px 10px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                background: '#f8f8f8',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px'
                            });
                            row.addEventListener('mouseenter', () => row.style.background = '#e0e0e0');
                            row.addEventListener('mouseleave', () => row.style.background = '#f8f8f8');

                            const titleLine = document.createElement('div');
                            titleLine.textContent = `📺 ${item.title.replace(/<[^>]+>/g, '')}`
                            titleLine.style.fontWeight = '500';

                            const infoLine = document.createElement('div');
                            Object.assign(infoLine.style, {
                                display: 'flex',
                                gap: '12px',
                                fontSize: '12px',
                                color: '#666',
                                flexWrap: 'wrap'
                            });
                            const author = document.createElement('span');
                            author.textContent = `👤 ${item.author || 'UP未知'}`;
                            const play = document.createElement('span');
                            play.textContent = `👁 ${formatCount(item.play)}`;
                            const danmu = document.createElement('span');
                            danmu.textContent = `💬 ${formatCount(item.video_review)}`;
                            const duration = document.createElement('span');
                            if (item.duration) {
                                duration.textContent = `🕒 ${normalizeTimeStr(item.duration)}`;
                            }
                            const link = document.createElement('a');
                            link.href = `https://www.bilibili.com/video/${item.bvid}`;
                            link.textContent = '🔗 打开';
                            link.target = '_blank';
                            Object.assign(link.style, {
                                fontSize: '12px',
                                color: '#1a73e8',
                                textDecoration: 'none'
                            });
                            link.addEventListener('click', e => e.stopPropagation());

                            infoLine.append(author, play, danmu, duration, link);

                            row.onclick = () => cleanup(item);
                            row.appendChild(titleLine);
                            row.appendChild(infoLine);
                            resultsBox.appendChild(row);
                        });
                    };
                    // ➤ 渲染两组
                    renderGroup('📦 本地弹幕：', localResults);
                    renderGroup('🌐 B站视频：', onlineResults);

                } catch (e) {
                    resultsBox.textContent = `❌ 搜索失败：${e.message}`;
                }
            };
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const kw = input.value.trim();
                    if (kw) renderResults(kw);
                }
            });
            panel.append(titleEl, input, resultsBox);
            overlay.appendChild(panel);
            document.body.appendChild(overlay);

            await renderResults(initialKeyword);

            return returnPromise;
        }
        showConfigPanel() {
            const existing = document.getElementById('dm-config-panel');
            if (existing) existing.remove();

            const overlay = this.createStyledEl('overlay');
            overlay.id = 'dm-config-panel';
            overlay.onclick = (e) => {
                if (e.target === overlay) overlay.remove();
            };

            const panel = this.createStyledEl('panel');

            const title = document.createElement('div');
            title.textContent = '⚙️ 设置';
            title.style.fontSize = '18px';
            title.style.fontWeight = 'bold';
            panel.appendChild(title);
            // 标签按钮容器
            const tabButtons = document.createElement('div');
            Object.assign(tabButtons.style, {
                display: 'flex',
                gap: '6px',
                borderBottom: '1px solid #ccc',
                margin: '10px 0'
            });
            panel.appendChild(tabButtons);
            // 页面内容容器
            const tabContent = document.createElement('div');
            tabContent.style.marginBottom = '20px';
            panel.appendChild(tabContent);
            // 标签切换函数
            const tabPages = {};
            const switchTab = (tabName) => {
                for (const [name, page] of Object.entries(tabPages)) {
                    page.style.display = (name === tabName) ? 'flex' : 'none';
                }
                for (const btn of tabButtons.children) {
                    btn.style.fontWeight = (btn.dataset.tab === tabName) ? 'bold' : 'normal';
                    btn.style.borderBottom = (btn.dataset.tab === tabName) ? '2px solid #0077cc' : 'none';
                }
            };
            const createTab = (name, labelText, createContent) => {
                const btn = document.createElement('button');
                btn.textContent = labelText;
                btn.dataset.tab = name;
                Object.assign(btn.style, {
                    background: 'none',
                    border: 'none',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '14px'
                });
                btn.onclick = () => switchTab(name);
                tabButtons.appendChild(btn);

                const page = document.createElement('div');
                page.style.display = 'none';
                page.style.flexDirection = 'column';
                page.style.gap = '6px';
                tabPages[name] = page;
                tabContent.appendChild(page);
                createContent(page);
                return page;
            };

            const createLabeledButtonRow = (labelText, buttonObj) => {
                const row = document.createElement('div');
                row.style.display = 'flex';
                row.style.justifyContent = 'space-between';
                row.style.alignItems = 'center';

                const label = document.createElement('div');
                label.textContent = labelText;
                label.style.fontWeight = 'bold';
                label.style.fontSize = '16px'
                label.style.margin = '10px 0'
                row.appendChild(label);

                if (!buttonObj) return row
                const button = document.createElement('button');
                Object.assign(button, buttonObj);
                Object.assign(button.style, {
                    width: '130px',
                    height: '28px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    background: '#f0f0f0',
                    cursor: 'pointer',
                    flexShrink: '0'
                });
                row.appendChild(button);
                return row;
            };
            const createContralRow = (labelText, key, options, desc) => {
                const keyPath = `settings.${key}`;
                const wrapper = document.createElement('div');
                Object.assign(wrapper.style, {
                    display: 'flex',
                    height: '36px',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '18px'
                });
                const controlRow = document.createElement('div');
                Object.assign(controlRow.style, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                });
                const label = document.createElement('div');
                label.textContent = labelText;
                Object.assign(label.style, {
                    fontWeight: 'bold',
                    flexShrink: '0'
                });
                wrapper.append(label);
                const input = document.createElement('input');
                Object.assign(input, options);
                if (options.type === 'checkbox') {
                    input.checked = dmStore.get(keyPath, this.dmPlayer.options[key].value);
                    Object.assign(input.style, {
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer'
                    });
                    input.onchange = () => {
                        const val = input.checked;
                        dmStore.set(keyPath, val);
                        this.dmPlayerCall('setOptions', val, key);
                        showTip(`✅ 已保存 ${labelText}：${val ? '开启' : '关闭'}`);
                    };
                    controlRow.append(input);
                } else if (options.type === 'number') {
                    input.value = dmStore.get(keyPath, this.dmPlayer.options[key].value);
                    Object.assign(input.style, {
                        width: '60px',
                        height: '20px',
                        padding: '0',
                        textAlign: 'center',
                        fontSize: '14px'
                    });
                    const saveBtn = document.createElement('button');
                    saveBtn.textContent = '💾 保存';
                    Object.assign(saveBtn.style, {
                        width: '80px',
                        height: '28px',
                        fontSize: '14px',
                        cursor: 'pointer'
                    });
                    saveBtn.onclick = () => {
                        const val = Number.isInteger(Number(options.step)) ? parseInt(input.value) : parseFloat(input.value);
                        if (!isNaN(val) && val >= options.min && val <= options.max) {
                            dmStore.set(keyPath, val);
                            this.dmPlayerCall('setOptions', val, key);
                            showTip(`✅ 已保存 ${labelText}：${val}`);
                        } else {
                            showTip('❌ 输入不合法');
                        }
                    };
                    controlRow.append(input, saveBtn);
                }
                wrapper.append(controlRow);
                if (desc) {
                    const descEl = document.createElement('div');
                    descEl.textContent = desc;
                    Object.assign(descEl.style, {
                        fontSize: '12px',
                        color: '#666',
                        marginLeft: 'auto'
                    });
                    wrapper.append(descEl);
                }
                return wrapper;
            };
            const createSelect = (list, getName = n => n) => {
                const select = document.createElement('select');
                list.forEach(n => {
                    const option = document.createElement('option');
                    option.value = String(n);
                    option.textContent = String(getName(n));
                    select.appendChild(option);
                })
                return select;
            };

            createTab('display', '📺 弹幕显示', (page) => {
                page.appendChild(createLabeledButtonRow('📺 弹幕显示设置', {
                    textContent: '👁️ 预览',
                    onmousedown: () => overlay.style.opacity = '0',
                    onmouseup: () => overlay.style.opacity = '1',
                    onmouseleave: () => overlay.style.opacity = '1'
                }));
                page.appendChild(createContralRow(
                    '🌫️ 不透明度',
                    'opacity',
                    { type: 'number', min: 0.1, max: 1.0, step: 0.1 },
                    '设置弹幕透明度（0.1 ~ 1.0）越小越透明'
                ));
                page.appendChild(createContralRow(
                    '📐 显示区域',
                    'displayArea',
                    { type: 'number', min: 0.1, max: 1.0, step: 0.1 },
                    '允许弹幕占屏幕高度范围，1.0 全屏'
                ));
                page.appendChild(createContralRow(
                    '🚀 弹幕速度',
                    'speed',
                    { type: 'number', min: 3, max: 9, step: 1 },
                    '影响弹幕持续时间以及滚动弹幕的速度'
                ));
                page.appendChild(createContralRow(
                    '🔁 合并重复',
                    'mergeRepeats',
                    { type: 'checkbox' },
                    '是否合并内容相同且时间接近的弹幕'
                ));
                page.appendChild(createContralRow(
                    '🔀 允许重叠',
                    'overlap',
                    { type: 'checkbox' },
                    '开启则允许弹幕重叠，否则丢弃会重叠的弹幕'
                ));

                // --- 弹幕阴影设置模块 ---
                let shadowConfig = this.dmPlayer.options?.shadowEffect?.value ||
                    [{ type: 0, offset: 1, radius: 1, repeat: 1 }];
                const shadowHeader = createLabeledButtonRow('🌑 弹幕阴影设置', {
                    textContent: '💾 保存', onclick: () => {
                        dmStore.set('settings.shadowEffect', shadowConfig);
                        this.dmPlayerCall('setOptions', shadowConfig, 'shadowEffect');
                    }
                });
                page.appendChild(shadowHeader);
                // 预设选择
                const presetSelect = createSelect(['重墨', '描边', '45°投影', '自定义']);
                Object.assign(presetSelect.style, {
                    fontSize: '14px',
                    padding: '4px 8px'
                });
                page.appendChild(presetSelect);
                // 默认配置项
                const presets = {
                    '重墨': [{ type: 0, offset: 1, radius: 1, repeat: 1 }],
                    '描边': [{ type: 1, offset: 0, radius: 1, repeat: 3 }],
                    '45°投影': [
                        { type: 1, offset: 0, radius: 1, repeat: 1 },
                        { type: 2, offset: 1, radius: 2, repeat: 1 }
                    ]
                };
                const formArea = document.createElement('div');
                page.appendChild(formArea);

                const addBtn = document.createElement('button');
                addBtn.textContent = '➕ 添加阴影项';
                Object.assign(addBtn.style, {
                    width: '120px',
                    padding: '4px',
                    cursor: 'pointer'
                });
                page.appendChild(addBtn);

                const label = (text) => {
                    const span = document.createElement('span');
                    span.textContent = text;
                    span.style.fontWeight = 'bold';
                    return span;
                };
                const renderConfigItems = (configList) => {
                    formArea.replaceChildren();
                    configList.forEach((cfg, index) => {
                        const row = document.createElement('div');
                        Object.assign(row.style, {
                            display: 'flex',
                            gap: '6px',
                            alignItems: 'center',
                            marginBottom: '4px',
                            border: '1px solid #ccc'
                        });
                        const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

                        const typeSel = createSelect(range(0, 2), n => ['重墨', '描边', '45°投影'][n]);
                        typeSel.value = String(cfg.type);
                        typeSel.onchange = () => configList[index].type = parseInt(typeSel.value);

                        const offsetSel = createSelect(range(-1, 10), n => n === -1 ? '递增' : `${n}px`);
                        offsetSel.value = String(cfg.offset);
                        offsetSel.onchange = () => configList[index].offset = parseInt(offsetSel.value);

                        const radiusSel = createSelect(range(-1, 10), n => n === -1 ? '递增' : `${n}px`);
                        radiusSel.value = String(cfg.radius);
                        radiusSel.onchange = () => configList[index].radius = parseInt(radiusSel.value);

                        const repeatSel = createSelect(range(1, 10));
                        repeatSel.value = String(cfg.repeat || 1);
                        repeatSel.onchange = () => configList[index].repeat = parseInt(repeatSel.value);

                        const del = document.createElement('button');
                        del.textContent = '删除';
                        del.onclick = () => {
                            configList.splice(index, 1);
                            renderConfigItems(configList);
                        };
                        row.append(
                            label('类型:'), typeSel,
                            label('偏移:'), offsetSel,
                            label('半径:'), radiusSel,
                            label('重复:'), repeatSel,
                            del
                        );
                        formArea.appendChild(row);
                    });
                };
                addBtn.onclick = () => {
                    shadowConfig.push({ type: 0, offset: 1, radius: 1, repeat: 1 });
                    renderConfigItems(shadowConfig);
                };
                presetSelect.onchange = () => {
                    const val = presetSelect.value;
                    if (val === '自定义') {
                        renderConfigItems(shadowConfig);
                        addBtn.style.display = '';
                    } else {
                        shadowConfig = JSON.parse(JSON.stringify(presets[val])); // 深拷贝
                        renderConfigItems([]);
                        addBtn.style.display = 'none';
                    }
                };
                // 自动判断并选中 preset
                let matchedPreset = '自定义'; // 默认自定义
                if (Array.isArray(shadowConfig)) {
                    for (const key of Object.keys(presets)) {
                        const preset = presets[key];
                        const same = preset.length === shadowConfig.length &&
                            preset.every((item, i) =>
                                item.type === shadowConfig[i].type &&
                                item.offset === shadowConfig[i].offset &&
                                item.radius === shadowConfig[i].radius &&
                                item.repeat === shadowConfig[i].repeat
                            );
                        if (same) {
                            matchedPreset = key;
                            break;
                        }
                    }
                }
                presetSelect.value = matchedPreset;
                presetSelect.onchange();
            });

            createTab('cache', '📦 缓存管理', (page) => {
                const cacheHeader = createLabeledButtonRow('📦 本地缓存弹幕', {
                    textContent: '🧹 清空所有缓存', onclick: () => {
                        if (confirm('确定要清空所有本地缓存弹幕吗？')) {
                            dmStore.clearAllCache();
                            cacheList.textContent = '📭 所有缓存已清除';
                            showTip('🧹 所有弹幕缓存已清空');
                        }
                    }
                });
                const cacheList = document.createElement('div');
                cacheList.style.display = 'flex';
                cacheList.style.flexDirection = 'column';
                cacheList.style.gap = '8px';
                const cache = dmStore.get('cache', {});
                const keys = Object.keys(cache);
                if (keys.length === 0) {
                    cacheList.textContent = '📭 当前没有缓存弹幕';
                } else {
                    keys.forEach(videoId => {
                        try {
                            const json = cache[videoId];
                            const title = json.videoData?.title;
                            const row = document.createElement('div');
                            row.style.display = 'flex';
                            row.style.justifyContent = 'space-between';
                            row.style.alignItems = 'center';

                            const label = document.createElement('div');

                            const idLine = document.createElement('a');
                            idLine.textContent = `[▶️ ${videoId}]`;
                            if (isBilibili) {
                                idLine.href = videoId.startsWith('ep')
                                    ? `https://www.bilibili.com/bangumi/play/${videoId}`
                                    : `https://www.bilibili.com/video/${videoId}`;
                            } else {
                                idLine.href = `https://www.youtube.com/watch?v=${videoId}`;
                            }
                            idLine.target = '_blank';
                            Object.assign(idLine.style, {
                                fontSize: '13px',
                                color: '#1a73e8',
                                textDecoration: 'none',
                                marginBottom: '2px',
                                whiteSpace: 'nowrap'
                            });
                            const titleLine = document.createElement('div');
                            titleLine.textContent = `${title}`;
                            titleLine.style.fontWeight = '500';

                            label.appendChild(idLine);
                            label.appendChild(titleLine);

                            const delBtn = document.createElement('button');
                            delBtn.textContent = '🗑 删除';
                            delBtn.style.cursor = 'pointer';

                            delBtn.onclick = () => {
                                dmStore.removeCache(videoId);
                                row.remove();
                                showTip(`🗑 已删除缓存：${title}`);
                            };

                            row.appendChild(label);
                            row.appendChild(delBtn);
                            cacheList.appendChild(row);
                        } catch (err) { this.dmPlayer.logTagError(err); }
                    });
                }
                page.appendChild(cacheHeader);
                page.appendChild(cacheList);
            });

            createTab('server', '🌐 服务器设置', (page) => {
                const serverHeader = createLabeledButtonRow('🌐 服务器地址：', {
                    textContent: '💾 保存', onclick: () => {
                        dmStore.set('server', serverInput.value.trim());
                        showTip('✅ 地址已保存');
                    }
                });

                const serverInput = this.createStyledEl('input');
                serverInput.value = dmStore.get('server', '');
                page.appendChild(serverHeader);
                page.appendChild(serverInput);
            });

            if (this.data[this.videoId]?.danmakuData) {
                createTab('alignment', '🎯 视频对齐', (page) => {
                    let alignData = this.data[this.videoId].alignment || [];
                    const parseTimeToMs = (text) => {
                        if (!text.includes(':')) return 0;
                        const [min, sec] = text.trim().split(':');
                        return Math.round((parseInt(min) * 60 + parseFloat(sec)) * 1000);
                    };
                    const formatMsToTime = (ms) => {
                        const min = Math.floor(ms / 60000);
                        const sec = (ms % 60000) / 1000;
                        return `${min}:${sec}`;
                    };
                    const container = document.createElement('div');
                    container.style.display = 'flex';
                    container.style.flexDirection = 'column';
                    container.style.gap = '8px';
                    const render = () => {
                        container.replaceChildren();
                        alignData.forEach((entry, index) => {
                            const row = document.createElement('div');
                            row.style.display = 'flex';
                            row.style.flexDirection = 'column';
                            row.style.border = '1px solid #ccc';
                            row.style.padding = '10px';
                            row.style.gap = '6px';

                            const createRow = (widgets) => {
                                const wrapper = document.createElement('div');
                                wrapper.style.display = 'flex';
                                wrapper.style.alignItems = 'center';
                                wrapper.style.gap = '6px';
                                widgets.forEach(widget => wrapper.appendChild(widget));
                                return wrapper;
                            };
                            const createInput = (placeholder, value, width, onInput) => {
                                const input = document.createElement('input');
                                input.placeholder = placeholder;
                                input.value = value;
                                input.style.width = width + 'px';
                                input.onchange = () => onInput(input.value);
                                return input;
                            };

                            // 源视频输入
                            const sourceStart = createInput('开始时间', formatMsToTime(entry.sourceRange?.start || 0), 80, val => {
                                entry.sourceRange = entry.sourceRange || {};
                                entry.sourceRange.start = parseTimeToMs(val);
                            });
                            const sourceEnd = createInput('结束时间', formatMsToTime(entry.sourceRange?.end || 0), 80, val => {
                                entry.sourceRange = entry.sourceRange || {};
                                entry.sourceRange.end = parseTimeToMs(val);
                            });

                            // 目标视频输入
                            const targetStart = createInput('开始时间', formatMsToTime(entry.targetRange?.start || 0), 80, val => {
                                entry.targetRange = entry.targetRange || {};
                                entry.targetRange.start = parseTimeToMs(val);
                            });
                            const targetEnd = createInput('结束时间', formatMsToTime(entry.targetRange?.end || 0), 80, val => {
                                entry.targetRange = entry.targetRange || {};
                                entry.targetRange.end = parseTimeToMs(val);
                            });

                            const modeSelect = createSelect(['map', 'shift'], opt => opt === 'map' ? '映射' : '顺移');
                            modeSelect.value = entry.mode || 'shift';
                            modeSelect.onchange = () => {
                                entry.mode = modeSelect.value;
                            };

                            const commentInput = createInput('附言', entry.comment || '', 200, val => {
                                entry.comment = val;
                            });

                            const delBtn = document.createElement('button');
                            delBtn.textContent = '🗑 删除';
                            delBtn.style.cursor = 'pointer';
                            delBtn.onclick = () => {
                                alignData.splice(index, 1);
                                render();
                            };

                            const cLabel = (text) => {
                                const label = document.createElement('div');
                                label.textContent = text;
                                return label;
                            }
                            row.appendChild(createRow([cLabel('原视频：'), sourceStart, cLabel('→'), sourceEnd]));
                            row.appendChild(createRow([cLabel('现视频：'), targetStart, cLabel('→'), targetEnd]));
                            row.appendChild(createRow([modeSelect, commentInput, delBtn]));

                            container.appendChild(row);
                        });
                    };

                    const createButton = (text, onclick) => {
                        const Btn = document.createElement('button');
                        Btn.textContent = text;
                        Object.assign(Btn.style, {
                            width: '120px',
                            padding: '4px',
                            cursor: 'pointer'
                        });
                        Btn.onclick = onclick;
                        return Btn;
                    };
                    const buttonRow = document.createElement('div');
                    buttonRow.style.display = 'flex';
                    buttonRow.style.justifyContent = 'space-between';
                    buttonRow.style.alignItems = 'center';
                    buttonRow.style.marginTop = '10px';
                    buttonRow.appendChild(createButton('➕ 添加对齐片段', () => {
                        alignData.push({
                            sourceRange: { start: 0, end: 0 },
                            targetRange: { start: 0, end: 0 },
                            mode: 'shift',
                            comment: ''
                        });
                        render();
                    }));
                    buttonRow.appendChild(createButton('📋 粘贴设置', async () => {
                        try {
                            const text = await navigator.clipboard.readText();
                            const parsed = JSON.parse(text);

                            if (!Array.isArray(parsed)) throw new Error('剪贴板内容不是有效的数组');
                            const isValid = parsed.every(item =>
                                item.sourceRange && item.targetRange && item.mode
                            );
                            if (!isValid) throw new Error('剪贴板内容不是有效的对齐数据');

                            alignData = parsed;
                            render();
                            showTip('📋 成功粘贴对齐设置');
                        } catch (err) {
                            this.dmPlayer.logTagError('❌ 粘贴失败：', err);
                            showTip('❌ 粘贴失败：' + err.message);
                        }
                    }));
                    buttonRow.appendChild(createButton('📋 复制设置', () => {
                        const json = JSON.stringify(alignData, null);
                        navigator.clipboard.writeText(json).then(() => {
                            showTip('✅ 已复制所有对齐设置');
                        }).catch(() => {
                            showTip('❌ 复制失败');
                        });
                    }));
                    buttonRow.appendChild(createButton('💾 保存', () => {
                        const cached = dmStore.getCache(this.videoId);
                        if (cached) {
                            cached.alignment = alignData;
                            dmStore.setCache(this.videoId, cached);
                        }
                        const data = this.data[this.videoId]
                        data.alignment = alignData;
                        this.applyAlignment(data);
                        this.dmPlayer.load(data.danmakuData);
                        showTip('✅ 对齐设置已保存');
                    }));

                    render();

                    const desc = document.createElement('div');
                    Object.assign(desc.style, {
                        fontSize: '13px',
                        lineHeight: '1.6',
                        background: '#f9f9f9',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        marginBottom: '10px'
                    });
                    const addLine = (text, isBold = false, isCode = false) => {
                        const line = document.createElement('div');
                        if (isCode) {
                            const code = document.createElement('code');
                            code.textContent = text;
                            line.appendChild(code);
                        } else {
                            line.textContent = isBold ? `• ${text}` : text;
                            if (isBold) line.style.fontWeight = 'bold';
                        }
                        desc.appendChild(line);
                    };
                    addLine('⚠️ 对齐设置说明：');
                    desc.appendChild(document.createElement('hr'));
                    addLine('当原视频和新视频的时间段不一致（如删减/增加片段）时，可通过设置对齐项同步弹幕。');
                    addLine('映射：将原时间段线性映射到新时间段。', true);
                    addLine('顺移：平移时间，超出新时间段的丢弃。', true);
                    addLine('附言：可插入一条大弹幕提示观众。', true);
                    addLine('时间格式为 分:秒 或 分:秒.毫秒', false);

                    page.appendChild(desc);
                    page.appendChild(container);
                    page.appendChild(buttonRow);
                });
            }

            switchTab('display');
            overlay.appendChild(panel);
            document.body.appendChild(overlay);
        }
        createStyledEl(type) {
            const el = document.createElement(type === 'input' ? 'input' : 'div');
            // 样式模板
            const styles = {
                overlay: {
                    position: 'fixed',
                    top: '0', left: '0', right: '0', bottom: '0',
                    background: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 10001,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                panel: {
                    background: '#fff',
                    width: '500px',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    fontSize: '14px',
                    fontFamily: 'sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                },
                input: {
                    padding: '6px 10px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                    boxSizing: 'border-box'
                }
            };
            if (styles[type]) Object.assign(el.style, styles[type]);
            return el;
        }
    }

    function showTip(message, { dark = true, duration = 3000 } = {}) {
        if (isBilibili) dark = false;
        const tip = document.createElement('div');
        tip.textContent = message;
        Object.assign(tip.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 14px',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            fontSize: '14px',
            zIndex: 9999,
            whiteSpace: 'pre-line',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            background: dark ? 'rgba(50, 50, 50, 0.9)' : '#f0f0f0',
            color: dark ? '#fff' : '#000',
            border: dark ? '1px solid #444' : '1px solid #ccc'
        });

        document.body.appendChild(tip);
        requestAnimationFrame(() => {
            tip.style.opacity = '1';
        });

        setTimeout(() => {
            tip.style.opacity = '0';
            tip.addEventListener('transitionend', () => tip.remove());
        }, duration);
        console.log('[💡tip]', message);
    }
    async function waitForVideo(timeout = 10000) {
        const start = Date.now();
        return new Promise((resolve, reject) => {
            const check = () => {
                const video = document.querySelector('video');
                if (video) {
                    resolve(video);
                } else if (Date.now() - start >= timeout) {
                    reject(new Error('⏰ 超时：未检测到 <video> 元素'));
                } else {
                    requestAnimationFrame(check);
                }
            };
            check();
        });
    }
    function getCurrentVideoId() {
        if (isBilibili) {
            const bvidMatch = location.href.match(/BV[a-zA-Z0-9]+/);
            if (bvidMatch) return bvidMatch[0];
            const epidMatch = location.href.match(/ep(\d+)/);
            if (epidMatch) return 'ep' + epidMatch[1];
        } else {
            return new URLSearchParams(location.search).get('v');
        }
        return null;
    }
    function observeVideoChange() {
        let lastId = '';
        const observer = new MutationObserver(() => {
            const newId = getCurrentVideoId();
            if (newId && newId !== lastId) {
                console.log(`[🎬 检测到视频变化] ${lastId} → ${newId}`);
                lastId = newId;
                if (newId) {
                    dmPanel.init();
                    dmPanel.update(newId);
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    async function searchVideosByKeyword(keyword) {
        const server = dmStore.get('server');
        if (server) {
            try {
                const res = await fetch(`${server}/search?keyword=${encodeURIComponent(keyword)}&type=video`);
                const list = await res.json();
                if (Array.isArray(list)) return list;
            } catch (e) {
                showTip('⚠ 请检查服务器是否正确');
                console.warn('❌ 远程搜索失败:', e);
            }
        }
        try {
            const params = {
                search_type: 'video',
                keyword,
                page: 1
            };
            const res = await client.request({
                url: 'https://api.bilibili.com/x/web-interface/search/type',
                params,
                sign: true,
                desc: `搜索 ${keyword}`
            });
            const list = res.data?.result || [];
            list.forEach(item => item.source = 'bilibili');
            return list;
        } catch (e) {
            console.error('❌ GM搜索失败:', e);
            throw new Error('搜索失败');
        }
    }
    async function getDanmakuDataByBvid(bvid, source = 'bilibili') {
        const server = dmStore.get('server');
        if (server) {
            try {
                const res = await fetch(`${server}/video?bvid=${bvid}&source=${source}`);
                const data = await res.json();
                return data;
            } catch (e) {
                showTip('⚠ 请检查服务器是否正确');
                console.warn('❌ 远程弹幕获取失败:', e);
            }
        }
        try {
            const videoDataRes = await client.request({
                url: 'https://api.bilibili.com/x/web-interface/view',
                params: { bvid },
                desc: `获取视频信息 ${bvid}`
            });
            const videoData = videoDataRes.data
            const cid = videoData.cid;
            const xml = await client.request({
                url: 'https://api.bilibili.com/x/v1/dm/list.so',
                params: { oid: cid },
                responseType: 'text',
                desc: `获取弹幕 XML cid=${cid}`
            });
            const danmakuData = parseDanmakuXml(xml);
            return {
                bvid,
                cid,
                videoData,
                danmakuData,
                fetchtime: Math.floor(Date.now() / 1000)
            };
        } catch (e) {
            console.error('❌ GM弹幕获取失败:', e);
            throw new Error('弹幕获取失败');
        }
    }
    function parseDanmakuXml(xml) {
        const danmakus = [];
        const regex = /<d p="([^"]+)">([^<]*)<\/d>/g;
        let match;
        while ((match = regex.exec(xml)) !== null) {
            const p = match[1].split(",");
            if (p.length < 8) continue;
            danmakus.push({
                progress: Math.trunc(parseFloat(p[0]) * 1000),
                mode: parseInt(p[1]),
                fontsize: parseInt(p[2]),
                color: parseInt(p[3]),
                ctime: parseInt(p[4]),
                pool: parseInt(p[5]),
                midHash: p[6],
                id: p[7],
                idStr: p[7],
                weight: p[8] ? parseInt(p[8]) : 0,
                content: match[2].trim()
            });
        }
        return danmakus;
    }

    const isBilibili = location.hostname.includes('bilibili.com');
    const urlOfPlayer = 'https://cdn.jsdelivr.net/gh/ZBpine/bilibili-danmaku-download@1.5.4/tampermonkey/BiliDanmakuPlayer.js';
    const urlOfClient = 'https://cdn.jsdelivr.net/gh/ZBpine/bilibili-danmaku-download/tampermonkey/BiliClientGM.js';
    const { BiliDanmakuPlayer } = await import(urlOfPlayer);
    const { BiliClientGM } = await import(urlOfClient);
    const dmPanel = new DanmakuControlPanel();
    unsafeWindow.dmPlayer = dmPanel.dmPlayer;
    unsafeWindow.dmVideo = dmPanel.dmPlayer.domAdapter.video;
    const dmStore = {
        key: 'dm-player',
        getConfig() {
            return JSON.parse(localStorage.getItem(this.key) || '{}');
        },
        setConfig(obj) {
            localStorage.setItem(this.key, JSON.stringify(obj));
        },
        get(key, def) {
            const cfg = this.getConfig();
            return key.split('.').reduce((o, k) => (o || {})[k], cfg) ?? def;
        },
        set(key, value) {
            const cfg = this.getConfig();
            const keys = key.split('.');
            let obj = cfg;
            for (let i = 0; i < keys.length - 1; i++) {
                obj[keys[i]] = obj[keys[i]] || {};
                obj = obj[keys[i]];
            }
            obj[keys.at(-1)] = value;
            this.setConfig(cfg);
        },
        removeCache(videoId) {
            const cfg = this.getConfig();
            if (cfg.cache) delete cfg.cache[videoId];
            this.setConfig(cfg);
        },
        getCache(videoId) {
            return this.getConfig().cache?.[videoId];
        },
        setCache(videoId, json) {
            const cfg = this.getConfig();
            cfg.cache = cfg.cache || {};
            cfg.cache[videoId] = json;
            this.setConfig(cfg);
        },
        clearAllCache() {
            const cfg = this.getConfig();
            delete cfg.cache;
            this.setConfig(cfg);
        }
    };

    const client = new BiliClientGM(GM_xmlhttpRequest);
    await client.init();

    /*
    * chromium的浏览器会自动关闭AdblockPlus拦截Youtube的广告
    * 于是AdblockPlus推出了实验性广告拦截
    * 方法是隐藏原本的视频，插入一个可以阻拦广告的iframe视频
    * https://developers.google.com/youtube/iframe_api_reference?hl=zh-tw
    * 以下为解决办法
    */
    function wrapYTPlayer(player) {
        const PlayerState = unsafeWindow.YT?.PlayerState;
        return {
            get currentTime() {
                return player.getCurrentTime?.() ?? player.playerInfo?.currentTime ?? 0;
            },
            set currentTime(val) {
                player.seekTo?.(val, true);
            },
            get duration() {
                return player.getDuration?.() ?? player.playerInfo?.duration ?? 0;
            },
            get playbackRate() {
                return player.getPlaybackRate?.() ?? player.playerInfo?.playbackRate ?? 1;
            },
            set playbackRate(val) {
                player.setPlaybackRate?.(val);
            },
            get paused() {
                return (player.getPlayerState?.() ?? player.playerInfo?.playerState) === PlayerState?.PAUSED;
            },
            get ended() {
                return (player.getPlayerState?.() ?? player.playerInfo?.playerState) === PlayerState?.ENDED;
            },
            get volume() {
                return (player.getVolume?.() ?? player.playerInfo?.volume ?? 100) / 100;
            },
            set volume(val) {
                player.setVolume?.(Math.max(0, Math.min(1, val)) * 100);
            },
            get muted() {
                return player.isMuted?.() ?? player.playerInfo?.muted ?? false;
            },
            set muted(val) {
                if (val) player.mute?.();
                else player.unMute?.();
            },
            play() {
                player.playVideo?.();
            },
            pause() {
                player.pauseVideo?.();
            }
        };
    }
    function transformIframeDOMAdapter(domAdapter) {
        if (!domAdapter) return;
        if (unsafeWindow.iframePlayer) {
            domAdapter.backup ??= {
                getVideoWrapper: domAdapter.getVideoWrapper,
                bindVideoEvent: domAdapter.bindVideoEvent,
                videoGetter: Object.getOwnPropertyDescriptor(DanmakuDOMAdapter.prototype, 'video')
            };
            domAdapter.getVideoWrapper = function () {
                const iframe = document.querySelector('iframe#yt-haven-embed-player');
                return iframe.parentElement;
            }
            domAdapter.bindVideoEvent = function () {
                domAdapter._resizeObserver = new ResizeObserver(() => {
                    domAdapter.player.resize?.();
                });
                const iframe = document.querySelector('iframe#yt-haven-embed-player');
                domAdapter._resizeObserver.observe(iframe);

                if (domAdapter._isIframeBound) return;
                domAdapter._isIframeBound = true;
                unsafeWindow.iframePlayer.addEventListener('onStateChange', (event) => {
                    const state = event.data;
                    const PlayerState = unsafeWindow.YT.PlayerState;
                    console.log('[iframe 播放器] 播放状态改变', Object.keys(PlayerState).find(k => PlayerState[k] === state) || state);
                    if (state === PlayerState.PLAYING) {
                        domAdapter.player.play?.();
                    } else if (state === PlayerState.PAUSED) {
                        domAdapter.player.pause?.();
                    } else if (state === PlayerState.CUED) {
                        domAdapter.player.resize?.();
                    }
                });
            }
            Object.defineProperty(domAdapter, 'video', {
                get() {
                    return wrapYTPlayer(unsafeWindow.iframePlayer);
                },
                configurable: true
            });
        } else {
            if (domAdapter.backup) {
                Object.assign(domAdapter, domAdapter.backup);
                if (domAdapter.backup.videoGetter) {
                    Object.defineProperty(domAdapter, 'video', domAdapter.backup.videoGetter);
                }
            }
            delete domAdapter._isIframeBound;
        }
    }
    function observeIframePlayer() {
        let player = null;
        const setupPlayer = async (iframe) => {
            if (!iframe || typeof unsafeWindow.YT?.Player !== 'function') return;
            if (iframe.dataset.ytBound) return;
            iframe.dataset.ytBound = '1';
            console.log('[iframe 播放器] 尝试绑定');
            player = new unsafeWindow.YT.Player(iframe, {
                events: {
                    onReady: () => {
                        try {
                            unsafeWindow.iframePlayer = player;
                            if (dmPanel.dmPlayer) {
                                transformIframeDOMAdapter(dmPanel.dmPlayer.domAdapter);
                                dmPanel.dmPlayer.init?.();
                                dmPanel.dmPlayer.paused = false;
                            }
                            console.log('[iframe 播放器] 已绑定');
                        } catch (e) {
                            console.error('[iframe 播放器] 绑定失败', e);
                        }
                    }
                }
            });
        };
        const destroyPlayer = () => {
            if (player && typeof player.destroy === 'function') {
                player.destroy();
            }
            unsafeWindow.iframePlayer = null;
            player = null;
            transformIframeDOMAdapter(dmPanel.dmPlayer?.domAdapter);
            dmPanel.dmPlayer?.init?.();
            console.log('[iframe 播放器] 被移除');
        };
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector('iframe#yt-haven-embed-player');
            if (iframe && iframe !== unsafeWindow.iframePlayer?.getIframe()) {
                setupPlayer(iframe);
            } else if (!iframe && unsafeWindow.iframePlayer) {
                destroyPlayer();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // 初始检查
        const existing = document.querySelector('iframe#yt-haven-embed-player');
        if (existing) setupPlayer(existing);
    }
    function loadYouTubeIframeAPI(callback) {
        if (unsafeWindow.YT && typeof unsafeWindow.YT.Player === 'function') {
            callback?.();
            return;
        }
        unsafeWindow.onYouTubeIframeAPIReady = () => {
            if (unsafeWindow.YT && typeof unsafeWindow.YT.Player === 'function') {
                console.log('[YT] Iframe API loaded');
                callback?.();
            } else {
                console.warn('[YT] Iframe API load failure');
            }
        };
        let scriptUrl = 'https://www.youtube.com/iframe_api';
        try {
            // 创建 Trusted Types 策略
            const policy = window.trustedTypes?.createPolicy?.('youtube-api-policy', {
                createScriptURL: (url) => url
            });
            if (policy) {
                scriptUrl = policy.createScriptURL(scriptUrl);
            }
        } catch (e) {
            console.warn('[YT] Trusted Types policy creation failed:', e);
        }
        const tag = document.createElement('script');
        tag.src = scriptUrl;
        tag.id = 'iframe-api-script';
        tag.async = true;
        // 插入 script 标签
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            document.head.appendChild(tag);
        }
    }
    if (!isBilibili) loadYouTubeIframeAPI(() => { observeIframePlayer() });

    try {
        await waitForVideo();
        observeVideoChange();
    } catch (err) {
        console.warn(err);
    }
})();
