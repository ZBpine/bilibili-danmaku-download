import os
import sys
import json
import threading
from PySide2.QtWidgets import (
    QWidget,
    QTabWidget,
    QVBoxLayout,
    QPushButton,
    QTextEdit,
    QLabel,
    QLineEdit,
    QGroupBox,
    QTextBrowser,
    QHBoxLayout,
    QCheckBox,
    QSizePolicy,
    QApplication,
    QSystemTrayIcon,
    QMenu,
    QAction,
)
from PySide2.QtCore import Qt, QTimer, QObject, Signal
from PySide2.QtGui import QIcon
from downloader import download_bilibili
from server import create_server_app
import resources_rc


class LogEmitter(QObject):
    log_signal = Signal(str)


class Stream:
    def __init__(self, emit_func):
        self.emit_func = emit_func  # 用于把日志传给界面

    def write(self, msg):
        try:
            if isinstance(msg, bytes):
                msg = msg.decode("utf-8", errors="ignore")  # 把 bytes 转成 str
            msg = str(msg).strip()
            if msg:
                self.emit_func(msg)
        except Exception as e:
            sys.__stdout__.write(f"[StreamError] 写入日志失败: {e}\n")

    def flush(self):
        pass  # 什么都不用做


class SettingsManager:
    def __init__(self, path="config/settings.json"):
        self.path = path
        os.makedirs(os.path.dirname(path), exist_ok=True)
        self.data = {}
        self.load()

    def load(self):
        try:
            with open(self.path, "r", encoding="utf-8") as f:
                self.data = json.load(f)
        except:
            self.data = {}

    def save(self):
        with open(self.path, "w", encoding="utf-8") as f:
            json.dump(self.data, f, indent=4, ensure_ascii=False)

    def get(self, key, default=None):
        return self.data.get(key, default)

    def set(self, key, value):
        self.data[key] = value
        self.save()


