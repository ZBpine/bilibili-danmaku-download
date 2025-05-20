# gui_main.py
from PySide2.QtWidgets import QApplication
from gui_app import MainWindow
import sys

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())
