/* ==================================================================
   HaarKompass-Regelwerk: die EINE gemeinsame Quelle.

   Wird geladen von
   - dieser Website:      haarkompass/index.html
   - dem Post-Generator:  moment.greathairday/haarkompass-post.html
                          (lädt https://www.greathairday.at/haarkompass/engine.js)

   Eine Änderung hier gilt nach dem Veröffentlichen sofort für beide.
   Deshalb: Namen (QUESTIONS, SPECIALS, SKIPS, recommend, tips, ...) und
   die Form des Ergebnisses von recommend() nicht umbenennen, sonst
   bricht der Post-Generator. Keine Verbindungen zu Fremdservern.
================================================================== */
"use strict";

/* ------------------------------------------------------------------
   Fragen
------------------------------------------------------------------ */
const QUESTIONS = [
  { id:"staerke", eyebrow:"Haarstruktur", title:"Wie fühlt sich ein einzelnes Haar an?", hint:"Nimm ein Haar zwischen Daumen und Zeigefinger.", type:"single", options:[
    {v:"fein", l:"Fein", d:"Kaum spürbar, Frisur fällt schnell zusammen"},
    {v:"normal", l:"Normal", d:"Gut spürbar, weder dünn noch dick"},
    {v:"kraeftig", l:"Kräftig", d:"Deutlich spürbar, eher drahtig, viel Haar"} ]},
  { id:"form", eyebrow:"Haarform", title:"Wie fällt dein Haar, wenn es an der Luft trocknet?", type:"single", options:[
    {v:"glatt", l:"Glatt", d:"Fällt gerade"},
    {v:"wellig", l:"Wellig", d:"Leichte S-Wellen"},
    {v:"lockig", l:"Lockig", d:"Deutliche Locken oder Kringel"},
    {v:"kraus", l:"Sehr lockig / kraus", d:"Enge Locken, Zickzack-Struktur"} ]},
  { id:"zustand", eyebrow:"Zustand der Längen", title:"Was hat dein Haar schon erlebt?", hint:"Wähle das, was am stärksten zutrifft.", type:"single", options:[
    {v:"natur", l:"Naturbelassen", d:"Keine Farbe, keine Chemie"},
    {v:"coloriert", l:"Coloriert oder getönt", d:"Farbe, Tönung, Grauabdeckung"},
    {v:"blondiert", l:"Blondiert oder Strähnen", d:"Aufgehellt, Balayage, Highlights"},
    {v:"strapaziert", l:"Strapaziert", d:"Dauerwelle, Glättung oder spröde Spitzen"} ]},
  { id:"kopfhaut", eyebrow:"Kopfhaut", title:"Wie geht es deiner Kopfhaut?", type:"single", options:[
    {v:"normal", l:"Unauffällig", d:"Keine Beschwerden"},
    {v:"trocken", l:"Trocken", d:"Spannt, feine trockene Schüppchen"},
    {v:"sensibel", l:"Empfindlich", d:"Juckt, rötet sich, reagiert auf Produkte"},
    {v:"fettend", l:"Schnell fettend", d:"Ansatz ist nach 1–2 Tagen fettig"},
    {v:"schuppen", l:"Schuppen", d:"Sichtbare, eher größere Schuppen"} ]},
  { id:"wasch", eyebrow:"Waschrhythmus", title:"Wie oft wäschst du deine Haare?", type:"single", options:[
    {v:"taeglich", l:"Täglich"},
    {v:"zweidrei", l:"Alle 2–3 Tage"},
    {v:"woche", l:"1–2× pro Woche"},
    {v:"selten", l:"Seltener"} ]},
  { id:"alltag", eyebrow:"Alltag & Gewohnheiten", title:"Was gehört zu deinem Alltag?", hint:"Mehrere Antworten möglich.", type:"multi", none:"nichts", options:[
    {v:"hitze", l:"Föhn, Glätteisen oder Lockenstab", d:"Fast täglich"},
    {v:"sonne", l:"Viel Sonne, Chlor oder Salzwasser", d:"Draußen, Schwimmen, Urlaub"},
    {v:"sport", l:"Viel Sport", d:"Schwitzen, öfter waschen"},
    {v:"zopf", l:"Oft Zopf oder hochgesteckt", d:"Gummi, Klammern, Dutt"},
    {v:"nichts", l:"Nichts davon", d:"Meist lufttrocknen, wenig Styling"} ]},
  { id:"wunsch", eyebrow:"Hauptwunsch", title:"Was wünschst du dir am meisten?", hint:"Wähle bis zu 2.", type:"multi", max:2, options:[
    {v:"volumen", l:"Mehr Volumen"},
    {v:"glanz", l:"Glanz & Geschmeidigkeit"},
    {v:"frizz", l:"Weniger Frizz"},
    {v:"locken", l:"Definierte Locken"},
    {v:"farbe", l:"Farbe soll länger halten"},
    {v:"spliss", l:"Weniger Spliss & Haarbruch"},
    {v:"fett", l:"Ansatz bleibt länger frisch"},
    {v:"kopfhaut", l:"Kopfhaut in Balance"} ]}
];
const Q = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
const label = (qid, v) => (Q[qid].options.find(o => o.v === v) || {}).l || v;

