import xml.etree.ElementTree as ET


def parse_danmaku_xml(xml_text):
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
            "dmid": parts[7],
            "weight": int(parts[8]) if len(parts) > 8 else 0,
            "content": (d.text or "").strip(),
        }
        danmakus.append(danmaku)
    return danmakus
