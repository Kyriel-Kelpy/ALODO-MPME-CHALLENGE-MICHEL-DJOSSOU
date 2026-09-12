import type { DiagnosticQuestion } from "../types/diagnostic";

export const questions: DiagnosticQuestion[] = [
  // --- Finance ---
  {
    id: "F1",
    dimension: "finance",
    question:
      "Comment suivez-vous aujourd'hui l'argent qui entre et sort de votre activité ?",
    options: [
      { id: "aucun-suivi", label: "Je ne fais pas encore de suivi régulier", score: 0 },
      { id: "cahier", label: "Je note certaines opérations dans un cahier ou carnet", score: 1 },
      { id: "excel", label: "J'utilise Excel / Google Sheets", score: 2 },
      { id: "logiciel", label: "J'utilise une application ou un logiciel de gestion", score: 2 },
      { id: "comptable", label: "Je passe par un comptable", score: 2 },
      { id: "plusieurs", label: "Plusieurs de ces méthodes", score: 3 },
    ],
    optionalFields: [
      {
        id: "F1-outil",
        label: "Si vous utilisez un outil, lequel ?",
        type: "text",
        placeholder: "Nom de l'outil",
      },
    ],
  },
  {
    id: "F2",
    dimension: "finance",
    question:
      "Si nous vous demandions combien votre activité vous a réellement rapporté le mois dernier, pourriez-vous nous répondre ?",
    options: [
      { id: "precisement", label: "Oui, précisément", score: 3 },
      { id: "approximativement", label: "Oui, approximativement", score: 2 },
      { id: "ventes-seulement", label: "Je connais mes ventes, mais pas réellement ce que j'ai gagné", score: 1 },
      { id: "ne-sais-pas", label: "Je ne sais pas", score: 0 },
    ],
  },
  {
    id: "F3",
    dimension: "finance",
    question:
      "Si vous deviez demander un financement pour développer votre activité, pourriez-vous présenter clairement sa situation financière ?",
    options: [
      { id: "chiffres-a-jour", label: "Oui, j'ai des chiffres et des documents à jour", score: 3 },
      { id: "partiel", label: "J'ai une partie des informations, mais il me manque certains éléments", score: 2 },
      { id: "informel", label: "J'ai des informations, mais elles sont principalement informelles", score: 1 },
      { id: "non-presentable", label: "Je ne pourrais pas vraiment présenter ma situation", score: 0 },
    ],
  },

  // --- Commercial ---
  {
    id: "C1",
    dimension: "commercial",
    question: "Savez-vous quels canaux vous apportent le plus de clients ?",
    options: [
      { id: "chiffres", label: "Oui, je le sais grâce à mes chiffres ou à un suivi régulier", score: 3 },
      { id: "idee-generale", label: "J'ai une idée générale", score: 2 },
      { id: "impression", label: "Je me base surtout sur mon impression", score: 1 },
      { id: "ne-sais-pas", label: "Je ne sais pas vraiment", score: 0 },
    ],
    optionalFields: [
      {
        id: "C1-canaux",
        label: "Par quels canaux trouvez-vous principalement vos clients ?",
        type: "multiselect",
        options: [
          "Boutique / point de vente",
          "WhatsApp",
          "Facebook / Instagram / TikTok",
          "Recommandations",
          "Prospection",
          "Site web / marketplace",
          "Autre",
        ],
      },
    ],
  },
  {
    id: "C2",
    dimension: "commercial",
    question:
      "Lorsqu'un client potentiel ne passe pas immédiatement commande, que faites-vous ?",
    options: [
      { id: "pas-de-relance", label: "Je ne le recontacte généralement pas", score: 0 },
      { id: "relance-parfois", label: "Je le recontacte parfois", score: 1 },
      { id: "coordonnees-relance", label: "Je conserve ses coordonnées et je le relance", score: 2 },
      { id: "systeme-organise", label: "J'ai un système organisé pour suivre mes prospects et clients", score: 3 },
    ],
  },
  {
    id: "C3",
    dimension: "commercial",
    question: "Savez-vous quels produits ou services vous rapportent le plus ?",
    options: [
      { id: "chiffres", label: "Oui, grâce à mes chiffres", score: 3 },
      { id: "experience", label: "Oui, mais surtout grâce à mon expérience", score: 2 },
      { id: "idee", label: "J'ai une idée, sans données précises", score: 1 },
      { id: "ne-sais-pas", label: "Je ne sais pas", score: 0 },
    ],
    optionalFields: [
      {
        id: "C3-suivi",
        label: "Comment suivez-vous ces informations ?",
        type: "text",
        placeholder: "Excel, cahier, logiciel, application, comptable...",
      },
    ],
  },

  // --- Digitalisation ---
  {
    id: "D1",
    dimension: "digitalisation",
    question:
      "Comment vos clients peuvent-ils aujourd'hui découvrir ou contacter votre entreprise en ligne ?",
    options: [
      { id: "aucune-presence", label: "Je n'ai pas encore de présence en ligne structurée", score: 0 },
      { id: "un-canal", label: "J'utilise principalement un canal", score: 1 },
      { id: "plusieurs-canaux", label: "J'utilise plusieurs canaux", score: 2 },
      {
        id: "presence-structuree",
        label:
          "J'ai une présence en ligne structurée avec plusieurs canaux qui permettent réellement aux clients de me trouver ou de me contacter",
        score: 3,
      },
    ],
    optionalFields: [
      {
        id: "D1-autre",
        label: "Autre canal ou précision",
        type: "text",
      },
    ],
  },
  {
    id: "D2",
    dimension: "digitalisation",
    question:
      "Quelles tâches de votre activité gérez-vous déjà avec des outils numériques ?",
    options: [
      { id: "aucune", label: "Aucune pour le moment", score: 0 },
      { id: "communication", label: "Communication / marketing", score: 1 },
      { id: "plusieurs-taches", label: "Plusieurs tâches", score: 2 },
      {
        id: "fonctions-structurees",
        label:
          "Plusieurs fonctions importantes sont réellement structurées avec des outils numériques",
        score: 3,
      },
    ],
    optionalFields: [
      {
        id: "D2-taches",
        label: "Lesquelles ?",
        type: "multiselect",
        options: [
          "Commandes",
          "Stock",
          "Clients",
          "Facturation",
          "Dépenses / finances",
          "Communication / marketing",
          "Autre",
        ],
      },
      {
        id: "D2-outils",
        label: "Quels outils utilisez-vous principalement ?",
        type: "text",
      },
    ],
  },
  {
    id: "D3",
    dimension: "digitalisation",
    question:
      "Si vous devez retrouver aujourd'hui une ancienne commande, une information client ou une dépense, pouvez-vous facilement la retrouver ?",
    options: [
      { id: "rapidement", label: "Oui, rapidement", score: 3 },
      { id: "apres-recherches", label: "Oui, mais après quelques recherches", score: 2 },
      { id: "difficile", label: "C'est souvent difficile", score: 1 },
      { id: "rarement-conservees", label: "Ces informations sont rarement conservées", score: 0 },
    ],
  },
  {
    id: "D4",
    dimension: "digitalisation",
    question:
      "Dans quelle mesure les outils numériques vous permettent-ils réellement de gagner du temps ou de mieux gérer votre activité ?",
    options: [
      { id: "essentiels", label: "Ils sont essentiels à mon fonctionnement", score: 3 },
      { id: "aident-regulierement", label: "Ils m'aident régulièrement sur plusieurs tâches", score: 2 },
      { id: "communication-seulement", label: "Je les utilise surtout pour communiquer ou promouvoir mon activité", score: 1 },
      { id: "tres-peu", label: "Je les utilise encore très peu", score: 0 },
    ],
  },
];
