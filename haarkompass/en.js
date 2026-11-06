/* ==================================================================
   HaarKompass – englische Übersetzung (English translation)

   Das Regelwerk (engine.js) bleibt deutsch und die einzige Quelle.
   Diese Datei übersetzt nur die TEXTE, die engine.js erzeugt.
   hkT("deutscher Text") → englischer Text.

   Ändert sich ein Text in engine.js, muss er hier mitgeändert werden.
   Der automatische Test (tests/haarkompass.test.js) rechnet alle
   Antwort-Kombinationen durch und meldet jeden Text ohne Übersetzung.
================================================================== */
"use strict";

const HK_EN = {
  /* ---- Fragen ---- */
  "Haarstruktur":"Hair texture",
  "Wie fühlt sich ein einzelnes Haar an?":"How does a single hair feel?",
  "Nimm ein Haar zwischen Daumen und Zeigefinger.":"Hold one hair between your thumb and index finger.",
  "Fein":"Fine",
  "Kaum spürbar, Frisur fällt schnell zusammen":"You can barely feel it, styles fall flat quickly",
  "Normal":"Medium",
  "Gut spürbar, weder dünn noch dick":"Easy to feel, neither thin nor thick",
  "Kräftig":"Coarse",
  "Deutlich spürbar, eher drahtig, viel Haar":"Clearly noticeable, rather wiry, lots of hair",
  "Der Faden-Test":"The thread test",
  "Nimm ein ausgefallenes Haar aus den Längen und leg es neben einen normalen Nähfaden. Deutlich dünner als der Faden: fein. Ungefähr gleich: normal. Gleich dick oder dicker und eher drahtig: kräftig.":"Take a shed hair from your lengths and lay it next to a normal sewing thread. Clearly thinner than the thread: fine. About the same: medium. As thick or thicker and rather wiry: coarse.",

  "Haarform":"Hair type",
  "Wie fällt dein Haar, wenn es an der Luft trocknet?":"How does your hair fall when it air-dries?",
  "Glatt":"Straight",
  "Fällt gerade":"Falls straight",
  "Wellig":"Wavy",
  "Leichte S-Wellen":"Soft S-shaped waves",
  "Lockig":"Curly",
  "Deutliche Locken oder Kringel":"Defined curls or ringlets",
  "Sehr lockig / kraus":"Very curly / coily",
  "Enge Locken, Zickzack-Struktur":"Tight curls, zigzag pattern",
  "Ohne Styling anschauen":"Look at it without styling",
  "Wasch deine Haare, drück sie nur mit dem Handtuch aus und lass sie ohne Produkt und ohne Föhn an der Luft trocknen. So, wie sie dann fallen, ist deine natürliche Haarform. Wellen nur in den Spitzen zählen als wellig.":"Wash your hair, just squeeze it with a towel and let it air-dry without product and without a hairdryer. The way it falls then is your natural hair type. Waves only in the ends count as wavy.",

  "Zustand der Längen":"Condition of your lengths",
  "Was hat dein Haar schon erlebt?":"What has your hair been through?",
  "Wähle das, was am stärksten zutrifft.":"Choose what applies most.",
  "Naturbelassen":"Natural",
  "Keine Farbe, keine Chemie":"No color, no chemicals",
  "Coloriert oder getönt":"Colored or toned",
  "Farbe, Tönung, Grauabdeckung":"Color, toner, grey coverage",
  "Blondiert oder Strähnen":"Bleached or highlighted",
  "Aufgehellt, Balayage, Highlights":"Lightened, balayage, highlights",
  "Strapaziert":"Damaged",
  "Dauerwelle, Glättung oder spröde Spitzen":"Perm, straightening or brittle ends",
  "Was zählt hier?":"What counts here?",
  "Es zählt alles, was noch in deinen Längen steckt, auch wenn es Monate her ist. Erst wenn die behandelten Längen herausgeschnitten sind, gilt das Haar wieder als naturbelassen. Strähnen, Balayage und Highlights zählen als blondiert, Pflanzenfarbe und Henna als coloriert.":"Everything that is still in your lengths counts, even if it was months ago. Only once the treated lengths have been cut off does your hair count as natural again. Highlights and balayage count as bleached, plant dyes and henna as colored.",

  "Kopfhaut":"Scalp",
  "Wie geht es deiner Kopfhaut?":"How is your scalp doing?",
  "Unauffällig":"No issues",
  "Keine Beschwerden":"No complaints",
  "Trocken":"Dry",
  "Spannt, feine trockene Schüppchen":"Feels tight, fine dry flakes",
  "Empfindlich":"Sensitive",
  "Juckt, rötet sich, reagiert auf Produkte":"Itches, turns red, reacts to products",
  "Schnell fettend":"Gets oily quickly",
  "Ansatz ist nach 1–2 Tagen fettig":"Roots are oily after 1–2 days",
  "Schuppen":"Dandruff",
  "Sichtbare, eher größere Schuppen":"Visible, rather large flakes",
  "Schuppen oder trockene Kopfhaut?":"Dandruff or dry scalp?",
  "Trockene Kopfhaut: kleine, weiße, puderfeine Schüppchen, die eher abrieseln. Die Kopfhaut spannt, oft im Winter oder nach heißem Waschen. Schuppen: größere, oft gelbliche und leicht fettige Schuppen, die an der Kopfhaut haften, schnell wiederkommen und oft jucken. Bist du unsicher, oder ist die Kopfhaut stark gerötet? Dann schauen wir sie uns beim nächsten Termin gemeinsam an.":"Dry scalp: small, white, powder-fine flakes that tend to fall off. The scalp feels tight, often in winter or after washing with hot water. Dandruff: larger, often yellowish and slightly greasy flakes that stick to the scalp, come back quickly and often itch. Not sure, or is your scalp very red? Then we'll take a look together at your next appointment.",

  "Waschrhythmus":"Washing routine",
  "Wie oft wäschst du deine Haare?":"How often do you wash your hair?",
  "Täglich":"Daily",
  "Alle 2–3 Tage":"Every 2–3 days",
  "1–2× pro Woche":"1–2× a week",
  "Seltener":"Less often",

  "Alltag & Gewohnheiten":"Everyday life & habits",
  "Was gehört zu deinem Alltag?":"What is part of your everyday life?",
  "Mehrere Antworten möglich.":"You can choose several.",
  "Föhn, Glätteisen oder Lockenstab":"Hairdryer, flat iron or curling iron",
  "Fast täglich":"Almost every day",
  "Viel Sonne, Chlor oder Salzwasser":"Lots of sun, chlorine or salt water",
  "Draußen, Schwimmen, Urlaub":"Outdoors, swimming, holidays",
  "Viel Sport":"Lots of sport",
  "Schwitzen, öfter waschen":"Sweating, washing more often",
  "Oft Zopf oder hochgesteckt":"Often in a ponytail or updo",
  "Gummi, Klammern, Dutt":"Hair ties, clips, bun",
  "Nichts davon":"None of these",
  "Meist lufttrocknen, wenig Styling":"Mostly air-dry, little styling",

  "Hauptwunsch":"Main goal",
  "Was wünschst du dir am meisten?":"What would you like most?",
  "Wähle bis zu 2.":"Choose up to 2.",
  "Mehr Volumen":"More volume",
  "Glanz & Geschmeidigkeit":"Shine & softness",
  "Weniger Frizz":"Less frizz",
  "Definierte Locken":"Defined curls",
  "Farbe soll länger halten":"Color that lasts longer",
  "Weniger Spliss & Haarbruch":"Fewer split ends & less breakage",
  "Ansatz bleibt länger frisch":"Roots stay fresh longer",
  "Kopfhaut in Balance":"A balanced scalp",

  /* ---- Begründungs-Kärtchen ("weil: …") und Punkte ---- */
  "Feines Haar":"Fine hair",
  "Normales Haar":"Medium hair",
  "Kräftiges Haar":"Coarse hair",
    "Welliges Haar":"Wavy hair",
  "Lockiges Haar":"Curly hair",
  "Sehr lockiges Haar":"Very curly hair",
  "Kein Hitzestyling":"No heat styling",
  "Kopfhaut trocken":"Dry scalp",
  "Kopfhaut empfindlich":"Sensitive scalp",
  "Kopfhaut fettend":"Oily scalp",
  "Fettende Kopfhaut":"Oily scalp",
  "Kopfhaut empfindlich/trocken (ausgeschlossen)":"Sensitive/dry scalp (ruled out)",
  "Kopfhaut empfindlich/trocken/Schuppen":"Sensitive/dry scalp/dandruff",
  "Wunsch Kopfhaut-Balance":"Goal: balanced scalp",
  "Wunsch frischer Ansatz":"Goal: fresh roots",
  "Blondiert":"Bleached",
  "Coloriert":"Colored",
  "Coloriert/blondiert":"Colored/bleached",
  "+ coloriert/blondiert":"+ colored/bleached",
  "Nicht coloriert (ausgeschlossen)":"Not colored (ruled out)",
  "Wunsch weniger Haarbruch":"Goal: less breakage",
  "Hitze + chemisch behandelt":"Heat + chemically treated",
  "Sehr lockig/kraus":"Very curly/coily",
  "Lockig/kraus":"Curly/coily",
  "Wunsch definierte Locken":"Goal: defined curls",
  "Frizz + Wellen/Locken":"Frizz + waves/curls",
  "Frizz bei glattem/welligem Haar":"Frizz with straight/wavy hair",
  "Oft Zopf":"Often a ponytail",
  "Chemisch behandelt, nicht lockig":"Chemically treated, not curly",
  "Wunsch Glanz":"Goal: shine",
  "Wunsch weniger Frizz":"Goal: less frizz",
  "Wunsch Volumen":"Goal: volume",
  "Viel Sonne/Chlor":"Lots of sun/chlorine",
  "Wunsch Farbe hält länger":"Goal: longer-lasting color",

  /* ---- Shampoo ---- */
  "Nur auf der Kopfhaut aufschäumen. Die Längen werden beim Ausspülen mitgereinigt.":"Lather on the scalp only. The lengths get cleaned as you rinse.",
  "Anti-Schuppen-Shampoo, im Wechsel mit einem milden Shampoo":"Anti-dandruff shampoo, alternating with a mild shampoo",
  "Echte Schuppen brauchen ein Shampoo mit Anti-Schuppen-Wirkstoff, zum Beispiel Piroctone Olamine. Zwei Mal pro Woche reicht, an den anderen Tagen wäschst du mild.":"Real dandruff needs a shampoo with an anti-dandruff active ingredient, for example piroctone olamine. Twice a week is enough, on the other days you wash with a mild shampoo.",
  "Das Wirkstoff-Shampoo 2–3 Minuten einwirken lassen, dann gründlich ausspülen.":"Leave the active shampoo on for 2–3 minutes, then rinse thoroughly.",
  "Sehr mildes, parfümfreies Shampoo":"Very mild, fragrance-free shampoo",
  "Duftstoffe und starke Tenside lösen am häufigsten Reizungen aus. Je kürzer die Inhaltsliste, desto besser.":"Fragrances and harsh surfactants are the most common causes of irritation. The shorter the ingredient list, the better.",
  "Mildes, leichtes Shampoo ohne pflegende Öle":"Mild, light shampoo without conditioning oils",
  "Öle und Silikone im Shampoo landen genau am Ansatz, wo du sie nicht willst. Ein sanftes, klärendes Shampoo reinigt, ohne die Kopfhaut zu reizen.":"Oils and silicones in shampoo end up right at the roots, where you don't want them. A gentle, clarifying shampoo cleans without irritating the scalp.",
  "Mildes, feuchtigkeitsspendendes Shampoo":"Mild, moisturizing shampoo",
  "Sanfte Tenside entfetten die Kopfhaut weniger. Dann spannt sie nicht mehr so.":"Gentle surfactants strip less oil from the scalp. Then it won't feel as tight.",
  "Mildes, sulfatfreies Shampoo":"Mild, sulfate-free shampoo",
  "Locken sind von Natur aus trockener. Ein sanftes Shampoo nimmt ihnen nicht die Feuchtigkeit, die sie für ihre Form brauchen.":"Curls are naturally drier. A gentle shampoo doesn't take away the moisture they need to keep their shape.",
  "Mildes, farbschonendes Shampoo":"Mild, color-safe shampoo",
  "Starke Tenside waschen Farbpigmente schneller aus. Mild heißt: Die Farbe hält länger.":"Harsh surfactants wash out color pigments faster. Mild means: your color lasts longer.",
  "Leichtes Shampoo ohne schwere Pflegestoffe":"Light shampoo without heavy conditioning agents",
  "Feines Haar wird von reichhaltigen Shampoos schnell platt. Leicht reinigen, pflegen macht der Conditioner.":"Rich shampoos quickly weigh fine hair down. Cleanse lightly and let the conditioner do the conditioning.",
  "Ein mildes Basis-Shampoo":"A mild everyday shampoo",
  "Deine Kopfhaut ist ausgeglichen. Ein einfaches, mildes Shampoo reicht völlig, Spezialshampoos braucht es nicht.":"Your scalp is balanced. A simple, mild shampoo is all you need, no special shampoos required.",

  /* ---- Conditioner ---- */
  "Reparierender Conditioner, dazu 1× pro Woche eine Maske":"Repairing conditioner, plus a mask once a week",
  "Dein Haar ist durch Chemie, Hitze oder Sonne deutlich beansprucht. Der Conditioner glättet nach jeder Wäsche, die Maske pflegt einmal pro Woche tiefer.":"Chemicals, heat or sun have clearly stressed your hair. The conditioner smooths it after every wash, the mask gives deeper care once a week.",
  "Reichhaltiger Conditioner":"Rich conditioner",
  "Kräftiges oder lockiges Haar nimmt Pflege gut auf und braucht sie auch, damit es geschmeidig bleibt und weniger kraust.":"Coarse or curly hair absorbs care well and needs it to stay soft and frizz less.",
  "Leichter Conditioner (oder Sprüh-Conditioner)":"Light conditioner (or spray conditioner)",
  "Feines Haar braucht Pflege zum Entwirren, aber nichts, was es beschwert.":"Fine hair needs care to detangle, but nothing that weighs it down.",
  "Conditioner nach jeder Wäsche":"Conditioner after every wash",
  "Der Conditioner schließt die Schuppenschicht. Das Haar lässt sich besser kämmen und glänzt mehr.":"Conditioner closes the cuticle. Your hair is easier to comb and shinier.",
  "Nur in Längen und Spitzen, den Ansatz frei lassen. 1–2 Minuten einwirken lassen.":"Only on the lengths and ends, keep it off the roots. Leave on for 1–2 minutes.",
  "Ins nasse Haar kneten und mit den Fingern oder einem grobzinkigen Kamm entwirren, solange der Conditioner drin ist.":"Scrunch into wet hair and detangle with your fingers or a wide-tooth comb while the conditioner is still in.",
  "Erst ab Kinnhöhe einarbeiten, der Ansatz bleibt frei. Gut ausspülen.":"Apply from chin length down only, keep the roots free. Rinse well.",

  /* ---- Hitzeschutz ---- */
  "Hitzeschutz vor jedem Föhnen oder Glätten":"Heat protection before every blow-dry or flat iron",
  "Glätteisen und Lockenstab erreichen 180–230 °C. Hitzeschutz verringert den Schaden deutlich. Wer fast täglich mit Hitze stylt, sollte nicht darauf verzichten.":"Flat irons and curling irons reach 180–230 °C. Heat protection clearly reduces the damage. If you heat-style almost every day, don't skip it.",
  "Leichtes Spray, ins handtuchtrockene Haar. Glätteisen bei feinem Haar höchstens 180 °C.":"A light spray, into towel-dried hair. For fine hair, set the flat iron to 180 °C at most.",
  "Ins handtuchtrockene Haar sprühen, gleichmäßig durchkämmen.":"Spray into towel-dried hair and comb through evenly.",

  /* ---- Spezial-Impulse ---- */
  "Feuchtigkeitsspendendes Kopfhaut-Serum":"Moisturizing scalp serum",
  "Beruhigendes Kopfhaut-Serum (parfümfrei)":"Soothing scalp serum (fragrance-free)",
  "Ausgleichendes Kopfhaut-Tonikum":"Balancing scalp tonic",
  "Beruhigendes Kopfhaut-Serum":"Soothing scalp serum",
  "Kopfhaut-Serum":"Scalp serum",
  "Ein Serum wirkt direkt auf der Kopfhaut und bleibt dort, anders als ein Shampoo, das nach einer Minute ausgespült wird. Für Kopfhaut-Themen ist es das wirksamste Extra.":"A serum works directly on the scalp and stays there, unlike a shampoo that is rinsed out after a minute. For scalp concerns it is the most effective extra.",
  "2–3 Mal pro Woche nach dem Waschen scheitelweise auf die Kopfhaut geben und sanft einmassieren.":"2–3 times a week after washing, apply to the scalp section by section and massage in gently.",
  "Kopfhaut-Peeling, alle 1–2 Wochen":"Scalp scrub, every 1–2 weeks",
  "Ein Peeling löst Talg- und Produktreste am Ansatz. Danach bleibt das Haar oft spürbar länger frisch.":"A scrub loosens oil and product build-up at the roots. Afterwards your hair often stays fresh noticeably longer.",
  "Vor der Haarwäsche auf die feuchte Kopfhaut geben, sanft massieren, dann wie gewohnt waschen.":"Apply to the damp scalp before washing, massage gently, then wash as usual.",
  "Molecular-Repair-Pflege":"Molecular repair treatment",
  "Blondierung und Dauerwelle brechen die inneren Verbindungen im Haar auf. Diese Pflege setzt genau dort an, nicht nur an der Oberfläche wie ein Conditioner.":"Bleaching and perms break the inner bonds of the hair. This treatment works exactly there, not just on the surface like a conditioner.",
  "Nach Anleitung einmal pro Woche, meist vor der Haarwäsche ins Haar geben. Besonders wirksam ist die Behandlung bei uns im Salon direkt beim Färben.":"Once a week as directed, usually applied before washing. The treatment is most effective in our salon, right when we color your hair.",
  "Leichte Lockenmousse oder Leave-in-Spray":"Light curl mousse or leave-in spray",
  "Leave-in-Conditioner oder Lockencreme":"Leave-in conditioner or curl cream",
  "Locken brauchen Feuchtigkeit, die im Haar bleibt. Ein Leave-in bündelt die Locken, sie halten ihre Form und krausen weniger.":"Curls need moisture that stays in the hair. A leave-in groups the curls so they keep their shape and frizz less.",
  "Ins nasse, noch tropfende Haar kneten (nicht kämmen), dann lufttrocknen oder mit Diffusor föhnen.":"Scrunch into wet, still dripping hair (don't comb), then air-dry or use a diffuser.",
  "Leichter Leave-in-Spray":"Light leave-in spray",
  "Ein Leave-in-Spray legt einen leichten Film ums Haar. Das bändigt Frizz und erleichtert das Kämmen, ohne glattes Haar zu beschweren.":"A leave-in spray puts a light film around the hair. It tames frizz and makes combing easier without weighing straight hair down.",
  "Ins handtuchtrockene Haar sprühen, nur in die Längen.":"Spray into towel-dried hair, lengths only.",
  "Ein paar Tropfen Haaröl für die Spitzen":"A few drops of hair oil for the ends",
  "Öl glättet die Oberfläche der Spitzen. Das bringt sofort Glanz und weniger Frizz, besonders bei kräftigem Haar.":"Oil smooths the surface of the ends. That gives instant shine and less frizz, especially with coarse hair.",
  "1–3 Tropfen in den Handflächen verreiben und nur in die Spitzen geben. Weniger ist mehr.":"Rub 1–3 drops between your palms and apply to the ends only. Less is more.",
  "Saure Glanzspülung (1× pro Woche)":"Acidic shine rinse (once a week)",
  "Ein saurer pH-Wert schließt die Haaroberfläche. Glattes Haar reflektiert mehr Licht und glänzt, ohne dass etwas Schweres im Haar bleibt.":"An acidic pH closes the hair's surface. Smooth hair reflects more light and shines, without leaving anything heavy in the hair.",
  "Nach dem Conditioner ins Haar geben, kurz einwirken lassen, mit kühlem Wasser ausspülen.":"Apply after the conditioner, leave on briefly, rinse with cool water.",
  "Ansatz-Volumenspray oder leichter Föhnschaum":"Root volume spray or light styling mousse",
  "Volumen entsteht am Ansatz. Ein leichtes Produkt dort hebt das Haar an. Pflege in den Längen bringt dafür nichts.":"Volume starts at the roots. A light product there lifts the hair. Conditioning the lengths does nothing for volume.",
  "Ins handtuchtrockene Haar direkt an den Ansatz geben und kopfüber oder mit Rundbürste föhnen.":"Apply directly to the roots of towel-dried hair and blow-dry upside down or with a round brush.",
  "UV-Schutz-Spray für die Haare":"UV protection spray for hair",
  "Sonne, Chlor und Salzwasser bleichen Farbe aus und machen die Längen spröde. Ein UV-Spray ist für Haare das, was Sonnencreme für die Haut ist.":"Sun, chlorine and salt water fade color and make the lengths brittle. A UV spray is to hair what sunscreen is to skin.",
  "Vor dem Rausgehen oder Schwimmen in die Längen sprühen. Nach Chlor- oder Salzwasser die Haare mit klarem Wasser ausspülen.":"Spray onto the lengths before going out or swimming. After chlorine or salt water, rinse your hair with clear water.",
  "Silber-Pflege gegen Gelbstich (1× pro Woche)":"Purple care against brassiness (once a week)",
  "Farbauffrischende Pflege (Color-Conditioner)":"Color-refreshing care (color conditioner)",
  "Pigmentierte Pflege frischt den Farbton zwischen zwei Salonterminen auf. So sieht die Farbe länger aus wie frisch gemacht.":"Pigmented care refreshes your shade between two salon appointments. That keeps your color looking freshly done for longer.",
  "Statt deines normalen Conditioners einmal pro Woche, Einwirkzeit genau einhalten.":"Once a week instead of your usual conditioner, follow the leave-on time exactly.",
  "Trockenshampoo für den Tag dazwischen":"Dry shampoo for the day in between",
  "Trockenshampoo nimmt Fett am Ansatz auf. So kommst du einen Tag länger ohne Haarwäsche aus, und es gibt sogar etwas Volumen.":"Dry shampoo absorbs oil at the roots. That gets you one more day without washing, and it even adds a little volume.",
  "Mit ca. 20 cm Abstand auf den Ansatz sprühen, kurz warten, ausbürsten. Nicht mehrere Tage hintereinander verwenden.":"Spray onto the roots from about 20 cm away, wait briefly, brush out. Don't use it several days in a row.",

  /* ---- Weglassen ---- */
  "Haaröl und schwere Seren":"Hair oil and heavy serums",
  "Sie beschweren feines Haar sofort, es hängt dann platt und strähnig.":"They weigh fine hair down immediately, so it hangs flat and stringy.",
  "Öl wandert über die Hände und das Kämmen zum Ansatz. Der wird dann noch schneller fettig.":"Oil travels to the roots via your hands and comb. They then get oily even faster.",
  "Anti-Schuppen-Shampoo":"Anti-dandruff shampoo",
  "Ohne echte Schuppen bringt es nichts. Die Wirkstoffe können eine gesunde Kopfhaut sogar reizen. Trockene Schüppchen sind keine Schuppen.":"Without real dandruff it does nothing. The active ingredients can even irritate a healthy scalp. Dry flakes are not dandruff.",
  "Regelmäßiges Detox- oder Tiefenreinigungs-Shampoo":"Regular detox or deep-cleansing shampoo",
  "Es wäscht Farbpigmente aus und trocknet die Längen aus. Wenn überhaupt, dann höchstens einmal im Monat.":"It washes out color pigments and dries out the lengths. If at all, use it once a month at most.",
  "Es entfettet die Kopfhaut stark und kann sie zusätzlich austrocknen und reizen.":"It strips the scalp of a lot of oil and can dry it out and irritate it further.",
  "Sie repariert Verbindungen, die durch Blondierung oder Dauerwelle gebrochen sind. Naturbelassenes Haar hat diese Schäden nicht.":"It repairs bonds broken by bleaching or perms. Natural hair doesn't have this kind of damage.",
  "Silbershampoo":"Purple shampoo",
  "Es neutralisiert Gelbstich in aufgehelltem Haar. In anderem Haar hat es keinen Effekt oder macht es fahl.":"It neutralizes brassiness in lightened hair. In other hair it has no effect or makes it look dull.",
  "Trockenshampoo":"Dry shampoo",
  "Es entzieht der Kopfhaut zusätzlich Feuchtigkeit und bleibt als Rückstand liegen. Für deine Kopfhaut eher ungünstig.":"It draws even more moisture from the scalp and leaves residue. Not a good fit for your scalp.",
  "Volumen-Schaum und Volumen-Shampoo":"Volumizing mousse and volumizing shampoo",
  "Dein Haar hat von Natur aus Fülle. Volumenprodukte machen es eher trocken und störrisch.":"Your hair is naturally full. Volume products tend to make it dry and unruly.",
  "2-in-1-Shampoo mit Spülung":"2-in-1 shampoo and conditioner",
  "Es pflegt die Längen zu wenig und reinigt die Kopfhaut zu schwach. Zwei getrennte Produkte machen beide Aufgaben besser.":"It conditions the lengths too little and cleans the scalp too weakly. Two separate products do both jobs better.",
  "Wöchentliche Haarmaske":"Weekly hair mask",
  "Gesundes Haar ohne Chemie braucht keine Intensivkur. Dein Conditioner reicht, eine Maske würde es eher beschweren.":"Healthy hair without chemical treatments doesn't need an intensive treatment. Your conditioner is enough, a mask would rather weigh it down.",
  "Hitzeschutz":"Heat protection",
  "Wenn du deine Haare meist lufttrocknen lässt, brauchst du keinen. Beim gelegentlichen Föhnen reicht die mittlere Stufe mit etwas Abstand.":"If you mostly let your hair air-dry, you don't need it. For the occasional blow-dry, the medium setting with a little distance is enough.",

  /* ---- Tipps ---- */
  "<b>Spliss kann man nicht dauerhaft reparieren, nur schneiden.</b> Pflege kann die Spitzen kurzfristig glätten und neuem Spliss vorbeugen, aber alle 8–12 Wochen die Spitzen schneiden lassen bringt mehr als jedes Produkt.":"<b>Split ends can't be repaired permanently, only cut.</b> Care can smooth the ends for a while and prevent new split ends, but a trim every 8–12 weeks does more than any product.",
  "Weiche Spiral- oder Stoffgummis statt Metallclips. Den Zopf nicht immer an derselben Stelle binden, sonst bricht das Haar dort.":"Soft spiral or fabric hair ties instead of metal clips. Don't always tie your ponytail in the same spot, or the hair will break there.",
  "Mikrofasertuch oder altes Baumwoll-T-Shirt statt Frottee. Haare ausdrücken, nicht rubbeln, das spart viel Frizz.":"A microfiber towel or an old cotton T-shirt instead of terry cloth. Squeeze your hair, don't rub it, that saves a lot of frizz.",
  "Den Föhn auf mittlere Temperatur stellen und die letzten 10 % kalt föhnen, das schließt die Oberfläche und bringt Glanz.":"Set the hairdryer to medium heat and do the last 10 % on cold, that closes the surface and adds shine.",
  "Versuch, den Waschrhythmus langsam auf alle 2 Tage zu strecken. Deine Kopfhaut wird es dir danken.":"Try to slowly stretch your washing routine to every 2 days. Your scalp will thank you.",
  "Nicht zu heiß waschen und den Ansatz möglichst wenig mit den Händen berühren. Beides regt die Talgproduktion an.":"Don't wash with water that's too hot and touch your roots as little as possible. Both stimulate oil production.",
  "Nach dem Sport reicht oft lauwarmes Wasser und Conditioner in den Längen. Nicht jedes Mal muss ein Shampoo sein.":"After sport, lukewarm water and conditioner on the lengths is often enough. You don't need shampoo every time.",
  "In den ersten 48 Stunden nach dem Färben nicht waschen, dann hält die Farbe deutlich länger.":"Don't wash your hair for the first 48 hours after coloring, then the color lasts much longer.",
  "Zum Schluss kühl ausspülen. Das schließt die Haaroberfläche und bringt sichtbar mehr Glanz, kostenlos.":"Finish with a cool rinse. It closes the hair's surface and gives visibly more shine, for free.",
  "Wenn sich deine Kopfhaut nach 4 Wochen nicht bessert: Lass es beim Hautarzt abklären. Hinter hartnäckigen Beschwerden kann mehr stecken als ein Pflegethema.":"If your scalp doesn't improve after 4 weeks, have it checked by a dermatologist. Persistent problems can be about more than hair care.",
  "Dein Haar ist unkompliziert. Weniger Produkte sind hier wirklich mehr.":"Your hair is easy-going. Fewer products really are more here.",

  /* ---- Deine Wünsche ---- */
  "Locken haben ihre Fülle schon, Volumenprodukte machen sie eher trocken. Mehr Fülle am Ansatz entsteht bei dir über die Form: mit dem Diffusor kopfüber föhnen und mit einem Stufenschnitt, der den Locken Gewicht nimmt.":"Curls already have fullness, volume products tend to dry them out. For you, more lift at the roots comes from shape: diffusing upside down and a layered cut that takes weight off the curls.",
  "Dein Haar ist kräftig und hat schon viel Fülle. Mehr Volumen kommt hier vom Schnitt, nicht aus der Flasche: Stufen nehmen Gewicht heraus, dann hebt sich der Ansatz von selbst.":"Your hair is coarse and already very full. Here, more volume comes from the cut, not from a bottle: layers take out weight, then the roots lift on their own.",
  "Volumen entsteht am Ansatz: Conditioner nur in die Längen, dann kopfüber oder mit der Rundbürste föhnen. Wenn du ein Produkt ergänzen willst, ist ein leichter Föhnschaum am Ansatz das nächste Extra nach deinem Spezial-Impuls.":"Volume starts at the roots: conditioner on the lengths only, then blow-dry upside down or with a round brush. If you want to add a product, a light styling mousse at the roots is the next extra after your special boost.",
  "Haaröl wäre für dich zu schwer. Glanz bekommst du trotzdem: zum Schluss kühl ausspülen und einmal pro Woche eine saure Glanzspülung. Beides glättet die Haaroberfläche, ohne etwas Schweres im Haar zu lassen.":"Hair oil would be too heavy for you. You can still get shine: finish with a cool rinse and use an acidic shine rinse once a week. Both smooth the hair's surface without leaving anything heavy behind.",
  "Zum Schluss kühl ausspülen und den Conditioner nach jeder Wäsche verwenden. Wenn du mehr willst: 1–2 Tropfen Haaröl nur in die Spitzen.":"Finish with a cool rinse and use conditioner after every wash. If you want more: 1–2 drops of hair oil on the ends only.",
  "Haare mit einem Mikrofasertuch ausdrücken statt rubbeln und einen leichten Leave-in-Spray in die Längen geben. Schwere Cremes und Öle würden feines Haar platt machen.":"Squeeze your hair with a microfiber towel instead of rubbing and apply a light leave-in spray to the lengths. Heavy creams and oils would flatten fine hair.",
  "Haare mit einem Mikrofasertuch ausdrücken statt rubbeln und nicht trocken bürsten, zum Schluss kalt föhnen. Das bringt bei Frizz oft mehr als ein weiteres Produkt.":"Squeeze your hair with a microfiber towel instead of rubbing, don't brush it dry and finish the blow-dry on cold. That often helps more with frizz than another product.",
  "Haare mit einem Mikrofasertuch ausdrücken statt rubbeln und nicht trocken bürsten. Das bringt bei Frizz oft mehr als ein weiteres Produkt.":"Squeeze your hair with a microfiber towel instead of rubbing and don't brush it dry. That often helps more with frizz than another product.",
  "Glattes Haar lässt sich nicht in Locken pflegen, das kann kein Produkt. Für Locken auf Zeit helfen Lockenstab oder Lockenwickler. Dauerhafte Locken gehen nur mit einer Umformung im Salon. Die beansprucht das Haar, deshalb beraten wir dich dazu gern persönlich.":"Straight hair can't be cared into curls, no product can do that. For temporary curls, use a curling iron or rollers. Permanent curls are only possible with a perm in the salon. That stresses the hair, so we're happy to advise you in person.",
  "Eine leichte Lockencreme oder ein Leave-in ins nasse, noch tropfende Haar kneten, danach nicht mehr kämmen und mit dem Diffusor oder an der Luft trocknen. Je weniger du die Locken beim Trocknen berührst, desto definierter bleiben sie.":"Scrunch a light curl cream or leave-in into wet, still dripping hair, don't comb it afterwards and dry with a diffuser or in the air. The less you touch your curls while they dry, the more defined they stay.",
  "Du hast angegeben, dass dein Haar nicht gefärbt ist. Farbpflege bringt bei ungefärbtem Haar nichts. Auch Naturhaar bleicht in der Sonne aus, dagegen hilft ein UV-Schutz-Spray, wenn du viel draußen bist.":"You said your hair isn't colored. Color care does nothing for uncolored hair. Natural hair fades in the sun too, a UV protection spray helps if you spend a lot of time outdoors.",
  "Farbe hält länger mit mildem Shampoo, lauwarmem statt heißem Wasser und wenn du in den ersten 48 Stunden nach dem Färben nicht wäschst. Ist dein Haar auch gefärbt, frag uns beim nächsten Termin nach farbauffrischender Pflege.":"Color lasts longer with a mild shampoo, lukewarm instead of hot water, and if you don't wash your hair for the first 48 hours after coloring. If your hair is colored too, ask us about color-refreshing care at your next appointment.",
  "Farbe hält länger mit mildem Shampoo, lauwarmem statt heißem Wasser und wenn du in den ersten 48 Stunden nach dem Färben nicht wäschst. Eine farbauffrischende Pflege einmal pro Woche wäre das nächste Extra nach deinem Spezial-Impuls.":"Color lasts longer with a mild shampoo, lukewarm instead of hot water, and if you don't wash your hair for the first 48 hours after coloring. A color-refreshing treatment once a week would be the next extra after your special boost.",
  "Gespaltene Spitzen lassen sich nicht reparieren, nur schneiden: alle 8–12 Wochen die Spitzen nachschneiden lassen. Vorbeugen kannst du mit Conditioner nach jeder Wäsche und indem du nasses Haar von unten nach oben entwirrst.":"Split ends can't be repaired, only cut: have your ends trimmed every 8–12 weeks. You can prevent them with conditioner after every wash and by detangling wet hair from the ends upwards.",
  "Trockenshampoo und Peeling wären für deine Kopfhaut zu viel. Was hilft: lauwarm statt heiß waschen, Conditioner erst ab Kinnhöhe, den Ansatz wenig mit den Händen berühren und die Bürste regelmäßig reinigen.":"Dry shampoo and scalp scrubs would be too much for your scalp. What helps: wash with lukewarm instead of hot water, conditioner from chin length down only, touch your roots as little as possible and clean your brush regularly.",
  "Conditioner und Öl vom Ansatz fernhalten, lauwarm waschen und die Bürste regelmäßig reinigen. Am Tag zwischen zwei Wäschen darf es ein Trockenshampoo sein, aber nicht mehrere Tage hintereinander.":"Keep conditioner and oil away from the roots, wash with lukewarm water and clean your brush regularly. On the day between two washes, dry shampoo is fine, but not several days in a row.",
  "Das Anti-Schuppen-Shampoo aus deiner Basis-Routine ist dein wichtigster Schritt. Gib ihm 4 Wochen. Wird es nicht besser, lass deine Kopfhaut beim Hautarzt anschauen.":"The anti-dandruff shampoo in your basic routine is your most important step. Give it 4 weeks. If it doesn't get better, have a dermatologist look at your scalp.",
  "Deine Kopfhaut ist unauffällig. Damit das so bleibt: mild und nicht zu heiß waschen und nicht ständig neue Produkte ausprobieren. Ein Extra brauchst du dafür nicht.":"Your scalp has no issues. To keep it that way: wash mildly and not too hot, and don't keep trying new products. You don't need an extra for that.",
  "Ein Kopfhaut-Serum wäre das nächste Extra nach deinem Spezial-Impuls. Bis dahin helfen die milde Basis-Routine und lauwarmes statt heißes Wasser.":"A scalp serum would be the next extra after your special boost. Until then, the mild basic routine and lukewarm instead of hot water help.",

  /* ---- Abwägen ---- */
  "Molecular-Repair daheim oder im Salon?":"Molecular repair at home or in the salon?",
  "Daheim kannst du die Pflege regelmäßig anwenden, sie ist aber schwächer dosiert. Im Salon ist sie höher konzentriert und wirkt am besten direkt beim Blondieren oder Umformen, weil die Verbindungen im Haar dann gerade aufgebrochen werden.":"At home you can use the treatment regularly, but it is less concentrated. In the salon it is more concentrated and works best right during bleaching or perming, because that is when the bonds in the hair are being broken.",
  "Viele kombinieren beides: im Salon beim Färben, daheim zum Erhalten. Wie oft es bei dir sinnvoll ist, besprechen wir gern beim nächsten Termin.":"Many people combine both: in the salon when coloring, at home for maintenance. We're happy to discuss how often makes sense for you at your next appointment.",
  "Silikone: ja oder nein?":"Silicones: yes or no?",
  "Silikone legen einen glatten Film ums Haar. Es glänzt, kraust weniger und ist vor Hitze etwas geschützt. Der Nachteil: Schwere Silikone können sich mit der Zeit ablagern. Das Haar wirkt dann schwer oder stumpf.":"Silicones put a smooth film around the hair. It shines, frizzes less and is somewhat protected from heat. The downside: heavy silicones can build up over time. The hair then looks heavy or dull.",
  "Bei feinem Haar eher leichte Produkte ohne schwere Silikone wählen, sonst fällt es schnell zusammen.":"With fine hair, choose light products without heavy silicones, otherwise it falls flat quickly.",
  "Bei dir können Silikone helfen, gegen Frizz und als Schutz beim Föhnen. Wird das Haar mit der Zeit schwer oder stumpf, gelegentlich eine Wäsche mit einem klärenden Shampoo einplanen.":"Silicones can help you against frizz and as protection when blow-drying. If your hair gets heavy or dull over time, plan an occasional wash with a clarifying shampoo.",
  "Bei Locken greifen viele lieber zu leichten Produkten, damit die Locken nicht beschwert werden. Fühlen sich deine Locken gepflegt an, gibt es keinen Grund zu wechseln.":"With curls, many people prefer light products so the curls aren't weighed down. If your curls feel well cared for, there's no reason to switch.",
  "Für mehr Glanz können leichte Silikone helfen. Wird das Haar mit der Zeit schwer oder stumpf, gelegentlich mit einem klärenden Shampoo waschen.":"Light silicones can help with shine. If your hair gets heavy or dull over time, wash it occasionally with a clarifying shampoo.",
  "Lohnt sich eine Haarmaske?":"Is a hair mask worth it?",
  "Dein Haar ist leicht beansprucht. Eine Maske alle 1–2 Wochen kann gut tun, nötig ist sie aber nicht. Dein Conditioner macht die tägliche Arbeit.":"Your hair is slightly stressed. A mask every 1–2 weeks can do it good, but it isn't necessary. Your conditioner does the daily work.",
  "Probier es aus: Fühlen sich die Längen nach dem Conditioner noch trocken an, hilft eine Maske. Wird das Haar schwer oder strähnig, lass sie wieder weg.":"Try it out: if your lengths still feel dry after conditioner, a mask helps. If your hair gets heavy or stringy, leave it out again.",
  "Täglich waschen oder strecken?":"Wash daily or stretch it out?",
  "Mit einem milden Shampoo ist tägliches Waschen für die Kopfhaut in Ordnung. Dass sich die Kopfhaut an seltenes Waschen „gewöhnt“ und weniger fettet, ist nicht sicher belegt.":"With a mild shampoo, washing daily is fine for your scalp. It isn't reliably proven that the scalp \"gets used to\" less frequent washing and becomes less oily.",
  "Entscheide nach Gefühl und Zeit. Seltener waschen schont vor allem die Längen und spart Zeit beim Styling. Mit Zwang durchhalten musst du es nicht.":"Decide based on how it feels and how much time you have. Washing less often mainly protects the lengths and saves styling time. You don't have to force yourself.",

  /* ---- Ersteinschätzung ---- */
  "Kopfhaut zuerst":"Scalp first",
  "Aufbau nötig":"Needs rebuilding",
  "Pflegeleicht":"Easy care",
  "Gut versorgt":"Well cared for",
  "Bei dir zuerst die Kopfhaut":"For you, the scalp comes first",
  "Deine Kopfhaut braucht gerade die meiste Aufmerksamkeit. Wenn sie zur Ruhe kommt, profitiert auch dein Haar. Fang deshalb nicht mit Extras für die Längen an.":"Your scalp needs the most attention right now. Once it calms down, your hair benefits too. So don't start with extras for your lengths.",
  "Dein Haar braucht Aufbau":"Your hair needs rebuilding",
  "Chemie, Hitze oder Sonne haben deinem Haar zugesetzt. Mit regelmäßiger Pflege und den richtigen Gewohnheiten erholen sich die Längen spürbar. Spitzen, die schon gespalten sind, kann nur die Schere retten.":"Chemicals, heat or sun have taken their toll on your hair. With regular care and the right habits, your lengths will noticeably recover. Ends that are already split can only be saved by the scissors.",
  "Dein Haar braucht wenig":"Your hair needs little",
  "Gute Nachricht: Dein Haar ist unkompliziert. Mehr Produkte machen es hier nicht besser.":"Good news: your hair is easy-going. More products won't make it any better.",
  "Eine klare Routine reicht":"A clear routine is enough",
  "Mit den passenden Grundprodukten und einem gezielten Extra ist dein Haar gut versorgt.":"With the right basic products and one targeted extra, your hair is well cared for."
};

