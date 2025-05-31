// ==UserScript==
// @name         YouTube B站弹幕播放器
// @namespace    https://github.com/ZBpine/bilibili-danmaku-download/
// @version      1.4.2
// @description  加载本地 B站弹幕 JSON文件，在 YouTube 视频上显示
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

    // 结果选择界面
    class DanmakuControlPanel {
        constructor() {
            this.panelId = 'dm-panel';
            this.dmPlayer = new BiliDanmakuPlayer();
            this.videoId = null;
        }
        dmPlayerCall(methodName, ...args) {
            if (this.dmPlayer && typeof this.dmPlayer[methodName] === 'function') {
                return this.dmPlayer[methodName](...args);
            }
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
            this.dmPlayerCall('setOpacity', dmStore.get('settings.opacity', 1));
            this.dmPlayerCall('setDisplayArea', dmStore.get('settings.displayArea', 1));

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
            if (isBilibili) {
                panel.style.background = '#ccc';
            }
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
            this.bindHotkey();
        }
        bindHotkey() {
            if (this.hotkeyBound) return;
            this.hotkeyBound = true;

            document.addEventListener('keydown', (e) => {
                const target = e.target;
                const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
                if (isTyping) return;

                if (e.key.toLowerCase() === 'd') {
                    if (this.toggleBtn) {
                        this.toggleBtn.click();
                        // showTip(`弹幕已${this.dmPlayer.danmakuEnabled ? '开启' : '关闭'}（快捷键 D）`);
                    }
                }
            });
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
                dmStore.setCache(this.videoId, json);
                showTip('✅ 已保存到本地');
                this.setClear();
            };
        }
        setClear() {
            this.loadBtn.textContent = '🗑️ 释放存储';
            this.loadBtn.onclick = () => {
                dmStore.removeCache(this.videoId);
                showTip('🗑️ 已移除本地存储');
                this.setLoad();
            };
        }
        update(videoId) {
            if (!videoId) return;
            this.dmPlayer.logTag(`当前视频：${videoId}`);
            this.videoId = videoId;
            const fileInput = this.fileInput;
            this.dmPlayerCall('clear');

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
            const saved = dmStore.getCache(videoId);
            if (saved) {
                try {
                    this.dmPlayer.init();
                    this.dmPlayer.load(saved.danmakuData);
                    this.loadDanmakuSuccess(saved);
                    showTip(`📦 自动载入本地弹幕`);
                    this.setClear();
                } catch {
                    showTip('❌ 本地弹幕解析失败：' + err.message);
                    this.dmPlayer.logTagError('❌ 本地弹幕解析失败：', err);
                    dmStore.removeCache(videoId);
                    this.setLoad();
                }
            } else {
                this.setLoad();
            }
        }
        async onSearch() {
            try {
                const selected = await this.showSearchSelector();
                if (!selected) return;

                const data = await getDanmakuDataByBvid(selected.bvid, selected.source);
                this.dmPlayer.init();
                this.dmPlayer.load(data.danmakuData);

                this.loadDanmakuSuccess(data);
                this.setSave(data);
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
            const server = dmStore.get('server');
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
                row.appendChild(label);
                if (!buttonText && !onClick) return row

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
                row.appendChild(button);
                return row;
            }
            function createSliderRow(labelText, keyPath, min, max, step, onChange) {
                const wrapper = document.createElement('div');
                Object.assign(wrapper.style, {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                });
                const label = document.createElement('div');
                label.textContent = labelText;
                label.style.fontWeight = 'bold';
                label.style.width = '100px';

                const btnDec = document.createElement('button');
                btnDec.textContent = '➖';
                const btnInc = document.createElement('button');
                btnInc.textContent = '➕';
                [btnDec, btnInc].forEach(btn => {
                    Object.assign(btn.style, {
                        width: '32px',
                        height: '28px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        padding: '0 2px'
                    });
                });
                const input = document.createElement('input');
                input.type = 'number';
                input.step = step;
                input.min = min;
                input.max = max;
                input.value = dmStore.get(keyPath, 1);
                Object.assign(input.style, {
                    width: '60px',
                    textAlign: 'center',
                    fontSize: '14px'
                });
                const saveBtn = document.createElement('button');
                saveBtn.textContent = '💾 保存';
                Object.assign(saveBtn.style, {
                    height: '28px',
                    fontSize: '14px',
                    cursor: 'pointer'
                });
                const apply = () => {
                    const val = parseFloat(input.value);
                    if (!isNaN(val) && val >= min && val <= max) {
                        dmStore.set(keyPath, val);
                        onChange(val);
                        showTip(`✅ 已保存 ${labelText}：${val}`);
                    } else {
                        showTip('❌ 输入不合法');
                    }
                };
                btnDec.onclick = () => {
                    let val = parseFloat(input.value);
                    if (val > min) input.value = (val - step).toFixed(1);
                };
                btnInc.onclick = () => {
                    let val = parseFloat(input.value);
                    if (val < max) input.value = (val + step).toFixed(1);
                };
                saveBtn.onclick = apply;

                wrapper.append(label, btnDec, input, btnInc, saveBtn);
                return wrapper;
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
                dmStore.set('server', serverInput.value.trim());
                showTip('✅ 地址已保存');
            });

            const serverInput = this.createStyledEl('input');
            serverInput.value = dmStore.get('server', '');

            serverSection.appendChild(serverHeader);
            serverSection.appendChild(serverInput);
            panel.appendChild(serverSection);

            // --- 弹幕显示设置模块 ---
            const settingSection = document.createElement('div');
            Object.assign(settingSection.style, SectionStyle);
            settingSection.appendChild(createLabeledButtonRow('📺 弹幕显示设置'))
            settingSection.appendChild(createSliderRow(
                '🌫️ 不透明度',
                'settings.opacity',
                0.1, 1.0, 0.1,
                val => this.dmPlayerCall('setOpacity', val)
            ));
            settingSection.appendChild(createSliderRow(
                '📐 显示区域',
                'settings.displayArea',
                0.1, 1.0, 0.1,
                val => this.dmPlayerCall('setDisplayArea', val)
            ));
            panel.appendChild(settingSection);

            // --- 缓存管理模块 ---
            const cacheSection = document.createElement('div');
            Object.assign(cacheSection.style, SectionStyle);

            const cacheHeader = createLabeledButtonRow('📦 本地缓存弹幕', '🧹 清空所有缓存', () => {
                if (confirm('确定要清空所有本地缓存弹幕吗？')) {
                    dmStore.clearAllCache();
                    cacheList.textContent = '📭 所有缓存已清除';
                    showTip('🧹 所有弹幕缓存已清空');
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
            cacheSection.appendChild(cacheHeader);
            cacheSection.appendChild(cacheList);
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
        let lastId = getCurrentVideoId();
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

    const isBilibili = location.hostname.includes('bilibili.com');
    const urlOfPlayer = 'https://cdn.jsdelivr.net/gh/ZBpine/bilibili-danmaku-download/tampermonkey/BiliDanmakuPlayer.js';
    const urlOfClient = 'https://cdn.jsdelivr.net/gh/ZBpine/bilibili-danmaku-download/tampermonkey/BiliClientGM.js';
    const { BiliDanmakuPlayer } = await import(urlOfPlayer);
    const { BiliClientGM } = await import(urlOfClient);
    const dmPanel = new DanmakuControlPanel();
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
                progress: Math.round(parseFloat(p[0]) * 1000),
                mode: parseInt(p[1]),
                fontsize: parseInt(p[2]),
                color: parseInt(p[3]),
                ctime: parseInt(p[4]),
                pool: parseInt(p[5]),
                midHash: p[6],
                id: p[7],
                weight: p[8] ? parseInt(p[8]) : 0,
                content: match[2].trim()
            });
        }
        return danmakus;
    }

    /*
    * chromium的浏览器会自动关闭AdblockPlus拦截Youtube的广告
    * 于是AdblockPlus推出了实验性广告拦截
    * 方法是隐藏原本的视频，插入一个可以阻拦广告的iframe视频
    * 以下为解决办法
    */
    function transformIframeDOMAdapter(domAdapter) {
        if (!domAdapter) return;
        if (unsafeWindow.iframePlayer) {
            domAdapter.backup ??= {
                getPlayingState: domAdapter.getPlayingState,
                getVideoWrapper: domAdapter.getVideoWrapper
            };
            domAdapter.getPlayingState = function () {
                const player = unsafeWindow.iframePlayer;
                const state = typeof player.getPlayerState === 'function'
                    ? player.getPlayerState()
                    : player.playerInfo?.playerState ?? 3;
                const currentTime = typeof player.getCurrentTime === 'function'
                    ? player.getCurrentTime()
                    : player.playerInfo?.currentTime ?? 0;
                if (domAdapter.lastTime) {
                    const delta = Math.abs(currentTime - domAdapter.lastTime);
                    if (delta > 1) {
                        domAdapter.callbacks.onSeek?.();
                    }
                }
                domAdapter.lastTime = currentTime;
                return {
                    paused: state == 2,
                    currentTime
                };
            }
            domAdapter.getVideoWrapper = function () {
                const iframe = document.querySelector('iframe#yt-haven-embed-player');
                return iframe.parentElement;
            }
        } else {
            if (domAdapter.backup) {
                domAdapter.getPlayingState = domAdapter.backup.getPlayingState;
                domAdapter.getVideoWrapper = domAdapter.backup.getVideoWrapper;
            }
        }
    }
    function observeIframePlayer() {
        let player = null;
        const setupPlayer = async (iframe) => {
            if (!iframe || typeof unsafeWindow.YT?.Player !== 'function') return;
            if (iframe.dataset.ytBound) return;
            iframe.dataset.ytBound = '1';
            player = new unsafeWindow.YT.Player(iframe, {
                events: {
                    onReady: () => {
                        console.log('[Danmaku] 已绑定 iframe 播放器');
                        unsafeWindow.iframePlayer = player;
                        transformIframeDOMAdapter(dmPanel.dmPlayer?.domAdapter);
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
        };
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector('iframe#yt-haven-embed-player');
            if (iframe && iframe !== unsafeWindow.iframePlayer?.getIframe()) {
                setupPlayer(iframe);
            } else if (!iframe && unsafeWindow.iframePlayer) {
                console.log('[Danmaku] iframe 被移除，清理播放器');
                destroyPlayer();
                transformIframeDOMAdapter(dmPanel.dmPlayer?.domAdapter);
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
        // 等待 API 就绪
        unsafeWindow.onYouTubeIframeAPIReady = () => {
            console.log('[YT] Iframe API loaded');
            callback?.();
        };
    }
    if (!isBilibili) loadYouTubeIframeAPI(() => { observeIframePlayer() });

    try {
        observeVideoChange();
        await waitForVideo();
        const videoId = getCurrentVideoId();
        if (videoId) {
            dmPanel.init();
            dmPanel.update(videoId);
        } else {
            console.log('[Danmaku] 非视频播放页，未获取到 videoId');
        }
    } catch (err) {
        console.warn(err);
    }
})();
