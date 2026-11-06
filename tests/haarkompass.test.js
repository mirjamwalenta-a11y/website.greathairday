/* ==================================================================
   Automatischer Test für das HaarKompass-Regelwerk (haarkompass/engine.js)

   Rechnet ALLE möglichen Antwort-Kombinationen durch und prüft Regeln,
   die immer gelten müssen (z. B. "jeder Wunsch bekommt eine Antwort",
   "nichts wird gleichzeitig empfohlen und weggelassen").

   Start lokal:   node tests/haarkompass.test.js
   Läuft automatisch bei jeder Änderung (siehe .github/workflows/).
   Keine Abhängigkeiten, nur Node.js.
================================================================== */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// engine.js so laden, wie der Browser es tut (globale Namen)
const src = fs.readFileSync(path.join(__dirname, "..", "haarkompass", "engine.js"), "utf8");
const ctx = vm.createContext({});
vm.runInContext(src + "\n;this.__api = { QUESTIONS, SPECIALS, SKIPS, recommend, tips, label };", ctx);
const { QUESTIONS, SPECIALS, SKIPS, recommend } = ctx.__api;

const fehler = new Map();   // Regel -> { anzahl, beispiel }
function fail(regel, a, detail){
  const e = fehler.get(regel) || { anzahl:0, beispiel:null };
  e.anzahl++;
  if (!e.beispiel) e.beispiel = profil(a) + (detail ? "  →  " + detail : "");
  fehler.set(regel, e);
}
const profil = a => QUESTIONS.filter(q => a[q.id] !== undefined)
  .map(q => q.id + "=" + (q.type === "multi" ? [...a[q.id]].join("+") : a[q.id])).join(" ") || "(allgemein)";

/* ---- 1. Post-Generator braucht diese globalen Namen ---- */
for (const name of ["QUESTIONS", "SPECIALS", "SKIPS", "recommend", "tips"]){
  if (typeof ctx.__api[name] === "undefined") fail("Globaler Name fehlt (Post-Generator bricht)", {}, name);
}

/* ---- Hilfen "Nicht sicher?" vollständig ---- */
for (const q of QUESTIONS){
  if (q.help && (typeof q.help.title !== "string" || !q.help.title.trim() || typeof q.help.text !== "string" || !q.help.text.trim()))
    fail("Hilfe-Text bei einer Frage leer", {}, q.id);
}
for (const id of ["staerke", "kopfhaut"]){
  if (!QUESTIONS.find(q => q.id === id).help) fail("Hilfe fehlt bei wichtiger Frage", {}, id);
}

/* ---- 2. Alle Kombinationen erzeugen ---- */
function auswahlen(q){
  if (q.type === "single") return q.options.map(o => o.v);
  const vals = q.options.map(o => o.v), out = [];
  for (let m = 1; m < (1 << vals.length); m++){
    const s = vals.filter((_, i) => m >> i & 1);
    if (q.max && s.length > q.max) continue;
    if (q.none && s.includes(q.none) && s.length > 1) continue;
    out.push(s);
  }
  return out;
}
const AUSWAHL = QUESTIONS.map(auswahlen);
const SPECIAL_IDS = new Set(SPECIALS.map(s => s.id));
const SKIP_IDS = new Set(SKIPS.map(s => s.id));
const LEVELS = new Set(["kopfhaut", "aufbau", "wenig", "routine"]);
const STATUS = new Set(["covered", "tip", "honest"]);

let anzahl = 0;
const statistik = { ohneExtra:0, level:{}, status:{} };

function textOk(t){ return typeof t === "string" && t.trim().length > 0 && !/undefined|NaN|null/.test(t); }

