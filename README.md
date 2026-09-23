# Great Hair Day – Website

Website von **Great Hair Day**, Friseursalon Mirjam Walenta, Rechte Wienzeile 47, 1050 Wien – [www.greathairday.at](https://www.greathairday.at).

## Dateien

| Datei / Ordner | Inhalt |
|---|---|
| `index.html` | Startseite |
| `leistungen.html` | Leistungen & Preise (wird vom Bearbeitungswerkzeug erzeugt) |
| `datenschutz.html` | Datenschutzerklärung (**Entwurf – rechtlich prüfen lassen**) |
| `Preise-und-Texte-bearbeiten.html` | Werkzeug zum Ändern von Preisen und Texten, läuft im Browser |
| `bilder/` | Salonfotos und Vorschaubild für WhatsApp/Facebook |
| `fonts/` | Schriften (Playfair Display, Inter) – liegen bewusst lokal, damit keine Daten an Google gehen |

## Veröffentlichen

**Automatisch:** Jede Änderung auf `main` wird von GitHub in etwa einer Minute in den Scaleway-Bucket hochgeladen (`.github/workflows/veroeffentlichen.yml`). FileZilla ist dafür nicht mehr nötig.

- Hochgeladen werden die Seiten (`*.html`), `bilder/` und `fonts/`. Im Bucket wird nichts gelöscht.
- Das Bearbeitungswerkzeug, `README.md` und `CLAUDE.md` bleiben nur hier im Repo.
- Ablauf ansehen oder von Hand starten: Reiter **Actions** → „Website veröffentlichen“ → **Run workflow**.
- Einmalige Einrichtung: unter **Settings → Secrets and variables → Actions** die Secrets `SCW_ACCESS_KEY` und `SCW_SECRET_KEY` sowie die Variables `SCW_BUCKET` und `SCW_REGION` anlegen.

## Preise und Texte ändern

1. `Preise-und-Texte-bearbeiten.html` im Browser öffnen.
2. Aktuelle `leistungen.html` bzw. `index.html` laden, Werte ändern, Vorschau ansehen.
3. Heruntergeladene Datei auf GitHub hochladen (**Add file → Upload files**, gleicher Dateiname) – die Website aktualisiert sich dann von selbst.

Preise auch bei **stylisten.eu** und im **Google-Unternehmensprofil** gleich halten.
