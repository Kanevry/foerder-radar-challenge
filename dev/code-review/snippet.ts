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
