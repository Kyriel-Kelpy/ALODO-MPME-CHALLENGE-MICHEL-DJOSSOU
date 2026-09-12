# ALODO-MPME-CHALLENGE-MICHEL-DJOSSOU

# ALODO MPME — Diagnostic Prototype

Prototype réalisé dans le cadre de l'exercice de sélection Développeur proposé par ALODO TECH.

## Présentation

ALODO MPME vise à mieux comprendre le niveau de structuration des micro, petites et moyennes entreprises afin d'identifier leurs principaux besoins et de proposer des pistes d'accompagnement adaptées.

Ce prototype se concentre sur une partie du parcours : le diagnostic de l'entreprise.

L'objectif est de proposer une expérience simple permettant à un dirigeant de répondre à quelques questions ciblées et d'obtenir une première lecture de la situation de son activité.

Le prototype couvre trois dimensions :

- Finance
- Commercial
- Digitalisation

Le diagnostic repose sur 12 questions au total, complétées par quelques informations de profil non scorées.

## Fonctionnalités

- Présentation du diagnostic
- Collecte de quelques informations générales sur l'activité
- Questionnaire progressif avec indicateur d'avancement
- Questions adaptées aux trois dimensions étudiées
- Réponses à choix structurées
- Possibilité de préciser certains outils ou canaux utilisés
- Calcul d'un score global
- Calcul d'un score par dimension
- Identification des points forts
- Identification d'un axe prioritaire d'amélioration
- Recommandations adaptées aux résultats
- Interface responsive, pensée en priorité pour une utilisation mobile

## Logique du diagnostic

Le diagnostic ne cherche pas uniquement à vérifier la présence d'un outil ou d'un canal.

L'objectif est plutôt d'évaluer le niveau réel de structuration des pratiques de l'entreprise : suivi régulier, capacité à retrouver l'information, utilisation des données pour prendre des décisions, organisation commerciale et usage concret des outils numériques.

Les réponses sont évaluées selon quatre niveaux de maturité :

| Niveau | Interprétation |
| --- | --- |
| 0 | À structurer |
| 1 | En construction |
| 2 | Structuré |
| 3 | Maîtrisé |

Les scores sont ensuite normalisés afin d'obtenir une lecture sur 100.

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

Le prototype fonctionne côté client et ne nécessite pas de base de données pour son fonctionnement actuel.

Les questions, règles de scoring et recommandations sont séparées de l'interface afin de faciliter leur évolution.

## Structure du projet

```text
src/
├── components/
├── data/
├── pages/
├── types/
├── utils/
├── App.tsx
└── main.tsx
