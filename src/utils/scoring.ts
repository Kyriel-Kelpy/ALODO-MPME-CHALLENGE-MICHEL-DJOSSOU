import { questions } from "../data/questions";
import { recommendationsByDimension } from "../data/recommendations";
import type {
  Answers,
  Dimension,
  DimensionResult,
  DiagnosticResult,
  MaturityLevel,
} from "../types/diagnostic";

const DIMENSIONS: Dimension[] = ["finance", "commercial", "digitalisation"];

/** Seuils de lecture du score global (02_QUESTIONS_AND_SCORING.md, section 7) */
function getMaturityLabel(score: number): MaturityLevel {
  if (score >= 80) return "Maîtrisé";
  if (score >= 60) return "Structuré";
  if (score >= 40) return "En construction";
  return "À structurer";
}

/** Calcule le score obtenu et le maximum possible pour une dimension donnée. */
function calculateDimensionScore(
  dimension: Dimension,
  answers: Answers
): DimensionResult {
  const dimensionQuestions = questions.filter((q) => q.dimension === dimension);

  let points = 0;
  let maxPoints = 0;

  for (const question of dimensionQuestions) {
    maxPoints += 3; // chaque question vaut 3 points max
    const selectedOptionId = answers.diagnostic[question.id];
    const selectedOption = question.options.find(
      (opt) => opt.id === selectedOptionId
    );
    if (selectedOption) {
      points += selectedOption.score;
    }
  }

  const score = maxPoints > 0 ? Math.round((points / maxPoints) * 100) : 0;

  return {
    dimension,
    points,
    maxPoints,
    score,
    level: getMaturityLabel(score),
  };
}

/** Combine les scores de dimension en un score global /100. */
function calculateGlobalScore(dimensionResults: DimensionResult[]): {
  points: number;
  maxPoints: number;
  score: number;
} {
  const points = dimensionResults.reduce((sum, d) => sum + d.points, 0);
  const maxPoints = dimensionResults.reduce((sum, d) => sum + d.maxPoints, 0);
  const score = maxPoints > 0 ? Math.round((points / maxPoints) * 100) : 0;
  return { points, maxPoints, score };
}

/**
 * Détermine la dimension prioritaire (la plus faible) et une éventuelle
 * priorité secondaire si un deuxième point de fragilité est proche.
 * Règle produit : un score global correct ne doit jamais cacher une
 * dimension très faible (02_QUESTIONS_AND_SCORING.md, section 8).
 */
function getPriorityDimension(dimensionResults: DimensionResult[]): {
  priority: Dimension;
  secondary?: Dimension;
} {
  const sorted = [...dimensionResults].sort((a, b) => a.score - b.score);
  const [weakest, secondWeakest] = sorted;

  const priority = weakest.dimension;
  const gap = secondWeakest.score - weakest.score;

  // Écart faible entre les deux dimensions les plus fragiles : on signale
  // aussi la seconde comme priorité additionnelle — mais uniquement si la
  // dimension la plus faible révèle une vraie fragilité (pas quand tout est
  // déjà maîtrisé, où une "priorité secondaire" n'aurait aucun sens).
  const secondary =
    gap <= 10 && weakest.score < 80 ? secondWeakest.dimension : undefined;

  return { priority, secondary };
}

/** Sélectionne 2 à 3 recommandations concrètes liées aux dimensions fragiles. */
function getRecommendations(priority: Dimension, secondary?: Dimension): string[] {
  const primaryRecs = recommendationsByDimension[priority];

  if (secondary && secondary !== priority) {
    return [primaryRecs[0], primaryRecs[1], recommendationsByDimension[secondary][0]];
  }

  return primaryRecs.slice(0, 3);
}

/** Points forts : dimensions solides autres que la priorité, les mieux notées d'abord. */
function getStrengths(
  dimensionResults: DimensionResult[],
  priority: Dimension
): Dimension[] {
  return dimensionResults
    .filter((d) => d.dimension !== priority)
    .sort((a, b) => b.score - a.score)
    .map((d) => d.dimension);
}

/** Calcule le résultat complet du diagnostic à partir des réponses. */
export function calculateResult(answers: Answers): DiagnosticResult {
  const dimensionResults = DIMENSIONS.map((dimension) =>
    calculateDimensionScore(dimension, answers)
  );

  const global = calculateGlobalScore(dimensionResults);
  const { priority, secondary } = getPriorityDimension(dimensionResults);
  const strengths = getStrengths(dimensionResults, priority);
  const recommendations = getRecommendations(priority, secondary);

  return {
    globalScore: global.score,
    globalLevel: getMaturityLabel(global.score),
    dimensions: dimensionResults,
    priorityDimension: priority,
    secondaryPriorityDimension: secondary,
    strengths,
    vigilance: priority,
    recommendations,
  };
}

export { getMaturityLabel, getPriorityDimension };
