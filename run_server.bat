@echo off
REM 设置 Anaconda 的安装路径 (根据你的实际安装路径修改)
set anaconda_home=D:\Program\code\anaconda

REM 检查 activate.bat 是否存在
if not exist "%anaconda_home%\Scripts\activate.bat" (
    echo 错误: 找不到 activate.bat。请检查你的 Anaconda 安装路径。
    pause
    exit /b 1
)

REM 激活 conda 环境
call "%anaconda_home%\Scripts\activate.bat" bilibili_crawler

REM 切换到工作目录 (如果需要)
cd /d "D:\Song\tools\bilibili-danmaku-download"

REM 运行你的 Python 脚本
python ./bilibili_crawler/server.py

echo 脚本已完成。
pause