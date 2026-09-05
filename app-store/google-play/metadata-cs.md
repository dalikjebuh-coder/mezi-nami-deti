# Google Play — texty a metadata (čeština)

Obdoba `app-store/metadata-cs.md` pro Google Play. Limity se liší od Applu,
znaky jsou spočítané. Grafika je připravená ve složce `graphics/` (gitignored,
stejně jako iOS screenshoty).

---

## Název (30 znaků)

```
Mezi námi: rodiče a děti
```
24 znaků — stejný jako na App Store. Na Play se názvy nerezervují dopředu,
duplicitní název jiné appky nevadí (identita je package name `com.dalikjebuh.mezinami`).

## Krátký popis / Short description (80 znaků)

```
Karty s otázkami, které rozpovídají děti i rodiče. Bez reklam a bez sběru dat.
```
78 znaků. Alternativy:

- `Hra na povídání pro rodiče a děti 6–9 let. Bez reklam, bez registrace.` (70)
- `Otázky, které vás sblíží. Hra na povídání pro rodiče a děti od 6 do 9 let.` (74)

Play nemá podtitul ani klíčová slova — short description je jediný „tagline“
a zároveň hlavní zdroj pro ASO. Slova „děti, rodiče, otázky, povídání“ v něm jsou.

## Úplný popis (4000 znaků)

Převzatý z App Store popisu beze změn — je univerzální (~1 950 znaků, vejde se
s velkou rezervou). Jen připomenutí: Play zobrazuje první ~3 řádky před „Číst
více“, a náš popis začíná nejsilnější větou, takže to funguje.

```
Na otázku „Jak bylo ve škole?“ se odpovídá „dobrý“. A tím to většinou skončí.

Mezi námi je hra na povídání pro rodiče a děti od 6 do 9 let. Dítě si vylosuje kartu s otázkou
a odpovídáte oba — dítě o škole a kamarádech, rodič o práci a o svém dětství. Mluví se nahlas,
nic se nepíše. Zabere to pár minut, a přesto se dozvíte věci, na které v běžném dni nedojde.

CO UVNITŘ NAJDETE

• Šest témat: Škola, Kamarádi, Strachy a starosti, Naše rodina, Telefon a hry, Pocity
• Tři úrovně hloubky — od „Na rozehřátí“ po „Úplně upřímně“. Vy volíte, kam dnes chcete jít.
• 108 otázek, každá s jemnější variantou pro dny, kdy je téma příliš velké
• Na rubu každé karty tři doptávačky, aby rozhovor neskončil u první věty
• Bonusové karty s úkoly a hravými otázkami na vydýchání mezi vážnými tématy
• Bleskovky — rychlé hry na pár minut pro ráno, odpoledne i večer

JAK TO FUNGUJE

Vyberete téma a hloubku. Dítě si vylosuje jednu ze tří karet. Otázku dostanete společně
a odpovídáte oba — a je jedno, kdo začne, i když se to lépe rozjede, když začne rodič.
Když si nevíte rady, otočíte kartu: na rubu čekají tři doptávačky a jemnější znění otázky.
Po každé otázce si plácnete.

TŘI PRAVIDLA, KTERÁ TO DĚLAJÍ BEZPEČNÝM

Před prvním povídáním si spolu odsouhlasíte tři věci: za upřímnost se nezlobíme,
aktivně si nasloucháme, a kdykoliv je téma nepříjemné, stačí říct „dost“ a kartu odložíme.
Bez těchhle tří vět by některé otázky byly příliš odvážné. S nimi jde mluvit i o strachu,
samotě nebo o tom, když někdo někomu ubližuje.

SOUKROMÍ, KTERÉ NENÍ JEN SLIB

• Žádné účty, žádná registrace — otevřete a hrajete
• Odpovědi se nikam nezapisují. Mluví se nahlas a v aplikaci po nich nezůstane stopa.
• Žádná analytika, žádné reklamy, žádné sledování
• Funguje kompletně offline
• V telefonu zůstávají jen zadaná jména a informace o tom, které otázky jste už prošli

Volitelně jednou týdně pošleme jednu otázku nebo malé povzbuzení — v neděli večer.
Oznámení se plánují přímo v telefonu, bez serveru. Kdykoli se dají vypnout.

PRO KOHO TO JE

Pro rodiče, kteří chtějí vědět víc než jen známky. Otázky jsou psané pro děti mezi šesti
a devíti lety — podle toho, jak v tom věku přemýšlejí a mluví o pocitech: otevřít téma,
pojmenovat emoci, bezpečně uzavřít.

Za aplikací stojí jeden táta, ne firma. Je zdarma, bez reklam a bez sběru dat.

Aplikace je pomocník pro společné povídání a nenahrazuje odbornou psychologickou,
terapeutickou ani lékařskou péči. Kontakty na Linku bezpečí a další odbornou pomoc
najdete přímo v aplikaci.
```