/* ------------------------------------------------------------------
   Regelwerk
   a = { staerke, form, zustand, kopfhaut, wasch, alltag:Set, wunsch:Set }
------------------------------------------------------------------ */
const has = (set, v) => set.has(v);
const isCurly = a => a.form === "lockig" || a.form === "kraus";
const damage = a =>
  ({natur:0, coloriert:1, blondiert:3, strapaziert:2})[a.zustand]
  + (has(a.alltag,"hitze") ? 1 : 0) + (has(a.alltag,"sonne") ? 1 : 0) + (has(a.wunsch,"spliss") ? 1 : 0);

// Grund-Kärtchen ("weil: ...")
const R = {
  staerke:a => label("staerke", a.staerke) + "es Haar",
  form:a => ({glatt:"Glattes Haar", wellig:"Welliges Haar", lockig:"Lockiges Haar", kraus:"Sehr lockiges Haar"})[a.form],
  zustand:a => label("zustand", a.zustand),
  kopfhaut:a => "Kopfhaut: " + label("kopfhaut", a.kopfhaut).toLowerCase(),
  wasch:a => "Waschen: " + label("wasch", a.wasch).toLowerCase(),
  alltag:v => label("alltag", v),
  wunsch:v => "Wunsch: " + label("wunsch", v)
};

function shampoo(a){
  const how = "Nur auf der Kopfhaut aufschäumen. Die Längen werden beim Ausspülen mitgereinigt.";
  const because = [R.kopfhaut(a)];
  switch (a.kopfhaut){
    case "schuppen": return { name:"Anti-Schuppen-Shampoo, im Wechsel mit einem milden Shampoo", because,
      why:"Echte Schuppen brauchen ein Shampoo mit Anti-Schuppen-Wirkstoff, zum Beispiel Piroctone Olamine. Zwei Mal pro Woche reicht, an den anderen Tagen wäschst du mild.",
      how:"Das Wirkstoff-Shampoo 2–3 Minuten einwirken lassen, dann gründlich ausspülen." };
    case "sensibel": return { name:"Sehr mildes, parfümfreies Shampoo", because,
      why:"Duftstoffe und starke Tenside lösen am häufigsten Reizungen aus. Je kürzer die Inhaltsliste, desto besser.", how };
    case "fettend": {
      const b = a.wasch === "taeglich" ? [...because, R.wasch(a)] : because;
      return { name:"Mildes, leichtes Shampoo ohne pflegende Öle", because:b,
        why:"Öle und Silikone im Shampoo landen genau am Ansatz, wo du sie nicht willst. Ein sanftes, klärendes Shampoo reinigt, ohne die Kopfhaut zu reizen."
          + (a.wasch === "taeglich" ? " Tägliches Waschen ist in Ordnung, wenn das Shampoo mild ist." : ""), how };
    }
    case "trocken": return { name:"Mildes, feuchtigkeitsspendendes Shampoo", because,
      why:"Sanfte Tenside entfetten die Kopfhaut weniger. Dann spannt sie nicht mehr so.", how };
  }
  // Kopfhaut unauffällig: die Längen entscheiden mit
  if (isCurly(a)) return { name:"Mildes, sulfatfreies Shampoo", because:[R.form(a)],
    why:"Locken sind von Natur aus trockener. Ein sanftes Shampoo nimmt ihnen nicht die Feuchtigkeit, die sie für ihre Form brauchen.", how };
  if (a.zustand === "coloriert" || a.zustand === "blondiert") return { name:"Mildes, farbschonendes Shampoo", because:[R.zustand(a)],
    why:"Starke Tenside waschen Farbpigmente schneller aus. Mild heißt: Die Farbe hält länger.", how };
  if (a.staerke === "fein") return { name:"Leichtes Shampoo ohne schwere Pflegestoffe", because:[R.staerke(a)],
    why:"Feines Haar wird von reichhaltigen Shampoos schnell platt. Leicht reinigen, pflegen macht der Conditioner.", how };
  return { name:"Ein mildes Basis-Shampoo", because:[R.kopfhaut(a)],
    why:"Deine Kopfhaut ist ausgeglichen. Ein einfaches, mildes Shampoo reicht völlig, Spezialshampoos braucht es nicht.", how };
}

function conditioner(a){
  const d = damage(a), because = [];
  let name, why;
  if (d >= 3){
    name = "Reparierender Conditioner, dazu 1× pro Woche eine Maske";
    why = "Dein Haar ist durch Chemie, Hitze oder Sonne deutlich beansprucht. Der Conditioner glättet nach jeder Wäsche, die Maske pflegt einmal pro Woche tiefer.";
    because.push(R.zustand(a));
    if (has(a.alltag,"hitze")) because.push(R.alltag("hitze"));
    if (has(a.alltag,"sonne")) because.push(R.alltag("sonne"));
  } else if (a.staerke === "kraeftig" || isCurly(a)){
    name = "Reichhaltiger Conditioner";
    why = "Kräftiges oder lockiges Haar nimmt Pflege gut auf und braucht sie auch, damit es geschmeidig bleibt und weniger kraust.";
    because.push(a.staerke === "kraeftig" ? R.staerke(a) : R.form(a));
  } else if (a.staerke === "fein"){
    name = "Leichter Conditioner (oder Sprüh-Conditioner)";
    why = "Feines Haar braucht Pflege zum Entwirren, aber nichts, was es beschwert.";
    because.push(R.staerke(a));
  } else {
    name = "Conditioner nach jeder Wäsche";
    why = "Der Conditioner schließt die Schuppenschicht. Das Haar lässt sich besser kämmen und glänzt mehr.";
    because.push(R.staerke(a));
  }
  if (a.zustand === "coloriert"){
    why += " Achte auf einen sauren pH-Wert (oft steht „Color“ oder „pH 4–5“ drauf). Er schließt die Haaroberfläche und die Farbe hält länger.";
    if (!because.includes(R.zustand(a))) because.push(R.zustand(a));
  }
  let how = "Nur in Längen und Spitzen, den Ansatz frei lassen. 1–2 Minuten einwirken lassen.";
  if (isCurly(a)) how = "Ins nasse Haar kneten und mit den Fingern oder einem grobzinkigen Kamm entwirren, solange der Conditioner drin ist.";
  else if (a.kopfhaut === "fettend" || a.staerke === "fein") how = "Erst ab Kinnhöhe einarbeiten, der Ansatz bleibt frei. Gut ausspülen.";
  return { name, why, how, because };
}

