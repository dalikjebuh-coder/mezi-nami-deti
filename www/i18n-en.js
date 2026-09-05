/* ================= English pack =================
   Klíčem je česká předloha z index.html — žádné umělé kódy, které by se
   s textem rozešly. Kontrola pokrytí: python3 scripts/i18n-extract.py

   Obsah (decks, bonus, blesk, weekly) se nebere po kusech, ale celý:
   co tu chybí, se v anglické verzi vůbec neukáže. Teď je přeložené všechno —
   6 balíčků, bleskovky, bonusovky i nedělní oznámení.

   Pozor: `id` balíčků a pořadí bonusových karet musí sedět s českou verzí —
   drží na nich uložený postup a odkazy z nedělních oznámení. */
window.I18N_PACKS = window.I18N_PACKS || {};
window.I18N_PACKS.en = {

/* název jazyka vlastním jazykem — takhle se ukáže v seznamu */
label: "English",

ui: {
  /* --- Úvod --- */
  "Mezi námi — rodiče a děti": "The Two of Us — parents and kids",
  "Mezi námi": "The Two of Us",
  "Pro rodiče a děti": "For parents and kids",
  "Karty s otázkami, které pomáhají otevírat témata, o kterých je někdy těžké mluvit.":
    "Question cards that open up the conversations nobody quite knows how to start.",
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
    "Read them out loud together, then seal it with a high-five.",
  "Za pravdu se nezlobíme": "Nobody gets in trouble for the truth",
  "Každá odpověď je v pořádku.": "Every answer is okay.",
  "Necháme domluvit": "We let each other finish",
  "Kdo mluví, toho posloucháme až do konce.": "Whoever's talking gets to finish.",
  "Stačí říct „dost“": "Saying “stop” is enough",
  "Když bude téma nepříjemné, můžeme kdykoliv přestat.":
    "If a question feels like too much, we can stop anytime.",
  "Slibujeme oba": "We both promise",

  /* --- Domů --- */
  "✋ Vítejte zpátky. Sliby platí dál.": "✋ Welcome back. The promises still stand.",
  "O čem si dnes budete povídat?": "What do you want to talk about today?",
  "Když je málo času": "When time is short",
  "Bleskovky": "Quick Ones",
  "Zábavné hry a výzvy": "Fun games and challenges",
  "5 minut": "5 minutes",

  /* --- Bleskovky --- */
  "Zkuste si zahrát rychlé hry a zábavné výzvy podle denní doby nebo třeba při čekání na autobus.":
    "Quick games and playful challenges for any time of day — or while you wait for the bus.",
  "Kdy si těch pár minut dáte?": "When do you have a few minutes?",
  "Ranní start": "Morning start",
  "Naladit se na den a ulehčit ranní loučení": "Ease into the day and make goodbyes lighter",
  "Odpolední pohoda": "Afternoon reset",
  "Setřást napětí ze školy — vybít energii, nebo zvolnit":
    "Shake off school — burn some energy or wind down",
  "Večerní zklidnění": "Evening wind-down",
  "Uzavřít den v klidu a připravit hlavu na spaní":
    "Close the day calmly and get ready for sleep",
  "Otočit kartu": "Flip the card",
  "Splněno, dokázali jsme to!": "Done — we did it!",
  "Navrhnout jinou": "Show me another",
  "bleskovka": "quick one",
  "denní doba": "time of day",
  "Pár minut naplno jen pro vás dva — a ty se počítají nejvíc.":
    "A few minutes of your full attention — those are the moments that count.",

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
    "{kid}, you answered them all. Flip one last card.",
  "Bonusová karta": "Bonus card",
  "Bonusová otázka": "Bonus question",
  "Výměna rolí": "Switch roles",
  "Teď se ptáš ty! Vymysli pro rodiče libovolnou otázku — a rodič musí upřímně odpovědět.":
    "Your turn to ask! Come up with any question for your parent — and they have to answer honestly.",
  "Pro hlubší rozhovor": "To go deeper",
  "🪄 Když nevíš, jak odpovědět": "🪄 If you're stuck for an answer",
  "Jdeme si povídat": "Let's talk",
  "Pro dnešek stačí": "That's enough for today",
  "A je to! Dokončit povídání": "That's it! Finish up",
  "Splněno! Losujeme dál": "Done! Keep going",
  "🖐️ Plácněte si — a hotovo!": "🖐️ High-five — and done!",
  "🖐️ Plácněte si a losujte dál": "🖐️ High-five and draw again",

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
  "Povídání": "Talks",

  /* --- 1.11: vzhled, potvrzovací okna, návaznost --- */
  "Vzhled": "Appearance",
  "Vzhled aplikace": "Appearance",
  "Podle telefonu": "Match the phone",
  "Světlý": "Light",
  "Tmavý": "Dark",
  "Večerní Bleskovky se na chvíli ztmaví samy. Patří to ke zklidnění před spaním.":
    "Evening Quick Ones dim for a moment on their own. It's part of winding down for bed.",
  "Naposledy": "Last time",
  "Karta {n} z {count}": "Card {n} of {count}",
  "Opustit povídání?": "Leave the talk?",
  "Vrátíte se na témata. Otázky, které jste už probrali, zůstanou započítané.":
    "You'll go back to the topics. The questions you've already covered still count.",
  "Opustit povídání": "Leave the talk",
  "Zůstat": "Stay",
  "Resetovat postup?": "Reset your progress?",
  "Prošlé otázky se začnou počítat od začátku. Jména zůstanou.":
    "Covered questions start from zero again. Names stay.",
  "Nechat": "Keep it",
  "povídání celkem": "talks so far",
  "Znovu projít průvodce": "Replay the intro",
  "Tři sliby": "The three promises",
  "Resetovat postup": "Reset progress",
  "✓ Postup resetován": "✓ Progress reset",
  "Oznámení": "Notifications",
  "Povolit oznámení": "Allow notifications",
  "Jednou týdně otázka, nebo malé povzbuzení": "One question or a small nudge, once a week",
  "Oznámení jsou pro tuhle aplikaci v telefonu vypnutá. Povolte je v Nastavení → Mezi námi → Oznámení.":
    "Notifications are turned off for this app on your phone. Turn them on in Settings → The Two of Us → Notifications.",
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
    "This app was built by one dad, not a company. Send me anything — what's missing, what worked at your house, or what's broken.",
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
    text: "Draw a card and talk. Your answers aren't recorded, and you can do it anywhere — even in the car." }
],

