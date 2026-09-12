# ALODO MPME — Diagnostic de maturité

Prototype web réalisé pour le challenge développeur ALODO TECH : un diagnostic
de maturité pour les MPME (Micro, Petites et Moyennes Entreprises), sur trois
dimensions — **Finance**, **Commercial**, **Digitalisation**.

Parcours : Accueil → Profil → 12 questions → Résultats.

## Lancer le projet

Depuis la racine du dossier `alodo-mpme` :

```bash
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

Build de production :

```bash
npm run build
```

Le dossier `dist/` généré est directement déployable (voir section Vercel).

## Vérifications de qualité

```bash
npx tsc --noEmit     # TypeScript
npm run lint         # oxlint
npm run test:scoring # rejoue la logique de scoring sur des cas limites
```

## Architecture

```text
src/
├── components/    # UI réutilisable (Button, AnswerCard, QuestionCard, ScoreCard...)
├── data/          # Questions, recommandations, textes UI, styles par dimension
├── pages/         # Welcome, Profile, Diagnostic, Calculating, Results
├── types/         # Modèle de données du diagnostic
├── utils/         # scoring.ts (calcul), results.ts (texte de synthèse)
└── App.tsx        # Orchestration du parcours (état, navigation)
```

Le scoring est entièrement centralisé dans `utils/scoring.ts` : les composants
UI ne font aucun calcul, ils affichent des résultats déjà calculés.

## Choix techniques

- **React + TypeScript + Vite + Tailwind CSS v4 + Lucide React**, sans backend
  ni base de données, conformément au périmètre du challenge.
- **Tailwind CSS v4** : intégration via `@tailwindcss/vite` (pas de
  `tailwind.config.js` classique — les tokens de design vivent dans
  `src/index.css` via `@theme`, plus simple à maintenir pour ce prototype).
- **État en mémoire uniquement** (`useState` dans `App.tsx`), pas de
  `localStorage` : suffisant pour un parcours linéaire de 12 questions, et
  évite une complexité inutile pour un prototype.
- **12 questions numérotées séquentiellement** (2 profil + 10 scorées) :
  le mockup fourni affichait "Question 4 sur 12" pour la première question
  Finance, ce qui correspond à l'exemple illustratif du document
  `03_UX_SPEC.md` plutôt qu'à l'ordre réel des questions. Le prototype suit
  l'ordre logique du document `02_QUESTIONS_AND_SCORING.md` (P1, P2, F1-F3,
  C1-C3, D1-D4), pour rester cohérent et vérifiable.
- **Priorité et recommandations** : la dimension la plus faible est
  prioritaire par défaut ; une priorité secondaire n'est signalée que si une
  deuxième dimension est proche en score ET que la première révèle une
  vraie fragilité (score < 80) — pour éviter un signal de fragilité inutile
  quand tout est déjà bien structuré.

## Choix produit

- Le score global ne masque jamais une dimension très faible : la priorité
  est toujours basée sur la dimension la plus fragile, même si le score
  global est bon (voir `getPriorityDimension` dans `utils/scoring.ts`).
- Les champs facultatifs (canaux, outils utilisés...) enrichissent le
  diagnostic mais ne modifient jamais le score.
- Aucune donnée, statistique ou fonctionnalité d'accompagnement réelle
  d'ALODO n'a été inventée — le prototype reste honnête sur sa nature de
  diagnostic.

## Cas testés

Voir `scripts/test-scoring.ts` (exécutable via `npm run test:scoring`) pour
les cas limites de scoring : toutes réponses à 0, toutes à 3, une dimension
faible malgré un score global correct, réponses mixtes.

Testés manuellement dans l'application : navigation arrière (réponses
conservées), modification d'une réponse, champs facultatifs non bloquants,
affichage mobile et desktop.

## Limites connues

- Prototype à 3 dimensions sur les 8 du diagnostic ALODO complet, par
  périmètre du challenge.
- Pas de persistance : recharger la page réinitialise le parcours.
- Les textes de synthèse ("Votre priorité : ...") sont des gabarits
  génériques par profil de scores, pas une génération dynamique par réponse
  individuelle.

## Déploiement Vercel

Le projet est un site statique Vite standard : import du dépôt dans Vercel,
framework détecté automatiquement (`Vite`), aucune variable d'environnement
nécessaire.

## Usage de l'IA

Ce prototype a été construit avec l'assistance de Claude (Anthropic), à
partir des 5 documents de spécification fournis (product spec, questions &
scoring, UX spec, design system, implementation notes) et des maquettes
visuelles. L'IA a participé à la génération du code, en suivant strictement
le périmètre, les questions, le scoring et les décisions UX définis dans les
spécifications.