function hitzeschutz(a){
  if (!has(a.alltag,"hitze")) return null;
  return { name:"Hitzeschutz vor jedem Föhnen oder Glätten", because:[R.alltag("hitze")],
    why:"Glätteisen und Lockenstab erreichen 180–230 °C. Hitzeschutz verringert den Schaden deutlich. Wer fast täglich mit Hitze stylt, sollte nicht darauf verzichten.",
    how: a.staerke === "fein" ? "Leichtes Spray, ins handtuchtrockene Haar. Glätteisen bei feinem Haar höchstens 180 °C."
                              : "Ins handtuchtrockene Haar sprühen, gleichmäßig durchkämmen." };
}

/* Spezial-Impulse: jedes Extra sammelt Punkte. pts: [Punkte, Bedingung, Grund-Kärtchen|null, Kurzbeschreibung] */
const SPECIAL_MIN = 3, SPECIAL_OPT = 4;
const SPECIALS = [
  { id:"kopfhautserum", name:a => ({
      trocken:"Feuchtigkeitsspendendes Kopfhaut-Serum",
      sensibel:"Beruhigendes Kopfhaut-Serum (parfümfrei)",
      fettend:"Ausgleichendes Kopfhaut-Tonikum",
      schuppen:"Beruhigendes Kopfhaut-Serum" })[a.kopfhaut] || "Kopfhaut-Serum",
    why:"Ein Serum wirkt direkt auf der Kopfhaut und bleibt dort, anders als ein Shampoo, das nach einer Minute ausgespült wird. Für Kopfhaut-Themen ist es das wirksamste Extra.",
    how:"2–3 Mal pro Woche nach dem Waschen scheitelweise auf die Kopfhaut geben und sanft einmassieren.",
    pts:[ [3, a=>a.kopfhaut==="trocken", a=>R.kopfhaut(a), "Kopfhaut trocken"],
          [3, a=>a.kopfhaut==="sensibel", a=>R.kopfhaut(a), "Kopfhaut empfindlich"],
          [2, a=>a.kopfhaut==="fettend", a=>R.kopfhaut(a), "Kopfhaut fettend"],
          [1, a=>a.kopfhaut==="schuppen", a=>R.kopfhaut(a), "Schuppen"],
          [3, a=>has(a.wunsch,"kopfhaut"), ()=>R.wunsch("kopfhaut"), "Wunsch Kopfhaut-Balance"] ]},
  { id:"peeling", name:()=>"Kopfhaut-Peeling, alle 1–2 Wochen",
    why:"Ein Peeling löst Talg- und Produktreste am Ansatz. Danach bleibt das Haar oft spürbar länger frisch.",
    how:"Vor der Haarwäsche auf die feuchte Kopfhaut geben, sanft massieren, dann wie gewohnt waschen.",
    pts:[ [2, a=>a.kopfhaut==="fettend", a=>R.kopfhaut(a), "Kopfhaut fettend"],
          [2, a=>has(a.wunsch,"fett"), ()=>R.wunsch("fett"), "Wunsch frischer Ansatz"],
          [1, a=>has(a.alltag,"sport"), ()=>R.alltag("sport"), "Viel Sport"],
          [-5, a=>a.kopfhaut==="sensibel" || a.kopfhaut==="trocken", null, "Kopfhaut empfindlich/trocken (ausgeschlossen)"] ]},
  { id:"bond", name:()=>"Molecular-Repair-Pflege",
    why:"Blondierung und Dauerwelle brechen die inneren Verbindungen im Haar auf. Diese Pflege setzt genau dort an, nicht nur an der Oberfläche wie ein Conditioner.",
    how:"Nach Anleitung einmal pro Woche, meist vor der Haarwäsche ins Haar geben. Besonders wirksam ist die Behandlung bei uns im Salon direkt beim Färben.",
    pts:[ [5, a=>a.zustand==="blondiert", a=>R.zustand(a), "Blondiert"],
          [3, a=>a.zustand==="strapaziert", a=>R.zustand(a), "Strapaziert"],
          [1, a=>has(a.wunsch,"spliss"), ()=>R.wunsch("spliss"), "Wunsch weniger Haarbruch"],
          [1, a=>has(a.alltag,"hitze") && a.zustand!=="natur", ()=>R.alltag("hitze"), "Hitze + chemisch behandelt"] ]},
  { id:"lockencreme", name:a => a.staerke==="fein" ? "Leichte Lockenmousse oder Leave-in-Spray" : "Leave-in-Conditioner oder Lockencreme",
    why:"Locken brauchen Feuchtigkeit, die im Haar bleibt. Ein Leave-in bündelt die Locken, sie halten ihre Form und krausen weniger.",
    how:"Ins nasse, noch tropfende Haar kneten (nicht kämmen), dann lufttrocknen oder mit Diffusor föhnen.",
    pts:[ [3, a=>a.form==="lockig", a=>R.form(a), "Lockig"],
          [4, a=>a.form==="kraus", a=>R.form(a), "Sehr lockig/kraus"],
          [1, a=>a.form==="wellig", a=>R.form(a), "Wellig"],
          [3, a=>has(a.wunsch,"locken") && a.form!=="glatt", ()=>R.wunsch("locken"), "Wunsch definierte Locken"],
          [1, a=>has(a.wunsch,"frizz") && a.form!=="glatt", ()=>R.wunsch("frizz"), "Frizz + Wellen/Locken"] ]},
  { id:"detangler", name:()=>"Leichter Leave-in-Spray",
    why:"Ein Leave-in-Spray legt einen leichten Film ums Haar. Das bändigt Frizz und erleichtert das Kämmen, ohne glattes Haar zu beschweren.",
    how:"Ins handtuchtrockene Haar sprühen, nur in die Längen.",
    pts:[ [2, a=>has(a.wunsch,"frizz") && (a.form==="glatt"||a.form==="wellig"), ()=>R.wunsch("frizz"), "Frizz bei glattem/welligem Haar"],
          [1, a=>has(a.alltag,"zopf"), ()=>R.alltag("zopf"), "Oft Zopf"],
          [1, a=>a.zustand!=="natur" && !isCurly(a), a=>R.zustand(a), "Chemisch behandelt, nicht lockig"] ]},
  { id:"oel", name:()=>"Ein paar Tropfen Haaröl für die Spitzen",
    why:"Öl glättet die Oberfläche der Spitzen. Das bringt sofort Glanz und weniger Frizz, besonders bei kräftigem Haar.",
    how:"1–3 Tropfen in den Handflächen verreiben und nur in die Spitzen geben. Weniger ist mehr.",
    pts:[ [2, a=>has(a.wunsch,"glanz"), ()=>R.wunsch("glanz"), "Wunsch Glanz"],
          [2, a=>has(a.wunsch,"frizz"), ()=>R.wunsch("frizz"), "Wunsch weniger Frizz"],
          [1, a=>a.staerke==="kraeftig", a=>R.staerke(a), "Kräftiges Haar"],
          [1, a=>a.form==="kraus", a=>R.form(a), "Sehr lockig/kraus"],
          [-3, a=>a.staerke==="fein", null, "Feines Haar (Abzug)"],
          [-2, a=>a.kopfhaut==="fettend", null, "Fettende Kopfhaut (Abzug)"] ]},
  { id:"glanz", name:()=>"Saure Glanzspülung (1× pro Woche)",
    why:"Ein saurer pH-Wert schließt die Haaroberfläche. Glattes Haar reflektiert mehr Licht und glänzt, ohne dass etwas Schweres im Haar bleibt.",
    how:"Nach dem Conditioner ins Haar geben, kurz einwirken lassen, mit kühlem Wasser ausspülen.",
    pts:[ [3, a=>has(a.wunsch,"glanz"), ()=>R.wunsch("glanz"), "Wunsch Glanz"],
          [1, a=>a.staerke==="fein", a=>R.staerke(a), "Feines Haar"],
          [1, a=>a.zustand==="coloriert", a=>R.zustand(a), "Coloriert"],
          [-1, a=>a.staerke==="kraeftig", null, "Kräftiges Haar (Abzug)"] ]},
  { id:"volumen", name:()=>"Ansatz-Volumenspray oder leichter Föhnschaum",
    why:"Volumen entsteht am Ansatz. Ein leichtes Produkt dort hebt das Haar an. Pflege in den Längen bringt dafür nichts.",
    how:"Ins handtuchtrockene Haar direkt an den Ansatz geben und kopfüber oder mit Rundbürste föhnen.",
    pts:[ [3, a=>has(a.wunsch,"volumen"), ()=>R.wunsch("volumen"), "Wunsch Volumen"],
          [2, a=>a.staerke==="fein", a=>R.staerke(a), "Feines Haar"],
          [-3, a=>a.staerke==="kraeftig", null, "Kräftiges Haar (Abzug)"],
          [-2, a=>isCurly(a), null, "Lockig/kraus (Abzug)"] ]},
  { id:"uv", name:()=>"UV-Schutz-Spray für die Haare",
    why:"Sonne, Chlor und Salzwasser bleichen Farbe aus und machen die Längen spröde. Ein UV-Spray ist für Haare das, was Sonnencreme für die Haut ist.",
    how:"Vor dem Rausgehen oder Schwimmen in die Längen sprühen. Nach Chlor- oder Salzwasser die Haare mit klarem Wasser ausspülen.",
    pts:[ [3, a=>has(a.alltag,"sonne"), ()=>R.alltag("sonne"), "Viel Sonne/Chlor"],
          [1, a=>has(a.alltag,"sonne") && (a.zustand==="coloriert"||a.zustand==="blondiert"), a=>R.zustand(a), "+ coloriert/blondiert"] ]},
  { id:"farbe", name:a => a.zustand==="blondiert" ? "Silber-Pflege gegen Gelbstich (1× pro Woche)" : "Farbauffrischende Pflege (Color-Conditioner)",
    why:"Pigmentierte Pflege frischt den Farbton zwischen zwei Salonterminen auf. So sieht die Farbe länger aus wie frisch gemacht.",
    how:"Statt deines normalen Conditioners einmal pro Woche, Einwirkzeit genau einhalten.",
    pts:[ [3, a=>has(a.wunsch,"farbe"), ()=>R.wunsch("farbe"), "Wunsch Farbe hält länger"],
          [1, a=>a.zustand==="coloriert"||a.zustand==="blondiert", a=>R.zustand(a), "Coloriert/blondiert"],
          [-5, a=>a.zustand==="natur"||a.zustand==="strapaziert", null, "Nicht coloriert (ausgeschlossen)"] ]},
  { id:"trockenshampoo", name:()=>"Trockenshampoo für den Tag dazwischen",
    why:"Trockenshampoo nimmt Fett am Ansatz auf. So kommst du einen Tag länger ohne Haarwäsche aus, und es gibt sogar etwas Volumen.",
    how:"Mit ca. 20 cm Abstand auf den Ansatz sprühen, kurz warten, ausbürsten. Nicht mehrere Tage hintereinander verwenden.",
    pts:[ [2, a=>has(a.wunsch,"fett"), ()=>R.wunsch("fett"), "Wunsch frischer Ansatz"],
          [2, a=>a.kopfhaut==="fettend", a=>R.kopfhaut(a), "Kopfhaut fettend"],
          [1, a=>has(a.alltag,"sport"), ()=>R.alltag("sport"), "Viel Sport"],
          [-3, a=>a.kopfhaut==="sensibel"||a.kopfhaut==="trocken"||a.kopfhaut==="schuppen", null, "Kopfhaut empfindlich/trocken/Schuppen (Abzug)"] ]}
];

