# Kde jsme skončili (15. 8. 2026)

## Stav

- **Web:** https://dalikjebuh-coder.github.io/mezi-nami-deti/ — verze **1.9**, aktuální
- **iOS:** verze **1.9, build 19** odeslána do App Review
- **Android:** platforma přidána, podepsaný AAB přes CI připraven — čeká na
  Google Play Developer účet a první ruční nahrání (viz sekce Android níže)
- Repo: `~/mezi-nami-deti`, branch `main` — Android změny commitnuté lokálně,
  **zatím nepushnuté**

## Android (přidáno 15. 8. 2026)

- `@capacitor/android` 8.5 + `android/` platforma; web assety se kopírují přes
  `npx cap sync android` (CI si je dělá samo, stejně jako iOS)
- **Release = tag `android-vN`** (nebo ručně workflow_dispatch) →
  `.github/workflows/android-play.yml` na ubuntu runneru postaví podepsaný AAB
  a vystaví ho jako artefakt **mezi-nami-aab**; do Play Console se nahrává ručně
- `versionCode` = `GITHUB_RUN_NUMBER` (vlastní řada, nezávislá na iOS);
  `versionName "1.9"` ručně v `android/app/build.gradle` — zvedat spolu
  s `MARKETING_VERSION` (iOS) a `APP_VERSION` (web)
- **Upload keystore:** `android/keystore/upload-keystore.p12` (PKCS12, openssl,
  bez Javy) — složka je **gitignored, existuje jen na tomhle Macu → zálohovat!**
  Heslo v `android/keystore/keystore.properties`, base64 pro GitHub secret
  v `upload-keystore.p12.b64`. Regenerace: `scripts/generate-upload-keystore.py`
  (odmítne přepsat existující).
- **GitHub secrets k nastavení:** `ANDROID_KEYSTORE_B64`, `ANDROID_KEYSTORE_PASSWORD`
- Ikony/splash vygenerované z iOS podkladů (`assets/` + `npx @capacitor/assets
  generate --android`); adaptivní ikona, monochromatická notifikační ikona
  `ic_stat_mezinami`, splash pro Android 12+ (krémové pozadí v `styles.xml`)
- Notifikace: plugin si sám řeší POST_NOTIFICATIONS (13+), obnovu po restartu
  i fallback na nepřesné alarmy (14+) — beze změn v kódu appky
- Status bar: `SystemBars.style = "LIGHT"` v capacitor.config.json (Android-only
  volba, iOS neovlivní); edge-to-edge řeší Capacitor 8.5 sám přes
  `env(safe-area-inset-*)`, které appka už používá
- **Play metadata a návod:** `app-store/google-play/metadata-cs.md` — texty
  (title/short/full), Data safety („No data collected“), content rating,
  cílovka **18+** (ne Families — stejná logika jako „ne Kids Category“ na iOS),
  účet a proces vydání. Grafika v `app-store/google-play/graphics/` (gitignored):
  icon 512, feature graphic 1024×500, 7 screenshotů 1620×2880 (9:16, z iOS sady)
- **Pozor:** osobní Play účet založený po 11/2023 musí před produkcí projít
  closed testingem — 12 testerů po 14 dní (+ 25 USD registrace)

## Co zbývá k publikaci (vše v App Store Connect, pod Apple účtem)

1. Ověřit dostupnost názvu „Mezi námi: rodiče a děti" (záložní varianty v `app-store/metadata-cs.md`)
2. Vytvořit záznam aplikace, nahrát screenshoty z `app-store/screenshots-6.9/`, vložit texty z `metadata-cs.md`
3. App Privacy dotazník → **Data Not Collected**
4. Věkové hodnocení (dotazník, očekávaně 4+), kategorie **Education**, **ne** Kids Category
   (vyžadovala by rodičovskou bránu před `tel:` odkazy na Linku bezpečí)
5. Support URL: `…/podpora.html` · Privacy URL: `…/soukromi.html`
6. Vybrat build 19 a odeslat k recenzi

**Doporučeno předtím:** projít 1.9 na telefonu — je to první build bez ladicích položek
a s iPhone-only nastavením.

## Jak se pracuje s projektem

- Appka je **jeden soubor** `www/index.html` (bez závislostí), stránky `podpora.html`, `soukromi.html`
- Po každé změně obsahu **zvednout `CACHE` v `www/sw.js`** (konvence repa)
- Push do `main` → GitHub Pages nasadí web ~za 15 s
- iOS release = tag **`ios-vN`** (poslední `ios-v17`); číslo buildu si CI bere z `GITHUB_RUN_NUMBER`,
  ručně se nezvedá. `MARKETING_VERSION` v pbxproj + `APP_VERSION` v index.html + `package.json` ano.
- CI si `www/` kopíruje samo (`npx cap sync ios`) — Xcode lokálně netřeba (a není nainstalovaný)
- Testování v prohlížeči: `cd www && python3 -m http.server PORT`, pak **vždy s cache-busterem**
  (`?v=2`), jinak servíruje starou verzi z SW/HTTP cache

## Poslední úpravy v 1.9

- Vějíř karet: 168 × 235 px, úhel ±15°, překryv 30 % (strop — nad ním se schová „?"),
  prostřední karta povytažená (`--raise: -23px`), přesah 12 px za okraj, vzdušná mezera nad kartami
- Losování: jeden plynulý pohyb z vějíře do velké karty (FLIP + dvojník), karta má 1 mm tloušťku
- Výběr hloubky bez potvrzovacího tlačítka; závěr povídání jen s „Zpět na témata"
- Oznámení: sekce v nastavení se jmenuje **Oznámení** a je vidět vždy; nabídka vyjede jako
  bottom sheet po návratu na témata (jen v nativní appce, jednou za instalaci).
  **Ověřeno na telefonu, že fungují** (12 naplánovaných, doručení potvrzeno)
- iPhone only, `PrivacyInfo.xcprivacy`, stránka podpory

## Nezavřené věci

- Návrh **nového onboardingu** (v2) leží netrackovaný v `research/onboarding-v2.html`
  — do produkce z něj nešlo nic, texty jsou schválené. Rozhodnutí: notifikace **ne**
  do onboardingu, ale po prvním povídání (už implementováno).
- Nikdy neproběhl test na skutečném malém telefonu (SE) — jen měřením v prohlížeči
