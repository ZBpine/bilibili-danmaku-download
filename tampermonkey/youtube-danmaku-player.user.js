// ==UserScript==
// @name         YouTube 本地B站弹幕播放器
// @namespace    https://github.com/ZBpine/bilibili-danmaku-download/
// @version      1.0.0
// @description  加载本地 B站弹幕 JSON文件，在 YouTube 视频上显示
// @author       ZBpine
// @match        https://www.youtube.com/watch*
// @grant        none
// @license      MIT
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    class BiliDanmakuPlayer {
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
            const player = document.querySelector('.html5-video-player');
            player.style.position = 'relative'; // 确保 relative 定位
            player.appendChild(this.container);

            this.updateTracks();
            window.addEventListener('resize', () => this.updateTracks());
            this.bindVideo(document.querySelector('video'));

            this.observe();
            this.injectAnimationStyle();
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
            const player = document.querySelector('.html5-video-player');
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
            return Math.floor(Math.random() * tracks.length);
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
                }, 6000);
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
                }, 6000);
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

                // 释放轨道
                setTimeout(() => {
                    if (this.scrollTracks[track] === dm.dmid) this.scrollTracks[track] = null;
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
            setInterval(() => {
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
    }

    // 创建按钮
    function insertPlayerButton() {
        function baseButtonStyle() {
            return `
                padding: 6px 10px;
                background: #555;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                width: 100px;
            `;
        }

        const panel = document.createElement('div');
        Object.assign(panel.style, {
            position: 'fixed',
            left: '-110px',
            bottom: '40px',
            zIndex: '9999',
            transition: 'left 0.3s ease-in-out, opacity 0.3s ease',
            opacity: '0.2',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            background: '#333',
            borderRadius: '0px 20px 20px 0px',
            padding: '10px',
            width: '110px'
        });
        panel.addEventListener('mouseenter', () => {
            panel.style.left = '0px';
            panel.style.opacity = '1';
        });
        panel.addEventListener('mouseleave', () => {
            panel.style.left = '-110px';
            panel.style.opacity = '0.2';
        });

        const loadBtn = document.createElement('button');
        loadBtn.textContent = '📂 载入弹幕';
        loadBtn.style.cssText = baseButtonStyle();

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = '✅ 弹幕开';
        toggleBtn.style.cssText = baseButtonStyle();

        panel.appendChild(loadBtn);
        panel.appendChild(toggleBtn);
        document.body.appendChild(panel);

        toggleBtn.onclick = () => {
            dmPlayer.toggle();
            toggleBtn.textContent = dmPlayer.danmakuEnabled ? '✅ 弹幕开' : '❌ 弹幕关';
        };

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        loadBtn.onclick = () => fileInput.click();
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const json = JSON.parse(e.target.result);
                    // ✅ 当用户载入 json 文件
                    dmPlayer.init();
                    dmPlayer.load(json.danmakuData);

                    const count = json.danmakuData.length;
                    const title = json.videoData?.title || '（未知标题）';
                    const readableTime = json.fetchtime ?
                        new Date(json.fetchtime * 1000).toLocaleString('zh-CN', { hour12: false }) : '（未知）';
                    dmPlayer.logTag(`🎉 已载入：\n🎬 ${title}\n💬 共 ${count} 条弹幕\n🕒 抓取时间：${readableTime}`);
                    alert(`🎉 已载入：\n🎬 ${title}\n💬 共 ${count} 条弹幕\n🕒 抓取时间：${readableTime}`);
                } catch (err) {
                    dmPlayer.logTagError('❌ 弹幕 JSON 加载失败', err);
                    alert('❌ 弹幕 JSON 加载失败：' + err.message);
                }
            };
            reader.readAsText(file);
        });
    }

    const dmPlayer = new BiliDanmakuPlayer();
    insertPlayerButton();
})();
