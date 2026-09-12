# ALODO MPME — Prototype de diagnostic

Prototype réalisé dans le cadre de l'exercice de sélection Développeur proposé par ALODO TECH.

## 1. Présentation — Qu'ai-je construit ?

ALODO MPME est une initiative destinée aux micro, petites et moyennes entreprises (MPME), avec pour objectif de mieux comprendre leur niveau de structuration, d'identifier leurs principaux freins au développement et de proposer des pistes d'accompagnement adaptées.

Dans le cadre de cet exercice, j'ai choisi de concevoir et développer un prototype ciblé d'une partie du parcours de diagnostic ALODO MPME.

Le prototype permet à une entreprise de :

1. découvrir le principe du diagnostic ;
2. renseigner quelques informations générales sur son activité ;
3. répondre à un questionnaire court ;
4. suivre sa progression ;
5. obtenir un score global et des scores par dimension ;
6. identifier ses principaux points forts et son axe prioritaire d'amélioration ;
7. consulter des recommandations adaptées à ses résultats.

Le prototype se concentre sur trois dimensions :

* Finance
* Commercial
* Digitalisation

Le questionnaire comporte 12 questions au total, dont 2 questions de profil qui servent à contextualiser l'entreprise sans entrer directement dans le calcul du score.

L'objectif n'était pas de construire l'intégralité d'ALODO MPME, mais de montrer comment une partie du diagnostic pourrait fonctionner dans une expérience simple, courte et compréhensible.

---

## 2. Choix produit — Pourquoi ces dimensions et ces questions ?

Le brief précise que le diagnostic ALODO MPME doit chercher à comprendre la maturité réelle d'une entreprise et non simplement vérifier la présence d'outils ou de fonctionnalités.

J'ai donc choisi des questions orientées vers les pratiques réelles de l'entreprise.

Par exemple, demander simplement si une entreprise utilise un logiciel de gestion ne permet pas nécessairement de savoir si elle maîtrise réellement son activité.

À l'inverse, demander si elle peut retrouver rapidement une ancienne dépense, si elle connaît réellement ce qu'elle a gagné ou si elle sait quels canaux lui apportent le plus de clients permet davantage d'observer son niveau de structuration.

### Pourquoi Finance ?

La gestion financière constitue une base importante pour comprendre la situation réelle d'une activité.

Les questions cherchent notamment à déterminer si l'entreprise :

* suit ses entrées et sorties d'argent ;
* connaît réellement ses résultats ;
* dispose d'informations financières suffisamment structurées ;
* serait capable de présenter sa situation dans le cadre d'une demande de financement.

### Pourquoi Commercial ?

Une entreprise peut avoir une activité réelle sans disposer d'une vision précise de sa performance commerciale.

Les questions portent notamment sur :

* les canaux d'acquisition ;
* le suivi des prospects ;
* les relances ;
* la connaissance des produits ou services qui génèrent le plus de revenus.

L'objectif est de distinguer une activité qui fonctionne principalement à l'intuition d'une activité dont le développement commercial commence à être suivi et mesuré.

### Pourquoi Digitalisation ?

La digitalisation ne se limite pas à posséder une page Facebook ou un site web.

Les questions cherchent donc à comprendre :

* comment les clients découvrent et contactent l'entreprise ;
* quelles tâches sont réellement gérées avec des outils numériques ;
* si les informations peuvent être retrouvées facilement ;
* si les outils utilisés apportent réellement un gain de temps ou d'organisation.

### Pourquoi seulement trois dimensions ?

Le brief présente huit dimensions possibles pour le diagnostic complet.

Dans le cadre d'un exercice limité dans le temps, j'ai volontairement réduit le périmètre plutôt que de construire un questionnaire superficiel couvrant artificiellement les huit dimensions.

Le choix de Finance, Commercial et Digitalisation permet de croiser trois aspects complémentaires de la maturité d'une MPME :

