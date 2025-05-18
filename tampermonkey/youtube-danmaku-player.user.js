// ==UserScript==
// @name         YouTube B站弹幕播放器
// @namespace    https://github.com/ZBpine/bilibili-danmaku-download/
// @version      1.2.3
// @description  加载本地 B站弹幕 JSON文件，在 YouTube 视频上显示
// @author       ZBpine
// @match        https://www.youtube.com/watch*
// @grant        none
// @license      MIT
// @run-at       document-end
// ==/UserScript==

(async () => {
    'use strict';
    // 结果选择界面

    class DanmakuControlPanel {
        constructor() {
            this.panelId = 'dm-panel';
            this.dmPlayer = new BiliDanmakuPlayer();
            this.videoId = null;
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
            this.loadBtn = document.createElement('button');
            this.loadBtn.id = 'dm-btn-load';
            Object.assign(this.loadBtn.style, buttonStyle);

            this.searchBtn = document.createElement('button');
            this.searchBtn.textContent = '🔍';
            this.searchBtn.onclick = () => this.onSearch();
            Object.assign(this.searchBtn.style, buttonStyle);

            this.configBtn = document.createElement('button');
            this.configBtn.textContent = '⚙️';
            Object.assign(this.configBtn.style, buttonStyle);
            this.configBtn.onclick = () => this.showConfigPanel();

            this.toggleBtn = document.createElement('button');
            this.toggleBtn.textContent = '✅ 弹幕开';
            Object.assign(this.toggleBtn.style, buttonStyle);
            this.toggleBtn.onclick = () => {
                if (!this.dmPlayer) return;
                this.dmPlayer.toggle();
                this.toggleBtn.textContent = this.dmPlayer.danmakuEnabled ? '✅ 弹幕开' : '❌ 弹幕关';
            };

            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.json';
            fileInput.style.display = 'none';
            fileInput.id = 'dm-input-file';
            this.fileInput = fileInput;
            document.body.appendChild(fileInput);

            const panel = document.createElement('div');
            panel.id = this.panelId;
            Object.assign(panel.style, {
                position: 'fixed',
                left: '-150px',
                bottom: '40px',
                zIndex: '9999',
                transition: 'left 0.3s ease-in-out, opacity 0.3s ease',
                opacity: '0.2',
                background: '#333',
                borderRadius: '0px 20px 20px 0px',
                padding: '10px',
                paddingRight: '20px',
                width: '140px',
                display: 'grid',
                gridTemplateColumns: '36px auto',
                gridAutoRows: '32px',
                gap: '6px'
            });
            panel.addEventListener('mouseenter', () => {
                panel.style.left = '0px';
                panel.style.opacity = '1';
            });
            panel.addEventListener('mouseleave', () => {
                panel.style.left = '-150px';
                panel.style.opacity = '0.2';
            });

            panel.append(this.searchBtn, this.loadBtn, this.configBtn, this.toggleBtn);
            document.body.appendChild(panel);
        }
        loadDanmakuSuccess(json) {
            const count = json.danmakuData.length;
            const title = json.videoData?.title || '（未知标题）';
            const readableTime = json.fetchtime ?
                new Date(json.fetchtime * 1000).toLocaleString('zh-CN', { hour12: false }) : '（未知）';
            this.dmPlayer.logTag(`🎉 成功载入：\n🎬 ${title}\n💬 共 ${count} 条弹幕\n🕒 抓取时间：${readableTime}`);
            showTip(`🎉 成功载入：\n🎬 ${title}\n💬 共 ${count} 条弹幕\n🕒 抓取时间：${readableTime}`);
        }
        setLoad() {
            this.loadBtn.textContent = '📂 载入弹幕';
            this.fileInput.value = '';
            this.loadBtn.onclick = () => this.fileInput.click();
        }
        setSave(json) {
            this.loadBtn.textContent = '💾 存储弹幕';
            this.loadBtn.onclick = () => {
                localStorage.setItem(`dm-save-${this.videoId}`, JSON.stringify(json));
                showTip('✅ 已保存到本地');
                this.setClear();
            };
        }
        setClear() {
            this.loadBtn.textContent = '🗑️ 释放存储';
            this.loadBtn.onclick = () => {
                localStorage.removeItem(`dm-save-${this.videoId}`);
                showTip('🗑️ 已移除本地存储');
                this.setLoad();
            };
        }
        update(videoId) {
            this.videoId = videoId;
            const storageKey = `dm-save-${videoId}`;
            const fileInput = this.fileInput;
            if (typeof this.dmPlayer.clear === 'function')
                this.dmPlayer.clear();

            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const json = JSON.parse(e.target.result);
                        this.dmPlayer.init();
                        this.dmPlayer.load(json.danmakuData);
                        this.loadDanmakuSuccess(json);
                        this.setSave(json);
                    } catch (err) {
                        this.dmPlayer.logTagError('❌ 弹幕 JSON 加载失败', err);
                        showTip('❌ 加载失败：' + err.message);
                    }
                };
                reader.readAsText(file);
            };

            // 检查是否已有存储的弹幕
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    const json = JSON.parse(saved);
                    this.dmPlayer.init();
                    this.dmPlayer.load(json.danmakuData);
                    this.loadDanmakuSuccess(json);
                    showTip(`📦 自动载入本地弹幕`);
                    this.setClear();
                } catch {
                    showTip('❌ 本地弹幕解析失败：' + err.message);
                    this.dmPlayer.logTagError('❌ 本地弹幕解析失败：', err);
                    localStorage.removeItem(storageKey);
                    this.setLoad();
                }
            } else {
                this.setLoad();
            }
        }
        async onSearch(keyword = document.title.replace(' - YouTube', '')) {
            const server = localStorage.getItem('dm-server');
            if (!server) return showTip('请先设置服务器地址');

            try {
                const selected = await this.showSearchSelector(keyword);
                if (!selected) return;

                const source = selected.source || 'bilibili';
                const data = await fetch(`${server}/video?bvid=${selected.bvid}&source=${source}`).then(r => r.json());
                this.dmPlayer.init();
                this.dmPlayer.load(data.danmakuData);

                this.loadDanmakuSuccess(data);
                this.setSave(data);
            } catch (err) {
                showTip(`❌ 请求失败：${err.message}`);
                dmPlayer.logTagError('❌ 请求失败：', err);
            }
        }
        async showSearchSelector(initialKeyword) {
            const server = localStorage.getItem('dm-server');
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
                    const res = await fetch(`${server}/search?keyword=${encodeURIComponent(keyword)}&type=video`);
                    const list = await res.json();
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

            function createLabeledButtonRow(labelText, buttonText, onClick) {
                const row = document.createElement('div');
                row.style.display = 'flex';
                row.style.justifyContent = 'space-between';
                row.style.alignItems = 'center';
                row.style.borderTop = '1px solid #ccc';

                const label = document.createElement('div');
                label.textContent = labelText;
                label.style.fontWeight = 'bold';
                label.style.fontSize = '16px'
                label.style.margin = '10px 0'

                const button = document.createElement('button');
                button.textContent = buttonText;
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
                button.onclick = onClick;

                row.appendChild(label);
                row.appendChild(button);
                return row;
            }
            const SectionStyle = {
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
            }

            // --- 服务器设置模块 ---
            const serverSection = document.createElement('div');
            Object.assign(serverSection.style, SectionStyle);

            const serverHeader = createLabeledButtonRow('🌐 服务器地址：', '💾 保存', () => {
                localStorage.setItem('dm-server', serverInput.value.trim());
                showTip('✅ 地址已保存');
            });

            const serverInput = this.createStyledEl('input');
            serverInput.value = localStorage.getItem('dm-server') || '';

            serverSection.appendChild(serverHeader);
            serverSection.appendChild(serverInput);

            // --- 缓存管理模块 ---
            const cacheSection = document.createElement('div');
            Object.assign(cacheSection.style, SectionStyle);

            const cacheHeader = createLabeledButtonRow('📦 本地缓存弹幕', '🧹 清空所有缓存', () => {
                if (confirm('确定要清空所有本地缓存弹幕吗？')) {
                    keys.forEach(k => localStorage.removeItem(k));
                    cacheList.textContent = '📭 所有缓存已清除';
                    showTip('🧹 所有弹幕缓存已清空');
                }
            });

            const cacheList = document.createElement('div');
            cacheList.style.display = 'flex';
            cacheList.style.flexDirection = 'column';
            cacheList.style.gap = '8px';

            const keys = Object.keys(localStorage).filter(k => k.startsWith('dm-save-'));

            if (keys.length === 0) {
                cacheList.textContent = '📭 当前没有缓存弹幕';
            } else {
                keys.forEach(key => {
                    try {
                        const json = JSON.parse(localStorage.getItem(key));
                        const title = json.videoData?.title || key.replace('dm-save-', '');
                        const row = document.createElement('div');
                        row.style.display = 'flex';
                        row.style.justifyContent = 'space-between';
                        row.style.alignItems = 'center';

                        const label = document.createElement('div');
                        label.textContent = `📁 ${title}`;
                        label.style.flex = '1';

                        const delBtn = document.createElement('button');
                        delBtn.textContent = '🗑 删除';
                        Object.assign(delBtn.style, {
                            cursor: 'pointer'
                        });

                        delBtn.onclick = () => {
                            localStorage.removeItem(key);
                            row.remove();
                            showTip(`🗑 已删除缓存：${title}`);
                        };

                        row.appendChild(label);
                        row.appendChild(delBtn);
                        cacheList.appendChild(row);
                    } catch { }
                });
            }

            cacheSection.appendChild(cacheHeader);
            cacheSection.appendChild(cacheList);

            // Assemble panel
            panel.appendChild(title);
            panel.appendChild(serverSection);
            panel.appendChild(cacheSection);

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
                    zIndex: 9999,
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
    function observeVideoChange() {
        let lastId = new URLSearchParams(location.search).get('v');
        const observer = new MutationObserver(() => {
            const newId = new URLSearchParams(location.search).get('v');
            if (newId && newId !== lastId) {
                console.log(`[🎬 检测到视频变化] ${lastId} → ${newId}`);
                lastId = newId;
                dmPanel.update(newId);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    const urlOfPlayer = 'https://cdn.jsdelivr.net/gh/ZBpine/bilibili-danmaku-download/tampermonkey/BiliDanmakuPlayer.js';
    const { BiliDanmakuPlayer } = await import(urlOfPlayer);
    const dmPanel = new DanmakuControlPanel();
    try {
        await waitForVideo();
        observeVideoChange();
        dmPanel.init();
        dmPanel.update(new URLSearchParams(location.search).get('v'));
    } catch (err) {
        console.warn(err);
    }
})();
