import type { ProfileQuestion } from "../types/diagnostic";

export const profileQuestions: ProfileQuestion[] = [
  {
    id: "P1",
    question: "Quel type d'activité exercez-vous principalement ?",
    options: [
      { id: "commerce", label: "Commerce / vente de produits" },
      { id: "services", label: "Services / prestations" },
      { id: "production", label: "Production / transformation" },
      {
        id: "agriculture",
        label: "Agriculture / élevage / agroalimentaire",
      },
      { id: "autre", label: "Autre" },
    ],
    freeTextOptionId: "autre",
    freeTextPlaceholder: "Précisez votre activité",
  },
  {
    id: "P2",
    question: "Depuis combien de temps votre activité existe-t-elle ?",
    options: [
      { id: "moins-1-an", label: "Moins d'un an" },
      { id: "1-3-ans", label: "1 à 3 ans" },
      { id: "3-5-ans", label: "3 à 5 ans" },
      { id: "plus-5-ans", label: "Plus de 5 ans" },
    ],
  },
];