class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowIcon(QIcon(":/images/bilibili.ico"))
        os.makedirs("config", exist_ok=True)
        os.makedirs("downloads", exist_ok=True)
        self.setWindowTitle("Bilibili 弹幕下载器")
        self.resize(800, 800)

        self.settings = SettingsManager()

        self.log_emitter = LogEmitter()
        self.log_emitter.log_signal.connect(self.append_log)
        sys.stdout = Stream(self.log_emitter.log_signal.emit)
        sys.stderr = Stream(self.log_emitter.log_signal.emit)

        self.download_timer = QTimer(self)
        self.download_timer.timeout.connect(self.run_downloader_thread)
        self._downloading = False

        layout = QVBoxLayout()
        self.tabs = QTabWidget()

        self.tabs.addTab(self.build_download_tab(), "📥 下载管理")
        self.tabs.addTab(self.build_server_tab(), "🌐 服务器")
        self.tabs.addTab(self.build_cookie_tab(), "🍪 Cookie 配置")
        self.tabs.addTab(self.build_structure_tab(), "📂 下载记录")
        # 设置上次打开的标签页
        last_index = self.settings.get("last_tab_index", 0)
        if 0 <= last_index < self.tabs.count():
            self.tabs.setCurrentIndex(last_index)
        self.tabs.currentChanged.connect(self.save_current_tab_index)

        layout.addWidget(self.tabs)
        layout.addLayout(self.build_footer_layout())
        self.setLayout(layout)
        self.create_tray_icon()

    def build_download_tab(self):
        tab = QWidget()
        layout = QVBoxLayout()

        main_layout = QHBoxLayout()
        # -------- 左侧：UP主列表 --------
        left_layout = QVBoxLayout()
        self.up_editor = QTextEdit()
        up_path = "config/up_list.txt"
        if os.path.exists(up_path):
            with open(up_path, "r", encoding="utf-8") as f:
                self.up_editor.setPlainText(f.read())

        save_btn = QPushButton("保存 UP 主列表")
        save_btn.clicked.connect(
            lambda: self.save_file("config/up_list.txt", self.up_editor.toPlainText())
        )

        left_layout.addWidget(QLabel("UP 主列表（每行一个 mid）:"))
        left_layout.addWidget(self.up_editor)
        left_layout.addWidget(save_btn)

        # -------- 右侧：参数配置与控制 --------
        right_layout = QVBoxLayout()

        param_box = QGroupBox("参数设置")
        param_form = QVBoxLayout()
        param_form.setAlignment(Qt.AlignTop)
        self.save_xml_checkbox = QCheckBox("保存原始 XML 弹幕")
        self.save_xml_checkbox.setChecked(True)

        # 下载天数
        days_layout = QHBoxLayout()
        days_layout.setAlignment(Qt.AlignLeft)
        self.days_input = QLineEdit("10")
        self.days_input.setFixedWidth(50)
        self.days_input.setAlignment(Qt.AlignCenter)
        self.days_input.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        days_layout.addWidget(QLabel("下载UP主"))
        days_layout.addWidget(self.days_input)
        days_layout.addWidget(QLabel("天内视频弹幕"))
        # 休眠时间
        sleep_layout = QHBoxLayout()
        sleep_layout.setAlignment(Qt.AlignLeft)
        self.sleep_min_input = QLineEdit("10")
        self.sleep_min_input.setFixedWidth(50)
        self.sleep_min_input.setAlignment(Qt.AlignCenter)
        self.sleep_min_input.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        self.sleep_max_input = QLineEdit("30")
        self.sleep_max_input.setFixedWidth(50)
        self.sleep_max_input.setAlignment(Qt.AlignCenter)
        self.sleep_max_input.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        sleep_layout.addWidget(QLabel("每视频间休眠"))
        sleep_layout.addWidget(self.sleep_min_input)
        sleep_layout.addWidget(QLabel("~"))
        sleep_layout.addWidget(self.sleep_max_input)
        sleep_layout.addWidget(QLabel("秒（避免B站风控）"))

        download_settings = self.settings.get("download_settings", {})
        self.save_xml_checkbox.setChecked(download_settings.get("save_xml", True))
        self.days_input.setText(str(download_settings.get("lookback_days", 10)))
        self.sleep_min_input.setText(str(download_settings.get("sleep_min", 10)))
        self.sleep_max_input.setText(str(download_settings.get("sleep_max", 30)))

        param_form.addWidget(self.save_xml_checkbox)
        param_form.addLayout(days_layout)
        param_form.addLayout(sleep_layout)

        param_box.setLayout(param_form)
        right_layout.addWidget(param_box)
        main_layout.addLayout(left_layout, 2)
        main_layout.addLayout(right_layout, 3)

        down_layout = QHBoxLayout()

        self.download_button = QPushButton("开始下载")
        self.download_button.clicked.connect(self.on_download_button_clicked)

        auto_layout = QHBoxLayout()
        self.auto_checkbox = QCheckBox("⏱️ 每隔")
        self.auto_checkbox.stateChanged.connect(self.toggle_auto_download)
        self.auto_checkbox.setChecked(self.settings.get("auto_download_enabled", False))
        self.auto_interval_input = QLineEdit()
        self.auto_interval_input.setFixedWidth(50)
        self.auto_interval_input.setAlignment(Qt.AlignCenter)
        self.auto_interval_input.setText(
            str(self.settings.get("auto_download_interval_hours", 1))
        )
        self.auto_interval_input.setToolTip("单位：小时")
        self.auto_interval_input.editingFinished.connect(self.save_auto_interval)
        auto_label = QLabel("小时自动下载")
        auto_label.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Fixed)
        auto_layout.addWidget(self.auto_checkbox)
        auto_layout.addWidget(self.auto_interval_input)
        auto_layout.addWidget(auto_label)

        down_layout.addWidget(self.download_button, 2)
        down_layout.addLayout(auto_layout, 3)

        layout.addLayout(main_layout)
        layout.addLayout(down_layout)

        tab.setLayout(layout)
        return tab

    def build_server_tab(self):
        tab = QWidget()
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignTop)

        port_layout = QHBoxLayout()
        port_layout.addWidget(QLabel("端口："))
        self.port_input = QLineEdit("13245")
        self.port_input.setFixedWidth(100)
        self.port_input.textChanged.connect(self.update_server_url)
        self.server_button = QPushButton("运行服务器")
        self.server_button.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Fixed)
        self.server_button.clicked.connect(self.run_server_thread)
        port_layout.addWidget(self.port_input)
        port_layout.addWidget(self.server_button)

        url_layout = QHBoxLayout()
        self.url_display = QLineEdit()
        self.url_display.setReadOnly(True)
        self.url_display.setText(f"http://127.0.0.1:{self.port_input.text()}")
        copy_btn = QPushButton("📋 复制")
        copy_btn.clicked.connect(self.copy_server_url)
        url_layout.addWidget(QLabel("服务器地址："))
        url_layout.addWidget(self.url_display)
        url_layout.addWidget(copy_btn)

        # 脚本说明 + 链接
        tips_label = QLabel(
            '🧩 配合前端 <a href="https://greasyfork.org/zh-CN/scripts/536159-youtube-b站弹幕播放器">油猴脚本</a> 使用，实现油管YouTube上看B站弹幕的功能。'
        )
        tips_label.setOpenExternalLinks(True)  # 允许点击打开链接
        tips_label.setWordWrap(True)  # 自动换行

        layout.addLayout(port_layout)
        layout.addLayout(url_layout)
        layout.addSpacing(20)
        layout.addWidget(tips_label)

        tab.setLayout(layout)
        return tab

    def build_cookie_tab(self):
        tab = QWidget()
        layout = QHBoxLayout()
        left_layout = QVBoxLayout()
        left_layout.setAlignment(Qt.AlignTop)

        tips = QLabel(
            "<b>Cookie 说明：</b><br><br>"
            "• <b>下载弹幕功能</b>：<br>"
            "  - 可设置也可以不设置 Cookie。<br>"
            "  - 如果设置了已登录的 Cookie，可下载额外信息，如 UP 主信息、AI 总结等（非必要数据）。<br>"
            "  - 使用未登录 Cookie 或未设置 Cookie，也能下载弹幕。<br><br>"
            "• <b>服务器功能</b>：<br>"
            "  - 必须设置 Cookie，否则搜索接口无法使用。<br>"
            "  - 已登录或未登录状态的 Cookie 都可以。<br>"
        )
        tips.setWordWrap(True)  # 自动换行

        left_layout.addWidget(tips)
        self.cookie_editor = QTextEdit()
        cookie_path = "config/cookie.txt"
        if os.path.exists(cookie_path):
            with open(cookie_path, "r", encoding="utf-8") as f:
                self.cookie_editor.setPlainText(f.read())

        save_btn = QPushButton("保存 Cookie")
        save_btn.clicked.connect(
            lambda: self.save_file(
                "config/cookie.txt", self.cookie_editor.toPlainText()
            )
        )

        right_layout = QVBoxLayout()
        right_layout.addWidget(QLabel("请粘贴你的 B站 Cookie:"))
        right_layout.addWidget(self.cookie_editor)
        right_layout.addWidget(save_btn)

        layout.addLayout(left_layout, 2)
        layout.addLayout(right_layout, 3)

        tab.setLayout(layout)
        return tab

    def build_structure_tab(self):
        tab = QWidget()
        layout = QVBoxLayout()

        self.structure_viewer = QTextBrowser()
        self.refresh_structure_view()

        refresh_btn = QPushButton("🔄 刷新")
        refresh_btn.clicked.connect(self.refresh_structure_view)

        layout.addWidget(QLabel("当前下载记录："))
        layout.addWidget(self.structure_viewer)
        layout.addWidget(refresh_btn, alignment=Qt.AlignRight)

        tab.setLayout(layout)
        return tab

    def build_footer_layout(self):
        layout = QVBoxLayout()
        header_layout = QHBoxLayout()
        self.log_browser = QTextBrowser()
        self.minimize_on_close_checkbox = QCheckBox("关闭时最小化到托盘")
        self.minimize_on_close_checkbox.setChecked(
            self.settings.get("minimize_on_close", False)
        )
        self.minimize_on_close_checkbox.stateChanged.connect(
            lambda state: self.settings.set("minimize_on_close", state == Qt.Checked)
        )
        header_layout.addWidget(QLabel("📋 日志输出:"))
        header_layout.addStretch()  # 左右拉开
        header_layout.addWidget(self.minimize_on_close_checkbox)
        layout.addLayout(header_layout)
        layout.addWidget(self.log_browser)
        return layout

    def create_tray_icon(self):
        self.tray_icon = QSystemTrayIcon(self)
        self.tray_icon.setIcon(QIcon(":/images/bilibili.ico"))  # 用资源图标
        self.tray_icon.setToolTip("Bilibili 弹幕下载器")

        # 创建菜单
        tray_menu = QMenu()

        show_action = QAction("显示窗口", self)
        show_action.triggered.connect(self.showNormal)
        tray_menu.addAction(show_action)

        quit_action = QAction("退出", self)
        quit_action.triggered.connect(QApplication.quit)
        tray_menu.addAction(quit_action)

        self.tray_icon.setContextMenu(tray_menu)

        self.tray_icon.activated.connect(self.on_tray_activated)
        self.tray_icon.show()

    def on_tray_activated(self, reason):
        if reason == QSystemTrayIcon.Trigger:  # 单击托盘图标
            self.showNormal()
            self.raise_()  # 前置窗口
            self.activateWindow()

    def closeEvent(self, event):
        if self.settings.get("minimize_on_close", False):
            if self.tray_icon.isVisible():
                event.ignore()
                self.hide()
                self.tray_icon.showMessage(
                    "程序仍在运行",
                    "点击托盘图标可重新打开窗口",
                    QSystemTrayIcon.Information,
                    3000,
                )
        else:
            event.accept()

    def save_current_tab_index(self, index):
        self.settings.set("last_tab_index", index)

    def save_auto_interval(self):
        try:
            hours = float(self.auto_interval_input.text())
            if hours <= 0:
                raise ValueError("不能小于等于 0")
            self.settings.set("auto_download_interval_hours", hours)
        except Exception as e:
            print(f"[ERROR] 自动下载间隔无效: {e}")
            self.auto_interval_input.setText("1")  # 恢复默认

    def save_download_settings(self):
        try:
            settings_obj = {
                "save_xml": self.save_xml_checkbox.isChecked(),
                "lookback_days": int(self.days_input.text()),
                "sleep_min": float(self.sleep_min_input.text()),
                "sleep_max": float(self.sleep_max_input.text()),
            }
            self.settings.set("download_settings", settings_obj)
        except Exception as e:
            print(f"[ERROR] 保存下载设置失败: {e}")

    def refresh_structure_view(self):
        structure_path = os.path.join("downloads", "structure.txt")
        if os.path.exists(structure_path):
            with open(structure_path, "r", encoding="utf-8") as f:
                content = f.read()
                self.structure_viewer.setText(content)
        else:
            self.structure_viewer.setText("⚠️ 尚未有下载记录")

    def save_file(self, path, content):
        try:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"📂 已保存 {path}")
        except Exception as e:
            print(f"[ERROR] 保存失败 {path}: {e}")

    def on_download_button_clicked(self):
        self.save_download_settings()
        if self.auto_checkbox.isChecked():
            hours = float(self.auto_interval_input.text())
            self.download_timer.start(60 * 60 * 1000 * hours)
            self.download_button.setText("自动下载中...")
            self.download_button.setEnabled(False)
            self.run_downloader_thread()
        else:
            self.run_downloader_thread()

    def toggle_auto_download(self, state):
        auto_enabled = state == Qt.Checked
        self.settings.set("auto_download_enabled", auto_enabled)
        if auto_enabled:
            if self._downloading:
                hours = float(self.auto_interval_input.text())
                self.download_timer.start(60 * 60 * 1000 * hours)
                self.download_button.setText("自动下载中...")
                self.download_button.setEnabled(False)
                print("⏹️ 已启用自动下载")
        else:
            self.download_timer.stop()
            if self._downloading:
                self.download_button.setText("正在下载...")
            else:
                self.download_button.setEnabled(True)
                self.download_button.setText("开始下载")
            print("⏹️ 自动下载已停止")

    def run_downloader_thread(self):
        if self._downloading:
            print("⚠️ 当前已有下载任务，继续执行。")
            return

        def task():
            self._downloading = True
            if not self.auto_checkbox.isChecked():
                self.download_button.setEnabled(False)
                self.download_button.setText("正在下载...")
            try:
                lookback_days = int(self.days_input.text())
                sleep_min = float(self.sleep_min_input.text())
                sleep_max = float(self.sleep_max_input.text())
                download_bilibili(
                    up_list_path="config/up_list.txt",
                    cookie_path="config/cookie.txt",
                    download_dir="downloads",
                    save_xml=self.save_xml_checkbox.isChecked(),
                    lookback_days=lookback_days,
                    sleep_min=sleep_min,
                    sleep_max=sleep_max,
                )
            except Exception as e:
                print(f"[ERROR] 下载失败: {e}")
            if not self.auto_checkbox.isChecked():
                self.download_button.setEnabled(True)
                self.download_button.setText("开始下载")
            self._downloading = False

        threading.Thread(target=task, daemon=True).start()

    def run_server_thread(self):
        if hasattr(self, "_server_started") and self._server_started:
            print("⚠️ 服务器已在运行中，忽略重复启动。")
            return

        # ✅ 检查 cookie 文件
        cookie_path = "config/cookie.txt"
        if not os.path.exists(cookie_path):
            print("❌ 未找到 Cookie 文件，无法启动服务器。请先设置 Cookie。")
            return
        with open(cookie_path, "r", encoding="utf-8") as f:
            cookie_content = f.read().strip()
            if not cookie_content:
                print("❌ Cookie 文件为空，无法启动服务器。请设置有效的 Cookie。")
                return

        def task():
            self.server_button.setEnabled(False)
            self._server_started = True
            try:
                app = create_server_app(
                    cookie_path="config/cookie.txt", download_dir="downloads"
                )
                app.run(
                    port=int(self.port_input.text()), debug=False, use_reloader=False
                )
            except Exception as e:
                print(f"[ERROR] 启动服务器失败: {e}")
                self.server_button.setEnabled(True)  # ⚠️ 启动失败恢复可点
                self._server_started = False

        threading.Thread(target=task, daemon=True).start()

    def copy_server_url(self):
        url = self.url_display.text()
        QApplication.clipboard().setText(url)
        print(f"✅ 已复制到剪贴板：{url}")

    def update_server_url(self):
        port = self.port_input.text().strip()
        if port.isdigit():
            url = f"http://127.0.0.1:{port}"
        else:
            url = "端口无效"
        self.url_display.setText(url)

    def append_log(self, msg):
        self.log_browser.append(msg)