## Poznámky k vydání / Release notes (500 znaků — pozor, Play má 500, ne 4000)

```
První vydání pro Android. Šest témat, 108 otázek ve třech úrovních hloubky,
bonusové karty a Bleskovky na pár minut. Vše offline a bez sběru dat.
```
144 znaků.

---

## Nastavení v Play Console

| Položka | Hodnota |
|---|---|
| Kategorie | **Parenting** (přesnější než Education — appka je nástroj rodiče) |
| Cena | Zdarma, žádné nákupy v aplikaci |
| Reklamy („Contains ads“) | **Ne** |
| Privacy Policy URL | `https://app.mezi-nami-app.cz/soukromi.html` |
| Web | `https://app.mezi-nami-app.cz/` |
| Kontaktní e-mail | povinný a **veřejně viditelný** — zvol, který chceš ukázat světu |
| Jazyk záznamu | čeština (cs-CZ) jako výchozí |
| Země distribuce | Česko + Slovensko (víc nemá smysl, obsah je česky) |
| App access | „All functionality is available without special access“ (není login) |

### Data safety (dotazník „Bezpečnost údajů“)

Odpovědi — doslova stejná situace jako „Data Not Collected“ na iOS:

1. **Does your app collect or share any of the required user data types?** → **No**
2. Tím dotazník končí — štítek bude „No data collected“.

Obhajoba (kdyby se recenzent ptal): aplikace nedělá žádné síťové požadavky,
jména a postup jsou jen v `localStorage` zařízení, oznámení se plánují lokálně
(`@capacitor/local-notifications`), žádná analytika, žádné reklamní SDK, WebView
načítá jen soubory přibalené v APK. Jediná třetí strana je Capacitor runtime,
který nic nesbírá.

### Content rating (IARC dotazník)

- Kategorie dotazníku: **All Other App Types** (ne Game)
- Násilí, sex, drogy, hazard, vulgarity: **ne** ve všech otázkách
- Interakce uživatelů (chat, sdílení, UGC): **ne** — v appce se nic nepíše ani nesdílí
- Sdílení polohy: **ne** · Nákupy: **ne**
- Zmínka „témata jako strach a ubližování“ do dotazníku nepatří — IARC se ptá
  na zobrazované/interaktivní násilí, ne na citlivá konverzační témata
- Očekávaný výsledek: **PEGI 3 / Everyone**

### Target audience („Cílová skupina a obsah“) — důležité rozhodnutí

**Doporučuji: cílová skupina pouze 18+** — stejná logika jako „ne Kids Category“
na iOS:

- Appku instaluje a ovládá **rodič**; dítě ji používá jen společně s ním.
  Popis oslovuje rodiče („Pro rodiče, kteří…“), ne děti.
- Jakmile by se zaškrtla jakákoli skupina do 12 let, spadne appka pod **Families
  policy** — přísnější review, certifikace, a hlavně dotazníky navíc.
- Pozor na navazující otázku **„Could your store listing unintentionally appeal
  to children?“** → odpověz **No** a buď připravený to obhájit: grafika je
  abstraktní (kruhy), texty oslovují dospělé, žádné postavičky ani dětské UI.

**Záložní scénář:** kdyby Google při review rozhodl, že appka děti oslovuje,
a vynutil Families policy — nic zásadního se neděje. `tel:` odkazy na Linku
bezpečí Families policy **neporušují** (nejsou to reklamy ani nákupy; iOS
parental-gate pravidlo nemá na Play přímou obdobu), reklamy nemáme, data
nesbíráme. Znamenalo by to jen delší review a pár dotazníků navíc.

### Deklarace v „App content“ (další povinné formuláře)

| Formulář | Odpověď |
|---|---|
| Ads | žádné reklamy |
| App access | vše přístupné bez přihlášení |
| Content rating | dotazník výše |
| Target audience | 18+ |
| News app | ne |
| COVID-19 tracing/status | ne |
| Data safety | „No“ na sběr i sdílení |
| Government app | ne |
| Financial features | žádné |
| Health apps | ne (povídací karty nejsou zdravotní/wellness funkce) |
| Account deletion | netýká se — žádné účty |

