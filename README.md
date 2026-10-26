# MonVote Rétro — de 2002 à 2022

Application React (Vite + TypeScript + Tailwind + shadcn/ui) qui demande de choisir une
présidentielle passée, pose **le questionnaire de ce scrutin** (20 questions clés ou 100
questions sur 10 thèmes), puis calcule la proximité avec les candidats du 1er tour de
l'année et affiche pour qui on aurait probablement voté — avec pondération par thème,
radar, fiches candidats, lien de partage et export du classement en image PNG.

## Cinq questionnaires, pas un seul

Chaque élection a sa propre banque de 100 questions, écrite pour les débats de l'année
(insécurité et 35 heures en 2002, CPE et bouclier fiscal en 2007, traité budgétaire et
mariage pour tous en 2012, loi travail et sortie de l'euro en 2017, pouvoir d'achat et
nucléaire en 2022). Le format Express reprend les 20 questions clés du scrutin, deux par
thème.

Les questions diffèrent d'une année à l'autre : **les scores ne sont donc pas comparables
entre époques**. « Rejouer mes réponses » a été retiré, et l'explorateur de candidats ne
calcule la compatibilité que pour les candidats du scrutin joué.

Un contexte historique (accroche, frise datée, enjeux de campagne, « ce qui n'existait pas
encore ») est affiché sur l'accueil, en tête du questionnaire et sous le classement.

L'ordre des questions est tiré au sort à chaque nouvelle partie (graine conservée dans la
session : l'ordre reste identique si l'on recharge la page en cours de route).

Aucun backend : réponses et poids restent dans le `localStorage` du navigateur
(`monvote:session:v2`). Les réponses dont l'identifiant n'appartient pas au questionnaire
de l'année sont purgées au chargement.

## Développement

```bash
pnpm install
pnpm dev        # http://localhost:8080
pnpm build      # build de production dans dist/
```

## Déploiement sur GitHub Pages

Le build est **100 % statique** et utilise des chemins relatifs (`base: "./"`), donc il
fonctionne aussi bien à la racine d'un domaine que dans un sous-dossier
`https://<utilisateur>.github.io/<dépôt>/`.

Le routage utilise `HashRouter` (`/#/resultats`, `/#/candidats`, `/#/candidat/chirac-2002`…),
ce qui évite toute réécriture serveur : un lien partagé ou un rafraîchissement de page
fonctionne toujours sur GitHub Pages.

### Mise en service (une seule fois)

1. Pousser le dépôt sur GitHub (branche `main`).
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source** :
   choisir **GitHub Actions**.
3. Pousser sur `main` (ou lancer le workflow **Déploiement GitHub Pages** depuis l'onglet
   *Actions*). Le workflow `.github/workflows/deploy.yml` installe les dépendances avec
   pnpm, lance `pnpm build`, puis publie `dist/`.

L'application est ensuite disponible sur `https://<utilisateur>.github.io/<dépôt>/`.

### Domaine personnalisé

Ajouter un fichier `public/CNAME` contenant le domaine (ex. `monvote.example.org`) puis
configurer l'enregistrement DNS `CNAME` vers `<utilisateur>.github.io`, et renseigner le
domaine dans **Settings → Pages → Custom domain**.

### Vérification locale du build Pages

```bash
pnpm build
pnpm preview    # simule le site statique servi depuis dist/
```

> Les portraits sont chargés à l'exécution depuis l'API publique de Wikipédia, avec repli
> sur un monogramme si le réseau est indisponible : aucune image n'est requise au build.

## Tests

Les specs se lancent depuis le panneau **Tests** de Dyad (il fournit l'URL de base et
l'isolation des données) :

- `e2e-tests/questionnaire-flow.spec.ts` — accueil → 2012 → carte de contexte → express →
  20 réponses → résultats ; reprise après rechargement ; bandeau de contexte repliable ;
  confirmation du changement d'époque ; garde d'accès à `#/resultats`.
- `e2e-tests/candidates-explorer.spec.ts` — filtres année/parti, fiche candidat, et score
  limité à l'année de la session (« autre scrutin » ailleurs).
- `e2e-tests/share-link.spec.ts` — lien de partage v2 recopié puis rouvert dans un contexte
  vierge (dont 2002), et message dédié pour un lien de l'ancienne version.
- `e2e-tests/export-ranking.spec.ts` — téléchargement de l'image PNG du classement.

## Données

Les positions des candidats sont construites à la main : 14 archétypes idéologiques
positionnés sur 20 axes (`src/data/archetypes.ts`, `src/data/axes.ts`), quelques exceptions
par question (`src/data/archetypeExceptions.ts`), puis 2 à 4 ajustements personnels par
candidat (`src/data/candidates.ts`). Les cinq banques de questions vivent dans
`src/data/questions/` et sont validées à l'import (100 questions par année, 10 par thème,
2 questions clés par thème, identifiants uniques préfixés par l'année) : une incohérence fait
échouer le build. Les contextes historiques sont dans `src/data/contexts.ts`.

La page **Méthode** de l'application documente l'algorithme, un exemple chiffré et les
limites. Les scores du 1er tour sont les résultats officiels arrondis (ministère de
l'Intérieur) ; l'outil est indépendant et non affilié.
