import type { Dimension } from "../types/diagnostic";

export const dimensionMeta: Record<Dimension, { label: string }> = {
  finance: { label: "Finance" },
  commercial: { label: "Commercial" },
  digitalisation: { label: "Digitalisation" },
};

export const dimensionStrengthCopy: Record<Dimension, string> = {
  finance: "Vous suivez et maîtrisez la situation financière de votre activité.",
  commercial:
    "Vous savez quels canaux vous apportent le plus de clients et vous suivez vos résultats.",
  digitalisation: "Vous utilisez plusieurs outils numériques pour gérer votre activité.",
};

export const dimensionVigilanceCopy: Record<Dimension, string> = {
  finance: "Votre suivi financier reste encore peu structuré et difficile à valoriser.",
  commercial: "Votre activité commerciale manque encore de suivi structuré.",
  digitalisation: "Votre organisation numérique reste encore limitée.",
};

export const welcomeCopy = {
  title: "Diagnostic ALODO MPME",
  subtitle: "Faites le point sur la structuration de votre activité.",
  description:
    "Répondez à quelques questions sur votre gestion financière, votre activité commerciale et vos usages numériques. Vous obtiendrez un aperçu de vos points forts et de vos priorités.",
  stats: ["12 questions", "3 dimensions", "Résultat personnalisé"],
  cta: "Commencer le diagnostic",
  duration: "Environ 3 minutes",
};

export const calculatingCopy = {
  title: "Analyse de vos réponses...",
};

export const resultsCopy = {
  eyebrow: "Résultats",
  title: "Votre score de structuration",
  dimensionsTitle: "Vos scores par dimension",
  strengthsTitle: "Points forts",
  vigilanceTitle: "Point de vigilance",
  recommendationsTitle: "Recommandations",
  restartCta: "Revoir mes réponses",
};

/**
 * Titres de synthèse selon le profil de scores (voir 02_QUESTIONS_AND_SCORING.md, section 10).
 * Ce sont des gabarits ; la logique de sélection vit dans utils/results.ts.
 */
export const profileNarratives = {
  financeFaible:
    "Votre activité présente une bonne dynamique commerciale et numérique, mais la structuration financière reste votre principal axe de progression.",
  commercialFaible:
    "Votre gestion financière et vos usages numériques sont solides, mais votre potentiel commercial reste à développer.",
  digitalisationFaible:
    "Votre activité est dynamique sur le plan commercial et financier, mais votre organisation numérique reste encore limitée.",
  toutMoyen: "Vos pratiques sont en construction sur l'ensemble des dimensions.",
  toutFort:
    "Vous avez un niveau de structuration élevé. Il s'agit maintenant d'optimiser et de préparer la prochaine étape de croissance.",
  toutFaible:
    "Les fondamentaux de votre activité sont encore à structurer, en commençant par les pratiques de base.",
};
