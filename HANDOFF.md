# Kde jsme skončili (27. 8. 2026)

## Stav

- **Web:** https://app.mezi-nami-app.cz/ — verze **1.11**
  (živá od 4. 9. 2026, naposledy aktualizovaná 5. 9. — značka „Otočit kartu“,
  bez gyroskopu, světlý výchozí vzhled)
- **iOS: VYDÁNO** — 1.9 (build 19) schváleno a vydáno, Apple ID **6791562078**,
  https://apps.apple.com/cz/app/id6791562078 · dostupnost **CZ + SK**
- **iOS 1.10:** v TestFlightu — `ios-v18` = build 20, `ios-v19` = build 21 (s angličtinou),
  oba běhy prošly. Jestli se 1.10 poslala do recenze v App Store Connect, z repa nepoznám.
- **iOS 1.11: V TESTFLIGHTU, build 23** — `ios-v21` = build **23**, nahráno
  5. 9. 2026, všech 12 kroků CI prošlo (běh
  https://github.com/dalikjebuh-coder/mezi-nami-deti/actions/runs/33969393033).
  Nahrazuje build 22 (`ios-v20`, 4. 9.) — ten je překonaný, testovat se má 23.
  Texty „Co je nového" a „What to Test" (pro build 23) jsou
  v `app-store/metadata-cs.md`.
  **Do recenze neposláno.** Aby se 1.11 objevila na App Storu, musí se v App
  Store Connect ručně založit verze 1.11, vložit „Co je nového", vybrat build 23
  a odeslat k recenzi — tenhle krok CI neumí a nikdo ho zatím neudělal.
- **Angličtina:** kompletní, živá na webu; do App Storu ještě nešla (viz níže)
- **Android:** **podepsaný AAB hotový** — tag `android-v2`, versionCode 4,
  otisk podpisu ověřen proti keystore (SHA256 9E:0F:29:…:D1:B2:39 ✓).
  Artefakt `mezi-nami-aab` u běhu
  https://github.com/dalikjebuh-coder/mezi-nami-deti/actions/runs/31898565031
  (expiruje 13. 11. 2026 — pak stačí nový tag). Secrets nastavené.
  Čeká se jen na Google Play Developer účet a ruční nahrání.
- Repo: `~/mezi-nami-deti`, branch `main`, čisté a pushnuté

## Verze 1.11 — interakce, animace, večerní režim (4. 9. 2026, WEB ŽIVĚ)

Zapracovaný UI audit z 3. 9. (návrhy 1–14 kromě dvouprstého plácnutí — rodič
s dítětem se dotýkat displeje zároveň nemusí). Commit `51bdfec`, **pushnuto
4. 9. 2026 — web je živý na 1.11**. iOS: otagováno **`ios-v20`** (build 22), jde
do TestFlightu na test. Android čeká na `android-v3` a na Play účet. Vše ověřené v prohlížeči (375×812 i 375×667,
světlý i tmavý režim) a po nasazení i na živé adrese; **na telefonu zatím ne**.

**Co se změnilo v `www/index.html`**
- **Přechody obrazovek mají směr** — `go(id, dir)` odvozuje směr z `SCREEN_DEPTH`
  (dopředu zprava, zpět zleva), stará obrazovka krátce vybledne (`.leaving`,
  absolutně přes rám). Nástup po částech (`rise` stagger, `dealIn` témat) jen při
  prvním vstupu (`.first` přes `visitedScreens`). Průvodce z nastavení předává směr sám.
- **Haptika** — `haptic(kind)` přes `@capacitor/haptics` (pick MEDIUM, flip LIGHT,
  hi5 2× HEAVY, success notifikace); na webu Android `navigator.vibrate`, iOS web nic.
- **Plácnutí** — konfety vystřelí z tlačítka a snášejí se jako papír: `burstFrom()`
  simuluje každý papírek dopředu po 1/60 s (gravitace 950 px/s², strop 2,9 s, odpor vzduchu
  podle natočení a rychlosti — rychlý letí hranou napřed, pomalý brzdí naplocho,
  plachtění do stran svázané s přetáčením) a dráhu přehraje Web Animations API
  (~90 keyframů/papírek, za letu na hlavním vlákně nic neběží). 36 papírků ve
  směsi obdélníčky/čtverečky/proužky, každý má dvě strany (sytá + světlá,
  `backface-visibility`), `#confettiLayer` má `perspective`. Tlačítko odskočí
  (`.hi5`). Původní CSS `confetti()` je pryč. Tlačítko se během oslavy neblokuje
  přes `disabled` (šedlo), ale `pointer-events`. Reduced motion: jen odskok.
- **Nakouknutí karty** — první karta v sezení (a první bleskovka v kategorii) po
  1,6 s klidu jednou pootočí (`schedulePeek`, `.peek`); ruší se klepnutím/odchodem.
- **Značka „Otočit kartu"** (5. 9. 2026, po testování) — nápověda pod kartou byla
  13,5px v `--ink-faint` a **uživatelé při testu rub vůbec nenašli**, takže přišli
  o doptávačky i jemnější znění. Místo `<p class="muted flip-hint">` pod kartou je
  teď `<div class="flip-mark">` **uvnitř** karty u spodního okraje: Lucide ikona
  otočení + „Otočit kartu", medovou barvou jako ozdobná linka a uvozovka. Patří ke
  kartě, ne pod ni. Mezikrok byla plumová pilulka s obrysem pod kartou — příliš
  velká váha, konkurovala tlačítku plácnutí.
  **Značka je jen na líci** (`.question-card.back-side .flip-mark { display: none }`)
  — kdo došel na rub, otáčení už objevil, a rub potřebuje každý řádek pro
  doptávačky; zpátky se jde klepnutím na kartu. Text je proto vždy „Otočit kartu"
  a nemění se, takže odpadl pomocník `setFlipHint()` i klíče o návratu.
  `pointer-events: none`, klepnutí obslouží karta sama. Na tmavém rubu bonusovky
  (`.face-down`) se medová mění na `--cream`.
  Odsazení zdola 22px (na nízkých displejích 16px). Spodní padding karty je 46px
  jen na líci; rub si ho bere zpátky na 34px (nízké displeje 38/26px).
  **Pozor na `height: 18px`** — bez pevné výšky se absolutně pozicovaný potomek
  flex kontejneru roztáhne přes zbylou výšku karty a jeho box koliduje s obsahem.
- **Poznámka k ladění v náhledu:** Browser pane hlásí stránku jako
  `visibilityState: "hidden"`, takže se karta na screenshotech často nevykreslí
  vůbec a 3D animace se brzdí. Rozměry měřené během běžící `flip-in` animace jsou
  pak nesmyslné. Před měřením vždy počkat, až doběhnou `getAnimations()`. Prázdný
  snímek karty dělá i publikovaná verze bez jakékoli změny — není to regrese.
- **Sheety místo `confirm()`** — `askSheet({title,text,ok,cancel,danger})` vrací
  Promise; společný `showSheet/hideSheet/dismissSheet` pro nabídku inspirace i
  potvrzení (`#confirmSheet`). Tažení dolů: podklad průhledne úměrně, švih zavře,
  jinak pružný návrat. Opuštění povídání i reset postupu jdou přes sheet.
- **Večerní režim** — `html[data-theme="dark"]` s teplou tmavou paletou, průhledné
  odvozeniny přes `--ink-rgb/--plum-rgb/--honey-rgb/--card-rgb`, `--cream` pro text
  na plum rubech, `--edge-face` pro boky karty. Volba v Nastavení → Vzhled
  (`mezi-nami-theme`), pořadí **světlý / tmavý / podle telefonu**.
  **Výchozí je světlý, bez ohledu na nastavení telefonu** — appka je papírová
  a kdo chce tmu, řekne si o ni; „podle telefonu" je jen jedna z voleb.
  Skript v `<head>` nastaví atribut před prvním vykreslením (výchozí `light`).
  Jediná výjimka: u **večerních Bleskovek** se appka na chvíli ztlumí
  (`setEveningDim`) i ve světlém režimu a při odchodu se rozsvítí — `isDarkTheme()`
  proto `eveningDim` vyhodnocuje nezávisle na režimu. Stavová lišta přes
  `@capacitor/status-bar` (`setStyle DARK/LIGHT`), `theme-color` meta se přepíná.
- **Domů: chip „Naposledy“** — `state.lastDeck/lastDepth` (localStorage), klepnutí
  = `continueLast()` rovnou do vějíře.
- **Závěr** — prostřední dlaždice ukazuje `talksDone` („povídání celkem“) místo
  věčných „2 odvážlivců“ (u bleskovky zůstávají).
- **Výběr hloubky** — vybraná volba se nadzvedne, ostatní zeslábnou (`.dimmed`),
  pauza 260 ms; `clearDepthPick()` při návratu ze slibů.
- **iPhone SE** — karta `min-height: clamp(360px, 100dvh − 300px, 470px)` +
  `@media (max-height: 700px)` těsnější rub; na 667 px nic nepřetéká (ověřeno).
- **Rub karty** — doptávačky 16,5 px, jemnější znění 15,5 px, bleskovky 17 px.
- **Boky karty (`.card-edge`)** — končí před zaoblením rohů (`--edge-inset`,
  u velké karty = `--radius-lg`), dřív při otáčení přečnívaly jako rovný proužek.
  V klidu se nekreslí (`opacity: 0`) — rovina na hranu se vykreslovala jako
  vlasová linka po stranách; vidět jsou jen během `flip-out/flip-in/joker-in/peek`,
  a `flip-in`/`joker-in` se po dotočení sundávají přes `animationend`
  **i `animationcancel`** — animaci otočení ruší nakouknutí karty a schování
  obrazovky, `animationend` v takovém případě nepřijde a třída by zůstala viset.
  `resetBigCard()` je sundává taky, jako pojistka při dalším losu.
- **Průvodce** — přejetí prstem mezi slidy.
- **Gyroskopický náklon karty ZRUŠEN** (5. 9. 2026) — efekt (±5°) nebyl na
  telefonu prakticky vidět, ale vynucoval si nativní dialog o přístupu
  k pohybovým datům. Špatný obchod, tak šel pryč celý: `gyro`, `enableGyro`,
  `startGyro`, `ensureGyroLoop`, `gyroLoop`, čtyři volání, CSS `.tilt`
  i obalové `<div id="tiltDraw|tiltBlesk">`. Z `ios/App/App/Info.plist` odstraněn
  **`NSMotionUsageDescription`** — appka už o pohybová data nežádá. Geometrie
  karty se odstraněním obalu nezměnila (ověřeno: 323×470 na stejné pozici),
  navíc zmizelo zbytečné `will-change: transform`.
- Drobnosti: `aria-label` „Karta n z N“ na kartách vějíře; karty témat
  těsnější (padding/gap/proužky), ať „Strachy a starosti“ drží na jednom řádku;
  texty bez „hra“ na úvodu, ve 3. slidu průvodce a v nastavení („Povídání“).
- **i18n**: 17 nových EN klíčů + změněné předlohy (úvod, „Povídání“), stale klíče
  confirm() odstraněné; `scripts/i18n-extract.py` → 0 chybějících.
- `sw.js` CACHE **v59**. Verze zvednutá na **1.11** na všech 4 místech
  (`APP_VERSION`, `package.json`, `versionName`, `MARKETING_VERSION`) — iOS
  a Android tak mají verzi připravenou na příští tag.

**Nové pluginy** (`package.json`): `@capacitor/haptics` 8.0.2, `@capacitor/status-bar`
8.0.3. `npx cap sync android` lokálně prošel (4 pluginy) a aktualizoval
`android/capacitor.settings.gradle` + `android/app/capacitor.build.gradle`. iOS
Package.swift si přepíše CI při `cap sync ios` (jako u in-app-review).

**Co ověřit na telefonu**
1. Haptika na všech čtyřech místech (vějíř, otočení, plácnutí, závěr) — v iOS
   simulátoru nejde.
2. Stavová lišta v tmavém režimu (světlé písmo) a při přepnutí zpět.
3. Že se **nikde neptá na pohybová data** — gyroskop je pryč i s deklarací v plistu.
4. Večerní ztmavení u Bleskovek jde plynule (0,45 s) a po návratu na témata se vrátí.
5. Tažení sheetu prstem — práh 90 px nebo švih.

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
  bez Javy) — složka je gitignored; **záloha je na iCloud Drive**
  (`Zalohy/mezi-nami-keystore-2026-08-15/`). Heslo v `android/keystore/
  keystore.properties`, base64 pro GitHub secret v `upload-keystore.p12.b64`.
  Regenerace: `scripts/generate-upload-keystore.py` (odmítne přepsat existující).
