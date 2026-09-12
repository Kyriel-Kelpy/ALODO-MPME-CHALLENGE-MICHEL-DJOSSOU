import type { Dimension } from "../types/diagnostic";

export const recommendationsByDimension: Record<Dimension, string[]> = {
  finance: [
    "Mettre en place un suivi régulier de vos entrées et sorties d'argent (carnet, tableau ou outil simple).",
    "Séparer vos dépenses personnelles de celles de votre activité.",
    "Calculer régulièrement le résultat réel de votre activité (chiffres clairs et à jour).",
    "Conserver les pièces et chiffres nécessaires à une future demande de financement.",
  ],
  commercial: [
    "Identifier les canaux qui vous apportent réellement des clients.",
    "Conserver les coordonnées des prospects intéressés.",
    "Mettre en place une routine simple de relance.",
    "Suivre les produits ou services les plus rentables.",
  ],
  digitalisation: [
    "Structurer au moins un canal numérique adapté à votre clientèle.",
    "Centraliser les informations importantes de votre activité.",
    "Choisir des outils simples pour vos tâches prioritaires.",
    "Vérifier que les outils utilisés vous font réellement gagner du temps.",
  ],
};
