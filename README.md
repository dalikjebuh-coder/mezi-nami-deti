# Mezi námi — rodiče a děti

Hra, která pomáhá rodičům a dětem (6–9 let) otevírat témata, o kterých je někdy těžké mluvit. Dítě losuje karty s otázkami, odpovídají oba — nahlas, beze spěchu, bez hodnocení.

**Hrát:** https://dalikjebuh-coder.github.io/mezi-nami-deti/

Na iPhonu: otevřít v Safari → Sdílet → **Přidat na plochu**. Appka pak funguje offline a vše zůstává jen v telefonu — nic se nikam neposílá.

## Co uvnitř je

- 6 témat (Škola, Kamarádi, Strachy, Naše rodina, Telefon a hry, Pocity) × 3 hloubky × 6 otázek
- každá otázka má jemnější variantu a tři doptávačky pro hlubší rozhovor
- bonusové karty s úkoly a hravými otázkami
- postup se pamatuje v telefonu (localStorage), jde smazat v Nastavení

Jeden statický soubor (`index.html`), bez závislostí. PWA: manifest, service worker (offline), wake lock, iOS splash screeny.
