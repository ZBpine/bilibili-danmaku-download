// ==UserScript==
// @name         YouTube 本地B站弹幕播放器
// @namespace    https://github.com/ZBpine/bilibili-danmaku-download/
// @version      1.2.0
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
            this.configBtn.onclick = () => {
                const addr = prompt('请输入服务器地址', localStorage.getItem('dm-server') || 'http://127.0.0.1:13245');
                if (addr) {
                    localStorage.setItem('dm-server', addr);
                    showTip('✅ 地址已保存');
                }
            };

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

                const data = await fetch(`${server}/video?bvid=${selected.bvid}`).then(r => r.json());
                this.dmPlayer.init();
                this.dmPlayer.load(data.danmakuData);

                this.loadDanmakuSuccess(data);
                this.setSave(data);
            } catch (err) {
                showTip(`❌ 请求失败：${err.message}`);
                dmPlayer.logTagError('❌ 请求失败：', e, data);
            }
        }
        async showSearchSelector(initialKeyword) {
            const server = localStorage.getItem('dm-server');
            let resolveFn;
            const returnPromise = new Promise((resolve) => {
                resolveFn = resolve;
            });
            const overlay = document.createElement('div');
            Object.assign(overlay.style, {
                position: 'fixed',
                top: '0', left: '0', right: '0', bottom: '0',
                background: 'rgba(0,0,0,0.3)',
                zIndex: 9999
            });

            const panel = document.createElement('div');
            Object.assign(panel.style, {
                background: '#fff',
                color: '#000',
                width: '500px',
                maxHeight: '80vh',
                overflowY: 'auto',
                margin: '10vh auto',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                fontSize: '14px',
                fontFamily: 'sans-serif',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            });

            const titleEl = document.createElement('div');
            titleEl.textContent = '选择一个视频以载入弹幕：';
            titleEl.style.fontWeight = 'bold';
            titleEl.style.fontSize = '16px';

            const input = document.createElement('input');
            input.type = 'text';
            input.value = initialKeyword;
            Object.assign(input.style, {
                padding: '6px 10px',
                fontSize: '14px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%'
            });

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
                    list.forEach(item => {
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
                        titleLine.textContent = `📺 ${item.title.replace(/<[^>]+>/g, '')}`;
                        titleLine.style.fontWeight = '500';
                        row.appendChild(titleLine);

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
                        const link = document.createElement('a');
                        link.href = `https://www.bilibili.com/video/${item.bvid}`;
                        link.textContent = '🔗 打开';
                        link.target = '_blank';
                        Object.assign(link.style, {
                            fontSize: '12px',
                            color: '#1a73e8',
                            textDecoration: 'none'
                        });
                        link.addEventListener('click', e => e.stopPropagation()); // 防止触发选择

                        infoLine.append(author, play, danmu, link);
                        row.appendChild(infoLine);

                        row.onclick = () => cleanup(item);
                        resultsBox.appendChild(row);
                    });
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