* sa capacité à comprendre et suivre son activité financière ;
* sa capacité à développer et piloter son activité commerciale ;
* son niveau d'organisation et d'utilisation des outils numériques.

### Pourquoi 12 questions ?

Le brief fixe une limite de 6 à 12 questions et précise que la pertinence et la logique des questions sont plus importantes que leur quantité.

J'ai donc choisi un questionnaire court afin de limiter la fatigue de l'utilisateur tout en obtenant suffisamment d'informations pour produire un premier bilan.

Certaines questions comportent également des champs facultatifs permettant de préciser les outils ou canaux réellement utilisés.

Ces informations complémentaires ne donnent pas automatiquement un meilleur score : le niveau de maturité est principalement évalué à partir des pratiques et de leur degré de structuration.

### Logique de scoring

Les réponses sont évaluées selon quatre niveaux :

| Niveau | Signification   |
| ------ | --------------- |
| 0      | À structurer    |
| 1      | En construction |
| 2      | Structuré       |
| 3      | Maîtrisé        |

Le score final est calculé à partir des réponses scorées et normalisé sur 100.

Le prototype affiche ensuite :

* un score global ;
* un score par dimension ;
* un niveau de maturité ;
* les points forts ;
* un point de vigilance / axe prioritaire ;
* des recommandations.

Le système cherche notamment à éviter qu'un bon score global masque complètement une faiblesse importante dans une dimension particulière.

---

## 3. Choix techniques — Pourquoi cette stack ?

J'ai choisi une stack volontairement simple et maîtrisée :

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

### React

React permet de construire facilement le parcours sous forme de composants réutilisables et de gérer l'état du diagnostic côté client.

Le questionnaire étant constitué d'étapes successives, React est particulièrement adapté à ce type d'interface interactive.

### TypeScript

TypeScript permet de mieux structurer les données du diagnostic, les réponses, les dimensions et les résultats.

Il limite également les erreurs liées aux données manipulées entre les différentes étapes du parcours.

### Vite

Vite permet d'obtenir une configuration légère et un environnement de développement rapide, adapté à un prototype de cette taille.

### Tailwind CSS

Tailwind CSS permet de construire rapidement une interface responsive tout en conservant une cohérence entre les différents écrans.

### Lucide React

Lucide React est utilisé pour les icônes de l'interface.

### Pourquoi pas de backend ou de base de données ?

Le brief précise qu'une base de données réelle n'est pas obligatoire et que l'état local, le JSON ou le localStorage sont suffisants pour ce type de prototype.

J'ai donc volontairement évité d'ajouter un backend, une authentification ou une base de données qui n'étaient pas nécessaires pour démontrer le fonctionnement du diagnostic.

Cela permet également de garder le projet simple, rapide à comprendre et cohérent avec le périmètre de l'exercice.

### Organisation du code

Les données du diagnostic, la logique de scoring et l'interface sont séparées afin d'éviter de mélanger les règles métier avec les composants visuels.

L'objectif est qu'un tiers puisse comprendre et modifier les questions ou la logique du diagnostic sans devoir réécrire toute l'interface.

---

## 4. Installation — Comment lancer le projet ?

### Prérequis

* Node.js
* npm

### Installation

```bash
git clone <URL_DU_REPOSITORY>
cd <NOM_DU_REPOSITORY>
npm install
```

### Lancer le projet en développement

```bash
npm run dev
```

Vite indiquera ensuite l'adresse locale permettant d'accéder à l'application.

### Générer le build de production

```bash
npm run build
```

### Déploiement

Le prototype est déployé sur Vercel.

**Démo :** https://alodo-mpme.vercel.app/

---

## 5. Fonctionnalités — Qu'est-ce qui fonctionne ?

Le prototype comprend actuellement :

