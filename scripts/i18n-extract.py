#!/usr/bin/env python3
"""Vytáhne z www/index.html všechny texty z markupu (textové uzly + překládané
atributy), přesně tak, jak je za běhu uvidí applyStaticI18n() v index.html.
Klíč = text s normalizovanými mezerami. Slouží ke kontrole, jestli slovník
v www/i18n-en.js pokrývá všechno — po změně textů spustit znovu:

    python3 scripts/i18n-extract.py            # vypíše chybějící překlady
    python3 scripts/i18n-extract.py --all      # vypíše všechny nalezené klíče
"""
import json, re, sys, unicodedata
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "www" / "index.html"
EN = ROOT / "www" / "i18n-en.js"

ATTRS = ("placeholder", "aria-label", "title", "alt")
SKIP_TAGS = {"script", "style", "svg", "path", "circle", "rect", "line", "polygon", "ellipse"}


def norm(s):
    s = s.replace(" ", " ")
    return re.sub(r"\s+", " ", s).strip()


class Extract(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.found = []

    def handle_starttag(self, tag, attrs):
        if tag not in ("br", "img", "input", "meta", "link", "hr"):
            self.stack.append(tag)
        for k, v in attrs:
            if k in ATTRS and v and norm(v):
                self.found.append(norm(v))

    def handle_startendtag(self, tag, attrs):
        for k, v in attrs:
            if k in ATTRS and v and norm(v):
                self.found.append(norm(v))

    def handle_endtag(self, tag):
        while self.stack:
            if self.stack.pop() == tag:
                break

    def handle_data(self, data):
        if any(t in SKIP_TAGS for t in self.stack):
            return
        t = norm(data)
        if t:
            self.found.append(t)


html = SRC.read_text(encoding="utf-8")
body = html[html.index("<body>"):]
p = Extract()
p.feed(body)

seen, keys = set(), []
for k in p.found:
    if k not in seen:
        seen.add(k)
        keys.append(k)

if "--all" in sys.argv:
    print(json.dumps(keys, ensure_ascii=False, indent=2))
    sys.exit(0)

have = set()
if EN.exists():
    src = EN.read_text(encoding="utf-8")
    have = set(json.loads(m) for m in re.findall(r'"(?:[^"\\]|\\.)*"', src))

# klíč bez jediného písmene (emoji, „?", číslo) runtime nepřekládá
def has_letter(k):
    return any(unicodedata.category(c).startswith("L") for c in k)

keys = [k for k in keys if has_letter(k)]
missing = [k for k in keys if k not in have]
print(f"{len(keys)} textů v markupu, {len(missing)} bez překladu")
for k in missing:
    print("  " + k)