function pruefe(a){
  anzahl++;
  const r = recommend(a);

  // Form, die der Post-Generator erwartet
  if (!Array.isArray(r.basis) || r.basis.length < 2) fail("basis: Shampoo + Conditioner fehlen", a);
  if (!Array.isArray(r.special) || r.special.length > 2) fail("special: höchstens 2", a);
  if (!Array.isArray(r.skip) || r.skip.length > 4) fail("skip: höchstens 4", a);
  if (!Array.isArray(r.tips) || r.tips.length < 1 || r.tips.length > 4) fail("tips: 1 bis 4", a);
  if (r.special.length === 2 && !r.special[1].optional) fail("2. Spezial-Impuls muss optional sein", a);
  if (!r.special.length) statistik.ohneExtra++;

  // Alle Texte vollständig
  for (const x of [...r.basis, ...r.special, ...r.skip]){
    if (!textOk(x.name) || !textOk(x.why)) fail("Leerer oder kaputter Text", a, JSON.stringify(x.name));
    if (!Array.isArray(x.because) || !x.because.length) fail("Begründung (weil: …) fehlt", a, x.name);
    else if (!x.because.every(textOk)) fail("Leeres Begründungs-Kärtchen", a, x.name);
  }
  for (const t of r.tips) if (!textOk(t)) fail("Leerer Tipp", a);

  // Nichts gleichzeitig empfehlen und weglassen
  const skipIds = new Set(r.skip.map(s => s.id));
  for (const s of r.skip) if (!SKIP_IDS.has(s.id)) fail("skip ohne gültige id", a, s.name);
  for (const s of r.special){
    if (!SPECIAL_IDS.has(s.id)) fail("special ohne gültige id", a, s.id);
    if (skipIds.has(s.id)) fail("Spezial-Impuls steht auch unter Weglassen", a, s.id);
  }
  if (a.alltag.has("hitze") && skipIds.has("hitzeschutz")) fail("Hitzeschutz empfohlen und weggelassen", a);

  // Jeder Wunsch bekommt genau eine Antwort
  const w = r.wishes;
  if (!Array.isArray(w) || w.length !== a.wunsch.size) fail("Nicht jeder Wunsch hat eine Antwort", a);
  else {
    [...a.wunsch].forEach((wunsch, i) => {
      const x = w[i];
      if (x.wish !== wunsch) fail("Wunsch-Antworten in falscher Reihenfolge", a, wunsch);
      if (!STATUS.has(x.status)) fail("Wunsch-Antwort ohne gültigen Status", a, wunsch + ":" + x.status);
      if (!textOk(x.text) || !textOk(x.label)) fail("Wunsch-Antwort ohne Text", a, wunsch);
      statistik.status[x.status] = (statistik.status[x.status] || 0) + 1;
      if (x.status === "covered" && !r.special.some(s => x.uses.includes(s.id)))
        fail("Wunsch 'erfüllt', aber Spezial-Impuls fehlt", a, wunsch);
      for (const id of x.uses){
        if (skipIds.has(id)) fail("Wunsch-Antwort empfiehlt etwas, das unter Weglassen steht", a, wunsch + " → " + id);
      }
    });
  }

  // Ehrliche Antworten, die es immer geben muss
  const ans = id => (w || []).find(x => x.wish === id);
  if (a.form === "glatt" && a.wunsch.has("locken") && ans("locken").status !== "honest")
    fail("Glattes Haar + Wunsch Locken braucht ein ehrliches Nein", a);
  if (a.zustand === "natur" && a.wunsch.has("farbe") && ans("farbe").status === "tip")
    fail("Naturhaar + Wunsch Farbe: keine Farbpflege empfehlen", a);
  if (a.wunsch.has("volumen") && skipIds.has("volumen") && ans("volumen").status === "tip")
    fail("Volumen weggelassen, aber als Tipp empfohlen", a);

  // Das solltest du selbst abwägen
  if (!Array.isArray(r.weigh) || r.weigh.length > 3) fail("weigh: höchstens 3", a);
  else for (const x of r.weigh) if (!textOk(x.title) || !textOk(x.text) || !textOk(x.forYou)) fail("Abwägen-Text leer", a, x.id);

  // So kommt die Empfehlung zustande: muss genau zur Empfehlung passen
  const ex = r.explain;
  if (!ex || typeof ex.min !== "number" || !Array.isArray(ex.ranked)) fail("Erklärung fehlt", a);
  else {
    const chosen = ex.ranked.filter(x => x.chosen).map(x => x.id).sort().join();
    if (chosen !== r.special.map(s => s.id).sort().join()) fail("Erklärung zeigt andere Extras als empfohlen", a, chosen);
    for (const x of ex.ranked){
      if (x.score !== x.points.reduce((n, q) => n + q.p, 0)) fail("Erklärung: Punktesumme falsch", a, x.id);
      if (!x.points.every(q => textOk(q.text))) fail("Erklärung: leerer Punkt-Text", a, x.id);
      const s = r.special.find(y => y.id === x.id);
      if (s && s.score !== x.score) fail("Erklärung: andere Punkte als die Empfehlung", a, x.id);
    }
    for (let i = 1; i < ex.ranked.length; i++)
      if (ex.ranked[i - 1].score < ex.ranked[i].score) fail("Erklärung: falsch sortiert", a);
    for (const s of r.special){
      const need = s.optional ? ex.opt : ex.min;
      if (s.score < need) fail("Extra empfohlen unter der Punktgrenze", a, s.id);
    }
  }

  // Ersteinschätzung
  const v = r.verdict;
  if (!v || !LEVELS.has(v.level) || !textOk(v.title) || !textOk(v.text) || !textOk(v.summary) || !textOk(v.tag))
    fail("Ersteinschätzung unvollständig", a);
  else {
    statistik.level[v.level] = (statistik.level[v.level] || 0) + 1;
    if ((a.kopfhaut === "schuppen" || a.kopfhaut === "sensibel") && v.level !== "kopfhaut")
      fail("Schuppen/empfindliche Kopfhaut muss 'Kopfhaut zuerst' ergeben", a);
  }
}

function durch(i, a){
  if (i === QUESTIONS.length) return pruefe(a);
  const q = QUESTIONS[i];
  for (const v of AUSWAHL[i]){
    a[q.id] = q.type === "multi" ? new Set(v) : v;
    durch(i + 1, a);
  }
}

const t0 = Date.now();
durch(0, {});
const sek = ((Date.now() - t0) / 1000).toFixed(1);

console.log(`HaarKompass: ${anzahl.toLocaleString("de-AT")} Kombinationen geprüft in ${sek} s`);
console.log(`  Ersteinschätzung: ${JSON.stringify(statistik.level)}`);
console.log(`  Wunsch-Antworten: ${JSON.stringify(statistik.status)}`);
console.log(`  Ohne Spezial-Impuls: ${statistik.ohneExtra}`);

if (fehler.size){
  console.error(`\n✗ ${fehler.size} Regel(n) verletzt:`);
  for (const [regel, e] of fehler) console.error(`  - ${regel}: ${e.anzahl}× , z. B. ${e.beispiel}`);
  process.exit(1);
}
console.log("✓ Alle Regeln erfüllt");
