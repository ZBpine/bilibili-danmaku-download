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

    let danmakuList = [];
    let isLoaded = false;
    let danmakuEnabled = true;
    let scrollTracks = [];
    let topTracks = [];
    let bottomTracks = [];
    let lastVideoElement = null;
    const LINE_HEIGHT = 30;

    function updateTracksByVideoSize() {
        const player = document.querySelector('.html5-video-player');
        const rect = player?.getBoundingClientRect(); // 获取视频容器大小
        if (!rect) return;
        const height = rect.height;

        const maxTracks = Math.floor(height / LINE_HEIGHT);
        const trackCount = Math.max(3, Math.min(maxTracks, 30)); // 最少 3 条，最多 20 条

        scrollTracks = new Array(trackCount).fill(null);
        topTracks = new Array(Math.floor(trackCount / 3)).fill(null);
        bottomTracks = new Array(Math.floor(trackCount / 3)).fill(null);

        console.log(`轨道分配：滚动 ${scrollTracks.length} 行，顶部 ${topTracks.length}，底部 ${bottomTracks.length}`);
    }
    function getFreeTrack(tracks, dmid) {
        for (let i = 0; i < tracks.length; i++) {
            if (!tracks[i]) {
                tracks[i] = dmid;
                return i;
            }
        }
        return Math.floor(Math.random() * tracks.length); // fallback
    }
    // 创建按钮
    function insertDanmakuControlPanel(onLoadJsonCallback, onToggleCallback) {
        const panel = document.createElement('div');
        panel.style.position = 'fixed';
        panel.style.left = '-110px';
        panel.style.bottom = '40px';
        panel.style.zIndex = '9999';
        panel.style.transition = 'left 0.3s ease-in-out, opacity 0.3s ease';
        panel.style.opacity = '0.2';
        panel.style.display = 'flex';
        panel.style.flexDirection = 'column';
        panel.style.gap = '8px';
        panel.style.background = '#333';
        panel.style.borderRadius = '0px 20px 20px 0px';
        panel.style.padding = '10px';
        panel.style.width = '110px';

        panel.addEventListener('mouseenter', () => {
            panel.style.left = '0px';
            panel.style.opacity = '1';
        });
        panel.addEventListener('mouseleave', () => {
            panel.style.left = '-110px';
            panel.style.opacity = '0.2';
        });
        document.body.appendChild(panel);

        const loadBtn = document.createElement('button');
        loadBtn.textContent = '📂 载入弹幕';
        loadBtn.style.cssText = baseButtonStyle();

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = '✅ 弹幕开';
        toggleBtn.style.cssText = baseButtonStyle();

        panel.appendChild(loadBtn);
        panel.appendChild(toggleBtn);

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);

        let danmakuEnabled = true;

        toggleBtn.onclick = () => {
            danmakuEnabled = !danmakuEnabled;
            toggleBtn.textContent = danmakuEnabled ? '✅ 弹幕开' : '❌ 弹幕关';
            onToggleCallback?.(danmakuEnabled);
            if (!danmakuEnabled) {
                // ✅ 清除所有已有弹幕节点
                Array.from(container.children).forEach(child => child.remove());
            }
        };

        loadBtn.onclick = () => fileInput.click();

        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const json = JSON.parse(e.target.result);
                    onLoadJsonCallback?.(json);
                } catch (err) {
                    alert("❌ 弹幕 JSON 加载失败：" + err.message);
                }
            };
            reader.readAsText(file);
        });
    }
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

    // 弹幕容器
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.overflow = 'hidden';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9998';
    // document.body.appendChild(container);

    function showDanmaku(dm) {
        if (!danmakuEnabled) return;

        const el = document.createElement('div');
        el.textContent = dm.content;

        // 样式设置
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
            const track = getFreeTrack(topTracks, dm.dmid);
            el.style.top = `${track * LINE_HEIGHT + 5}px`;
            el.style.left = '50%';
            el.style.transform = 'translateX(-50%)';
            container.appendChild(el);
            setTimeout(() => {
                if (topTracks[track] === dm.dmid) {
                    topTracks[track] = null;
                }
                el.remove();
            }, 6000);
        } else if (dm.mode === 4) {
            // 底部弹幕
            const track = getFreeTrack(bottomTracks, dm.dmid);
            el.style.bottom = `${track * LINE_HEIGHT + 5}px`;
            el.style.left = '50%';
            el.style.transform = 'translateX(-50%)';
            container.appendChild(el);
            setTimeout(() => {
                if (bottomTracks[track] === dm.dmid) {
                    bottomTracks[track] = null;
                }
                el.remove();
            }, 6000);
        } else {
            // 滚动弹幕
            const track = getFreeTrack(scrollTracks, dm.dmid);
            el.style.top = `${track * LINE_HEIGHT}px`;
            el.style.left = '100%';
            el.style.transition = 'transform 6s linear';
            container.appendChild(el);

            // 启动滚动动画
            requestAnimationFrame(() => {
                const totalWidth = el.getBoundingClientRect().width;
                el.style.transform = `translateX(-${window.innerWidth + totalWidth}px)`;
            });
            // 释放轨道
            setTimeout(() => {
                if (scrollTracks[track] === dm.dmid) {
                    scrollTracks[track] = null;
                }
                el.remove();
            }, 6500);
        }
    }
    function bindVideoEvents(video) {
        if (!video) return;
        lastVideoElement = video;

        video.addEventListener('seeked', () => {
            danmakuList.forEach(dm => dm._shown = false);
            Array.from(container.children).forEach(child => child.remove());
        });

        video.addEventListener('loadedmetadata', () => {
            updateTracksByVideoSize();
        });
        console.log('[🎯 绑定 video 事件]');
    }
    setInterval(() => {
        if (!isLoaded) return;
        if (!danmakuEnabled) return;
        const video = document.querySelector('video');
        if (video !== lastVideoElement) {
            bindVideoEvents(video); // 重新绑定事件
        }
        if (!video || video.paused) return;

        const now = video.currentTime * 1000;
        const windowSize = 300;

        for (const dm of danmakuList) {
            if (!dm._shown && Math.abs(dm.progress - now) <= windowSize) {
                showDanmaku(dm);
                dm._shown = true;
            }
        }
    }, 200);

    insertDanmakuControlPanel(
        (data) => {
            // ✅ 当用户载入 json 文件
            danmakuList = data.danmakuData || [];
            danmakuList.forEach(dm => delete dm._shown); // 清空标记

            const player = document.querySelector('.html5-video-player');
            player.style.position = 'relative'; // 确保 relative 定位
            player.appendChild(container);

            updateTracksByVideoSize();
            window.addEventListener('resize', updateTracksByVideoSize);
            bindVideoEvents(document.querySelector('video'));

            isLoaded = true;
            alert(`🎉 已载入弹幕：${danmakuList.length} 条`);
        },
        (enabled) => {
            // ✅ 弹幕开关回调
            danmakuEnabled = enabled;
        }
    );
    // 弹幕动画
    const style = document.createElement('style');
    style.textContent = `
    @keyframes move {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }`;
    document.head.appendChild(style);
})();