- **GitHub secrets:** `ANDROID_KEYSTORE_B64`, `ANDROID_KEYSTORE_PASSWORD`
  — **nastavené 15. 8.** Bez nich by CI stavěl nepodepsaný AAB (jen smoke test).
  Podpis se ověřuje anotací „AAB podpis“ (otisk musí být 9E:0F:29:…:D1:B2:39).
- **CI ověřeno 15. 8.:** podepsaný build `android-v2` prošel (versionCode 4).
  Tag `android-v1` spadl na Groovy pasti ve versionCode (opraveno 9e58197) —
  v1 je spálené. versionCode řada = run number, na Play záleží jen na nahraných.
- **Ladění CI bez přihlášení:** při pádu Gradlu workflow propíše posledních
  150 řádků logu do step summary a anotace (jsou veřejné, na rozdíl od logů).
  Smoke build bez tagu: push do větve `android-ci-debug` (trigger je ve workflow).
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
- **Closed testing — rešerše 31. 8. 2026 (ověřeno proti oficiálním pravidlům):**
  12 testerů s NEPŘERUŠENÝM opt-inem 14 dní, počítá se per tester a per app;
  žádná oficiální výjimka/odvolání neexistuje. Opt-in nestačí — Google při
  žádosti o produkci hodnotí i engagement („insufficient tester engagement" je
  oficiální důvod zamítnutí, ~30–40 % prvních žádostí padá). Playbook:
  15+ testerů (rezerva), instalace přes opt-in odkaz na skutečný telefon,
  otevřít appku několikrát týdně po celých 14 dní, nechat nainstalovanou;
  během okna vydat 1–2 drobné aktualizace do closed tracku a sbírat feedback;
  odpovědi do dotazníku konkrétní (čísla, zmíněné bugy, i negativní feedback).
  Firemní účet je z povinnosti vyňat, ale pro nás nedává smysl (D-U-N-S až
  30 dní, verifikace týdny, veřejná adresa živnosti = domů). Výměnné testerské
  komunity (testerscommunity.com apod.) nejsou zakázané, ale jsou doložená
  zamítnutí pro nízký engagement i jeden ban po placené službě — vlastní lidé
  jsou nejbezpečnější, komunitou max doplnit 2–3 chybějící.

