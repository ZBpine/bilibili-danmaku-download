@echo off
REM ���� Anaconda �İ�װ·�� (�������ʵ�ʰ�װ·���޸�)
set anaconda_home=D:\Program\code\anaconda

REM ��� activate.bat �Ƿ����
if not exist "%anaconda_home%\Scripts\activate.bat" (
    echo ����: �Ҳ��� activate.bat��������� Anaconda ��װ·����
    pause
    exit /b 1
)

REM ���� conda ����
call "%anaconda_home%\Scripts\activate.bat" bilibili_crawler

REM �л�������Ŀ¼ (�����Ҫ)
cd /d "D:\Song\tools\bilibili-danmaku-download"

REM ������� Python �ű�
python ./bilibili_crawler/server.py

echo �ű�����ɡ�
pause