* écran d'introduction du diagnostic ;
* présentation du nombre de questions et des dimensions étudiées ;
* questions de profil ;
* questionnaire progressif ;
* affichage de la progression ;
* navigation entre les questions ;
* sélection des réponses ;
* champs complémentaires sur certains éléments ;
* calcul du score ;
* calcul des scores par dimension ;
* interprétation du niveau de maturité ;
* identification des points forts ;
* identification d'un axe prioritaire ;
* recommandations ;
* parcours responsive desktop/mobile.

Le parcours est entièrement fonctionnel côté client et ne dépend pas d'un service backend pour effectuer le diagnostic.

---

## 6. Limites — Qu'ai-je volontairement laissé de côté ?

Le brief précise qu'il ne faut pas chercher à construire l'intégralité d'ALODO MPME dans le cadre des trois jours.

J'ai donc volontairement laissé de côté :

* les cinq autres dimensions du diagnostic complet ;
* la Formalisation ;
* la Comptabilité ;
* les Opérations ;
* les Ressources humaines ;
* la Préparation au financement ;
* l'authentification complète ;
* la gestion des comptes entreprises ;
* une base de données réelle ;
* un backend complexe ;
* l'intégration bancaire ;
* le Mobile Money ;
* un CRM ;
* un système comptable ;
* un système complet de financement ;
* un dashboard administrateur ;
* une application mobile native ;
* une IA de diagnostic.

Ces éléments ne sont pas des oublis du prototype : ils ont été volontairement exclus afin de conserver un périmètre réaliste et livrable dans le temps imparti.

Le choix de réduire le périmètre plutôt que de produire une version incomplète de plusieurs fonctionnalités fait partie de la démarche de conception du prototype.

---

## 7. Améliorations — Qu'aurais-je ajouté avec plus de temps ?

Le prototype pourrait constituer la base d'un diagnostic plus complet.

### Diagnostic adaptatif

Une évolution particulièrement intéressante serait de rendre le questionnaire adaptatif.

Le parcours pourrait évoluer en fonction du profil et des réponses de l'entreprise.

Par exemple :

* une entreprise commerciale pourrait recevoir davantage de questions sur les ventes, les stocks ou les clients ;
* une entreprise de services pourrait être davantage interrogée sur ses opérations et ses prestations ;
* une entreprise déjà bien structurée pourrait recevoir des questions plus avancées ;
* une réponse révélant une faiblesse particulière pourrait déclencher une question complémentaire.

Cela permettrait d'obtenir un diagnostic plus pertinent sans demander à toutes les entreprises de répondre à un questionnaire beaucoup plus long.

### Rapport de diagnostic plus complet

Le résultat pourrait également évoluer vers un véritable rapport comprenant :

* une synthèse de la maturité ;
* les principales forces ;
* les principaux points de vigilance ;
* les priorités d'action ;
* des recommandations détaillées par dimension ;
* un plan d'amélioration.

### Suivi dans le temps

Une version complète pourrait conserver les diagnostics successifs d'une même entreprise afin de mesurer sa progression.

L'entreprise pourrait ainsi refaire son diagnostic après plusieurs mois et comparer son évolution.

### Exploitation des données

À plus grande échelle, les résultats anonymisés et agrégés pourraient permettre d'identifier les difficultés les plus fréquentes chez les MPME et d'adapter les programmes d'accompagnement en conséquence.

---

## Utilisation de l'IA

L'intelligence artificielle a été utilisée comme outil d'assistance pendant la conception et le développement du prototype.

Elle a notamment permis d'accélérer certaines étapes de réflexion, de structuration et d'implémentation.

L'utilisation de l'IA ne retire pas la responsabilité du développeur sur le code produit : les choix effectués, le fonctionnement du prototype et la logique de scoring doivent pouvoir être expliqués et justifiés.

## Statut du projet

Prototype fonctionnel réalisé dans le cadre du challenge de sélection Développeur ALODO TECH.

## Auteur

**Michel Djossou**

Développeur Web · Rédacteur SEO · IA-enthousiaste

Projet réalisé dans le cadre du processus de sélection ALODO TECH.