## Hodnocení v obchodě (1.10, přidáno 27. 8. 2026)

- Plugin `@capacitor-community/in-app-review` 8.0 — jedna implementace pro obě
  platformy (iOS `AppStore.requestReview`, Android Play In-App Review)
- **Systémové okno**: `maybeAskReview()` po **3.** a **12.** dokončeném povídání
  (`REVIEW_AFTER_TALKS`), volané z `leaveFinish()`. Nikdy zároveň s nabídkou
  nedělní inspirace — `maybeOfferNotifs()` teď vrací bool a má přednost.
  Nové položky ve stavu: `talksDone`, `reviewAsked` (obojí v localStorage).
  Bleskovky se do `talksDone` nepočítají (zvedá ho jen `finishSession()`).
- **Ruční cesta**: „Ohodnotit aplikaci" v Nastavení → *Napište mi* (jen nativní
  appka). Vede na stránku obchodu, **ne** na systémové okno — Apple si nepřeje
  mít prompt na tlačítku. URL bez země v cestě, ať funguje CZ i SK.
- Ověřeno v prohlížeči se stubem nativního mostu: gating (1–2 nic, 3 → ask,
  5 nic, 12 → ask, dál nic), kolize s notifikačním sheetem, persistence.
  **Na telefonu neověřeno** — systémové okno se v simulaci nedá vyvolat.
