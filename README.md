# MonVote Rétro — de 2002 à 2022

**Et si vous aviez voté en 2002 ? En 2012 ? En 2022 ?**

MonVote Rétro vous fait choisir une présidentielle passée, vous pose le questionnaire écrit
pour cette campagne-là, puis vous montre à quel candidat du premier tour vous ressemblez
le plus — avec le détail de vos accords et désaccords, thème par thème.

Pas de compte, pas de serveur, pas de conseil de vote : un outil pour confronter vos
convictions aux débats d'une campagne et découvrir un peu d'histoire politique.

---

## Le parcours, en six étapes

1. **Choisir une époque.** Cinq cartes : 2002, 2007, 2012, 2017, 2022. Chacune annonce son
   angle (l'insécurité et les 35 heures, « la rupture », la crise de l'euro, la
   recomposition, le pouvoir d'achat) et trois enjeux de campagne.
2. **Lire le contexte.** Dès qu'une année est sélectionnée, une carte résume la campagne :
   une accroche, une frise de quatre dates, et « ce qui n'existait pas encore » à l'époque.
3. **Choisir le format.** *Express* (20 questions, ≈ 4 minutes) ou *Complet* (100 questions,
   ≈ 15 minutes).
4. **Répondre.** Une proposition par écran, cinq niveaux d'accord, plus une échappatoire
   « je ne sais pas ». Le bandeau « Contexte {année} » reste accessible en haut de l'écran.
5. **Découvrir le classement.** Votre meilleur profil, le classement complet des candidats
   de l'année, un radar par thème, et la possibilité de pondérer les thèmes.
6. **Explorer et partager.** Les 61 candidats des cinq scrutins ont une fiche détaillée ;
   un lien permet de transmettre vos résultats, une image PNG de votre podium aussi.

---

## Cinq élections, cinq questionnaires

Chaque scrutin a **son propre questionnaire de 100 questions**, rédigé avec les débats, les
mesures et le vocabulaire de l'année. Les grands principes reviennent parfois d'une campagne
à l'autre — c'est la nature du débat politique — mais les mesures citées, les notes de
contexte et les enjeux de campagne sont propres à chaque élection. C'est ce qui évite les
anachronismes (les zones à faibles émissions en 2002, le quinquennat en 2022…).

| Année | Ce qui domine la campagne | Un repère |
| --- | --- | --- |
| **2002** | Insécurité, cohabitation, 35 heures, euro fiduciaire | Le 21 avril, Jean-Marie Le Pen élimine Lionel Jospin au 1er tour. |
| **2007** | « La rupture », émeutes de 2005, CPE, bouclier fiscal | Le CPE est créé puis retiré après des semaines de mobilisation. |
| **2012** | Crise de l'euro, traité budgétaire, retraite à 62 ans | Le traité budgétaire est signé le 2 mars, en pleine campagne. |
| **2017** | État d'urgence, Brexit, loi travail, revenu universel | Jean-Luc Mélenchon rate le second tour pour 590 000 voix. |
| **2022** | Pouvoir d'achat, guerre en Ukraine, retraites, nucléaire | La guerre en Ukraine éclate le 24 février, en pleine campagne. |

Les 10 thèmes sont les mêmes partout (économie, travail, social, éducation, immigration,
sécurité, écologie, Europe, international, société) : c'est le contenu des questions qui
change. Le format **Express** reprend les 20 « questions clés » du scrutin, deux par thème ;
le format **Complet** pose les 100 questions de l'année.

---

## Le questionnaire en pratique

- **Cinq réponses possibles** : pas du tout d'accord, plutôt pas d'accord, ni l'un ni l'autre,
  plutôt d'accord, tout à fait d'accord. « Je ne sais pas » compte comme une absence de
  réponse : la question est ignorée dans le calcul.
- **Clavier** : touches `1` à `5` pour répondre, `0` pour passer, flèche gauche pour revenir
  en arrière.
- **Ordre mélangé** à chaque nouvelle partie, mais **stable pendant la session** : si vous
  rechargez la page, vous retrouvez exactement la même question au même endroit. Un écran de
  respiration apparaît à mi-parcours.
- **Reprise automatique** : vos réponses sont enregistrées au fil de l'eau dans votre
  navigateur. Un bandeau « Questionnaire en cours » sur l'accueil permet de reprendre ou
  d'effacer.
- **Notes de contexte** : certaines questions citent une mesure précise. Un petit encadré
  « Repère » rappelle alors les dates exactes (par exemple : le CICE a été créé en 2013 et
  supprimé en 2019).
- **Changer d'époque en cours de route** efface les réponses déjà données : un dialogue de
  confirmation vous prévient avant, puisque les questions ne sont pas transposables d'un
  scrutin à l'autre.

---

## Comment le classement est calculé

Chaque candidat a une **position** sur chaque question de son scrutin, de « pas du tout
d'accord » à « tout à fait d'accord », notée de −2 à +2. On compare votre réponse à la
sienne :

> plus vous êtes proches, plus l'accord est élevé. Réponses identiques : 100 %. Aux
> extrémités opposées : 0 %. Entre les deux, l'écart est simplement proportionnel.

Le score de compatibilité est la **moyenne de ces accords**, **pondérée par thème**. Par
défaut, chaque thème compte pareil ; sur la page de résultats, vous pouvez mettre un thème
à ×0 (neutralisé) ou ×2 (compté double), et le classement se recalcule instantanément.

Trois garde-fous sont affichés :

- il faut **au moins 5 réponses** pour obtenir un classement ;
- la **couverture** indique la part des questions répondues sur lesquelles le candidat a
  une position documentée ;
- en dessous de 40 % de couverture, un badge **« Faible couverture »** signale un score
  fragile (fréquent pour les très petites candidatures).

D'où viennent ces positions ? Elles ne sont pas des citations de programmes. Chaque candidat
est rattaché à un **archétype idéologique** (social-démocratie, droite libérale, souverainisme,
écologie politique…), lui-même positionné sur une vingtaine d'axes (redistribution, Europe,
nucléaire, immigration, laïcité…). S'y ajoutent quelques exceptions par question et deux à
quatre ajustements personnels par candidat. La page **Méthode** détaille tout, exemple
chiffré compris.

