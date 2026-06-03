# Seed-Dataset — Felder & Hinweise

> ⚠️ **Synthetisch / vereinfacht, Stand 2026-06 — keine offizielle AI:AT-Position.** Die Programmnamen sind an reale österreichische & EU-Förderungen angelehnt; die Werte (Summen, Quoten, Deadlines) sind vereinfacht/gerundet. Kein Domänenwissen nötig — die Felder unten verstehst du ohne Vorwissen.

## `programs.json` / `programs.csv` (~20 Programme)

`programs.json` und `programs.csv` enthalten dieselben Daten. Die CSV öffnest du bequem in Excel/Sheets; die JSON ist praktisch zum Einlesen im Code.

| Feld | Typ | Bedeutung |
|---|---|---|
| `name` | string | Name des Förderprogramms |
| `traeger` | string | Fördergeber (z. B. aws, FFG, KLIEN, Land/Stadt, EU) |
| `zielgruppe` | string | Für wen das Programm gedacht ist |
| `stage` | string | Phase: `PreSeed` · `Seed` · `Growth` · `Scale` · `alle` |
| `region` | string | `bundesweit` · `EU` · oder ein konkretes Bundesland (z. B. `Wien`, `Tirol`, `Steiermark`, `Niederösterreich`) |
| `max_summe` | number | Maximale Fördersumme in EUR |
| `foerderquote` | number | Förderquote als Anteil `0.0`–`1.0` (z. B. `0.5` = 50 %) |
| `themen` | string[] | Themen-Tags (z. B. „KI", „Digitalisierung", „Klima", „Forschung") |
| `deadline_typ` | string | `laufend` (jederzeit einreichbar) oder `Call` (Stichtag/Runden) |
| `url` | string | Link zur Programmseite |
| `kurzbeschreibung` | string | 1–2 Sätze Beschreibung |

`programs.json` trägt zusätzlich ein `_hinweis`-Feld mit dem Synthetik-Vermerk. *(Die `programs.csv` beginnt direkt mit der Header-Zeile — der Disclaimer steht hier im README, damit Excel/Sheets die CSV sauber einlesen.)*

> ℹ️ **Zwei Hinweise zum Dataset:**
> - **Programm-Abdeckung pro Bundesland ist nur illustrativ** — nicht jedes Bundesland hat hier ein eigenes Programm (z. B. Oberösterreich). Das ist **beabsichtigt** und ein realistischer Praxisfall fürs Matching, **keine** Marktaussage.
> - **Du musst nicht jedes Feld nutzen** — wähle, was für dein Matching bzw. deine Analyse sinnvoll ist (ob z. B. `foerderquote` einfließt, entscheidest du und begründest es kurz).

## `examples/profil_*.json` (Beispiel-Profile)

Ausgangspunkt für deine Arbeit — ein Startup-/KMU-Profil:

| Feld | Typ | Bedeutung |
|---|---|---|
| `branche` | string | Branche des Startups/KMU |
| `stage` | string | Phase (Werte wie oben) |
| `bundesland` | string | Sitz-Bundesland |
| `team_groesse` | number | Teamgröße (Personen) |
| `vorhaben` | string | Was sie vorhaben (Freitext) |
| `gesuchte_summe` | number | Gesuchte Fördersumme in EUR |
