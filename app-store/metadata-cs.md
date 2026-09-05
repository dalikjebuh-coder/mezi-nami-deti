# App Store — texty a metadata (čeština)

Připraveno pro první vydání. Znaky jsem počítal, limity Applu jsou v závorkách.

---

## Název (30 znaků)

```
Mezi námi: rodiče a děti
```
24 znaků. **Než to vyplníš, ověř v App Store Connect, že je název volný** — „Mezi námi“ samotné
bude nejspíš zabrané. Záložní varianty:

- `Mezi námi — otázky pro děti` (27)
- `Mezi námi: povídání s dětmi` (27)

## Podtitul (30 znaků)

```
Otázky, které vás sblíží
```
23 znaků. Alternativy: `Povídání, co se doma nevede` (27) · `Karty na upřímné povídání` (25)

## Klíčová slova (100 znaků, oddělené čárkou, bez mezer za čárkou)

```
děti,rodina,otázky,povídání,komunikace,emoce,výchova,karty,hra,vztahy,pocity,rodič,dítě,škola
```
93 znaků. Neopakuj slova z názvu a podtitulu — Apple je indexuje zvlášť.

## Propagační text (170 znaků, dá se měnit bez nové verze)

```
Na „Jak bylo ve škole?“ se odpovídá „dobrý“. Tyhle karty se ptají jinak — a odpovídáte oba. Zdarma, bez reklam, bez registrace.
```
126 znaků.

## Popis (4000 znaků)

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

## Text „Co je nového“ pro první vydání (4000 znaků)

```
První vydání. Šest témat, 108 otázek ve třech úrovních hloubky, bonusové karty
a Bleskovky na pár minut. Vše offline a bez sběru dat.
```

## Text „Co je nového“ pro 1.10

```
Aplikaci teď jde ohodnotit přímo z Nastavení. Pokud vám doma k něčemu je,
hvězdičky pomůžou ostatním rodičům ji vůbec najít. Díky.
```

## Text „Co je nového“ pro 1.11

```
Aplikace se teď ovládá příjemněji. Přibyl večerní režim, který u večerních
Bleskovek ztlumí displej sám, takže vás před spaním nebude oslňovat. Karty
reagují na dotek, plácnutí má pořádné konfety a na domovské obrazovce vás
čeká téma, u kterého jste minule skončili.
```

## „What to Test“ pro TestFlight — build 23 (1.11)

```
Nová verze je hlavně o ovládání, tak ji prosím zkuste na skutečném telefonu:

1. Vylosujte kartu, otočte ji a plácněte si. Telefon by měl u každého z toho
   krátce cuknout — jinak silně u plácnutí než u otočení.
2. Na kartě dole je medové „Otočit kartu“. Všimli byste si ho, kdybych vám
   o něm neřekl? Na rubu jsou tipy, jak se doptat dál.
3. Nastavení → Vzhled. Aplikace je nově vždycky světlá, i když máte v telefonu
   tmavý režim. Zkuste přepnout na Tmavý a zpátky; v tmavém se koukněte i na
   horní lištu telefonu, jestli je na ní vidět čas.
4. Bleskovky → Večerní zklidnění. Aplikace by měla sama ztmavnout a po návratu
   na témata se zase rozsvítit.
5. Zavřete povídání křížkem vlevo nahoře. Místo systémového okna vyjede
   potvrzení zespodu — zkuste ho i stáhnout prstem dolů.
6. Na malém telefonu (SE, mini) zkontrolujte, že se pod kartu vejdou obě
   tlačítka a nic se nemusí odscrollovat.
7. Aplikace se už neptá na přístup k pohybovým datům. Kdyby se na to zeptala,
   dejte mi prosím vědět — to by byla chyba.

Co mě zajímá nejvíc: sedí síla cuknutí, nebo je ho moc? A je „Otočit kartu“
dost vidět?
```

---

## Nastavení v App Store Connect

| Položka | Hodnota |
|---|---|
| Kategorie (primární) | **Education** (nebo Lifestyle) |
| Kategorie (sekundární) | Lifestyle |
| **Kids Category** | **NE** — vyžadovala by rodičovskou bránu před odchodem z aplikace, což by zablokovalo i `tel:` odkazy na Linku bezpečí |
| Věkové hodnocení | Vyplnit dotazník; očekávaně **4+** |
| Cena | Zdarma |
| Privacy Policy URL | `https://dalikjebuh-coder.github.io/mezi-nami-deti/soukromi.html` |
| Support URL | `https://dalikjebuh-coder.github.io/mezi-nami-deti/podpora.html` |
| Marketing URL | `https://dalikjebuh-coder.github.io/mezi-nami-deti/` (volitelné) |
| Účet pro recenzenta | Netřeba — aplikace nemá přihlášení |
| Export compliance | Vyřešeno v projektu (`ITSAppUsesNonExemptEncryption = false`) |
| Jazyk | Čeština jako primární |

### App Privacy dotazník

Odpověz **„Data Not Collected“**. Platí to doslova: nativní aplikace nedělá žádné síťové
požadavky, jména a postup jsou jen v `localStorage` zařízení, žádná analytika ani reklamní SDK.
Aplikace neobsahuje žádné třetí strany kromě Capacitoru (runtime, nesbírá nic).

### Screenshoty

Ve složkách `screenshots-6.9/` (1320 × 2868) a `screenshots-6.5/` (1284 × 2778):

1. `shot-1-uvod.png` — úvodní obrazovka
2. `shot-2-temata.png` — seznam témat s rozehraným postupem
3. `shot-3-hloubka.png` — výběr hloubky otázek
4. `shot-4-vejir.png` — vějíř karet k losování
5. `shot-5-karta.png` — vylosovaná otázka
6. `shot-6-rub.png` — rub karty s doptávačkami
7. `shot-7-bleskovka.png` — Bleskovky

Doporučené pořadí pro App Store: 1, 5, 6, 2, 4, 7 (3 vynechat, když chceš jen šest).
App Store Connect vezme sadu pro největší iPhone a menší velikosti si dopočítá sám —
menší sada je připravená, kdyby ji vyžadoval.
