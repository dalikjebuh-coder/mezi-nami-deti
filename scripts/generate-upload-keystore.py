#!/usr/bin/env python3
"""Vygeneruje Android upload keystore (PKCS12) bez nutnosti mit Javu/keytool.

Pouziva openssl. Vystup:
  android/keystore/upload-keystore.p12       — keystore (gitignored)
  android/keystore/upload-keystore.p12.b64   — base64 pro GitHub secret (gitignored)
  android/keystore/keystore.properties       — heslo + alias (gitignored)

Klic je RSA 4096, platnost 30 let (Google Play vyzaduje minimalne do r. 2033).
Pri Play App Signing je tohle jen UPLOAD klic — pri ztrate jde vymenit
pres Play Console, presto ho zalohujte mimo tento pocitac.
"""

import secrets
import string
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KEYSTORE_DIR = ROOT / "android" / "keystore"
P12 = KEYSTORE_DIR / "upload-keystore.p12"
ALIAS = "upload"


def run(cmd: list[str], **kw) -> subprocess.CompletedProcess:
    res = subprocess.run(cmd, capture_output=True, text=True, **kw)
    if res.returncode != 0:
        sys.exit(f"Prikaz selhal: {' '.join(cmd[:3])}…\n{res.stderr}")
    return res


def main() -> None:
    if P12.exists():
        sys.exit(f"{P12} uz existuje — nemazat, nemenit. Novy klic jen po domluve.")
    KEYSTORE_DIR.mkdir(parents=True, exist_ok=True)

    alphabet = string.ascii_letters + string.digits
    password = "".join(secrets.choice(alphabet) for _ in range(24))

    key_pem = KEYSTORE_DIR / "upload-key.pem"
    cert_pem = KEYSTORE_DIR / "upload-cert.pem"

    run([
        "openssl", "req", "-x509", "-newkey", "rsa:4096", "-sha256",
        "-days", "10958", "-nodes",
        "-keyout", str(key_pem), "-out", str(cert_pem),
        "-subj", "/CN=Mezi nami upload key/O=Dalibor Novak/C=CZ",
    ])
    # heslo jde pres stdin (fd 0), ne pres argument — neni videt v ps
    run([
        "openssl", "pkcs12", "-export",
        "-inkey", str(key_pem), "-in", str(cert_pem),
        "-name", ALIAS, "-out", str(P12), "-passout", "stdin",
    ], input=password + "\n")
    key_pem.unlink()  # soukromy klic zije uz jen v keystore

    fingerprint = run([
        "openssl", "x509", "-in", str(cert_pem), "-noout",
        "-fingerprint", "-sha256", "-enddate",
    ]).stdout.strip()

    (KEYSTORE_DIR / "keystore.properties").write_text(
        f"storeFile=upload-keystore.p12\n"
        f"storeType=PKCS12\n"
        f"keyAlias={ALIAS}\n"
        f"storePassword={password}\n"
        f"keyPassword={password}\n"
        f"# {fingerprint}\n",
        encoding="utf-8",
    )

    b64 = subprocess.run(
        ["base64", "-i", str(P12)], capture_output=True, text=True, check=True
    ).stdout.replace("\n", "")
    (KEYSTORE_DIR / "upload-keystore.p12.b64").write_text(b64, encoding="utf-8")

    print(f"Hotovo: {P12}")
    print(fingerprint)
    print("Heslo a alias: android/keystore/keystore.properties")
    print("Base64 pro GitHub secret: android/keystore/upload-keystore.p12.b64")


if __name__ == "__main__":
    main()
