import { calculateResult } from "../src/utils/scoring";
import { questions } from "../src/data/questions";
import type { Answers } from "../src/types/diagnostic";

function buildAnswers(optionPicker: (q: (typeof questions)[number]) => string): Answers {
  const diagnostic: Record<string, string> = {};
  for (const q of questions) {
    diagnostic[q.id] = optionPicker(q);
  }
  return {
    profile: { P1: "commerce", P2: "1-3-ans" },
    profileFreeText: {},
    diagnostic,
    optionalFields: {},
  };
}

function firstOptionWithScore(q: (typeof questions)[number], score: number) {
  const opt = q.options.find((o) => o.score === score);
  if (!opt) throw new Error(`Pas d'option avec score ${score} pour ${q.id}`);
  return opt.id;
}

console.log("=== Cas 1 : toutes les réponses à 0 ===");
const allZero = buildAnswers((q) => firstOptionWithScore(q, 0));
console.log(JSON.stringify(calculateResult(allZero), null, 2));

console.log("\n=== Cas 2 : toutes les réponses à 3 ===");
const allThree = buildAnswers((q) => firstOptionWithScore(q, 3));
console.log(JSON.stringify(calculateResult(allThree), null, 2));

console.log("\n=== Cas 3 : Finance faible, Commercial/Digitalisation forts (score global correct) ===");
const financeFaible = buildAnswers((q) => {
  if (q.dimension === "finance") return firstOptionWithScore(q, 0);
  return firstOptionWithScore(q, 3);
});
const result3 = calculateResult(financeFaible);
console.log(JSON.stringify(result3, null, 2));
console.log(
  `Vérif : priorité doit être 'finance' même si score global > 70 -> priorité=${result3.priorityDimension}, global=${result3.globalScore}`
);

console.log("\n=== Cas 4 : réponses mixtes ===");
let toggle = 0;
const mixed = buildAnswers((q) => {
  const scores = [0, 1, 2, 3];
  const score = scores[toggle % scores.length];
  toggle++;
  return firstOptionWithScore(q, score);
});
console.log(JSON.stringify(calculateResult(mixed), null, 2));
