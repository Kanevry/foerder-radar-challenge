# 🛰️ AI Developer Challenge — „Förder-Radar"

Version 1.0 · 2026-06 · Kontakt: AI:AT Hiring Team

Hi 👋 — schön, dass du dabei bist! Das hier ist kein Trick-Test. Es ist ein kleines, echtes Stück von dem, was wir im Venture Studio & n8n CoE täglich tun: **mit KI schnell etwas Lauffähiges bauen, das Mehrwert schafft.**

Es gibt keine Musterlösung, die du treffen musst. Wir schauen, wie du ein unscharf spezifiziertes Problem zerlegst, Entscheidungen triffst und KI sinnvoll einsetzt.

## Die Mission

Österreichische Startups & KMU verlieren Förderungen, weil die Landschaft (FFG, aws, EU, Bundesländer…) undurchsichtig ist. Bau einen **„Förder-Radar"**: ein kleines Tool, das ein Startup-Profil nimmt und in Sekunden zeigt, **welche Förderungen passen, warum, und einen ersten Antrags-Absatz** draftet.

**Wir liefern dir:** ein Seed-Dataset mit ~20 Förderprogrammen (JSON/CSV, Felder dokumentiert) + 2–3 Beispiel-Profile. **Kein Domänenwissen nötig** — alles, was du brauchst, steckt im Dataset.

> 📂 **Im Repo:** [`../data/`](../data/) — `programs.json` + `programs.csv` + Beispiel-Profile (Feld-Doku: [`../data/README.md`](../data/README.md)).

### Teil A — Bau den PoC
- **Input:** ein Startup-/KMU-Profil (Branche, Stage, Bundesland, Team-Größe, Vorhaben, gesuchte Summe). Dein Tool soll **mindestens eines der mitgelieferten Beispiel-Profile** verarbeiten — *wie* du Profile reinreichst (hardcoded, Datei, CLI-Argument …), ist dir überlassen.
- **Output:** ein **begründetes Ranking** der passendsten Programme — z. B. die **Top 3–5** (die genaue Zahl ist deine Entscheidung, begründe sie kurz) — je „passt, weil… / passt nicht, weil…" + **ein generierter Antrags-Absatz** fürs Top-Programm.
- **Form:** lauffähiges **Git-Repo** mit echtem Code + ein README, das uns das Ding in <5 min zum Laufen bringt. Stack ist dir überlassen. n8n darfst du integrieren, ist aber optional.

> 🧭 **Die interessante Design-Entscheidung:** Die Programme tragen strukturierte `themen`-Tags, dein Profil aber nur Freitext (`branche`, `vorhaben`). Wie du beides verknüpfst — Keywords, Embeddings, LLM-Tagging, manuell — ist genau die Stelle, an der wir dein Urteil sehen. Es gibt keinen „richtigen" Weg; auch wie du `gesuchte_summe`, `max_summe` und `foerderquote` gewichtest, ist bewusst dir überlassen — wir achten auf die **Begründung**, nicht auf eine vorgegebene Formel.

*So **könnte** ein Eintrag aussehen — rein illustrativ, **keine** Musterlösung, nur zur Format-Orientierung:*

```
#1  aws Seedfinancing  (aws)  —  Fit 88 %
    passt, weil:        Stage „Seed" passt exakt; bundesweit — Sitz Tirol kein Hindernis.
    passt nicht, weil:  thematischer Overlap gering.
    Antrags-Absatz:     „Unser Team aus … plant …"
```

> 💡 Ein echter LLM-Call ist erlaubt, aber **nicht Pflicht** — ein deterministisch oder templatebasiert erzeugter Antrags-Absatz ist völlig okay. **Kein API-Key nötig**, falls du keinen hast.

### Teil B — Code-Review (~15 min)
Wir geben dir ein kurzes, KI-generiertes Code-Snippet (TypeScript — keine TS-Erfahrung nötig, der Bug ist sprachunabhängig verständlich; **Tipp:** vergleiche, was der Doc-Kommentar *verspricht*, mit dem, was der Code *tut*). **Es gibt einen zentralen funktionalen Bug — finde *den*, fixe ihn, und begründe in 3–5 Sätzen, warum es einer ist.** Sag uns **auch, was dir sonst auffällt** (fehlende Edge-Cases, fragwürdige Annahmen, Validierung) — diese weiterführende Kritik zählt für uns genauso wie der Fix selbst. (Wir wollen sehen, ob du KI-Output beurteilen kannst — nicht nur erzeugen.)