function scoreSpecials(a){
  return SPECIALS.map(s => {
    let score = 0; const because = [];
    for (const [p, cond, reason] of s.pts){
      if (cond(a)){ score += p; if (p > 0 && reason) { const r = reason(a); if (!because.includes(r)) because.push(r); } }
    }
    return { id:s.id, score, name:s.name(a), why:s.why, how:s.how, because };
  }).sort((x, y) => y.score - x.score);
}

/* Weglassen: in Reihenfolge, max. 4 */
const SKIPS = [
  { id:"oel", name:"Haaröl und schwere Seren", crit:"Feines Haar oder fettende Kopfhaut",
    when:a => a.staerke==="fein" || a.kopfhaut==="fettend",
    why:a => a.staerke==="fein" ? "Sie beschweren feines Haar sofort, es hängt dann platt und strähnig." : "Öl wandert über die Hände und das Kämmen zum Ansatz. Der wird dann noch schneller fettig.",
    because:a => [a.staerke==="fein" ? R.staerke(a) : R.kopfhaut(a)] },
  { id:"antischuppen", name:"Anti-Schuppen-Shampoo", crit:"Keine Schuppen",
    when:a => a.kopfhaut!=="schuppen",
    why:()=>"Ohne echte Schuppen bringt es nichts. Die Wirkstoffe können eine gesunde Kopfhaut sogar reizen. Trockene Schüppchen sind keine Schuppen.",
    because:a => [R.kopfhaut(a)] },
  { id:"detox", name:"Regelmäßiges Detox- oder Tiefenreinigungs-Shampoo", crit:"Coloriert/blondiert oder Kopfhaut trocken/empfindlich",
    when:a => a.zustand==="coloriert" || a.zustand==="blondiert" || a.kopfhaut==="trocken" || a.kopfhaut==="sensibel",
    why:a => (a.zustand==="coloriert"||a.zustand==="blondiert") ? "Es wäscht Farbpigmente aus und trocknet die Längen aus. Wenn überhaupt, dann höchstens einmal im Monat." : "Es entfettet die Kopfhaut stark und kann sie zusätzlich austrocknen und reizen.",
    because:a => [(a.zustand==="coloriert"||a.zustand==="blondiert") ? R.zustand(a) : R.kopfhaut(a)] },
  { id:"bond", name:"Molecular-Repair-Pflege", crit:"Naturbelassen und kein tägliches Hitzestyling",
    when:a => a.zustand==="natur" && !has(a.alltag,"hitze"),
    why:()=>"Sie repariert Verbindungen, die durch Blondierung oder Dauerwelle gebrochen sind. Naturbelassenes Haar hat diese Schäden nicht.",
    because:a => [R.zustand(a)] },
  { id:"silber", name:"Silbershampoo", crit:"Nicht blondiert",
    when:a => a.zustand!=="blondiert",
    why:()=>"Es neutralisiert Gelbstich in aufgehelltem Haar. In anderem Haar hat es keinen Effekt oder macht es fahl.",
    because:a => [R.zustand(a)] },
  { id:"trockenshampoo", name:"Trockenshampoo", crit:"Kopfhaut trocken/empfindlich/Schuppen",
    when:a => a.kopfhaut==="trocken" || a.kopfhaut==="sensibel" || a.kopfhaut==="schuppen",
    why:()=>"Es entzieht der Kopfhaut zusätzlich Feuchtigkeit und bleibt als Rückstand liegen. Für deine Kopfhaut eher ungünstig.",
    because:a => [R.kopfhaut(a)] },
  { id:"volumen", name:"Volumen-Schaum und Volumen-Shampoo", crit:"Kräftiges oder sehr lockiges Haar",
    when:a => a.staerke==="kraeftig" || a.form==="kraus",
    why:()=>"Dein Haar hat von Natur aus Fülle. Volumenprodukte machen es eher trocken und störrisch.",
    because:a => [a.staerke==="kraeftig" ? R.staerke(a) : R.form(a)] },
  { id:"twoinone", name:"2-in-1-Shampoo mit Spülung", crit:"Coloriert/blondiert/strapaziert, kräftig oder lockig",
    when:a => a.zustand!=="natur" || a.staerke==="kraeftig" || isCurly(a),
    why:()=>"Es pflegt die Längen zu wenig und reinigt die Kopfhaut zu schwach. Zwei getrennte Produkte machen beide Aufgaben besser.",
    because:a => [a.zustand!=="natur" ? R.zustand(a) : (isCurly(a) ? R.form(a) : R.staerke(a))] },
  { id:"maske", name:"Wöchentliche Haarmaske", crit:"Naturbelassen, fein oder glatt, keine Belastung durch Hitze/Sonne",
    when:a => damage(a)===0 && (a.staerke==="fein" || a.form==="glatt"),
    why:()=>"Gesundes Haar ohne Chemie braucht keine Intensivkur. Dein Conditioner reicht, eine Maske würde es eher beschweren.",
    because:a => [R.zustand(a)] },
  { id:"hitzeschutz", name:"Hitzeschutz", crit:"Kein tägliches Hitzestyling",
    when:a => !has(a.alltag,"hitze"),
    why:()=>"Wenn du deine Haare meist lufttrocknen lässt, brauchst du keinen. Beim gelegentlichen Föhnen reicht die mittlere Stufe mit etwas Abstand.",
    because:()=>["Kein Hitzestyling"] }
];

