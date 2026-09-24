# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hauptzielgruppe: **neue Kundinnen und Kunden aus der Umgebung** (Wien-Margareten, 1050), die über Google („Friseur 1050“, Maps, Bewertungen) oder Empfehlung auf die Seite kommen und den Salon kennenlernen wollen, bevor sie buchen. Meist am Handy, oft direkt aus der Google-Suche oder dem Maps-Eintrag.

Weitere Besucher (nicht Hauptzielgruppe, aber vorhanden): Stammkundschaft, die Preise, Öffnungszeiten oder den Buchungslink sucht; Kundinnen an der Kassa, die über den QR-Code auf `/bewertung/` eine Google-Bewertung abgeben.

## Product Purpose

Die Website des Friseursalons „Mirjam Walenta – A great hair day“ (Great Hair Day). Sie stellt Salon, Team und Leistungen vor und führt Besucher zur Terminbuchung.

**Erfolg = eine Online-Buchung** über stylisten.eu (`https://stylisten.eu/pranz#online-buchung`). Anrufen und Vorbeikommen sind Nebenwege.

## Positioning

- **Meisterqualität:** Inhaberin Mirjam Walenta ist Friseurmeisterin, Mazen ist Friseurmeister; dazu Alina (Topstylistin und Make-up Artistin) und Hassan (Topstylist).
- **Alles an einem Ort:** Schnitt & Styling, Farbe & Umformung, Haarverlängerung, Brow & Lash Lifting, Make-up, Wellness (Kopfmassage), Alpha-Cooling; eigener Herrensalon.
- **Persönliche Atmosphäre:** familiär, man kennt sich, man nimmt sich Zeit.

## Operating Context

- Salon: Rechte Wienzeile 47, 1050 Wien. Google-Bewertung 4,8 von 5 (128 Bewertungen, Stand Sept. 2026).
- Buchung extern über stylisten.eu; die Website hat keine eigene Buchung.
- Seiten: Startseite (`index.html`), Leistungen & Preise (`leistungen.html`), Datenschutz (`datenschutz.html`), QR-Landingpage `/bewertung/` (noindex).
- Die Inhaberin pflegt Preise und Texte selbst mit `Preise-und-Texte-bearbeiten.html`; das Tool erzeugt `leistungen.html` aus seiner Vorlage.

## Capabilities and Constraints

- Reines statisches HTML/CSS/JS, kein Framework, kein Build-Schritt. Hosting World4You (Apache), Veröffentlichung per GitHub Actions/FTP bei jedem Merge auf `main`.
- Keine Fremdserver: Schriften selbst gehostet, kein Tracking, keine Cookies, keine eingebetteten Google-Dienste.
- **Nur Unisex-Preise** dürfen angegeben werden (keine getrennten Damen-/Herrenpreise).
- Haarverlängerung, Brow & Lash Lifting und Make-up: „Preis nach Anfrage“.
- Google-Links (Adresse, Bewertung) sind am Handy getestet und dürfen nicht selbst neu gebaut werden (siehe CLAUDE.md).

## Brand Commitments

- Name: „Mirjam Walenta – A great hair day“ / „Great Hair Day“.
- **Das bestehende Design gefällt der Inhaberin und bleibt.** Ein Redesign wurde ausprobiert und ausdrücklich abgelehnt. Änderungen sind technisch/unsichtbar, außer sie werden ausdrücklich gewünscht.
- Ausdrücklich gewünschte Gestaltungselemente: bewegte Haarsträhnen im Hero („nicht kitschig, sondern edel“), Linien-Icons statt Emojis bei den Leistungen, Termin-Button am Handy, Google-Bewertungszeile.
- Ton: warm, persönlich, Deutsch (Österreich), Du-Form.

## Evidence on Hand

- Echte Fotos: `bilder/salon-empfang.webp`, `bilder/herrensalon.webp`, `bilder/vorschau.jpg` (Social-Vorschau). Keine Stockfotos vorhanden und keine gewünscht.
- Google-Bewertungen: 4,8 / 5 aus 128 Bewertungen. Keine Einzelzitate erfinden.
- Social: Instagram `m.walenta_a.great.hair.day`, Facebook `pranz.at`.

## Product Principles

1. Der Weg zur Online-Buchung ist von jeder Stelle aus kurz, besonders am Handy.
2. Vertrauen durch Echtes: echtes Team, echte Fotos, echte Bewertungen, echte Preise.
3. Edel und ruhig statt laut: Bewegung und Schmuck nur, wenn sie hochwertig wirken.
4. Die Inhaberin muss Inhalte selbst pflegen können, ohne Code.
5. Datensparsam: nichts laden oder messen, was Besucher nicht brauchen.

## Accessibility & Inclusion

Kein besonderer Standard vereinbart; Ziel ist WCAG 2.2 AA, inklusive `prefers-reduced-motion` für alle Animationen.