- Release notes pro 1.10 jsou v `app-store/metadata-cs.md`

## Co zbývá k vydání 1.10

1. ~~Otagovat `ios-v18`~~ — hotovo 28. 8. (build 20), plus `ios-v19` 30. 8.
   (build 21, s angličtinou). Verze 1.11 to mezitím obsahově přebila.
2. Projít na telefonu (hodnocení po 3. povídání se dá vyzkoušet smazáním appky
   a odehráním tří povídání; iOS okno se ukáže max 3× za rok)
3. V App Store Connect nová verze **1.10**, vložit „Co je nového", vybrat build
4. Android: `android-v3` až po založení Play účtu (viz sekce Android)

## Angličtina — kompletní překlad (28. 8. 2026, PUSHNUTÉ)

Cíl: jedna appka, dva jazyky. Ne druhé Apple ID, ne druhý záznam v obchodě —
k existující appce (6791562078) se v App Store Connect přidá English lokalizace
a rozšíří se dostupnost. Anglický název pracovně **Between Us**.

**Jak je to udělané**
- Čeština zůstává zdrojový jazyk: texty jsou dál natvrdo v `www/index.html`.
  Angličtina je slovník `www/i18n-en.js`, kde **klíčem je česká předloha** —
  žádné umělé kódy typu `welcome.title`, které se časem rozejdou s textem.
