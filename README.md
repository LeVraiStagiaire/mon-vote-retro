# MonVote Rétro — de 2002 à 2022

Application React (Vite + TypeScript + Tailwind + shadcn/ui) qui demande de choisir une
présidentielle passée, pose un questionnaire de 20 ou 100 questions sur 10 thèmes, puis
calcule la proximité avec les 61 candidats du 1er tour et affiche pour qui on aurait
probablement voté — avec pondération par thème, radar, fiches candidats, lien de partage
et export du classement en image PNG.

L'ordre des questions est tiré au sort à chaque nouvelle partie (graine conservée dans la
session : l'ordre reste identique si l'on recharge la page en cours de route).

Aucun backend : réponses et poids restent dans le `localStorage` du navigateur.

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

- `e2e-tests/questionnaire-flow.spec.ts` — accueil → 2012 → express → 20 réponses → résultats,
  reprise après rechargement, rejeu sur 2017, garde d'accès à `#/resultats`.
- `e2e-tests/candidates-explorer.spec.ts` — filtres année/parti et fiche candidat.
- `e2e-tests/share-link.spec.ts` — lien de partage recopié puis rouvert dans un contexte vierge.
- `e2e-tests/export-ranking.spec.ts` — téléchargement de l'image PNG du classement.

## Données

Les positions des candidats sont construites à la main : 14 archétypes idéologiques ×
100 questions (`src/data/archetypes.ts`), plus 2 à 4 ajustements personnels par candidat
(`src/data/candidates.ts`). La page **Méthode** de l'application documente l'algorithme,
un exemple chiffré et les limites. Les scores du 1er tour sont les résultats officiels
arrondis (ministère de l'Intérieur) ; l'outil est indépendant et non affilié.