function tips(a){
  const t = [];
  if (has(a.wunsch,"spliss") || a.zustand==="strapaziert") t.push("<b>Spliss kann man nicht dauerhaft reparieren, nur schneiden.</b> Pflege kann die Spitzen kurzfristig glätten und neuem Spliss vorbeugen, aber alle 8–12 Wochen die Spitzen schneiden lassen bringt mehr als jedes Produkt.");
  if (has(a.alltag,"zopf")) t.push("Weiche Spiral- oder Stoffgummis statt Metallclips. Den Zopf nicht immer an derselben Stelle binden, sonst bricht das Haar dort.");
  if (isCurly(a) || has(a.wunsch,"frizz")) t.push("Mikrofasertuch oder altes Baumwoll-T-Shirt statt Frottee. Haare ausdrücken, nicht rubbeln, das spart viel Frizz.");
  if (has(a.alltag,"hitze")) t.push("Den Föhn auf mittlere Temperatur stellen und die letzten 10 % kalt föhnen, das schließt die Oberfläche und bringt Glanz.");
  if (a.wasch==="taeglich" && (a.kopfhaut==="trocken"||a.kopfhaut==="sensibel")) t.push("Versuch, den Waschrhythmus langsam auf alle 2 Tage zu strecken. Deine Kopfhaut wird es dir danken.");
  if (a.kopfhaut==="fettend") t.push("Nicht zu heiß waschen und den Ansatz möglichst wenig mit den Händen berühren. Beides regt die Talgproduktion an.");
  if (has(a.alltag,"sport") && a.kopfhaut!=="fettend") t.push("Nach dem Sport reicht oft lauwarmes Wasser und Conditioner in den Längen. Nicht jedes Mal muss ein Shampoo sein.");
  if (a.zustand==="coloriert"||a.zustand==="blondiert") t.push("In den ersten 48 Stunden nach dem Färben nicht waschen, dann hält die Farbe deutlich länger.");
  if (has(a.wunsch,"glanz")) t.push("Zum Schluss kühl ausspülen. Das schließt die Haaroberfläche und bringt sichtbar mehr Glanz, kostenlos.");
  if (a.kopfhaut==="schuppen"||a.kopfhaut==="sensibel") t.push("Wenn sich deine Kopfhaut nach 4 Wochen nicht bessert: Lass es beim Hautarzt abklären. Hinter hartnäckigen Beschwerden kann mehr stecken als ein Pflegethema.");
  if (!t.length) t.push("Dein Haar ist unkompliziert. Weniger Produkte sind hier wirklich mehr.");
  return t.slice(0, 4);
}

