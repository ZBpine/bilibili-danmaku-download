import time
import xml.etree.ElementTree as ET
from . import dm_pb2, BilibiliAPI


class DanmakuParser:
    @staticmethod
    def parse_xml(xml_text):
        """
        解析 XML 格式弹幕，返回结构化字典列表
        """
        danmakus = []
        root = ET.fromstring(xml_text)
        for d in root.findall("d"):
            p = d.get("p")
            if not p:
                continue
            parts = p.split(",")
            if len(parts) < 8:
                continue
            danmaku = {
                "progress": int(float(parts[0]) * 1000),
                "mode": int(parts[1]),
                "fontsize": int(parts[2]),
                "color": int(parts[3]),
                "ctime": int(parts[4]),
                "pool": int(parts[5]),
                "midHash": parts[6],
                "id": int(parts[7]),
                "idStr": parts[7],
                "weight": int(parts[8]) if len(parts) > 8 else 0,
                "content": (d.text or "").strip(),
            }
            danmakus.append(danmaku)
        return danmakus

    @staticmethod
    def parse_pb_seg(binary_data):
        """
        解析 Protobuf 分段弹幕（ DmSegMobileReply ）
        """
        reply = dm_pb2.DmSegMobileReply()
        reply.ParseFromString(binary_data)
        return reply

    @staticmethod
    def parse_pb_view(binary_data):
        """
        解析 Protobuf 弹幕元数据（ DmWebViewReply ）
        """
        reply = dm_pb2.DmWebViewReply()
        reply.ParseFromString(binary_data)
        return reply


class Timer:
    def __init__(self):
        self.start = time.perf_counter()
        self.last = self.start
        self.lines = []

    def add(self, desc):
        self.lines.append(f"{desc} | 耗时 {time.perf_counter() - self.last} s")
        self.last = time.perf_counter()

    def echo(self, desc):
        self.lines.append(f"{desc} | 总共耗时 {time.perf_counter() - self.start} s")
        for line in self.lines:
            print(line)


def get_danmaku_full_bak(api: BilibiliAPI, video_info: dict):
    cid = video_info["cid"]
    tracker = Timer()
    danmaku_list = DanmakuParser.parse_xml(api.get_danmaku_xml(cid))
    tracker.add(f"💬 XML实时弹幕 {len(danmaku_list)} 条")
    try:
        avid = video_info["aid"]
        duration = video_info["duration"]
        danmaku_view = DanmakuParser.parse_pb_view(
            api.get_danmaku_pb_view(cid, avid, duration)
        )
        page_size = danmaku_view.dm_sge.page_size / 1000
        seg_count = int(duration / page_size) + 1
        tracker.add(f" ↳ Protobuf 片段数量 {seg_count} 条")

        for seg_index in range(1, seg_count + 1):
            seg_buf = api.get_danmaku_pb_seg(cid, avid, seg_index)
            tracker.add(f" ↳ Protobuf 片段 {seg_index} 长度 {len(seg_buf)} 字节")
            seg_data = DanmakuParser.parse_pb_seg(seg_buf)
            tracker.add(
                f" ↳ Protobuf 片段 {seg_index} 弹幕 {len(seg_data.elems)} 条，{round(len(seg_buf)/len(seg_data.elems),2)}"
            )
            # 平均一条大概 110B ~ 135B
            count = 0
            for elem in seg_data.elems:
                dmid = elem.id
                for d in danmaku_list:
                    if d["id"] == dmid:
                        for f, v in elem.ListFields():
                            d[f.name] = v
                        break
                else:
                    count += 1
                    danmaku_list.append({f.name: v for f, v in elem.ListFields()})
            tracker.add(f" ↳ Protobuf 片段 {seg_index} 新增 {count} 条")
    except Exception as e:
        print(f"[❌ 错误] 下载Protobuf时出错：{type(e).__name__}: {e}")
    tracker.echo(f" ↳ 最终获取弹幕 {len(danmaku_list)} 条")

    return danmaku_list


def get_danmaku_full(api: BilibiliAPI, video_info: dict):
    cid = video_info["cid"]
    tracker = Timer()
    danmaku_list = DanmakuParser.parse_xml(api.get_danmaku_xml(cid))
    tracker.add(f"💬 XML实时弹幕 {len(danmaku_list)} 条")
    try:
        danmaku_dict = {d["id"]: d for d in danmaku_list}
        avid = video_info["aid"]
        duration = video_info["duration"]
        danmaku_view = DanmakuParser.parse_pb_view(
            api.get_danmaku_pb_view(cid, avid, duration)
        )
        page_size = danmaku_view.dm_sge.page_size / 1000
        seg_count = int(duration / page_size) + 1
        tracker.add(f" ↳ Protobuf 片段共 {seg_count} 条")

        for seg_index in range(1, seg_count + 1):
            seg_buf = api.get_danmaku_pb_seg(cid, avid, seg_index)
            seg_data = DanmakuParser.parse_pb_seg(seg_buf)
            count = 0
            for elem in seg_data.elems:
                dmid = elem.id
                if dmid in danmaku_dict:
                    d = danmaku_dict[dmid]
                    for f, v in elem.ListFields():
                        d[f.name] = v
                else:
                    danmaku_dict[dmid] = {f.name: v for f, v in elem.ListFields()}
                    count += 1
            tracker.add(
                f" ↳ Protobuf 片段 {seg_index} 弹幕 {len(seg_data.elems)} 条，新增 {count} 条"
            )
        danmaku_list = list(danmaku_dict.values())
    except Exception as e:
        print(f"[❌ 错误] 下载Protobuf时出错：{type(e).__name__}: {e}")

    tracker.echo(f" ↳ 最终获取弹幕 {len(danmaku_list)} 条")
    return danmaku_list