---

## Grafika (`graphics/`, gitignored)

| Soubor | Rozměr | Účel |
|---|---|---|
| `icon-512.png` | 512×512 PNG | ikona záznamu (z iOS 1024, zmenšená) |
| `feature-graphic.png` | 1024×500 PNG | **povinná** feature graphic — krémové pozadí, kruhy, název |
| `screenshots/shot-*.png` | 1620×2880 (9:16) | 7 screenshotů z iOS sady 6.9 |

Screenshoty: Play povoluje poměr stran max 2:1, takže iPhone 1320×2868 (2,17:1)
nešly nahrát přímo. Jsou přeškálované na výšku 2880 a boky doplněné roztažením
krajních pixelů (krémová se slije, přechod není vidět) → přesně 9:16, což je
zároveň formát vyžadovaný pro promo umístění (potřebuje ≥4 screenshoty ≥1080px ✓).

Doporučené pořadí (stejné jako App Store): 1-úvod, 5-karta, 6-rub, 2-témata,
4-vějíř, 7-bleskovka (3-hloubka vynechat, když jich chceš jen šest).

Tabletové screenshoty (7"/10") jsou volitelné — bez nich jde publikovat, jen
tabletový listing ukáže telefonní. Appka na tabletech poběží (responzivní web);
kdyby to vadilo, dá se distribuce na tablety omezit v Device catalog.

---

## Účet a proces vydání

1. **Google Play Developer účet** — jednorázově 25 USD. Pozor: **osobní účty
   založené po 13. 11. 2023 musí před produkcí projít closed testingem:
   12 testerů nepřetržitě 14 dní.** Firemní účet tuhle povinnost nemá, ale chce
   D-U-N-S číslo. S osobním účtem počítej s ~3 týdny navíc (testeři = rodina,
   kamarádi; stačí, když test „běží“, nemusí aktivně hrát).
2. Vytvořit aplikaci v Play Console (čeština, app, free) a **nechat zapnuté
   Play App Signing** (výchozí) — Google si vygeneruje app signing key, náš
   keystore je jen *upload key* (při ztrátě jde vyměnit, ne jako u Applu).
3. První AAB se nahrává ručně (Internal testing → nahrát AAB z CI artefaktu).
4. Vyplnit store listing (texty výše), grafiku, App content deklarace.
5. Internal → Closed (těch 14 dní) → Production.

### CI build (bez lokální Javy — stejná filozofie jako iOS)

- Workflow: `.github/workflows/android-play.yml` — tag **`android-vN`** nebo
  ručně (workflow_dispatch). Ubuntu runner, Java 21, `npx cap sync android`,
  `gradlew bundleRelease`.
- `versionCode` = `GITHUB_RUN_NUMBER` (vlastní číselná řada nezávislá na iOS),
  `versionName` = `1.9` (ručně v `android/app/build.gradle`, zvedat spolu
  s `MARKETING_VERSION`/`APP_VERSION`).
- Výstup: artefakt **mezi-nami-aab** ke stažení z běhu Actions → nahrát do
  Play Console. (Automatické nahrávání přes Play API jde doplnit později —
  chce service account; pro první vydání se stejně nahrává ručně.)

### GitHub secrets k nastavení (Settings → Secrets and variables → Actions)

| Secret | Hodnota |
|---|---|
| `ANDROID_KEYSTORE_B64` | obsah `android/keystore/upload-keystore.p12.b64` |
| `ANDROID_KEYSTORE_PASSWORD` | `storePassword` z `android/keystore/keystore.properties` |

### Upload keystore — DŮLEŽITÉ

- `android/keystore/` je **gitignored** a existuje jen na tomhle Macu —
  **zálohuj keystore i heslo** (např. do správce hesel). Vygenerován přes
  `scripts/generate-upload-keystore.py` (openssl, bez Javy), RSA 4096,
  platnost do srpna 2056, alias `upload`.
- SHA-256 otisk certifikátu:
  `9E:0F:29:19:7F:F7:98:16:EA:6E:A2:31:75:AE:C4:BC:1F:AE:40:31:EA:BA:F8:54:49:E4:9D:78:41:D1:B2:39`
- Díky Play App Signing je to jen upload key — při ztrátě se dá přes podporu
  Play Console vyměnit za nový. I tak: záloha ušetří týden dopisování.
