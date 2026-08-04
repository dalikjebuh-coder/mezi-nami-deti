# Kde jsme skončili (3. 8. 2026)

## Stav

- **Web:** https://dalikjebuh-coder.github.io/mezi-nami-deti/ — verze **1.9**, aktuální
- **TestFlight:** verze **1.9, build 19** (tag `ios-v17`) — kandidát pro App Store, ještě neproklikaný na telefonu
- Repo: `~/mezi-nami-deti`, branch `main`, čisté

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
