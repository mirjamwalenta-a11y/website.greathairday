# Hinweise für Änderungen an dieser Website

- **Design beibehalten.** Die Inhaberin möchte das bestehende Design (Farben Mokka/Leinen/Pergament, Playfair Display + Inter, Großbuchstaben-Zeilen) behalten. Technische Verbesserungen ja, optische Umgestaltung nur auf ausdrücklichen Wunsch.
- **Nur Unisex-Preise.** Keine getrennten Damen-/Herrenpreise angeben. Herrenservice darf als Leistung beschrieben werden, aber ohne eigenen Preis.
- **`leistungen.html` wird vom Werkzeug erzeugt.** `Preise-und-Texte-bearbeiten.html` enthält die komplette Seite als Vorlage (`const TEMPLATE`). Jede Änderung an `leistungen.html` muss auch in dieser Vorlage gemacht werden, sonst überschreibt das Werkzeug sie beim nächsten Speichern. Danach prüfen: Werkzeug `build()` erzeugt wieder dieselbe Seite.
- **Texte der Startseite** haben `data-edit="…"`-Attribute, die das Werkzeug bearbeitet. Diese Attribute nicht entfernen; neue Felder auch in `INDEX_GROUPS` im Werkzeug eintragen.
- **Keine Verbindungen zu Fremdservern beim Seitenaufruf** (keine Google Fonts, keine eingebetteten Karten/Videos, kein Tracking) – sonst muss die Datenschutzerklärung angepasst werden.
- **Keine privaten E-Mail-Adressen oder Zugangsdaten** in Dateien. Die öffentliche Salon-Adresse `walenta@greathairday.at` ist in Ordnung.
- **Hosting: World4You** (Webspace, Upload per FTP über `.github/workflows/veroeffentlichen.yml`). Nicht Scaleway. Ändert sich der Hoster, auch `datenschutz.html` (Abschnitt Hosting) anpassen.
- **Google-Links nicht selbst neu bauen.** Am Handy getestet und funktionierend (Sept. 2026):
  - Adresse/Route: `https://share.google/iNL8bMsJqvVzm0rmP` (von Google erzeugter Teilen-Link des Eintrags)
  - Kurzadresse für den QR-Code an der Kassa: `https://www.greathairday.at/bewertung/` (`bewertung/index.html` zeigt einen Knopf „Jetzt bewerten“ – bewusst keine automatische Weiterleitung, weil Google das Bewertungsfenster am Handy nur nach echtem Tippen öffnet; gedruckte QR-Codes zeigen dorthin, Adresse nie ändern)
  - Bewertung abgeben (überall: `/bewertung/`-Knopf, Footer aller Seiten): Googles offizieller Bewertungslink aus dem Unternehmensprofil `https://g.page/r/CUYAqgo4BwtnEAE/review` – funktioniert am Handy und am Computer. **Ohne `target="_blank"`** – mit neuem Fenster öffnete er am Handy nur die normale Seite. Der frühere `#lrd=…,3`-Suchlink öffnete am Handy nur die normale Seite (Google-App fängt ihn ab).
  - Bewertungsliste („★ 4,8 von 5“): `https://www.google.com/search?q=Mirjam+Walenta+-+A+great+hair+day&kgmid=/g/1tzzt9dr&hl=de-AT#lrd=0x476d078610bd229f:0xe2dc80e05ce78247,1`
  - Nicht funktioniert haben am Handy: `maps/place/?q=place_id:…`, `maps/dir/?api=1…`, `maps/search/?api=1…`, `maps.google.com/?cid=…` und `search.google.com/local/writereview?placeid=…` – sie zeigten das Nachbarlokal an derselben Adresse.
- **Live prüfen:** Actions → „Live-Website prüfen“ ruft die echte Seite ab und zeigt, welcher Adress-Link ausgeliefert wird und wohin er führt.
- **Sitemap/robots:** `sitemap.xml` listet die öffentlichen Seiten (ohne `/bewertung/` – noindex – und ohne das Bearbeitungstool – noindex). Neue Seite → in `sitemap.xml` eintragen. `robots.txt` sperrt noch die Ordner der alten Joomla-Seite; nach deren Entfernung dürfen diese Zeilen raus.
- **Impeccable (Design-Skill):** liegt in `.claude/`; Produktwissen in `PRODUCT.md`. Beides wird nicht hochgeladen (Ausschlüsse im Workflow). Animationen immer mit `prefers-reduced-motion`-Weg.