/* Anhängsel, die engine.js an Sätze hängt (Text = Basis + Anhängsel) */
const HK_EN_SUFFIX = [
  [" Achte auf einen sauren pH-Wert (oft steht „Color“ oder „pH 4–5“ drauf). Er schließt die Haaroberfläche und die Farbe hält länger.",
   " Look for an acidic pH (it often says \"color\" or \"pH 4–5\" on the label). It closes the hair's surface and your color lasts longer."],
  [" Tägliches Waschen ist in Ordnung, wenn das Shampoo mild ist.", " Washing daily is fine as long as the shampoo is mild."],
  [" Und mit Hitzeschutz vor jedem Styling.", " And with heat protection before every styling."]
];

/* Zusammengesetzte Texte */
const HK_EN_SCALP = { "unauffällig":"no issues", "trocken":"dry", "empfindlich":"sensitive", "schnell fettend":"gets oily quickly", "schuppen":"dandruff" };
const HK_EN_WASH = { "täglich":"daily", "alle 2–3 tage":"every 2–3 days", "1–2× pro woche":"1–2× a week", "seltener":"less often" };
const HK_EN_PATTERNS = [
  [/^Dafür ist dein Spezial-Impuls da: (.+?)( \(optional\))?\.$/, (m, t) => { const n = t(m[1]); return n == null ? null : "Your special boost takes care of this: " + (/^[A-Z][a-z]/.test(n) ? n[0].toLowerCase() + n.slice(1) : n) + (m[2] ? " (optional)." : "."); }],
  [/^(\d) Basis-Schritte?, (1 Extra, das sich lohnt|kein Extra nötig)(?:, (\d) (Produkte?) zum Weglassen)?\.$/, m =>
    m[1] + (m[1] === "1" ? " basic step" : " basic steps") + (m[2].startsWith("1") ? ", 1 extra that's worth it" : ", no extra needed")
    + (m[3] ? ", " + m[3] + (m[3] === "1" ? " product" : " products") + " to leave out." : ".")],
  [/^Kopfhaut: (.+)$/, m => HK_EN_SCALP[m[1]] ? "Scalp: " + HK_EN_SCALP[m[1]] : null],
  [/^Waschen: (.+)$/, m => HK_EN_WASH[m[1]] ? "Washing: " + HK_EN_WASH[m[1]] : null],
  [/^Wunsch: (.+)$/, (m, t) => { const n = t(m[1]); return n == null ? null : "Goal: " + n; }]
];

/* Streng: gibt null zurück, wenn es keine Übersetzung gibt (für den Test). */
function hkTStrict(s){
  if (typeof s !== "string") return s;
  if (Object.prototype.hasOwnProperty.call(HK_EN, s)) return HK_EN[s];
  for (const [re, fn] of HK_EN_PATTERNS){
    const m = s.match(re);
    if (m) return fn(m, hkTStrict);
  }
  for (const [de, en] of HK_EN_SUFFIX){
    if (s.endsWith(de)){ const base = hkTStrict(s.slice(0, -de.length)); if (base != null) return base + en; }
  }
  return null;
}
/* Für die Seite: fehlt eine Übersetzung, bleibt der deutsche Text stehen. */
function hkT(s){ const r = hkTStrict(s); return r == null ? s : r; }