/* Balíčky otázek. `id` musí zůstat české ("skola", "kamaradi", …) — na nich
   drží uložený postup a odkazy z nedělních oznámení; překládá se jen to,
   co uživatel vidí. Pořadí balíčků odpovídá české verzi. */
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
  },
  {
    id: "kamaradi", emoji: "🤝", bg: "var(--rose-soft)",
    title: "Friends",
    tagline: "The crew, the fights, who's in",
    desc: "Friends are half of a kid's world. And parents have friends too — there's plenty to tell there as well.",
    questions: [
      [ // Warm-up
        { q: "Who's your best friend right now? What do you like about them?",
          soft: "Who's the most fun to be around? What do you like doing together?",
          fu: [
            "How did you two become friends? Do you remember?",
            "How are you two alike — and how are you totally different?",
            "Do you want to have them over sometime?"
          ] },
        { q: "What's your favorite thing to do with your friends?",
          soft: "When did your friends last make you laugh really hard?",
          fu: [
            "Tell me about the last time it was the most fun.",
            "What's the best part of it? Why that?",
            "What's something you've never tried together that you'd want to?"
          ] },
        { q: "What makes someone a good friend?",
          soft: "What does a good friend do when you're sad?",
          fu: [
            "Which of your friends is best at that?",
            "And what are you good at, as a friend?",
            "What do you do when someone isn't being a good friend?"
          ] },
        { q: "Who would you invite to your dream birthday party?",
          soft: "If your party were tomorrow, who absolutely has to be there?",
          fu: [
            "Why them? What's best about them?",
            "What would you all do at the party?",
            "And who could you skip inviting? That's worth knowing too."
          ] },
        { q: "What's the nicest thing a friend has ever done for you?",
          soft: "When did a friend last do something that made your day?",
          fu: [
            "How did it happen? Tell me.",
            "What went through your head right then?",
            "And what's the nicest thing you've done for them?"
          ] },
        { q: "If you and your friends started a secret club, what would it be?",
          soft: "What would your crew be called, if it had a name?",
          fu: [
            "What would you do in the club? What would the rules be?",
            "Who'd have which job? What about you?",
            "Would you let me visit, at least once?"
          ] }
      ],
      [ // A little braver
        { q: "Have you ever gotten in a fight with a friend? How did it end?",
          soft: "Can you remember a time a friend made you mad? What did they do?",
          fu: [
            "What set it off? What happened right before?",
            "How did you feel afterward — angry, sad, both?",
            "Did you make up? What helped — or what would help now?"
          ] },
        { temp: "How lonely did it get?", q: "Have you ever felt alone in the middle of a group?",
          soft: "Was there ever a day you had nobody to play with? What was that like?",
          fu: [
            "When does it happen most — recess, lunch, outside?",
            "What do you say to yourself in your head right then?",
            "What would have felt good right then — someone coming over, or being left alone?"
          ] },
        { q: "Is there something your friends get to do that you don't? How does that feel?",
          soft: "What are your friends allowed to do that you'd want too?",
          fu: [
            "Which one do you miss out on the most?",
            "Why do you think we do it differently here? Want to hear my reason?",
            "Should we try to work something out? You go first."
          ] },
        { temp: "How much did it sting?", q: "Have you ever been jealous that your friend is friends with someone else?",
          soft: "What's it like when your friend plays with someone else and there's no room for you?",
          fu: [
            "When did that happen? What did you do?",
            "What were you telling yourself in your head?",
            "I know that feeling too. Want to hear where from?"
          ] },
        { q: "Has a friend ever said something that hurt?",
          soft: "Can you remember a friend hurting your feelings — even by accident?",
          fu: [
            "What did they say? What happened after that?",
            "Did you tell them it hurt, or keep it to yourself?",
            "Want to practice how you'd say it? I'll be the friend."
          ] },
        { q: "Is it hard to make a new friend? How does that even work?",
          soft: "If a new kid showed up in your class, what would you do?",
          fu: [
            "How did you make your most recent friend?",
            "What's the hardest part about meeting someone new?",
            "Want to hear how grown-ups make friends? It's not easy either."
          ] }
      ],
      [ // All in
        { q: "Is anyone hurting you — or someone you know?",
          soft: "Is there someone at school you're a little scared of? You don't have to say a name.",
          fu: [
            "Thank you for telling me — that took courage. What's going on?",
            "How long has it been going on? Does any adult know?",
            "We'll figure out what to do next together. I'll explain every step, and you won't have to face it alone."
          ] },
        { q: "Have you ever done something to a friend that you felt bad about after?",
          soft: "Can you remember a time you hurt someone? What happened?",
          fu: [
            "What part of it bothers you the most?",
            "It happens to everybody — me too. Want to hear what I did once?",
            "Is there anything left to fix? What would make your friend happy?"
          ] },
        { q: "Do you ever do things just so other kids will accept you?",
          soft: "Have you ever been afraid your friends wouldn't like the real you?",
          fu: [
            "When was the last time? What did you do?",
            "What's it like doing something you don't really want to do?",
            "What's great about you without any of the performing? Let me tell you what I see."
          ] },
        { temp: "How heavy was it to carry?", q: "Has a friend ever told you a secret that weighed on you?",
          soft: "Do you know something you maybe should tell an adult, but you promised not to?",
          fu: [
            "You don't have to say whose it is. How big is the secret?",
            "What's it like carrying it around?",
            "Here's a deal: when it's about safety, telling isn't betraying. Want to talk it through?"
          ] },
        { q: "Have you ever joined in laughing at someone when you didn't want to?",
          soft: "Has everyone been laughing at somebody and you joined in so you wouldn't stand out?",
          fu: [
            "What was going on? Who were they laughing at?",
            "How did you feel after you joined in?",
            "That happens to almost everyone. What would help you not join in next time?"
          ] },
        { temp: "How big is that fear?", q: "Are you ever scared of losing a friend?",
          soft: "Have you thought about what it'd be like if your friend moved away or found a different crew?",
          fu: [
            "When does that cross your mind? What sets it off?",
            "What would you miss the most?",
            "Want to know what happened with my friends from when I was a kid?"
          ] }
      ]
    ]
  },
  {
    id: "strachy", emoji: "👻", bg: "var(--plum-soft)",
    title: "Fears and worries",
    tagline: "What scares me, what's bugging me",
    desc: "A fear gets smaller the moment it's said out loud. And kids love hearing that grown-ups are scared of things too.",
    questions: [
      [ // Warm-up
        { q: "What were you scared of when you were little that doesn't scare you anymore?",
          soft: "Which fear have you already beaten? How did you pull that off?",
          fu: [
            "How did you beat it? What helped?",
            "Did somebody help you? Who?",
            "What would you tell a smaller kid who's still scared of it?"
          ] },
        { q: "What helps you when you're scared?",
          soft: "What do you do when you wake up at night and something feels off?",
          fu: [
            "When did you last use it? Did it work?",
            "What can I do when I can see that you're scared?",
            "Should we come up with a backup, in case the first thing isn't enough?"
          ] },
        { q: "Where's the safest place in the world for you?",
          soft: "Where do you feel best when you want some peace and quiet?",
          fu: [
            "What makes it so safe? What's there?",
            "How do you feel there? What do you notice?",
            "Can we do anything to make more places like that?"
          ] },
        { q: "Who's the bravest person you know?",
          soft: "Who do you think isn't scared of anything? How do they do it?",
          fu: [
            "What brave thing did they do? Tell me.",
            "Do you think they weren't scared at all — or were scared and did it anyway?",
            "What are you brave about? I've got one in mind."
          ] },
        { q: "What's something you did even though you were a little scared?",
          soft: "When did you last grit your teeth and go for it anyway?",
          fu: [
            "How did you work up to it? What helped?",
            "How did it feel afterward?",
            "What can you take from that for the next time you're scared?"
          ] },
        { q: "If one animal were going to protect you, which would you pick?",
          soft: "What animal would sleep by your bed, if it could?",
          fu: [
            "What would it protect you from?",
            "What would its name be? What would it be like?",
            "Should we draw it together? It could actually hang by your bed."
          ] }
      ],
      [ // A little braver
        { temp: "How big is that fear?", q: "What scares you the most right now?",
          soft: "If fears were animals, what animal would your biggest one be?",
          fu: [
            "When does that fear show up — at night, at school, when you're alone?",
            "Where do you feel it in your body — stomach, chest, head?",
            "Do you want us to come up with something for it — or was saying it out loud enough?"
          ] },
        { temp: "How much does that fear bug you?", q: "Are you ever scared of something that seems silly to you?",
          soft: "Is there a fear you're a little embarrassed about? I bet it isn't silly.",
          fu: [
            "Will you tell me what it is? I promise I won't laugh.",
            "You know grown-ups have those too? Want to hear one of mine?",
            "What if we gave that fear a name? Anything you can call by name gets smaller."
          ] },
        { q: "What shows up in your bad dreams?",
          soft: "Can you remember a scary dream? What was in it?",
          fu: [
            "Tell me one you remember. How did it end?",
            "What do you do when you wake up from one?",
            "Want to make up a better ending for it? You're the director."
          ] },
        { temp: "How big is that fear?", q: "Are you scared of something that doesn't bother anyone else?",
          soft: "Is there something other kids laugh about that doesn't feel good to you?",
          fu: [
            "What is it? We don't laugh at fears in this house.",
            "How do you handle it when it comes up — at school, say?",
            "Everybody has a fear like that. Want to hear mine?"
          ] },
        { q: "Do you ever hide being scared so it doesn't show?",
          soft: "Do you ever play the hero when you're scared on the inside?",
          fu: [
            "Who do you hide it from the most?",
            "How do you do it, so it doesn't show?",
            "You don't have to hide it from me. How will I know you're scared if you don't say anything?"
          ] },
        { q: "Does something scare you that grown-ups say is nothing?",
          soft: "Has anyone ever told you “don't worry, it's nothing” — and it didn't help at all?",
          fu: [
            "What was it? You can tell me.",
            "What would you rather hear instead of “it's nothing”?",
            "I'm sorry if I've said that too. What should I say next time?"
          ] }
      ],
      [ // All in
        { temp: "How hard was that to say?", q: "Is there a fear you've never told anyone about?",
          soft: "Is there something that scares you after we turn the lights off? You can just hint at it.",
          fu: [
            "Thank you for being brave. Do you want to say more, or is that enough for now?",
            "How long have you been carrying it?",
            "Do you want us to do something about it together — or should we just both know about it for now?"
          ] },
        { temp: "How big is the worry?", q: "Do you ever worry about someone in our family?",
          soft: "Do you ever think that something could happen to someone here?",
          fu: [
            "About who? And when does it cross your mind?",
            "What do you imagine could happen?",
            "What would you need to hear to make that fear smaller?"
          ] },
        { temp: "How much do our fights bother you?", q: "What goes through your head when we argue at home?",
          soft: "Where do you go and what do you do when things get tense here?",
          fu: [
            "What do you do right then? Where do you go?",
            "Are you scared of something when it happens? What most?",
            "What could we do after a fight to make you feel better? Should we agree on a signal?"
          ] },
        { temp: "How hard is this to talk about?", q: "Have you ever been scared of me?",
          soft: "Was there ever a time you didn't want to come to me because you didn't know how I'd react?",
          fu: [
            "When was that? What did I do?",
            "Thank you for being brave. What did you need right then?",
            "What can I do so you never have to be scared of me?"
          ] },
        { temp: "How big is the worry?", q: "Are you scared about what happens when you grow up?",
          soft: "When you picture yourself as an adult, are you excited — or is something about it scary?",
          fu: [
            "What scares you the most about being grown up?",
            "Where does that come from — did you see or hear something?",
            "Want to hear what I was scared of as a kid — and how it actually turned out?"
          ] },
        { q: "Do you ever think something so scary you're afraid to say it out loud?",
          soft: "Are there thoughts you chase out of your head? You don't have to say which — a nod is enough.",
          fu: [
            "Want to try saying even a piece of it? Whisper it if you want.",
            "How often does a thought like that come around? At night, during the day?",
            "Talking about scary thoughts can make them feel less powerful. Whenever you want, we can talk about them together."
          ] }
      ]
    ]
  },
  {
    id: "rodina", emoji: "🏡", bg: "var(--sage-soft)",
    title: "Our family",
    tagline: "What's good at home — and what's not",
    desc: "Family is the hardest thing to talk about while you're inside it. Here's a calm place to try.",
    questions: [
      [ // Warm-up
        { q: "What's your favorite thing we do together at home?",
          soft: "What's the best day the two of us ever had? What did we do?",
          fu: [
            "What's the best part of it for you?",
            "When did we last do it? How was that?",
            "When are we doing it again? Let's pick a day right now."
          ] },
        { q: "Which food from our kitchen deserves a gold medal?",
          soft: "What smells or tastes the best in our house?",
          fu: [
            "What exactly is best about it — the taste, the smell, or when we eat it?",
            "And which food would you send to the bench?",
            "Should we make it together next time? What part do you want to do?"
          ] },
        { q: "If you got to plan a family weekend, what would we do?",
          soft: "What would we do this weekend if you were the only one deciding?",
          fu: [
            "What part absolutely can't be skipped?",
            "Who would you bring — just us, or somebody else?",
            "What part of that plan could we actually pull off? Let's pick one."
          ] },
        { q: "If you described our family in three words, what would they be?",
          soft: "If they made a movie about us, what would it be called?",
          fu: [
            "Why those words? Explain them to me.",
            "What word would you want to add someday?",
            "Want to know the three words I'd use for you?"
          ] },
        { q: "What do we have at our house that nobody else has?",
          soft: "What's the first thing you'd show a friend coming over for the first time?",
          fu: [
            "How did that come about? Whose idea was it?",
            "What's your favorite part of it?",
            "What else like that could we start, just for us?"
          ] },
        { q: "What's your favorite thing we always do? Even a small one.",
          soft: "What do we do over and over — and it's a good thing?",
          fu: [
            "Do you remember how it started?",
            "What would you miss if we stopped?",
            "Should we invent one more? You go first."
          ] }
      ],
      [ // A little braver
        { q: "What do you wish we did together more often?",
          soft: "What did we used to do together that somehow faded away?",
          fu: [
            "When did we last do it? How was it?",
            "What's getting in the way? Any ideas?",
            "Let's settle it right now — when do we start?"
          ] },
        { q: "When do you like being with me the most? And when do I get on your nerves?",
          soft: "When am I the best in the world — and when am I annoying?",
          fu: [
            "Tell me more about the good part — what am I doing?",
            "And when I'm annoying — what exactly am I doing? Go ahead and say it, I won't be upset.",
            "I'll pick one thing and do it differently. Which one do you want?"
          ] },
        { q: "Is there something we say at home that you hate hearing?",
          soft: "What word or sentence at home always ruins your mood?",
          fu: [
            "What happens inside you when you hear it?",
            "Why do you think we say it? Want to hear what I actually mean by it?",
            "What would you want to hear instead?"
          ] },
        { temp: "How much does it hurt?", q: "Do you ever feel like someone here gets more attention than you?",
          soft: "Do you ever feel like there's less time left over for you?",
          fu: [
            "When do you feel it the most?",
            "What do you do then — ask for attention, or pull away?",
            "What if we had time with just the two of us? When, and what would it look like?"
          ] },
        { q: "Which rule in this house feels unfair to you?",
          soft: "If you could cancel one of our rules, which one would it be?",
          fu: [
            "What feels unfair about it? Make your case like a lawyer.",
            "Want to hear why we have that rule? Maybe it has a weak spot.",
            "Pitch me a better version. If it's good, we'll try it for a week."
          ] },
        { q: "What should we be praising you for more often?",
          soft: "What do you do well that nobody notices?",
          fu: [
            "How long have you been doing it?",
            "How does it feel when nobody notices?",
            "You're right, I'll start paying attention. What should I praise right now?"
          ] }
      ],
      [ // All in
        { temp: "How hard is it to say?", q: "Is there something you want to tell me but you're scared to?",
          soft: "Try starting with: “I want to tell you that…” — and finish just a piece of it.",
          fu: [
            "What exactly are you afraid would happen?",
            "Remember our promise? Nobody gets in trouble for the truth. Would it help to start with just a piece?",
            "Do you want to say it now, or wait until you're ready? Either one is fine."
          ] },
        { temp: "How big was that sadness?", q: "Were you ever sad about something I did — and never told me?",
          soft: "Can you remember something I did that hurt?",
          fu: [
            "What happened? Tell me, I'm listening.",
            "I'm sorry. What did you need from me right then that you didn't get?",
            "What should I do if it happens again? Let's agree on it."
          ] },
        { q: "Can you say what you really think at home?",
          soft: "When did you last think something and decide not to say it?",
          fu: [
            "When is it easy — and when is it impossible?",
            "What would have to change for it to always be possible?",
            "Want to try right now? Tell me one thing you've been keeping to yourself."
          ] },
        { temp: "How big was the worry?", q: "Have you ever heard us talking about something that worried you?",
          soft: "Did you ever catch a piece of a grown-up conversation that scared you?",
          fu: [
            "What did you hear? Let's go over what was actually going on.",
            "How long did you carry that around?",
            "Here's a deal: if you overhear something, come ask me. I'll always tell you the truth. Deal?"
          ] },
        { temp: "How often do you feel it?", q: "Have you ever felt like I don't have time for you?",
          soft: "When did you last need me and I had something “more important” going on?",
          fu: [
            "When does that happen the most?",
            "What did you need from me right then?",
            "I'm sorry. Should we agree on a signal that means “I really need you right now”?"
          ] },
        { q: "Is there something missing for you at home?",
          soft: "If you could magic one thing into our house — and it doesn't have to be a thing — what would it be?",
          fu: [
            "How long have you been missing it?",
            "What would change if it were here?",
            "What part of that can we actually make happen? Let's start on it."
          ] }
      ]
    ]
  },
  {
    id: "telefon", emoji: "📱", bg: "var(--sky-soft)",
    title: "Screens and games",
    tagline: "Phones, videos, gaming",
    desc: "Instead of fighting about screen time, try something else. Find out what the other person actually loves in there — and what's waiting for them.",
    questions: [
      [ // Warm-up
        { q: "What game or video are you into right now? Will you show me?",
          soft: "What's the first thing you'd show me on your phone or tablet?",
          fu: [
            "Show me the best part. I want to see it.",
            "What's the hardest thing in that game? How'd you get through it?",
            "Can I play it with you sometime? Will you teach me?"
          ] },
        { q: "What's the best feeling in gaming?",
          soft: "When did you last go “yesss!” at a game? What happened?",
          fu: [
            "When did you last feel it? What went right?",
            "Where do you feel it — in your stomach, your hands?",
            "Do you get that same feeling anywhere besides games? Where?"
          ] },
        { q: "If you could become a character from a game, which one would you pick?",
          soft: "Which game or video character is the most like you?",
          fu: [
            "What's the first thing you'd do as that character?",
            "What do you admire about them? What can they do that you can't?",
            "And what can you do that they can't? There's definitely something."
          ] },
        { q: "If you made your own video, what would it be about?",
          soft: "What are you good enough at that people would watch?",
          fu: [
            "How would it start? Make up the first line.",
            "Who should watch it?",
            "Should we actually film it this weekend? I'll run the camera."
          ] },
        { q: "What have you learned from videos or games? There's got to be something.",
          soft: "Have you ever surprised somebody with something you knew from the internet?",
          fu: [
            "Where did you run into it?",
            "Have you ever actually used it?",
            "Teach me. Right now, I've got time."
          ] },
        { q: "If we had a family game night, what would we play?",
          soft: "Which game would you rather play with me than by yourself?",
          fu: [
            "What would you have to teach me first?",
            "Which of us would be better? Be honest.",
            "Let's pick a day. When are we playing?"
          ] }
      ],
      [ // A little braver
        { temp: "How mad does it make you?", q: "What's it like when I say “that's enough, turn it off”?",
          soft: "What goes through your head when you have to quit in the middle of a game?",
          fu: [
            "What's the worst part — that the game ends, or the way I say it?",
            "How could I say it so it's easier to hear?",
            "Should we agree on a rule that's fair to both of us? You go first."
          ] },
        { q: "Have you ever seen something online that made you uncomfortable?",
          soft: "Has something ever popped up that you closed real fast?",
          fu: [
            "Do you want to tell me what it was? I won't be angry, I promise.",
            "How did it feel — scary, or more just weird?",
            "Should we agree on what you'll do if it happens again?"
          ] },
        { q: "Am I on my phone too much? When does it bother you?",
          soft: "When do you wish I'd put the phone down and come to you?",
          fu: [
            "When did you last need me while I was staring at my phone?",
            "How did that feel?",
            "You're allowed to tell me to put it down. What word should we use for that?"
          ] },
        { q: "How much screen time feels about right to you? And when is it too much?",
          soft: "How do you know when you've been playing too long?",
          fu: [
            "How do you feel when you play too long? Does anything change?",
            "What would you do instead if screens didn't exist?",
            "You pitch the rule. If it's fair, we'll try it for a week."
          ] },
        { temp: "How big was that anger?", q: "Have you ever gotten so mad at a game that you couldn't handle it?",
          soft: "What does your body do when a game isn't going your way?",
          fu: [
            "What happened? What set you off?",
            "Where do you feel that anger? What does it do to your hands, your mouth?",
            "That happens to grown-ups too. Should we come up with what to do when it hits?"
          ] },
        { q: "Do you ever keep playing even after it stopped being fun?",
          soft: "Has it happened that you wanted to stop — and couldn't?",
          fu: [
            "What keeps you there? Rewards, friends, being bored?",
            "How do you feel afterward, when you finally stop?",
            "Did you know games are designed on purpose to be hard to quit? Let me tell you how they do it."
          ] }
      ],
      [ // All in
        { q: "Has someone you don't know ever messaged you? What did they say?",
          soft: "Has a stranger ever reached out to you? You don't have to tell me everything — a piece is enough.",
          fu: [
            "Thank you for telling me. What did they say? Can you show me?",
            "Did you answer? What happened next?",
            "Here's a deal: if a stranger reaches out, you show me and we handle it together. Deal?"
          ] },
        { q: "Do you do anything on your phone that you think I'd forbid?",
          soft: "Is there an app or a game you keep hidden from me?",
          fu: [
            "Thanks for being honest — that took guts. What is it?",
            "Why do you think I'd forbid it? And what draws you to it?",
            "Should we try to agree on rules that make sense to both of us?"
          ] },
        { q: "If something bad happened to you online, would you tell me?",
          soft: "Who would you go to if someone online was hurting you?",
          fu: [
            "What would stop you — being afraid of punishment, embarrassment, something else?",
            "What would I have to do to make it easy to tell me?",
            "I promise: if you tell me something like that, I won't be angry and I won't take your phone away. Do you believe me?"
          ] },
        { q: "Have you seen kids writing mean things to each other? Or has anyone written them to you?",
          soft: "Has someone you know been hurt by things on their phone?",
          fu: [
            "What was being written? You don't have to say all of it.",
            "How did it feel — even if it wasn't about you?",
            "If it ever happens, what do we do first? Let's decide right now."
          ] },
        { q: "Have you ever sent a message you wish you could take back?",
          soft: "Have you ever written something you regretted afterward?",
          fu: [
            "What happened after?",
            "What would you do differently today?",
            "Everybody has one — me too. Want to hear about my worst message?"
          ] },
        { q: "What's it like when your phone's dead — peace, or panic?",
          soft: "What happens inside you when you don't have a phone or a tablet?",
          fu: [
            "When were you last without a screen for a long stretch? What was that like?",
            "What comes to mind to do when there's nothing “to watch”?",
            "Should we try half a day with no screens — both of us? What would we do?"
          ] }
      ]
    ]
  },
  {
    id: "pocity", emoji: "🌈", bg: "var(--honey-soft)",
    title: "Feelings",
    tagline: "Joy, anger, sadness, tears",
    desc: "Joy, anger, sadness — everybody has them. We almost never say them out loud. Let's try it together.",
    questions: [
      [ // Warm-up
        { q: "What made you laugh today?",
          soft: "When did you laugh out loud today or yesterday?",
          fu: [
            "Tell me! I want to laugh too.",
            "Who was there? Did you laugh together?",
            "What makes us both laugh, guaranteed? Let's figure it out."
          ] },
        { q: "What do you look like when you're really happy? Show me!",
          soft: "Do you jump, shout, or just smile when you're happy?",
          fu: [
            "When were you last that happy? What happened?",
            "Where do you feel happy in your body — stomach, legs, everywhere?",
            "Now imitate me when I'm happy. What do I look like?"
          ] },
        { q: "What cheers you up every single time?",
          soft: "If there were a medicine for a bad mood, what would be in it?",
          fu: [
            "How did you figure out that this works?",
            "When do you need it the most?",
            "Should I just use it when I see you're sad — or ask first?"
          ] },
        { q: "If your mood today were a color, what color would it be?",
          soft: "What color is today? And what color was yesterday?",
          fu: [
            "Why that one? What's hiding in it?",
            "What color do you want tomorrow to be?",
            "Guess what color I am today. Then I'll tell you."
          ] },
        { q: "When were you last proud of yourself?",
          soft: "What went so well that you clapped for yourself in your head?",
          fu: [
            "Tell me the whole thing. I want details.",
            "Did you tell anyone? Why, or why not?",
            "I'm proud of you too. Know what for? Let me tell you."
          ] },
        { q: "What are you looking forward to most right now?",
          soft: "What good thing is coming up? Even a tiny one counts.",
          fu: [
            "What'll be the best part?",
            "What's it like to look forward to something? Where do you feel it?",
            "Should we come up with something to look forward to together?"
          ] }
      ],
      [ // A little braver
        { temp: "How big can that anger get?", q: "What do you do when you're angry?",
          soft: "Where does your anger go — your hands, your mouth, or into tears?",
          fu: [
            "Where do you feel the anger? Hands, mouth, stomach?",
            "What sets it off most often?",
            "Should we figure out what to do with anger so it doesn't hurt anyone — including you?"
          ] },
        { temp: "How big was that sadness?", q: "When were you last sad? What happened?",
          soft: "Can you remember a time you were close to tears?",
          fu: [
            "What was the saddest part of it?",
            "Did you tell anyone, or carry it by yourself?",
            "What helped back then — or what would help if it happened again?"
          ] },
        { q: "Do you ever hide feelings so nobody sees them?",
          soft: "Do you ever smile when you don't feel like smiling at all?",
          fu: [
            "Which feelings do you hide the most?",
            "Who do you hide them from? Why them?",
            "What would have to change so you never have to hide them here?"
          ] },
        { temp: "How hot did your face get?", q: "When were you last embarrassed?",
          soft: "Has something happened that made you want to disappear into the floor?",
          fu: [
            "What happened? We only laugh about it together.",
            "What does being embarrassed do to your body? Do you go red, go quiet?",
            "Want to hear my most embarrassing moment? It's a good one."
          ] },
        { q: "Have you ever been jealous of someone? Of what?",
          soft: "Is there something someone else has where you think “I want that too”?",
          fu: [
            "Who do you envy the most, and for what?",
            "What does it feel like? More sad, or more angry?",
            "And do you know what somebody might envy about you? Let's try to guess."
          ] },
        { q: "How can you tell when I'm in a bad mood? And what do you do then?",
          soft: "What do I do when I'm angry or sad? Describe me.",
          fu: [
            "Act me out. Go ahead and exaggerate, I can take it.",
            "What do you think right then? Are you afraid it's your fault?",
            "Remember this: my moods are not your fault. How should I remind you of that?"
          ] }
      ],
      [ // All in
        { temp: "How big was that sadness?", q: "Have you ever been so sad you didn't know what to do with it?",
          soft: "What's it like when the sadness gets too big? Where do you feel it?",
          fu: [
            "When was that? What was going on?",
            "Where did it hurt the most in your body?",
            "If it comes back, what do we do? Let's decide now, while it's calm."
          ] },
        { q: "Have you ever cried in secret so nobody would see?",
          soft: "When did you last cry and nobody knew about it?",
          fu: [
            "Why in secret? What would happen if someone saw?",
            "Did you know that I cry sometimes too? Everyone's allowed to.",
            "What should I do next time I see you crying — hug you, or leave you be for a bit?"
          ] },
        { q: "What do you need to hear when things are at their worst?",
          soft: "Try finishing this: “When I feel bad, it would help if…”",
          fu: [
            "Try saying it exactly — what would the words be?",
            "Who do you most need to hear it from?",
            "I'll say it now so you know how it sounds. Then tell me if that was it."
          ] },
        { temp: "How heavy is it to carry?", q: "Are you carrying something you're ashamed of?",
          soft: "Is there something you've never said because it's embarrassing?",
          fu: [
            "You don't have to say all of it. A piece is enough — or just how big it is.",
            "How long have you been carrying it?",
            "Shame grows in the dark and shrinks in the light. Whenever you want to say it, I'm here."
          ] },
        { q: "Do you ever think we love you less when you act up?",
          soft: "When I'm angry with you, what do you think I feel about you?",
          fu: [
            "When did you last think that? What was going on?",
            "What would you have needed to hear right then?",
            "Here's a secret: I love you exactly the same, even when I'm angry. Do you believe me?"
          ] },
        { temp: "How big is that loneliness?", q: "Do you ever feel alone even with people all around you?",
          soft: "Have you ever been in a full classroom — and still felt sad?",
          fu: [
            "When does that happen? What's going on around you?",
            "What would help right then?",
            "I know that feeling too. Should we agree on a signal so you can tell me without words?"
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
  "Give your parent five words. They have to spell each one backwards.",
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

/* Bleskovky. Klíče rano/odpoledne/vecer musí zůstat — sahá na ně kód. */
blesk: {
  rano: {
    title: "Morning start", emoji: "🌅",
    items: [
      { emoji: "✊", title: "The secret palm code",
        text: "Invent a secret code you press into each other's palm before school — say one long squeeze, two quick ones, and a stroke. It means: “I'm thinking about you, you've got this.” Trade the code right now, and use it once more right before you say goodbye." },
      { emoji: "🎛️", title: "The mood dial",
        text: "Imagine there's an invisible dial on your stomach that sets your morning energy. What percent is it at right now? And what percent do you want it at when you walk into school? Turn the dial, make a “bzzzt” sound, and try holding your face and your body that way for a second." },
      { emoji: "🔍", title: "Detectives on the way",
        text: "You're on a secret mission on the way to school. You have to find and point out to each other: 1) something perfectly round, 2) something bright yellow, 3) something that looks like a face — car headlights, house windows. Who gets there first?" },
      { emoji: "🦜", title: "Echo game",
        text: "One of you makes a weird, funny noise (a monkey, a rocket launching, a whistling kettle) plus a movement. The other has to copy it back like an exact echo. Then switch. Do it three times in a row!" },
      { emoji: "🦁", title: "Animal wake-up",
        text: "Today you don't wake up as people — you wake up as sleepy lion cubs (or kittens). How does a cub stretch and yawn its very first stretch of the morning? Stretch out on the bed or the rug and roar together, loud!" },
      { emoji: "🙈", title: "Blind breakfast",
        text: "Close your eyes for a minute at breakfast. Let your kid feed you a bite of something — a piece of apple, a spoonful of yogurt — and guess what it is. Then switch." },
      { emoji: "🤖", title: "Robo-breakfast",
        text: "The parent turns into a remote-controlled robot, and the kid has to talk them through taking a bite of breakfast (“Arm forward, close fingers, lift to mouth”). Then switch." },
      { emoji: "🪞", title: "Mirror dance",
        text: "Put on one favorite song while you get dressed. One of you does dance moves and the other copies them exactly, like a mirror. Switch after a minute." },
      { emoji: "🕵️", title: "Secret agent on the road",
        text: "Riding in the car or on the bus, watch the people around you. Pick one and invent a quick story about them — what secret mission are they on, and what's hidden in their bag?" },
      { emoji: "👏", title: "Morning clap-along",
        text: "Stand facing each other, no talking. Make up a rhythm — clap, right hand against their right hand, clap, left against left. Speed it up until one of you messes it up." },
      { emoji: "🚗", title: "License plate hunt",
        text: "Out on the road, hunt for numbers on license plates. Who's first to spot a car with your age on the plate — or your favorite number?" },
      { emoji: "⚽", title: "Word chain, hard mode",
        text: "Play word chain, but each new word has to start with the last two letters of the one before it (garden → entry → rye → yellow). How long a chain can you keep alive?" },
      { emoji: "🌦️", title: "The forecast",
        text: "If you had to forecast today's mood at school like a TV meteorologist, what's coming? Sunny with scattered smiles, or a chance of clouds over math?" },
      { emoji: "🦶", title: "Super-walking",
        text: "On the way to school, change your walk on command. The parent calls it: “Giant steps!”, “Moon walk!” (slow motion) or “Robot walk!”. After a minute, the kid gives the orders." },
      { emoji: "🏗️", title: "Breakfast architect",
        text: "Turn breakfast into construction. Who can build the tallest tower on their plate out of bread, cheese or fruit — one that's still standing when you finish counting to ten?" },
      { emoji: "✨", title: "A wish in your pocket",
        text: "Imagine you're holding invisible magic dust in your palm. Blow it into each other's jacket pocket — that's luck and calm for the day. Any time school feels hard, reach into your pocket." }
    ]
  },
  odpoledne: {
    title: "Afternoon reset", emoji: "☀️",
    items: [
      { emoji: "🎈", title: "Letting off steam",
        text: "School takes an enormous amount of self-control — now it's time to shake it off. Stand up and shake out your right arm, then your left, then your legs, then your whole body, making a falling-rock noise (“aaaah-thud”). Do it twice, then go completely loose and breathe out." },
      { emoji: "🍩", title: "If today were a food…",
        text: "If your day at school were a food, what would it be? A chocolate donut, a hot chili pepper, a dill pickle, or plain dry rice? And why that one?" },
      { emoji: "🤐", title: "Telepathic snack",
        text: "Put a bite of your snack in your mouth, close your eyes, and chew completely silently. Try to focus on nothing but how it tastes when you can't hear it. Raise your hand the moment you swallow. Who can chew the longest and the quietest?" },
      { emoji: "👽", title: "An alien's first day on Earth",
        text: "For three minutes the parent turns into an alien who just landed and understands nothing at all. The kid has to explain one totally ordinary thing — how a toilet flush works, why people wear shoes, what a textbook is. The alien asks very weird questions!" },
      { emoji: "🌤️", title: "Today's weather",
        text: "If your day today were weather, what weather would it be? A thunderstorm, sunshine, or overcast with scattered showers? And why?" },
      { emoji: "🍌", title: "Snack, upside down",
        text: "Snack time, but backwards! Eat it somewhere unusual today — under the table, on a blanket on the floor like a picnic, or with your hands behind your back (who finishes a piece of banana first?)." },
      { emoji: "🎤", title: "Live from the kitchen",
        text: "Do a TV news segment. Grab a wooden spoon or a marker for a microphone and interview your kid about the interesting things that happened today. Don't forget the serious journalist voice!" },
      { emoji: "🛋️", title: "Doing nothing together",
        text: "Take five minutes on the couch where you just curl up together and aren't allowed to do anything at all — not even talk. Whoever speaks or moves first loses. Enjoy the quiet." },
      { emoji: "⏱️", title: "King of the minute",
        text: "Both close your eyes. The job is to say “Now!” at the exact moment you think one minute has gone by. The parent times it on their phone. Who was closer?" },
      { emoji: "🎭", title: "Two truths and a lie",
        text: "Each of you says two true things about your day and one made-up one (“We had pizza for lunch, I got an A, and my teacher was wearing a crown”). The other one guesses which is the lie." },
      { emoji: "🌋", title: "The floor is lava",
        text: "The living room floor just turned into molten lava! You have three minutes to get from one side of the room to the other without touching the ground. Use the pillows, the couch, the chairs." },
      { emoji: "😜", title: "Try not to laugh",
        text: "One of you is not allowed to smile or laugh, no matter what. The other makes faces, noises and ridiculous moves to crack them. No touching! Who lasts longer?" },
      { emoji: "👂", title: "Sound radar",
        text: "Sit in complete silence for one minute with your eyes closed. Who counts more different sounds from outside or the next room? A car going by, the fridge, a clock ticking…" },
      { emoji: "🧐", title: "What changed?",
        text: "The kid studies the parent carefully. Then the parent steps into the hall and changes one small thing — rolls up a sleeve, takes off a sock, moves a ring to another finger. Can the kid spot what's different?" },
      { emoji: "5️⃣", title: "The five-second challenge",
        text: "The parent fires off quick prompts and the kid has five seconds to name three things (“Name three green things”, “three things you can eat”, “three superheroes”). Then swap roles." },
      { emoji: "🏰", title: "Couch fort",
        text: "Build a lightning-fast hideout: two chairs, a blanket, and the couch cushions. Crawl inside for three minutes and talk about what it'd be like to have a secret base in there." },
      { emoji: "🎬", title: "Today, the movie",
        text: "If you filmed today as a movie, what would it be called? An action ride, a comedy, or sci-fi? And who'd be today's main villain?" },
      { emoji: "🏋️", title: "Heavyweight",
        text: "Imagine each of your shoes weighs a hundred pounds. Try getting from the front door to the kitchen — you have to haul your legs up with enormous effort and puff the whole way. Who struggles harder?" }
    ]
  },
  vecer: {
    title: "Evening wind-down", emoji: "🌙",
    items: [
      { emoji: "🎨", title: "Drawing on backs",
        text: "The kid lies on their stomach. Use one finger to gently draw an animal or a simple shape on their back — a house, a sun, a heart. They guess with their eyes closed. Then switch — see whether you can guess what they draw on you!" },
      { emoji: "📔", title: "The diary in your head",
        text: "Close your eyes for a moment. Each of you play today back in your head like a movie and find the one moment that was the best — the one you want to save in your “memory box”. Then tell each other." },
      { emoji: "📻", title: "Whisper radio",
        text: "Turn off the light and talk only in whispers. Imagine you're the hosts of a late-night radio show for tired elves. Whisper three ridiculous things to each other — or talk about what you'd like to dream about tonight." },
      { emoji: "📖", title: "A story from three words",
        text: "The kid picks three completely random words (say: sock, rocket, dog). The parent's job is to invent a very short, calm bedtime story with all three in it. The story has to end with the hero going to sleep." },
      { emoji: "🛸", title: "The flying vacuum",
        text: "No book tonight. Make up a story together about a kid and a flying vacuum cleaner (or a talking pillow). The parent says the first sentence, the kid says the second — keep trading until the story settles down toward sleep." },
      { emoji: "✍️", title: "The mystery touch",
        text: "Under the covers, take your kid's hand and “write” a simple shape in their palm with your finger — a circle, a heart, an X — or a letter. Can they guess it with their eyes closed?" },
      { emoji: "💗", title: "Kind writing",
        text: "Write or draw one word on your kid's back with your finger — one that makes them feel warm inside. “LOVED”, “BRAVE”, or just a heart. Let them guess what it was." },
      { emoji: "🌀", title: "The thought vacuum",
        text: "At bedtime a head is full of thoughts. Pick up the imaginary thought vacuum — hold your hand near your kid's ear and go “bzzzz” — and suck out all the worries and to-dos of the day, so sleep comes easy." },
      { emoji: "🤫", title: "What the blanket hears",
        text: "Lie down, pull the blanket up to your nose, and talk into it. The blanket muffles your voice. Try telling it one secret or one wish that nobody else in the house is allowed to hear — just your blanket." },
      { emoji: "🧸", title: "Breathing with a stuffed animal",
        text: "The kid puts a favorite stuffed animal on their stomach. Lights out. The job is to breathe so deeply that the animal rides up and down like it's on ocean waves. Watch it together quietly for two minutes." },
      { emoji: "🧠", title: "The memory game",
        text: "Close your eyes and try to describe the room you're lying in from memory. How many windows are there? What color is the dresser? What exactly is on the nightstand? Who remembers more details?" },
      { emoji: "🚂", title: "The train to Dreamland",
        text: "Imagine that every night you board an express train to the land of dreams. What does your compartment look like? Who's riding with you, and what secret snack did you pack?" },
      { emoji: "👍", title: "Goodnight thumb war",
        text: "Grab hands and lock fingers — everything except the thumbs. Have a slow, lazy thumb war under the covers. Who can pin the other's thumb for three seconds?" },
      { emoji: "🙏", title: "Three good things",
        text: "Find three things from today you can be thankful for. Tiny ones absolutely count — a good lunch, a funny dog on the street, or the sun finally coming out in the afternoon." },
      { emoji: "🧊", title: "Melting your muscles",
        text: "Squeeze every muscle in your body for five seconds — hands in fists, face like you just bit a lemon, legs pulled up tight. On “now”, let it all go, like an ice cube melting in warm water." },
      { emoji: "💌", title: "Telephone in bed",
        text: "Whisper one word into your kid's ear. They whisper it back to you, a little quieter. Keep passing it back and forth until there's nothing left but a soft breath." }
    ]
  }
},

/* Odkazy `card` musí sedět s pořadím otázek v `decks` — stejná místa jako
   v české verzi, ať oba jazyky nabízejí stejnou pestrost. */
weekly: [
  { title: "This week's nudge",
    body: "In the car or over dinner, just try asking: “What are you looking forward to most right now?” See what the two of you come up with.",
    card: { deck: "pocity", depth: 0, idx: 5 } },
  { title: "Rough week?",
    body: "That's okay. You don't have to plan something big for your kids. Sometimes a few minutes with your phone face down is the whole thing. They can tell when you're really there. ❤️" },
  { title: "A question for this week",
    body: "“When did someone last say you did a great job? What was it for?” 💬 Talk it through — and share your own grown-up version too.",
    card: { deck: "skola", depth: 0, idx: 1, soft: true } },
  { title: "A small ritual for this week",
    body: "Next time you're sitting somewhere quiet together, take 3 minutes of silence and count how many different sounds you can hear. 🤫 No rush." },
  { title: "One from your back pocket",
    body: "“If you could turn into any animal, which one would it be and why?” 🦁 See what they come up with — and what you'd choose.",
    card: { bonus: 15 } },
  { title: "An easy start to the week",
    body: "The world won't end if you're not a perfectly educational parent every day. Sometimes the best connection is a long hug at bedtime. ✨" },
  { title: "Something to open up this week",
    body: "Try opening up the subject of fear: “What helps you when you're scared?” Sometimes all it takes is listening, not fixing, and a hug.",
    card: { deck: "strachy", depth: 0, idx: 1 } },
  { title: "See what they pick",
    body: "“Which superpower would you pick — flying, invisibility, or reading minds?” 🦸 Ask when you've got a free minute this week.",
    card: { bonus: 18 } },
  { title: "A new week ahead",
    body: "A deep bond with your kids doesn't take hours. It takes a few moments when you're fully there — no buzzing phone, no thinking about work. 🌾" },
  { title: "A question for a shared moment",
    body: "“Who's your best friend right now? What do you like about them?” 🤝 Let them talk, and ask about the details.",
    card: { deck: "kamaradi", depth: 0, idx: 0 } },
  { title: "Tonight's idea",
    body: "“What would you do if you were invisible for one day?” 🔍 Enjoy making it up together.",
    card: { bonus: 16 } },
  { title: "Whatever this week brings",
    body: "To your kid, you are the whole world. Small rituals and moments of genuine interest make a bigger difference than you'd think. Have a good week. 🤍" }
],

pages: {
  "jak-hrat": { title: "How to play", html: `
    <ol>
      <li><strong>Pick a topic and how deep you want to go.</strong> “Warm-up” is a good place to start.</li>
      <li><strong>Your kid draws a card.</strong> Each talk has two questions and one bonus card with a challenge or a playful question.</li>
      <li><strong>You both answer.</strong> Your kid about school and friends, you about work and your own childhood. It's not an interrogation — it's a conversation.</li>
      <li><strong>Flip the card</strong> (tap it or swipe) — the back has ways to keep the conversation going, plus a gentler version of the question.</li>
      <li><strong>High-five after every question.</strong> And when you're done, be proud of each other.</li>
    </ol>
    <p>The app remembers which questions you've been through, so coming back to the same topic brings new ones. Each topic has six questions at every depth.</p>` },

  "tipy": { title: "Conversation tips", html: `
    <ul>
      <li><strong>Answer too.</strong> Kids open up when you do. Go first if it helps.</li>
      <li><strong>Don't rush.</strong> Silence is fine — kids need time to put an answer together.</li>
      <li><strong>Don't correct or grade the answer.</strong> “Nobody gets in trouble for the truth” holds even when the answer catches you off guard.</li>
      <li><strong>Use the follow-ups on the back</strong> — but only while your kid is still into it. Three questions is a ceiling, not a to-do list.</li>
      <li><strong>A few short talks</strong> beat one long talk. Each one takes only a few minutes.</li>
      <li><strong>Play anywhere:</strong> in the car, at dinner, at bedtime. Best where you don't have to look each other in the eye — side by side is easier.</li>
      <li><strong>“Stop” means stop.</strong> If your kid doesn't want to keep going, stop without negotiating. It'll go better next time.</li>
    </ul>` },

  "faq": { title: "Common questions", html: `
    <p class="faq-q">What age is this for?</p>
    <p>The questions are written for kids roughly 6 to 9. The age range is flexible, though — try it and see.</p>
    <p class="faq-q">Do we both have to answer?</p>
    <p>Yes, that's the heart of it. Every question is for the kid and the parent.</p>
    <p class="faq-q">What if my kid doesn't want to answer?</p>
    <p>Don't push. Try the gentler version on the back of the card, answer it yourself first — or let the card go and tap “That's enough for today”.</p>
    <p class="faq-q">Are our answers saved anywhere?</p>
    <p>No. You talk out loud; nothing is written down or sent anywhere. All that stays on the phone is the names and which questions you've been through.</p>
    <p class="faq-q">Can we play the same topic more than once?</p>
    <p>Yes. The questions rotate — every topic and depth has six. And answers change over time; the same question is a different conversation a month later.</p>
    <p class="faq-q">Can the other parent or a sibling play?</p>
    <p>Of course. You can change the names anytime under Family.</p>` },

  "proc": { title: "Why it exists", html: `
    <p>Ask “how was school?” and you get “fine”. That's usually where it ends.</p>
    <p>The Two of Us exists so families actually talk — about the good stuff, the scary stuff, and the things that are hard to say out loud. It runs on something simple: a good question, two honest people, and a quiet minute.</p>
    <p>The questions are written around how kids between six and nine think and talk about feelings: open the subject, name the emotion, close it safely. And because honesty takes courage from both sides, the parent answers every question too.</p>` },

  "autor": { title: "Who made it", html: `
    <p>The Two of Us is a personal project by one dad who wanted to talk with his kids about more than grades.</p>
    <p>There's no company and no business behind it — it's free, with no ads and no data collection.</p>
    <p>If you ever want to write — an idea, something you're missing, or how it went at your house — reach me directly at <a href="mailto:font@email.cz?subject=The%20Two%20of%20Us">font@email.cz</a> or on <a href="https://www.linkedin.com/in/dalibor-novak-22787199/" target="_blank" rel="noopener">LinkedIn</a>. One person reads it, not a support desk.</p>
    <p>The source code is public on <a href="https://github.com/dalikjebuh-coder/mezi-nami-deti" target="_blank" rel="noopener">GitHub</a>.</p>` },

  "podpora": { title: "Support", html: `
    <p>If something's broken or missing, write to me directly — one person reads it, not a support desk.</p>
    <div class="contact">
      <strong>Email</strong>
      <a href="mailto:font@email.cz?subject=The%20Two%20of%20Us">font@email.cz</a>
      <span>The fastest way</span>
    </div>
    <div class="contact">
      <strong>LinkedIn</strong>
      <a href="https://www.linkedin.com/in/dalibor-novak-22787199/" target="_blank" rel="noopener">Dalibor Novák</a>
      <span>If that's easier for you</span>
    </div>
    <h3>Before you write</h3>
    <ul>
      <li><strong>Progress</strong> is stored only on your phone — deleting the app clears it, and there's no backup I can restore.</li>
      <li><strong>Notifications</strong> can be turned off under Settings → Notifications, and completely in your phone's Settings → The Two of Us.</li>
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
    <p>The Two of Us does not collect or transmit any personal data.</p>
    <p>The names you enter are stored only in your device's local storage and never leave it. The app contains no third-party analytics or advertising tools and uses no cookies.</p>
    <p>The web version is hosted on GitHub Pages, which — like any website — may briefly record technical access data (such as an IP address) in its server logs. The app has no access to those logs and does nothing with them.</p>
    <p>Privacy questions go straight to the author at <a href="mailto:font@email.cz?subject=The%20Two%20of%20Us%20%E2%80%94%20privacy">font@email.cz</a>, or on <a href="https://www.linkedin.com/in/dalibor-novak-22787199/" target="_blank" rel="noopener">LinkedIn</a>.</p>` },

  "sos": { title: "When it's serious", html: `
    <p>Some questions can open up heavy things — someone hurting them, fear, something they saw online. If you hear something that knocks the wind out of you:</p>
    <ul>
      <li><strong>Stay calm and thank them for telling you.</strong> Saying it took courage.</li>
      <li><strong>Don't interrogate.</strong> Let your kid say only as much as they want to.</li>
      <li><strong>Don't promise “I won't tell anyone.”</strong> Tell them: “I'll explain what we need to do next, and we'll take each step together.”</li>
    </ul>
    <h3>You don't have to handle it alone</h3>
    <div class="contact">
      <strong>988 Suicide &amp; Crisis Lifeline</strong>
      <a href="tel:988">988</a>
      <span>Free and confidential, 24/7. Call or text 988.</span>
    </div>
    <div class="contact">
      <strong>Crisis Text Line</strong>
      <a href="sms:741741&body=HOME">Text HOME to 741741</a>
      <span>Free and confidential, 24/7, by text</span>
    </div>
    <div class="contact">
      <strong>Childhelp National Child Abuse Hotline</strong>
      <a href="tel:18004224453">1-800-422-4453</a>
      <span>Free and confidential, 24/7. You can also text GO to the same number.</span>
    </div>
    <div class="contact">
      <strong>National Parent &amp; Youth Helpline — support for parents</strong>
      <a href="tel:18554272736">1-855-427-2736</a>
      <span>Free, 24/7, for parents and caregivers. Call, text or chat.</span>
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
    <p>© 2026 the author of The Two of Us. The question texts, the guides and the design of the app are protected by copyright.</p>
    <p>The source code is public on <a href="https://github.com/dalikjebuh-coder/mezi-nami-deti" target="_blank" rel="noopener">GitHub</a>.</p>
    <p>The app uses no external libraries. Emoji and fonts are your device's own.</p>` }
}

};