- Statické texty v markupu přeloží `applyStaticI18n()` jedním průchodem DOMem
  při startu (všechny obrazovky jsou v DOMu od začátku). Texty skládané v JS
  jdou přes `t("česky", { placeholder })`.
- Balíčky se **registrují samy**: `window.I18N_PACKS.en = { label: "English", … }`.
  Další jazyk = nový `www/i18n-xx.js` + jeden `<script>` v index.html; seznam
  v nastavení i detekce se doplní samy, do UI se nesahá. `label` je název
  jazyka vlastním jazykem — tak se ukáže v seznamu.
- Obsah (`decks`, `bonus`, `blesk`, `weekly`, `onboard`, `pages`, `depth`) se
  nebere po kusech — `pack()` sáhne pro **celou přeloženou sadu**, nebo použije
  českou. Co v balíčku chybí, se v tom jazyce vůbec nenabídne.
- `id` balíčků a **pořadí bonusových karet musí zůstat stejné** jako v češtině —
  drží na nich uložený postup (`seen`) a odkazy z nedělních oznámení.
- Kontrola pokrytí: `python3 scripts/i18n-extract.py` vypíše texty z markupu
  bez protějšku (teď 0 ze 121). Spouštět po každé změně textů.

**Volba jazyka**
- Uložená volba (`mezi-nami-lang`) má vždy přednost.
- Kdo už appku má nainstalovanou (v localStorage existuje `mezi-nami-deti`),
  zůstává **česky** i s anglickým telefonem — nainstaloval si českou appku.
- Jinak se jde `navigator.languages` odshora a bere se **první jazyk, který
  umíme**; `sk` míří na češtinu (Slovákům bližší než angličtina). Netrefí-li
  se nic, angličtina. Ověřeno: en-US→en, sk-SK→cs, de-DE→en, fr-FR,cs-CZ→cs,
  en-GB,cs-CZ→en, ja-JP→en.
- Ručně: Nastavení → Jazyk aplikace → **vlastní podstránka** se seznamem
  (`openLanguagePage()`), aktivní řádek má zaškrtnutí. Přepnutí uloží volbu
  a appku reloadne; jména i postup zůstanou.

