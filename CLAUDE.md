# Hinweise für Änderungen an dieser Website

- **Design beibehalten.** Die Inhaberin möchte das bestehende Design (Farben Mokka/Leinen/Pergament, Playfair Display + Inter, Großbuchstaben-Zeilen) behalten. Technische Verbesserungen ja, optische Umgestaltung nur auf ausdrücklichen Wunsch.
- **Nur Unisex-Preise.** Keine getrennten Damen-/Herrenpreise angeben. Herrenservice darf als Leistung beschrieben werden, aber ohne eigenen Preis.
- **`leistungen.html` wird vom Werkzeug erzeugt.** `Preise-und-Texte-bearbeiten.html` enthält die komplette Seite als Vorlage (`const TEMPLATE`). Jede Änderung an `leistungen.html` muss auch in dieser Vorlage gemacht werden, sonst überschreibt das Werkzeug sie beim nächsten Speichern. Danach prüfen: Werkzeug `build()` erzeugt wieder dieselbe Seite.
- **Texte der Startseite** haben `data-edit="…"`-Attribute, die das Werkzeug bearbeitet. Diese Attribute nicht entfernen; neue Felder auch in `INDEX_GROUPS` im Werkzeug eintragen.
- **Keine Verbindungen zu Fremdservern beim Seitenaufruf** (keine Google Fonts, keine eingebetteten Karten/Videos, kein Tracking) – sonst muss die Datenschutzerklärung angepasst werden.
- **Keine privaten E-Mail-Adressen oder Zugangsdaten** in Dateien. Die öffentliche Salon-Adresse `walenta@greathairday.at` ist in Ordnung.
- **Hosting: World4You** (Webspace, Upload per FTP über `.github/workflows/veroeffentlichen.yml`). Nicht Scaleway. Ändert sich der Hoster, auch `datenschutz.html` (Abschnitt Hosting) anpassen.