---

## La page de résultats

- **Votre profil dominant** : le candidat avec lequel votre compatibilité est la plus forte,
  avec son score, son parti, son score réel au 1er tour et un lien vers sa fiche.
- **Le classement complet** des candidats de l'année, cliquable ligne à ligne.
- **Le radar par thème** : votre compatibilité avec le candidat de tête, comparée à la
  moyenne des candidats de la même élection.
- **La pondération des thèmes**, réglable thème par thème.
- **L'export en image PNG** de votre podium et des six premières places.
- **Le lien de partage**, qui encode vos réponses dans l'URL.
- **La carte de contexte complète** sous le classement : frise datée, enjeux de campagne,
  « ce qui n'existait pas encore » et sources.

Un rappel utile : les scores ne sont **pas comparables entre époques**, puisque les
questionnaires diffèrent. L'application ne propose donc plus de « rejouer mes réponses » sur
une autre année : il faut refaire le questionnaire du scrutin qui vous intéresse.

---

## Explorer les candidats

La page **Candidats** réunit les **61 candidats du 1er tour** des cinq scrutins, avec des
filtres par année et par parti. La compatibilité n'est calculée que pour **l'année que vous
avez jouée** ; les candidats des autres scrutins portent la mention « Autre scrutin » et
gardent seulement leur score officiel.

Chaque fiche candidat montre :

- son parti, son score au 1er tour, son archétype de référence et une courte biographie ;
- vos accords les plus forts et vos désaccords les plus nets (si vous avez joué son année) ;
- toutes ses positions, thème par thème, question par question, avec votre propre réponse en
  regard.

---

## Revenir plus tard, partager, recommencer

Vos réponses et vos pondérations restent **dans votre navigateur**. Vous pouvez fermer
l'onglet et reprendre plus tard : rien n'est envoyé nulle part.

Le bouton **Copier le lien de partage** fabrique une adresse qui contient vos réponses
encodées. Ouverte dans un autre navigateur, elle reconstruit le même classement sans
questionnaire à refaire. Un lien très ancien, antérieur au passage aux questionnaires par
scrutin, affiche un message dédié et invite à refaire le questionnaire.

**Recommencer** efface la session et vous ramène à l'accueil.

---

## Ce que l'outil ne prétend pas faire

- **Ce n'est pas un conseil de vote.** Le score mesure une proximité de positions, pas une
  intention de vote.
- **Ce ne sont pas des citations.** Une position est une interprétation d'ensemble ; un
  candidat peut évoluer, et l'archétype lisse ces évolutions.
- **Les petits partis sont moins documentés**, donc leurs scores sont plus fragiles.
- **Chaque question est écrite pour l'année**, avec le vocabulaire et les mesures de l'époque,
  mais elle reste une interprétation rétrospective : les débats tranchés depuis peuvent
  avantager les profils qui ont été cohérents avec la suite de l'histoire.
- **Un vote n'est pas un programme.** L'adhésion personnelle, le vote utile, le rejet d'un
  adversaire ou la dynamique de campagne n'entrent pas dans le calcul.

---

## Vie privée

Aucun compte, aucun serveur, aucun traceur, aucune donnée personnelle collectée. Les
réponses restent dans le stockage local du navigateur, et un lien de partage les transporte
dans l'URL elle-même. Les portraits sont chargés à l'exécution depuis l'API publique de
Wikipédia ; si le réseau est indisponible, un monogramme aux couleurs du parti prend le
relais.

---

## Coulisses (pour les curieux)

L'application est un site statique en React (Vite, TypeScript, Tailwind, shadcn/ui). Les cinq
banques de questions vivent dans `src/data/questions/`, les contextes historiques dans
`src/data/contexts.ts`, les archétypes et les axes dans `src/data/archetypes.ts` et
`src/data/axes.ts`, et les candidats dans `src/data/candidates.ts`. Les banques sont
vérifiées à l'import : une incohérence de volume ou d'identifiant fait échouer le build.

```bash
pnpm install
pnpm dev     # http://localhost:8080
pnpm build   # build statique dans dist/
```

Les tests de parcours (Playwright) se trouvent dans `e2e-tests/`.

Outil indépendant, non affilié à un parti politique ni à une administration.