**Co je přeložené — kompletní (ověřeno v prohlížeči)**
- celé UI, průvodce, tři sliby, závěr, všech 11 stránek nastavení
- **všech 6 balíčků** × 3 hloubky × 6 otázek = 108 otázek se `soft`
  variantou, doptávačkami a škálovacími otázkami (570 řetězců)
- **všech 50 bleskovek** (16 ranních, 18 odpoledních, 16 večerních)
- 33 bonusových karet, 12 nedělních oznámení
- Automatické kontroly: `scripts/i18n-extract.py` (0 chybějících ze 118),
  parita struktury EN×CS (id, emoji, bg, počty otázek, `temp`, délky `fu`),
  test na české diakritice v celém EN obsahu (projde — zůstává jen
  „Novák" ve jméně autora, což je správně)
- stránka „When it's serious" má **americké linky, ověřené 28. 8. 2026** na
  oficiálních webech: 988 Suicide & Crisis Lifeline (volat i psát, 24/7),
  Crisis Text Line (HOME na 741741), Childhelp 1-800-422-4453 (i text GO),
  **National Parent & Youth Helpline** 1-855-427-2736 a 911.
  POZOR: helpline se dřív jmenoval „National Parent Helpline" a měl provozní
  dobu — dnes je to Parents Anonymous, 24/7, volat/psát/chat. Kdyby se
  dostupnost rozšířila na UK/IE/CA/AU, budou potřeba jejich vlastní čísla —
  jedna „anglická" sada to nepokryje.

**Hotovo pro obchod**
- `CFBundleLocalizations` = cs, en v `ios/App/App/Info.plist` (ověřeno `plutil`)
- `app-store/metadata-en.md` — název, podtitul, klíčová slova, popis,
  „Co je nového", nastavení v ASC. Všechno v limitech znaků.

**Co zbývá — jen věci, které jdou udělat ručně v ASC / na telefonu**
1. Anglické screenshoty pro 6.5" a 6.9" (Apple je nesdílí mezi lokalizacemi;
   nejlíp ze simulátoru nebo telefonu, ne z prohlížeče — kvůli přesným rozměrům)
2. V App Store Connect přidat *English (U.S.)* lokalizaci k appce 6791562078
   a vyplnit texty z `metadata-en.md`
3. Rozšířit dostupnost z CZ + SK (aspoň US, CA, GB, IE, AU, NZ)
4. Anglická stránka podpory na Pages jako Support URL pro EN lokalizaci
5. Zvednout verzi na 4 místech (viz výš) a otagovat `ios-vN`

**Nedořešené:** název na ploše telefonu (`CFBundleDisplayName`) je pro všechny
„Mezi námi". Lokalizovat ho jde jen přes `cs.lproj`/`en.lproj/InfoPlist.strings`,
což znamená přidat soubory do `project.pbxproj` — ručně a bez Xcode je to risk
na rozbití release buildu. Nechal jsem to na chvíli, kdy bude Xcode po ruce.

**Pozor:** `www/sw.js` už je na `v55` a má `i18n-en.js` v ASSETS.
Verze appky zůstává 1.10 — zvedne se až při vydání.

## Jak se pracuje s projektem

- Appka je **jeden soubor** `www/index.html` (bez závislostí), stránky `podpora.html`, `soukromi.html`
- Po každé změně obsahu **zvednout `CACHE` v `www/sw.js`** (konvence repa)
- Push do `main` → GitHub Pages nasadí web ~za 15 s
- iOS release = tag **`ios-vN`**; číslo buildu si CI bere z `GITHUB_RUN_NUMBER`
  (`run_number` workflow, ne pořadí tagu — dřív to bylo skoro stejné číslo, dnes už ne).
  Historie: `ios-v17` = build 19 = vydaná 1.9 · `ios-v18` = 20 · `ios-v19` = 21 (obojí 1.10)
  · `ios-v20` = 22 (1.11). Další volný tag je **`ios-v21`**. Číslo buildu
  ručně se nezvedá. Verzi zvedat na **4 místech**: `MARKETING_VERSION` v pbxproj,
  `APP_VERSION` v index.html, `package.json` a `versionName` v android/app/build.gradle.
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