> 📄 Das Snippet liegt als Datei unter [`code-review/snippet.ts`](./code-review/snippet.ts) — und ist unten in **Anhang A** abgedruckt.

## Spielregeln

- ⏱️ **Aufwand: ~4–6 fokussierte Stunden.** Du hast eine Woche — die ist für *Flexibilität*, nicht zum Durchgrinden. Bitte nicht überinvestieren: **wir bewerten Denken & Urteil, nicht Politur.** *(Die 4–6 h schließen Walkthrough + Decision-Log ein — Loom: 1 Take, 3–5 min; Decision-Log: 5–10 Zeilen Stichworte.)*
- 🤖 **Nutze jede KI, jede Library, google frei.** Wird erwartet, nicht nur erlaubt. Cursor, Claude, Copilot, Coding-Agents — leg los.
- 🎯 **Der Kern (A + B) ist die Latte** — dazu gehören auch **ein paar sinnvolle Tests** (kein Coverage-Theater; zählen mit 10 %). Echte Stretch-Goals (UI, Confidence-Scores, mehr Datenquellen, Deployment, ein größeres Eval-Set) sind zum Glänzen — komplett optional.

> **Wichtig:** Ein rauer Kern mit klarem Denken schlägt eine polierte, aber oberflächliche Umsetzung. Wir meinen das ernst — bitte nicht überinvestieren. Mehr Stunden bedeuten bei uns **nicht** mehr Punkte; wir bewerten das Kern-Ergebnis, nicht den Zeitaufwand.

AI Factory Austria steht für Chancengleichheit. Brauchst du Unterstützung oder Anpassungen im Prozess, sag uns Bescheid — wir helfen. Ob Uni, Bootcamp oder self-taught: es zählt, wie du denkst und mit KI arbeitest.

## Was du abgibst

1. **Repo-Link** (GitHub/GitLab) mit Code + README.
2. **Code-Review-Antwort** (Teil B) — als Datei im Repo oder kurzes Doc.
3. **Walkthrough (1 Take, 3–5 min, max. 5):** ein Loom/Screen-Recording — zeig dein Ergebnis und erklär *wie* du gebaut hast, vor allem die KI-Schritte. *(Kein Video möglich oder gewünscht? Ein knappes schriftliches Walkthrough-Skript zählt als gleichwertig — sag einfach Bescheid.)*
4. **Kurzes Decision-Log + Schlüssel-Prompts:** 5–10 Zeilen Entscheidungen/Trade-offs + die KI-Prompts, die den Unterschied gemacht haben. Zeig uns, *wie du mit KI zusammenarbeitest* — das ist genau die Fähigkeit, für die wir die Rolle besetzen.
5. **Selbst-Report:** wie viele Stunden hast du investiert? (Ehrlich — kein Maluspunkt.)

## So bewerten wir (transparent)