/* ------------------------------------------------------------------
   Deine Wünsche: Jeder gewählte Hauptwunsch bekommt GENAU eine Antwort.
   status: "covered" = ein Spezial-Impuls erfüllt ihn
           "tip"     = so erreichst du es
           "honest"  = ehrlich gesagt: Pflege allein schafft das nicht
   uses:   Produktarten (IDs aus SPECIALS/SKIPS), die die Antwort empfiehlt.
           Der automatische Test (tests/haarkompass.test.js) prüft, dass
           davon nie etwas unter "Was du weglassen kannst" steht.
------------------------------------------------------------------ */
const WISH_COVER = {
  volumen:["volumen"], glanz:["glanz","oel"], frizz:["lockencreme","detangler","oel"],
  locken:["lockencreme"], farbe:["farbe","uv"], spliss:["bond"],
  fett:["peeling","trockenshampoo"], kopfhaut:["kopfhautserum"]
};
const scalpDry = a => a.kopfhaut==="trocken" || a.kopfhaut==="sensibel" || a.kopfhaut==="schuppen";
const nextExtra = special => special.length ? "das nächste Extra nach deinem Spezial-Impuls" : "ein sinnvolles Extra";

const WISH_ANSWERS = {
  volumen:(a, sp) => {
    if (isCurly(a)) return { status:"honest", text:"Locken haben ihre Fülle schon, Volumenprodukte machen sie eher trocken. Mehr Fülle am Ansatz entsteht bei dir über die Form: mit dem Diffusor kopfüber föhnen und mit einem Stufenschnitt, der den Locken Gewicht nimmt." };
    if (a.staerke === "kraeftig") return { status:"honest", text:"Dein Haar ist kräftig und hat schon viel Fülle. Mehr Volumen kommt hier vom Schnitt, nicht aus der Flasche: Stufen nehmen Gewicht heraus, dann hebt sich der Ansatz von selbst." };
    return { status:"tip", uses:["volumen"], text:"Volumen entsteht am Ansatz: Conditioner nur in die Längen, dann kopfüber oder mit der Rundbürste föhnen. Wenn du ein Produkt ergänzen willst, ist ein leichter Föhnschaum am Ansatz " + nextExtra(sp) + "." };
  },
  glanz:a => {
    if (a.staerke === "fein" || a.kopfhaut === "fettend") return { status:"tip", uses:["glanz"], text:"Haaröl wäre für dich zu schwer. Glanz bekommst du trotzdem: zum Schluss kühl ausspülen und einmal pro Woche eine saure Glanzspülung. Beides glättet die Haaroberfläche, ohne etwas Schweres im Haar zu lassen." };
    return { status:"tip", uses:["oel"], text:"Zum Schluss kühl ausspülen und den Conditioner nach jeder Wäsche verwenden. Wenn du mehr willst: 1–2 Tropfen Haaröl nur in die Spitzen." };
  },
  frizz:a => {
    if (a.staerke === "fein") return { status:"tip", uses:["detangler"], text:"Haare mit einem Mikrofasertuch ausdrücken statt rubbeln und einen leichten Leave-in-Spray in die Längen geben. Schwere Cremes und Öle würden feines Haar platt machen." };
    return { status:"tip", text:"Haare mit einem Mikrofasertuch ausdrücken statt rubbeln und nicht trocken bürsten" + (has(a.alltag,"hitze") ? ", zum Schluss kalt föhnen" : "") + ". Das bringt bei Frizz oft mehr als ein weiteres Produkt." };
  },
  locken:a => {
    if (a.form === "glatt") return { status:"honest", text:"Glattes Haar lässt sich nicht in Locken pflegen, das kann kein Produkt. Für Locken auf Zeit helfen Lockenstab oder Lockenwickler. Dauerhafte Locken gehen nur mit einer Umformung im Salon. Die beansprucht das Haar, deshalb beraten wir dich dazu gern persönlich." };
    return { status:"tip", uses:["lockencreme"], text:"Eine leichte Lockencreme oder ein Leave-in ins nasse, noch tropfende Haar kneten, danach nicht mehr kämmen und mit dem Diffusor oder an der Luft trocknen. Je weniger du die Locken beim Trocknen berührst, desto definierter bleiben sie." };
  },
  farbe:(a, sp) => {
    if (a.zustand === "natur") return { status:"honest", text:"Du hast angegeben, dass dein Haar nicht gefärbt ist. Farbpflege bringt bei ungefärbtem Haar nichts. Auch Naturhaar bleicht in der Sonne aus, dagegen hilft ein UV-Schutz-Spray, wenn du viel draußen bist." };
    if (a.zustand === "strapaziert") return { status:"tip", text:"Farbe hält länger mit mildem Shampoo, lauwarmem statt heißem Wasser und wenn du in den ersten 48 Stunden nach dem Färben nicht wäschst. Ist dein Haar auch gefärbt, frag uns beim nächsten Termin nach farbauffrischender Pflege." };
    return { status:"tip", uses:["farbe"], text:"Farbe hält länger mit mildem Shampoo, lauwarmem statt heißem Wasser und wenn du in den ersten 48 Stunden nach dem Färben nicht wäschst. Eine farbauffrischende Pflege einmal pro Woche wäre " + nextExtra(sp) + "." };
  },
  spliss:a => ({ status:"honest", text:"Gespaltene Spitzen lassen sich nicht reparieren, nur schneiden: alle 8–12 Wochen die Spitzen nachschneiden lassen. Vorbeugen kannst du mit Conditioner nach jeder Wäsche und indem du nasses Haar von unten nach oben entwirrst" + (has(a.alltag,"hitze") ? ". Und mit Hitzeschutz vor jedem Styling." : ".") }),
  fett:a => {
    if (scalpDry(a)) return { status:"tip", text:"Trockenshampoo und Peeling wären für deine Kopfhaut zu viel. Was hilft: lauwarm statt heiß waschen, Conditioner erst ab Kinnhöhe, den Ansatz wenig mit den Händen berühren und die Bürste regelmäßig reinigen." };
    return { status:"tip", uses:["trockenshampoo"], text:"Conditioner und Öl vom Ansatz fernhalten, lauwarm waschen und die Bürste regelmäßig reinigen. Am Tag zwischen zwei Wäschen darf es ein Trockenshampoo sein, aber nicht mehrere Tage hintereinander." };
  },
  kopfhaut:(a, sp) => {
    if (a.kopfhaut === "schuppen") return { status:"tip", text:"Das Anti-Schuppen-Shampoo aus deiner Basis-Routine ist dein wichtigster Schritt. Gib ihm 4 Wochen. Wird es nicht besser, lass deine Kopfhaut beim Hautarzt anschauen." };
    if (a.kopfhaut === "normal") return { status:"tip", text:"Deine Kopfhaut ist unauffällig. Damit das so bleibt: mild und nicht zu heiß waschen und nicht ständig neue Produkte ausprobieren. Ein Extra brauchst du dafür nicht." };
    return { status:"tip", uses:["kopfhautserum"], text:"Ein Kopfhaut-Serum wäre " + nextExtra(sp) + ". Bis dahin helfen die milde Basis-Routine und lauwarmes statt heißes Wasser." };
  }
};

