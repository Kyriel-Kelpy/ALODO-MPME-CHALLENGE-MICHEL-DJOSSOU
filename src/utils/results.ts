import { profileNarratives } from "../data/messages";
import type { DiagnosticResult } from "../types/diagnostic";

const STRONG_THRESHOLD = 70;
const WEAK_THRESHOLD = 40;
const CLOSE_SPREAD = 15;

/**
 * Choisit le texte de synthèse affiché sous "Votre priorité : ..." selon le
 * profil global des trois scores (voir 02_QUESTIONS_AND_SCORING.md, section 10).
 */
export function getResultNarrative(result: DiagnosticResult): string {
  const scores = result.dimensions.map((d) => d.score);
  const allStrong = scores.every((s) => s >= STRONG_THRESHOLD);
  const allWeak = scores.every((s) => s < WEAK_THRESHOLD);
  const spread = Math.max(...scores) - Math.min(...scores);

  if (allStrong) return profileNarratives.toutFort;
  if (allWeak) return profileNarratives.toutFaible;
  if (spread <= CLOSE_SPREAD) return profileNarratives.toutMoyen;

  switch (result.priorityDimension) {
    case "finance":
      return profileNarratives.financeFaible;
    case "commercial":
      return profileNarratives.commercialFaible;
    case "digitalisation":
      return profileNarratives.digitalisationFaible;
  }
}