| Dimension | Gewicht |
|---|---|
| Funktionalität (läuft es, erfüllt es den Kern) | 20% |
| Decomposition & Urteil (Ambiguität sinnvoll gelöst, gute Trade-offs) | 20% |
| AI-Collaboration / Prozess (wie du KI gehebelt & geprüft hast) | 20% |
| Code-Qualität & Taste (lesbar, wartbar, KI-„Slop" erkannt) | 15% |
| Kommunikation / Doku (README, Decision-Log, Walkthrough) | 15% |
| Tests (sinnvolle Tests, kein Coverage-Theater) | 10% |

> Teil B (Code-Review) fließt **nicht** in die obige Gewichtung ein — es ist ein **separates Signal** mit besonders hohem Informationsgehalt über dein Urteil zu KI-Code und kann bei knappen Entscheidungen den Ausschlag geben.

## Abgabe & Zeitplan

- 🗓️ **Deadline:** **die Begleit-E-Mail nennt das verbindliche Abgabedatum** (Richtwert: 7 Kalendertage ab Erhalt).
- 📤 **Abgabe:** per E-Mail an aiandbusinessgrowth@ai-at.eu.
- ⏳ **Rückmeldung:** Wir melden uns innerhalb von ~10 Werktagen — mit einem Termin für den Live-Teil oder einer kurzen Rückmeldung.

> 💡 Die konkreten Daten (Abgabedatum, ggf. Upload-Link) findest du in der Begleit-E-Mail zu diesem Brief.

## Danach

Kurzer **Live-Walkthrough (30–45 min)**: du zeigst dein Ergebnis, wir setzen *live eine neue Anforderung* drauf und schauen, wie du deinen eigenen Code erweiterst. Die neue Anforderung ist bewusst klein — es geht darum, wie du laut denkst, nicht um ein perfektes Ergebnis in 10 Minuten. Deine gewohnten KI-Tools darfst du dabei nutzen, genau wie beim Bauen. Danach zeigen wir dir unsere eigene Lösung — und wir reden ehrlich darüber. **Jede:r bekommt Feedback**, egal wie's ausgeht.

> **Fair & transparent.** Diese Challenge ist unbezahlt — dafür bekommst du echten Gegenwert: Nach dem Debrief zeigen wir dir **unsere eigene Lösung** — mit echten Entscheidungen, Prompts und Trade-offs. Das ist unser „Learn"-Versprechen in Aktion, kein Einblick, den du anderswo bekommst. Und: **strukturiertes, ehrliches Feedback für jede:n** — egal wie der Prozess ausgeht. Kein Ghosting. Nie.

Viel Spaß — wir sind gespannt, wie du mit KI die Grenzen des Machbaren verschiebst. 🚀

## Datenschutz

> **Datenschutz.** Deine Unterlagen (Repo-Link, Loom-Link, Dokumente, Prompts) nutzen wir ausschließlich für die Besetzungsentscheidung, geben sie nicht an unbeteiligte Dritte weiter und löschen sie spätestens **sechs Monate** nach Abschluss des Auswahlverfahrens (oder früher auf deinen Wunsch) — gemäß DSGVO. Rechtsgrundlage ist die Anbahnung eines möglichen Arbeitsverhältnisses (Art. 6 DSGVO); du kannst jederzeit Auskunft oder Löschung verlangen. **Was du erstellst, bleibt deins** — wir verwenden es nur zur Bewertung, nie produktiv. Dein Repo kannst du auch privat halten und uns Zugriff geben; deinen Walkthrough sehen nur wir intern. Von dir gewählte Hosting-Dienste (z.B. GitHub, Loom) unterliegen deren eigenen Datenschutzbestimmungen. Fragen: aiandbusinessgrowth@ai-at.eu.

## Anhang A — Code-Snippet (Teil B)

Das ist das Snippet für Teil B — finde den Bug, fixe ihn, kritisiere kurz. (Auch als Datei: [`code-review/snippet.ts`](./code-review/snippet.ts).)

```ts
/**
 * filterByRegion — gibt alle für eine:n Antragsteller:in relevanten Förderprogramme zurück.
 *
 * Relevant ist ein Programm, wenn es im Bundesland der/des Antragsteller:in förderbar ist —
 * also entweder dort regional angesiedelt ODER überregional (bundesweit / EU-weit) offen.
 */

interface Program {
  name: string;
  region: string;
  stage: string;
  max_summe: number;
}

function filterByRegion(programs: Program[], bundesland: string): Program[] {
  return programs.filter((p) => p.region === bundesland);
}

// ---------------------------------------------------------------------------
// Demo
// ---------------------------------------------------------------------------

// Demo-Daten: vereinfachte Illustration — NICHT der echte Datensatz (siehe ../data/programs.json).
const programs: Program[] = [
  { name: "aws Gründerfonds",         region: "bundesweit", stage: "Seed",    max_summe: 200_000 },
  { name: "FFG Basisprogramm",        region: "bundesweit", stage: "Growth",  max_summe: 500_000 },
  { name: "Horizon Europe KMU",       region: "EU",         stage: "Growth",  max_summe: 2_500_000 },
  { name: "Standortagentur Tirol",    region: "Tirol",      stage: "Seed",    max_summe: 100_000 },
  { name: "Wirtschaftsförderung Wien",region: "Wien",       stage: "PreSeed", max_summe: 50_000 },
];

const profile = { bundesland: "Tirol" };

const matches = filterByRegion(programs, profile.bundesland);

console.log(`Passende Programme für Bundesland "${profile.bundesland}":`);
if (matches.length === 0) {
  console.log("  (keine Treffer)");
} else {
  matches.forEach((p) => {
    console.log(`  • ${p.name} [${p.region}] — max. €${p.max_summe.toLocaleString("de-AT")}`);
  });
}
```
