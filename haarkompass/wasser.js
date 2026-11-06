/* ==================================================================
   HaarKompass – Wasserhärte nach Postleitzahl

   Quelle (Wien): Stadt Wien – Wiener Wasser, „Wasserhärte und Qualität
   des Wiener Wassers“, https://www.wien.gv.at/umwelt/trinkwasser-wasserhaerte
   Letzte Aktualisierung der Quelle: 18.11.2025.
   Lizenz: Creative Commons CC BY 4.0 (Quellenangabe auf der Seite).

   Nur geprüfte Werte. Für Postleitzahlen ohne geprüfte Daten zeigt die
   Seite ehrlich, wo man den Wert nachschlagen kann (Österreichische
   Trinkwasserdatenbank), statt einen Wert zu schätzen.

   Ändert die Stadt Wien ihre Tabelle: Werte und WASSER_STAND anpassen.
   Der Test (tests/haarkompass.test.js) prüft die Tabelle.
================================================================== */
"use strict";

const WASSER_STAND = "18.11.2025";
const WASSER_QUELLE = {
  name:"Stadt Wien – Wiener Wasser", url:"https://www.wien.gv.at/umwelt/trinkwasser-wasserhaerte", lizenz:"CC BY 4.0"
};
const WASSER_NACHSCHLAGEN = "https://www.trinkwasserinfo.at/datenbank/";

/* Gesamthärte in °dH je Wiener Bezirk: [von, bis] und, falls zeitweise
   Grundwasser eingespeist wird, die höchstmögliche Härte (hoch). */
const WASSER_WIEN = {};
for (let b = 1; b <= 23; b++) WASSER_WIEN[b] = { von:6, bis:12 };
for (const b of [2, 3, 11, 20, 21, 22]) WASSER_WIEN[b].hoch = 20;

/* Härtebereiche wie bei der Stadt Wien: weich 0–10, mittel 10–16, hart über 16 °dH */
const wasserStufe = dh => dh <= 10 ? "weich" : dh <= 16 ? "mittel" : "hart";

const WASSER_TEXT = {
  de:{
    stufe:{ weich:"weich", mittel:"mittelhart", hart:"hart" },
    ort:b => "Wien, " + b + ". Bezirk",
    normal:"Das Wiener Hochquellwasser ist weich bis mittelhart. Für dein Haar brauchst du deshalb keine speziellen Produkte gegen Kalk.",
    hoch:h => "Meist weich bis mittelhart. Wird zeitweise Grundwasser eingespeist, kann das Wasser bis " + h + " °dH hart werden. Fühlt sich dein Haar dann stumpf oder rau an: zum Schluss gründlich und kühl ausspülen. Ein klärendes Shampoo hilft gegen Ablagerungen, bei gefärbtem Haar aber höchstens einmal im Monat.",
    ehrlich:"Ehrlich gesagt: Hartes Wasser kann Ablagerungen hinterlassen, das Haar fühlt sich dann stumpfer an und Shampoo schäumt weniger. Ob es dem Haar auf Dauer schadet, ist wissenschaftlich nicht eindeutig geklärt.",
    keine:plz => "Für " + plz + " haben wir noch keine geprüften Werte. Den aktuellen Wert deines Wasserversorgers findest du in der Österreichischen Trinkwasserdatenbank.",
    nachschlagen:"In der Trinkwasserdatenbank nachschlagen",
    falsch:"Bitte eine österreichische Postleitzahl mit 4 Ziffern eingeben.",
    quelle:"Quelle: Stadt Wien – Wiener Wasser, Stand " + WASSER_STAND + ", Lizenz CC BY 4.0"
  },
  en:{
    stufe:{ weich:"soft", mittel:"medium-hard", hart:"hard" },
    ort:b => "Vienna, district " + b,
    normal:"Vienna's spring water is soft to medium-hard. So your hair doesn't need any special products against limescale.",
    hoch:h => "Mostly soft to medium-hard. When groundwater is fed in at times, the water can get as hard as " + h + " °dH. If your hair then feels dull or rough: finish with a thorough, cool rinse. A clarifying shampoo helps against build-up, but with colored hair no more than once a month.",
    ehrlich:"To be honest: hard water can leave build-up, so hair feels duller and shampoo lathers less. Whether it harms hair in the long run is not clearly established by research.",
    keine:plz => "We don't have verified values for " + plz + " yet. You can find the current value from your water supplier in the Austrian drinking water database.",
    nachschlagen:"Look it up in the drinking water database",
    falsch:"Please enter a 4-digit Austrian postal code.",
    quelle:"Source: City of Vienna – Wiener Wasser, as of " + WASSER_STAND + ", license CC BY 4.0"
  }
};

/* Ergebnis für eine Postleitzahl:
   { ok:false } bei ungültiger Eingabe,
   { ok:true, bekannt:false, plz } ohne geprüfte Daten,
   { ok:true, bekannt:true, plz, bezirk, von, bis, hoch?, stufeVon, stufeBis, stufeHoch? } */
function wasserFuerPlz(eingabe){
  const plz = String(eingabe || "").replace(/\s+/g, "");
  if (!/^\d{4}$/.test(plz) || plz[0] === "0") return { ok:false };
  // Wiener Bezirke: 1010 … 1230 (1 + zweistellige Bezirksnummer + 0)
  const m = plz.match(/^1(\d\d)0$/);
  const bezirk = m ? Number(m[1]) : 0;
  const w = WASSER_WIEN[bezirk];
  if (!w) return { ok:true, bekannt:false, plz };
  const r = { ok:true, bekannt:true, plz, bezirk, von:w.von, bis:w.bis, stufeVon:wasserStufe(w.von), stufeBis:wasserStufe(w.bis) };
  if (w.hoch) { r.hoch = w.hoch; r.stufeHoch = wasserStufe(w.hoch); }
  return r;
}
