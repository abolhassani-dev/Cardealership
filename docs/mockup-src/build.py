#!/usr/bin/env python3
import base64, pathlib, sys

B = pathlib.Path(__file__).parent
OUT = B.parent

font = base64.b64encode((B.parent/'fonts'/'V-var.woff2').read_bytes()).decode()
FONT_CSS = ("@font-face{font-family:Vazirmatn;font-style:normal;font-weight:100 900;"
            "font-display:swap;src:url(data:font/woff2;base64,%s) format('woff2-variations');}" % font)

css  = (B/'ds.css').read_text(encoding='utf-8')
core = (B/'core.js').read_text(encoding='utf-8')
data = (B/'data.js').read_text(encoding='utf-8')

TARGETS = {'dealer.html':'mockup-desktop.html','admin.html':'mockup-admin.html','mobile.html':'mockup.html'}

for src, dst in TARGETS.items():
    p = B/src
    if not p.exists():
        print('skip', src); continue
    h = p.read_text(encoding='utf-8')
    h = h.replace('/*__FONT__*/', FONT_CSS).replace('/*__CSS__*/', css)
    h = h.replace('/*__JS_CORE__*/', core).replace('/*__JS_DATA__*/', data)
    (OUT/dst).write_text(h, encoding='utf-8')
    print(f'{dst}: {len(h)//1024} KB')
