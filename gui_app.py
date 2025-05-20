import os
import sys
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
)
from PySide2.QtCore import Qt, QTimer, QObject, Signal
from downloader import download_bilibili


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


class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        os.makedirs("config", exist_ok=True)
        os.makedirs("downloads", exist_ok=True)
        self.setWindowTitle("Bilibili 弹幕下载器")
        self.resize(800, 800)

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

        self.log_browser = QTextBrowser()

        layout.addWidget(self.tabs)
        layout.addWidget(QLabel("📋 日志输出:"))
        layout.addWidget(self.log_browser)
        self.setLayout(layout)

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
        self.days_input.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        days_layout.addWidget(QLabel("下载UP主"))
        days_layout.addWidget(self.days_input)
        days_layout.addWidget(QLabel("天内视频弹幕"))
        # 休眠时间
        sleep_layout = QHBoxLayout()
        sleep_layout.setAlignment(Qt.AlignLeft)
        self.sleep_min_input = QLineEdit("10")
        self.sleep_min_input.setFixedWidth(50)
        self.sleep_min_input.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        self.sleep_max_input = QLineEdit("30")
        self.sleep_max_input.setFixedWidth(50)
        self.sleep_max_input.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        sleep_layout.addWidget(QLabel("每视频间休眠"))
        sleep_layout.addWidget(self.sleep_min_input)
        sleep_layout.addWidget(QLabel("~"))
        sleep_layout.addWidget(self.sleep_max_input)
        sleep_layout.addWidget(QLabel("秒（避免B站风控）"))

        param_form.addWidget(self.save_xml_checkbox)
        param_form.addLayout(days_layout)
        param_form.addLayout(sleep_layout)

        param_box.setLayout(param_form)
        right_layout.addWidget(param_box)

        self.download_button = QPushButton("开始下载")
        self.download_button.clicked.connect(self.run_downloader_thread)
        self.auto_checkbox = QCheckBox("⏱️ 每小时自动下载")
        self.auto_checkbox.stateChanged.connect(self.toggle_auto_download)

        main_layout.addLayout(left_layout)
        main_layout.addLayout(right_layout)
        layout.addLayout(main_layout)
        layout.addWidget(self.download_button)
        layout.addWidget(self.auto_checkbox)

        tab.setLayout(layout)
        return tab

    def build_server_tab(self):
        tab = QWidget()
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignTop)

        port_layout = QHBoxLayout()
        port_layout.addWidget(QLabel("端口："))
        self.port_input = QLineEdit("13245")
        self.port_input.textChanged.connect(self.update_server_url)
        port_layout.addWidget(self.port_input)

        url_layout = QHBoxLayout()
        self.url_display = QLineEdit()
        self.url_display.setReadOnly(True)
        self.url_display.setText(f"http://127.0.0.1:{self.port_input.text()}")
        copy_btn = QPushButton("📋 复制")
        copy_btn.clicked.connect(self.copy_server_url)
        url_layout.addWidget(QLabel("服务器地址："))
        url_layout.addWidget(self.url_display)
        url_layout.addWidget(copy_btn)

        self.server_button = QPushButton("运行服务器")
        self.server_button.clicked.connect(self.run_server_thread)

        # 脚本说明 + 链接
        tips_label = QLabel(
            '🧩 配合前端 <a href="https://greasyfork.org/zh-CN/scripts/536159-youtube-b%E7%AB%99%E5%BC%B9%E5%B9%95%E6%92%AD%E6%94%BE%E5%99%A8">油猴脚本</a> 使用，实现油管YouTube上看B站弹幕的功能。'
        )
        tips_label.setOpenExternalLinks(True)  # 允许点击打开链接
        tips_label.setWordWrap(True)  # 自动换行

        layout.addLayout(port_layout)
        layout.addLayout(url_layout)
        layout.addWidget(self.server_button)
        layout.addWidget(tips_label)

        tab.setLayout(layout)
        return tab

    def build_cookie_tab(self):
        tab = QWidget()
        layout = QHBoxLayout()
        left_layout = QVBoxLayout()

        tips = QLabel(
            "<b>Cookie 说明：</b><br><br>"
            "• <b>下载弹幕</b>：<br>"
            "  - 可设置也可以不设置 Cookie。<br>"
            "  - 如果设置了已登录的 Cookie，可下载额外信息，如 UP 主信息、AI 总结等（非必要数据）。<br>"
            "  - 如果使用未登录 Cookie 或未设置 Cookie，也能下载弹幕。<br><br>"
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
        right_layout.addWidget(QLabel("请粘贴你的 Bilibili Cookie:"))
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
        except Exception as e:
            print(f"[ERROR] 保存失败 {path}: {e}")

    def toggle_auto_download(self, state):
        if state == Qt.Checked:
            self.download_timer.start(60 * 60 * 1000)  # 每小时
            self.download_button.setText("自动下载中...")
            self.download_button.setEnabled(False)
            self.run_downloader_thread()  # 马上运行一次
        else:
            self.download_timer.stop()
            self.download_button.setText("开始下载")
            self.download_button.setEnabled(True)

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

        def task():
            self.server_button.setEnabled(False)
            self._server_started = True
            try:
                from server import create_app

                app = create_app(
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