function wishes(a, special){
  const byId = Object.fromEntries(special.map(s => [s.id, s]));
  return [...a.wunsch].map(w => {
    const base = { wish:w, label:label("wunsch", w) };
    const hit = WISH_COVER[w].find(id => byId[id]);
    if (hit) return { ...base, status:"covered", uses:[hit],
      text:"Dafür ist dein Spezial-Impuls da: " + byId[hit].name + (byId[hit].optional ? " (optional)." : ".") };
    const ans = WISH_ANSWERS[w](a, special);
    return { ...base, status:ans.status, text:ans.text, uses:ans.uses || [] };
  });
}

/* ------------------------------------------------------------------
   Ersteinschätzung ganz oben (wie eine Ampel)
   level: "kopfhaut" | "aufbau" | "wenig" | "routine"
------------------------------------------------------------------ */
const VERDICT_TAG = { kopfhaut:"Kopfhaut zuerst", aufbau:"Aufbau nötig", wenig:"Pflegeleicht", routine:"Gut versorgt" };
function verdict(a, basis, special, skip){
  const extras = special.filter(s => !s.optional).length;
  const summary = basis.length + " Basis-Schritt" + (basis.length === 1 ? "" : "e")
    + (extras ? ", 1 Extra, das sich lohnt" : ", kein Extra nötig")
    + (skip.length ? ", " + skip.length + (skip.length === 1 ? " Produkt" : " Produkte") + " zum Weglassen." : ".");
  let level, title, text;
  if (a.kopfhaut === "schuppen" || a.kopfhaut === "sensibel"){
    level = "kopfhaut"; title = "Bei dir zuerst die Kopfhaut";
    text = "Deine Kopfhaut braucht gerade die meiste Aufmerksamkeit. Wenn sie zur Ruhe kommt, profitiert auch dein Haar. Fang deshalb nicht mit Extras für die Längen an.";
  } else if (damage(a) >= 3){
    level = "aufbau"; title = "Dein Haar braucht Aufbau";
    text = "Chemie, Hitze oder Sonne haben deinem Haar zugesetzt. Mit regelmäßiger Pflege und den richtigen Gewohnheiten erholen sich die Längen spürbar. Spitzen, die schon gespalten sind, kann nur die Schere retten.";
  } else if (basis.length + extras <= 3){
    level = "wenig"; title = "Dein Haar braucht wenig";
    text = "Gute Nachricht: Dein Haar ist unkompliziert. Mehr Produkte machen es hier nicht besser.";
  } else {
    level = "routine"; title = "Eine klare Routine reicht";
    text = "Mit den passenden Grundprodukten und einem gezielten Extra ist dein Haar gut versorgt.";
  }
  return { level, tag:VERDICT_TAG[level], title, text, summary };
}

function recommend(a){
  const basis = [shampoo(a), conditioner(a), hitzeschutz(a)].filter(Boolean);
  const ranked = scoreSpecials(a);
  const special = [];
  if (ranked[0].score >= SPECIAL_MIN) special.push(ranked[0]);
  if (special.length && ranked[1].score >= SPECIAL_OPT) special.push({ ...ranked[1], optional:true });
  const recommendedIds = new Set(special.map(s => s.id));
  if (has(a.alltag,"hitze")) recommendedIds.add("hitzeschutz");
  if (a.kopfhaut === "schuppen") recommendedIds.add("antischuppen");
  if (damage(a) >= 3) recommendedIds.add("maske");
  const skip = SKIPS.filter(s => !recommendedIds.has(s.id) && s.when(a)).slice(0, 4)
    .map(s => ({ id:s.id, name:s.name, why:s.why(a), because:s.because(a) }));
  // basis/special/skip/tips: Form nicht ändern (Post-Generator liest sie).
  // wishes und verdict sind reine Zusätze für die Ergebnisseite.
  return { basis, special, skip, tips:tips(a), wishes:wishes(a, special), verdict:verdict(a, basis, special, skip) };
}
