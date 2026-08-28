/* ================= English pack =================
   Klíčem je česká předloha z index.html — žádné umělé kódy, které by se
   s textem rozešly. Kontrola pokrytí: python3 scripts/i18n-extract.py

   Obsah (decks, bonus, blesk, weekly) se nebere po kusech, ale celý:
   co tu chybí, se v anglické verzi vůbec neukáže. Proto zatím není `blesk`
   ani zbylých pět balíčků — v angličtině se prostě nenabízejí.

   Pozor: `id` balíčků a pořadí bonusových karet musí sedět s českou verzí —
   drží na nich uložený postup a odkazy z nedělních oznámení. */
window.I18N_PACKS = window.I18N_PACKS || {};
window.I18N_PACKS.en = {

/* název jazyka vlastním jazykem — takhle se ukáže v seznamu */
label: "English",

ui: {
  /* --- Úvod --- */
  "Mezi námi — rodiče a děti": "Between Us — parents and kids",
  "Mezi námi": "Between Us",
  "Pro rodiče a děti": "For parents and kids",
  "Hra, která pomáhá otevírat složitá témata, o kterých je někdy těžké mluvit.":
    "A game that opens up the conversations nobody quite knows how to start.",
  "Začít": "Start",
  "Vše zůstává jen ve vašem telefonu.": "Everything stays on your phone.",

  /* --- Obecné --- */
  "Zpět": "Back",
  "Pokračovat": "Continue",
  "Přeskočit": "Skip",
  "Zavřít": "Close",
  "Témata": "Topics",
  "Nastavení": "Settings",

  /* --- Jména --- */
  "Kdo si bude povídat?": "Who's talking today?",
  "Jména můžete kdykoli změnit v nastavení.": "You can change these anytime in Settings.",
  "Rodič": "Parent",
  "Dítě": "Kid",
  "např. máma, táta": "Mom, Dad, Grandma…",
  "např. Kuba": "e.g. Sam",

  /* --- Tři sliby --- */
  "Ještě než začnete": "Before you start",
  "Domluvme se": "Let's agree on",
  "na třech věcech": "three things",
  "Přečtěte si je společně nahlas a plácněte si.":
    "Read them out loud together, then high-five on it.",
  "Za pravdu se nezlobíme": "Nobody gets in trouble for the truth",
  "Každá odpověď je v pořádku.": "Every answer is okay.",
  "Necháme domluvit": "We let each other finish",
  "Kdo mluví, toho posloucháme až do konce.": "Whoever's talking gets to finish.",
  "Stačí říct „dost“": "Saying “stop” is enough",
  "Když bude téma nepříjemné, můžeme kdykoliv přestat.":
    "If a question feels like too much, we can stop anytime.",
  "Slibujeme oba": "We both promise",

  /* --- Domů --- */
  "✋ Vítejte zpátky. Sliby platí dál.": "✋ Welcome back. The promises still hold.",
  "O čem si dnes budete povídat?": "What do you want to talk about today?",
  "Když je málo času": "When time is short",
  "Bleskovky": "Quick Ones",
  "Zábavné hry a výzvy": "Fun games and challenges",
  "5 minut": "5 minutes",

  /* --- Bleskovky --- */
  "Zkuste si zahrát rychlé hry a zábavné výzvy podle denní doby nebo třeba při čekání na autobus.":
    "Quick games and playful challenges for any time of day — or while you wait for the bus.",
  "Kdy si těch pár minut dáte?": "When are those few minutes?",
  "Ranní start": "Morning start",
  "Naladit se na den a ulehčit ranní loučení": "Ease into the day and make goodbyes lighter",
  "Odpolední pohoda": "Afternoon reset",
  "Setřást napětí ze školy — vybít energii, nebo zvolnit":
    "Shake off school — burn some energy or wind down",
  "Večerní zklidnění": "Evening wind-down",
  "Uzavřít den v klidu a připravit hlavu na spaní":
    "Close the day calmly and get ready for sleep",
  "Otoč a zjisti víc": "Flip it to see more",
  "Klepni zpátky na název": "Tap to go back",
  "Splněno, dokázali jsme to!": "Done — we did it!",
  "Navrhnout jinou": "Show me another",
  "bleskovka": "quick one",
  "denní doba": "time of day",
  "Pár minut naplno jen pro vás dva — a ty se počítají nejvíc.":
    "A few minutes with your whole attention — those are the ones that count.",

  /* --- Výběr hloubky --- */
  "Jaké otázky to budou?": "How deep do you want to go?",
  "Na rozehřátí": "Warm-up",
  "Otázky jen tak pro radost. Žádné chytáky.": "Easy questions, just for fun. No curveballs.",
  "S kouskem odvahy": "A little braver",
  "Už se ptáme i na to, co trochu zebe.": "Now we ask about the things that sting a little.",
  "Úplně upřímně": "All in",
  "Ty největší věci. Jen když se oba cítíte v bezpečí.":
    "The big stuff. Only when you both feel safe.",
  "✓ Hotovo": "✓ Done",
  "✓ Vše prošlé": "✓ All done",
  "{seen}/{total} otázek": "{seen}/{total} questions",
  "Otevřít téma {deck}": "Open the {deck} topic",

  /* --- Losování a karta --- */
  "Vyber si kartu": "Pick a card",
  "Poslední karta!": "Last card!",
  "Ještě jedna — za odměnu!": "One more — just for fun!",
  "{kid}, klepni na jednu — uvnitř se schovává otázka.":
    "{kid}, tap one — there's a question hiding inside.",
  "{kid}, zvládli jste všechno. Otoč si kartu na rozloučenou.":
    "{kid}, you got through them all. Flip one last card.",
  "Bonusová karta": "Bonus card",
  "Bonusová otázka": "Bonus question",
  "Výměna rolí": "Switch it around",
  "Teď se ptáš ty! Vymysli pro rodiče libovolnou otázku — a rodič musí upřímně odpovědět.":
    "Your turn to ask! Come up with any question for your parent — and they have to answer honestly.",
  "Pro hlubší rozhovor": "To go deeper",
  "🪄 Když nevíš, jak odpovědět": "🪄 If you're stuck for an answer",
  "Klepni na kartu — poradíme, jak si o tom povídat":
    "Tap the card — we'll help you keep it going",
  "Klepni na kartu a otoč si ji": "Tap the card to flip it",
  "Klepni zpátky na otázku": "Tap to go back to the question",
  "Jdeme si povídat": "Let's talk",
  "Pro dnešek stačí": "That's enough for today",
  "A je to! Dokončit povídání": "That's it! Finish up",
  "Splněno! Losujeme dál": "Done! Keep going",
  "🖐️ Plácněte si — a hotovo!": "🖐️ High-five — and done!",
  "🖐️ Plácněte si a losujte dál": "🖐️ High-five and draw again",
  "Opustit povídání a vrátit se na témata?": "Leave this talk and go back to topics?",

  /* --- Závěr --- */
  "Dokázali jste to.": "You did it.",
  "Povídat si takhle upřímně je velká věc. Buďte na sebe pyšní.":
    "Talking this honestly is a big deal. Be proud of each other.",
  "otázek": "questions",
  "otázky": "questions",
  "otázka": "question",
  "odvážlivci": "brave souls",
  "hloubka": "depth",
  "Zpět na témata": "Back to topics",

  /* --- Nastavení --- */
  "Rodina": "Family",
  "Jméno rodiče": "Parent's name",
  "Jméno dítěte": "Kid's name",
  "Změny se ukládají samy.": "Changes save automatically.",
  "Jazyk": "Language",
  "Jazyk aplikace": "App language",
  "Přepnutí aplikaci restartuje. Jména i postup zůstanou.":
    "Switching restarts the app. Names and progress stay.",
  "Hra": "The game",
  "Znovu projít průvodce": "Replay the intro",
  "Tři sliby": "The three promises",
  "Resetovat postup": "Reset progress",
  "✓ Postup resetován": "✓ Progress reset",
  "Opravdu resetovat postup? Prošlé otázky se začnou počítat od začátku. Jména zůstanou.":
    "Reset your progress? Questions you've already been through will start over. Names stay.",
  "Oznámení": "Notifications",
  "Povolit oznámení": "Allow notifications",
  "Jednou týdně otázka, nebo malé povzbuzení": "One question or a small nudge, once a week",
  "Oznámení jsou pro tuhle aplikaci v telefonu vypnutá. Povolte je v Nastavení → Mezi námi → Oznámení.":
    "Notifications are turned off for this app on your phone. Turn them on in Settings → Between Us → Notifications.",
  "V prohlížeči plánovaná oznámení nefungují — jsou jen v aplikaci pro iOS.":
    "Scheduled notifications don't work in a browser — they're only in the iOS app.",
  "Jak aplikaci používat": "Using the app",
  "Jak hrát": "How to play",
  "Tipy pro rozhovory": "Conversation tips",
  "Nejčastější otázky": "Common questions",
  "O aplikaci": "About",
  "Proč vznikla": "Why it exists",
  "Kdo ji vytvořil": "Who made it",
  "Napište mi": "Get in touch",
  "Napsat mi e-mail": "Email me",
  "font@email.cz": "font@email.cz",
  "Ozvat se na LinkedInu": "Reach me on LinkedIn",
  "Ohodnotit aplikaci": "Rate the app",
  "Za appkou stojí jeden táta, ne firma. Napište mi cokoli — co vám v ní chybí, co vám doma zafungovalo, i co je špatně.":
    "One dad built this, not a company. Write me anything — what's missing, what worked at your house, what's broken.",
  "Soukromí": "Privacy",
  "Jak chráníme vaše data": "How your data is protected",
  "Zásady ochrany soukromí": "Privacy policy",
  "Pomoc": "Help",
  "Podpora a kontakt": "Support and contact",
  "Linka bezpečí a další odborná pomoc": "Crisis lines and professional help",
  "Nahlásit problém": "Report a problem",
  "Poslat nápad": "Send an idea",
  "Informace": "Info",
  "Verze aplikace": "App version",
  "Podmínky používání": "Terms of use",
  "Licence": "License",
  "Vše zůstává jen ve vašem telefonu — nikam se nic neposílá.":
    "Everything stays on your phone — nothing is ever sent anywhere.",

  /* --- Nedělní inspirace --- */
  "Nedělní inspirace": "Sunday nudge",
  "Otázka na tenhle týden — klidně jen tak, u večeře nebo v autě.":
    "This week's question — over dinner, in the car, whenever it fits.",
  "Jak si o tom povídat": "How to talk about it",
  "Otevřít celé téma": "Open the full topic",
  "Zpět domů": "Back home",
  "Ať to nezapadne": "So it doesn't slip away",
  "Jednou týdně pošleme jednu otázku nebo malé povzbuzení. Žádné upomínky, žádné počítání.":
    "Once a week we'll send one question or a small nudge. No reminders, no streaks.",
  "ned 18:00": "Sun 6:00 PM",
  "Ano, posílejte": "Yes, send them",
  "Teď ne": "Not now"
},

depth: ["Warm-up", "A little braver", "All in"],

onboard: [
  { emoji: "🫶", bg: "var(--sage-soft)", title: "Talk to each other for real",
    text: "Instead of the usual “how was school?”, open up the bigger stuff and find out something new about each other." },
  { emoji: "💬", bg: "var(--sky-soft)", title: "Questions that bring you closer",
    text: "Questions about family, feelings and worries, written for kids 6 to 9 — plus playful challenges in between." },
  { emoji: "🤝", bg: "var(--plum-soft)", title: "Simple rules for both of you",
    text: "Draw a card and talk. Nothing is saved, and you can play anywhere — even in the car." }
],

/* Balíček School. `id` musí zůstat "skola" — na něm drží uložený postup
   a odkazy z nedělních oznámení. */
decks: [
  {
    id: "skola", emoji: "🎒", bg: "var(--sky-soft)",
    title: "School",
    tagline: "Learning, grades, what really goes on",
    desc: "Find out more than what grade came home — how your kid actually feels there, what they love and what drives them nuts.",
    questions: [
      [ // Warm-up
        { q: "What was the best thing about school (or work) today?",
          soft: "If today got a grade, like a school assignment, what would it get? Why?",
          fu: [
            "Tell it to me like a story — what happened exactly?",
            "Who was there with you?",
            "What could we do to make that happen more often?"
          ] },
        { q: "What are you best at in school (or at work)?",
          soft: "When did someone last say you did a great job? What was it for?",
          fu: [
            "How did you figure out you were good at it?",
            "How does it feel when it goes right?",
            "Will you teach me sometime? I want to see it."
          ] },
        { q: "If you could invent a new school subject, what would it be?",
          soft: "What would you learn if you could do it with a snap of your fingers?",
          fu: [
            "What would you do in the very first class?",
            "Why that one? What pulls you to it?",
            "What part of it could we try at home this weekend?"
          ] },
        { q: "Who makes you laugh the most at school (or at work)?",
          soft: "Who do you like sitting next to most? Why them?",
          fu: [
            "What's the last thing they did or said that cracked you up?",
            "What is it about them that's so funny?",
            "And when do you make everyone else laugh?"
          ] },
        { q: "What went well for you today? Even something tiny.",
          soft: "What would you give yourself one point for today?",
          fu: [
            "Tell me about it — how did you pull it off?",
            "Did anyone notice? Would it feel good if they had?",
            "Should we do one of these every night? I'll start with mine."
          ] },
        { q: "What's your favorite spot at school (or at work)?",
          soft: "If you could take me to one place at your school, where would it be?",
          fu: [
            "What do you do there? Who are you usually with?",
            "What makes it feel good to be there?",
            "And which spot do you like the least? Why?"
          ] }
      ],
      [ // A little braver
        { q: "What's the hardest part of school (or work) for you?",
          soft: "Which day of the week do you like the least? What's usually in it?",
          fu: [
            "Walk me through it — what exactly happens when it comes around?",
            "How does it feel? What do you notice in your body?",
            "Do you want us to figure out what would help — or did you mostly just want to say it?"
          ] },
        { q: "Have you ever been afraid to say you didn't understand something?",
          soft: "When you don't get something, do you ask — or let it go?",
          fu: [
            "What do you think would happen if you said it out loud?",
            "Everyone has that — me too. Want to hear about a time I was afraid to ask?",
            "What would make it easier to ask next time?"
          ] },
        { temp: "How uncomfortable does it get?", q: "What's it like at home when grades come up?",
          soft: "What goes through your head when the word “grades” comes up at home?",
          fu: [
            "When does it feel okay — and when does it feel bad?",
            "What would you want me to say when you bring home a bad grade?",
            "Should we handle grades differently in this house? You tell me how."
          ] },
        { temp: "How uncomfortable is it?", q: "What's it like when the teacher calls on you and you don't know?",
          soft: "What goes through your head while the teacher is picking who to call on?",
          fu: [
            "When did that last happen? What was going on?",
            "What do you feel right then — hot face, lump in your throat, nothing?",
            "Want to know what I do at work when I don't know something?"
          ] },
        { q: "Do you ever get bored at school (or me at work)? When the most?",
          soft: "When does time drag the most at school?",
          fu: [
            "What do you do when you're bored?",
            "Is it “I don't care about this” bored, or “this is too easy” bored?",
            "What would save that class? Plan it like you're the teacher."
          ] },
        { q: "Do you ever compare yourself to other kids in your class?",
          soft: "Is there someone who makes everything look easy? How does that sit with you?",
          fu: [
            "Who do you compare yourself to most? At what?",
            "How does it feel when you come out worse in that comparison?",
            "What can you do that they can't? I'll help you find it."
          ] }
      ],
      [ // All in
        { q: "Has something happened at school (or work) that you never told anyone at home?",
          soft: "Is there a day you'd rather not think about? You don't have to tell me all of it — a piece is enough.",
          fu: [
            "Thank you for saying it. Do you want to tell me more, or is that enough for now?",
            "What did you feel back then — more like fear, anger, or sadness?",
            "Do you want me to do something about it — or did you just need to say it?"
          ] },
        { temp: "How big is that fear?", q: "Are you ever scared you'll let someone down when something goes wrong?",
          soft: "What do you picture happening if you brought home a bad grade?",
          fu: [
            "Who do you least want to disappoint?",
            "What do you imagine that person would do or say?",
            "I love you when things go wrong too. What would help you remember that?"
          ] },
        { q: "Is there anything at school (or work) you'd rather avoid completely?",
          soft: "If you had an invisibility cloak, when would you disappear into it?",
          fu: [
            "What exactly happens when it comes around?",
            "How bad is it — a little annoying, or genuinely hard?",
            "Do you want us to make a plan for it — or should we just keep an eye on it together for now?"
          ] },
        { temp: "How big is that feeling?", q: "Have you ever felt stupid at school?",
          soft: "Have you ever felt like everyone got it except you?",
          fu: [
            "When was the last time? What happened?",
            "Has anyone ever called you stupid? Who, and how?",
            "You're not. Want to hear the ways you're smart that they're not?"
          ] },
        { q: "Has anyone at school said something to you that still stings?",
          soft: "Is there a sentence you're still carrying around from back then?",
          fu: [
            "Who said it? And why do you think they did?",
            "What happens inside you when you remember it?",
            "That sentence says nothing about you. Want to come up with one to replace it?"
          ] },
        { temp: "How big is that pressure?", q: "Do you ever think we expect too much from you?",
          soft: "Do you ever feel like you have to make us happy for things to be okay at home?",
          fu: [
            "Where do you feel it most — grades, activities, how you behave?",
            "What do you imagine would happen if you couldn't pull it off?",
            "Thank you for telling me. What part of it can we make smaller right now?"
          ] }
      ]
    ]
  }
],

/* Pořadí musí odpovídat české verzi — odkazuje na ně WEEKLY (bonus: index) */
bonus: [
  // úkoly
  "Growl like a bear. Really go for it!",
  "Make the silliest face you can at each other.",
  "Stare at each other for 10 seconds without laughing. Who breaks first?",
  "Show me how a penguin walks. Parent has to follow you.",
  "Both of you try to touch your nose with your tongue.",
  "Invent a secret handshake together — a slap, a bump, anything.",
  "Sing a bit of whatever song is stuck in your head.",
  "Parent has to talk like a robot for 15 seconds.",
  "Do 5 squats together. Right now!",
  "Say your name backwards. Parent too.",
  "Parent has to dance for 10 seconds. With no music at all!",
  "Parent acts out what they look like in the morning before they're really awake.",
  "Parent sings “Row, Row, Row Your Boat” like an opera singer.",
  "Parent acts out an animal — you guess which one.",
  "Give your parent five words and they have to say them all backwards.",
  // hravé otázky
  "If you could turn into any animal, which one would it be and why?",
  "What would you do if you were invisible for one day?",
  "If you won a million dollars, what would you buy first?",
  "Which superpower would you pick — flying, invisibility, or reading minds?",
  "If animals could talk, which one would you question first, and about what?",
  "What would your dream house look like if it could look like anything?",
  "If you could have any pet in the world — a dinosaur counts — which would you pick?",
  "Would you rather be able to fly or breathe underwater? Why?",
  "If you were principal for one day, what's the first thing you'd change?",
  "Which food should be illegal?",
  "If our house were made entirely of food, what would it be made of?",
  "What's the funniest word you know?",
  "If you discovered a new planet, what would you name it and who would live there?",
  "A week with no tablet and no TV, or a week with no sweets?",
  "If you woke up grown-up-sized and your parent woke up kid-sized, what would you two do all day?",
  "Invent the worst possible ice cream flavor.",
  "If you could do absolutely anything for one day, what would it look like from morning to night?",
  "What can you do that nobody else in our family can?"
],

/* Odkazuje jen na balíček School a bonusové karty — ostatní témata zatím
   anglicky nejsou. Při doplnění balíčků sem přidat i jejich otázky. */
weekly: [
  { title: "This week's nudge",
    body: "In the car or over dinner, try just asking: “What are you looking forward to most right now?” See where it goes.",
    card: { bonus: 16 } },
  { title: "Rough week?",
    body: "That's okay. You don't have to plan something big for your kids. Sometimes a few minutes with your phone down is the whole thing. They can tell when you're really there. ❤️" },
  { title: "A question for this week",
    body: "“When did someone last say you did a great job? What was it for?” 💬 Talk it through — and share your own grown-up version too.",
    card: { deck: "skola", depth: 0, idx: 1, soft: true } },
  { title: "A small ritual for this week",
    body: "Next time you're sitting somewhere quiet together, take 3 minutes of silence and count how many different sounds you can hear. 🤫 No rush." },
  { title: "One from your back pocket",
    body: "“If you could turn into any animal, which one would it be and why?” 🦁 See what they come up with — and what you do.",
    card: { bonus: 15 } },
  { title: "An easy start to the week",
    body: "The world won't end if you're not a perfectly educational parent every day. Sometimes the best connection is a long hug at bedtime. ✨" },
  { title: "Something to open up this week",
    body: "“What's the hardest part of school for you?” Sometimes all it takes is listening, not fixing, and a hug.",
    card: { deck: "skola", depth: 1, idx: 0 } },
  { title: "See what they pick",
    body: "“Which superpower would you pick — flying, invisibility, or reading minds?” 🦸 Ask when you've got a free minute this week.",
    card: { bonus: 18 } },
  { title: "A new week ahead",
    body: "A deep bond with your kids doesn't take hours. It takes a few moments when you're fully there — no buzzing phone, no thinking about work. 🌾" },
  { title: "A question for a shared moment",
    body: "“What's your favorite spot at school?” 🎒 Let them talk, and ask about the details.",
    card: { deck: "skola", depth: 0, idx: 5 } },
  { title: "Tonight's idea",
    body: "“What would you do if you were invisible for one day?” 🔍 Enjoy making it up together.",
    card: { bonus: 16 } },
  { title: "Whatever this week brings",
    body: "To your kid, you are the whole world. Small rituals and moments of honest interest show up in your relationship sooner than you'd think. Have a good week. 🤍" }
],

pages: {
  "jak-hrat": { title: "How to play", html: `
    <ol>
      <li><strong>Pick a topic and how deep you want to go.</strong> Starting with “Warm-up” is a fine idea.</li>
      <li><strong>Your kid draws a card.</strong> Each talk has two questions and one bonus card with a challenge or a playful question.</li>
      <li><strong>You both answer.</strong> Your kid about school and friends, you about work and your own childhood. It's not an interrogation — it's a conversation.</li>
      <li><strong>Flip the card</strong> (tap it or swipe) — the back has ways to keep the conversation going, plus a gentler version of the question.</li>
      <li><strong>High-five after every question.</strong> And when you're done, be proud of each other.</li>
    </ol>
    <p>The app remembers which questions you've been through, so coming back to the same topic brings new ones. Every topic and depth has six.</p>` },

  "tipy": { title: "Conversation tips", html: `
    <ul>
      <li><strong>Answer too.</strong> Kids open up when you do. Go first if it helps.</li>
      <li><strong>Don't rush.</strong> Silence is fine — kids need time to put an answer together.</li>
      <li><strong>Don't correct or grade the answer.</strong> “Nobody gets in trouble for the truth” holds even when the answer catches you off guard.</li>
      <li><strong>Use the follow-ups on the back</strong> — but only while your kid is still into it. Three questions is a ceiling, not a to-do list.</li>
      <li><strong>Short and often</strong> beats long and once. One talk is a few minutes.</li>
      <li><strong>Play anywhere:</strong> in the car, at dinner, at bedtime. Best where you don't have to look each other in the eye — side by side is easier.</li>
      <li><strong>“Stop” means stop.</strong> If your kid doesn't want to keep going, stop without negotiating. It'll go better next time.</li>
    </ul>` },

  "faq": { title: "Common questions", html: `
    <p class="faq-q">What age is this for?</p>
    <p>The questions are written for kids roughly 6 to 9. The edges are soft though — try it and see.</p>
    <p class="faq-q">Do we both have to answer?</p>
    <p>Yes, that's the heart of it. Every question is for the kid and the parent.</p>
    <p class="faq-q">What if my kid doesn't want to answer?</p>
    <p>Don't push. Try the gentler version on the back of the card, answer first yourself — or let the card go and tap “That's enough for today”.</p>
    <p class="faq-q">Are our answers saved anywhere?</p>
    <p>No. You talk out loud; nothing is written down or sent anywhere. All that stays on the phone is the names and which questions you've been through.</p>
    <p class="faq-q">Can we play the same topic more than once?</p>
    <p>Yes. The questions rotate — every topic and depth has six. And answers change over time; the same question is a different conversation a month later.</p>
    <p class="faq-q">Can the other parent or a sibling play?</p>
    <p>Of course. You can change the names anytime under Family.</p>` },

  "proc": { title: "Why it exists", html: `
    <p>Ask “how was school?” and you get “fine”. That's usually where it ends.</p>
    <p>Between Us exists so families actually talk — about the good stuff, the scary stuff, and the things that are hard to say out loud. It runs on something simple: a good question, two honest people, and a quiet minute.</p>
    <p>The questions are written around how kids between six and nine think and talk about feelings: open the subject, name the emotion, close it safely. And because honesty takes courage from both sides, the parent answers every question too.</p>` },

  "autor": { title: "Who made it", html: `
    <p>Between Us is a personal project by one dad who wanted to talk with his kids about more than grades.</p>
    <p>There's no company and no business behind it — it's free, with no ads and no data collection.</p>
    <p>If you ever want to write — an idea, something you're missing, or how it went at your house — reach me directly at <a href="mailto:font@email.cz?subject=Between%20Us">font@email.cz</a> or on <a href="https://www.linkedin.com/in/dalibor-novak-22787199/" target="_blank" rel="noopener">LinkedIn</a>. One person reads it, not a support desk.</p>
    <p>The source code is public on <a href="https://github.com/dalikjebuh-coder/mezi-nami-deti" target="_blank" rel="noopener">GitHub</a>.</p>` },

  "podpora": { title: "Support", html: `
    <p>If something's broken or missing, write to me directly — one person reads it, not a support desk.</p>
    <div class="contact">
      <strong>Email</strong>
      <a href="mailto:font@email.cz?subject=Between%20Us">font@email.cz</a>
      <span>The fastest way</span>
    </div>
    <div class="contact">
      <strong>LinkedIn</strong>
      <a href="https://www.linkedin.com/in/dalibor-novak-22787199/" target="_blank" rel="noopener">Dalibor Novák</a>
      <span>If that's easier for you</span>
    </div>
    <h3>Before you write</h3>
    <ul>
      <li><strong>Lost progress</strong> lives only on your phone — deleting the app clears it, and there's no backup I can restore.</li>
      <li><strong>Notifications</strong> can be turned off under Settings → Notifications, and completely in your phone's Settings → Between Us.</li>
      <li><strong>Serious worries about your child</strong> belong with professionals — the numbers are under Help.</li>
    </ul>` },

  "data": { title: "How your data is protected", html: `
    <p>The best data protection is collecting none. That's exactly what happens here:</p>
    <ul>
      <li><strong>No accounts, no sign-up.</strong> Open the app and play.</li>
      <li><strong>Nothing is sent anywhere.</strong> Names and progress stay in your phone's memory.</li>
      <li><strong>Answers are never written down.</strong> You talk out loud — the app keeps no trace of it.</li>
      <li><strong>No analytics, no ads, no cookies.</strong></li>
      <li><strong>Works offline.</strong> After the first load it doesn't need the internet.</li>
    </ul>
    <p>You can erase everything with “Reset progress” (and by clearing the names), by deleting the app — or, if you're playing in a browser, by clearing the site data.</p>` },

  "zasady": { title: "Privacy policy", html: `
    <p>Between Us does not collect or transmit any personal data.</p>
    <p>The names you enter are stored only in your device's local storage and never leave it. The app contains no third-party analytics or advertising tools and uses no cookies.</p>
    <p>The web version is hosted on GitHub Pages, which — like any website — may briefly record technical access data (such as an IP address) in its server logs. The app has no access to those logs and does nothing with them.</p>
    <p>Privacy questions go straight to the author at <a href="mailto:font@email.cz?subject=Between%20Us%20%E2%80%94%20privacy">font@email.cz</a>, or on <a href="https://www.linkedin.com/in/dalibor-novak-22787199/" target="_blank" rel="noopener">LinkedIn</a>.</p>` },

  "sos": { title: "When it's serious", html: `
    <p>Some questions can open up heavy things — someone hurting them, fear, something they saw online. If you hear something that knocks the wind out of you:</p>
    <ul>
      <li><strong>Stay calm and thank them for telling you.</strong> Saying it took courage.</li>
      <li><strong>Don't interrogate.</strong> Let your kid say only as much as they want to.</li>
      <li><strong>Don't promise “I won't tell anyone”.</strong> Promise you won't do anything without them.</li>
    </ul>
    <h3>You don't have to handle it alone</h3>
    <div class="contact">
      <strong>988 Suicide &amp; Crisis Lifeline</strong>
      <a href="tel:988">988</a>
      <span>Free, 24/7, for anyone in crisis. Call or text.</span>
    </div>
    <div class="contact">
      <strong>Crisis Text Line</strong>
      <a href="sms:741741&body=HOME">Text HOME to 741741</a>
      <span>Free, 24/7, by text</span>
    </div>
    <div class="contact">
      <strong>Childhelp National Child Abuse Hotline</strong>
      <a href="tel:18004224453">1-800-422-4453</a>
      <span>Free and confidential, 24/7</span>
    </div>
    <div class="contact">
      <strong>National Parent Helpline — support for parents</strong>
      <a href="tel:18554272736">1-855-427-2736</a>
      <span>Weekdays, for parents who need someone to talk to</span>
    </div>
    <div class="contact">
      <strong>Immediate danger</strong>
      <a href="tel:911">911</a>
      <span>Police · ambulance · emergency</span>
    </div>` },

  "podminky": { title: "Terms of use", html: `
    <ul>
      <li>The app is free and intended for personal, non-commercial use.</li>
      <li>It's a helper for talking together — <strong>it does not replace psychological, therapeutic or medical care</strong>. If you're seriously worried about your child, talk to a professional (numbers are under Help).</li>
      <li>The app is provided “as is”, without warranty. You use it at your own risk.</li>
      <li>Content and features may change and improve over time.</li>
    </ul>` },

  "licence": { title: "License", html: `
    <p>© 2026 the author of Between Us. The question texts, the guides and the design of the app are protected by copyright.</p>
    <p>The source code is public on <a href="https://github.com/dalikjebuh-coder/mezi-nami-deti" target="_blank" rel="noopener">GitHub</a>.</p>
    <p>The app uses no external libraries. Emoji and fonts are your device's own.</p>` }
}

};
