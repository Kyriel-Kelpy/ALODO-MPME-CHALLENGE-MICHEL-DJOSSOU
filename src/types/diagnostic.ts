// Dimensions couvertes par le prototype (voir 01_PRODUCT_SPEC.md)
export type Dimension = "finance" | "commercial" | "digitalisation";

export type MaturityLevel =
  | "À structurer"
  | "En construction"
  | "Structuré"
  | "Maîtrisé";

// --- Questions de profil (non scorées) ---

export type ProfileOption = {
  id: string;
  label: string;
};

export type ProfileQuestion = {
  id: string;
  question: string;
  options: ProfileOption[];
  /** Affiche un champ libre quand l'option correspondante est choisie (ex: "Autre") */
  freeTextOptionId?: string;
  freeTextPlaceholder?: string;
};

// --- Questions de diagnostic (scorées) ---

export type QuestionOption = {
  id: string;
  label: string;
  score: number;
};

export type OptionalField = {
  id: string;
  label: string;
  type: "text" | "multiselect";
  placeholder?: string;
  options?: string[];
};

export type DiagnosticQuestion = {
  id: string;
  dimension: Dimension;
  question: string;
  options: QuestionOption[];
  /** Champs facultatifs, non scorés — enrichissent le diagnostic sans modifier le score */
  optionalFields?: OptionalField[];
};

// --- État des réponses utilisateur ---

export type Answers = {
  profile: Record<string, string>; // questionId -> optionId
  profileFreeText: Record<string, string>; // questionId -> texte libre
  diagnostic: Record<string, string>; // questionId -> optionId choisi
  optionalFields: Record<string, string | string[]>; // fieldId -> valeur(s)
};

// --- Résultats ---

export type DimensionResult = {
  dimension: Dimension;
  points: number;
  maxPoints: number;
  score: number; // normalisé /100
  level: MaturityLevel;
};

export type DiagnosticResult = {
  globalScore: number; // /100
  globalLevel: MaturityLevel;
  dimensions: DimensionResult[];
  priorityDimension: Dimension;
  secondaryPriorityDimension?: Dimension;
  strengths: Dimension[];
  vigilance: Dimension;
  recommendations: string[];
};
