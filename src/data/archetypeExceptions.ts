import type { ArchetypeId } from "./archetypes";

/**
 * Exceptions par (question, archétype) : uniquement pour les questions qui
 * mêlent deux axes, ou pour les positions historiques qu'un axe unique ne
 * restitue pas. Toute autre position se déduit de l'axe et de la polarité.
 */
export const ARCHETYPE_EXCEPTIONS: Record<
  string,
  Partial<Record<ArchetypeId, number | null>>
> = {
  // 2012 — le PS et le Front de gauche étaient divisés sur la sortie du nucléaire.
  "2012-ecologie-1": { "gauche-radicale": 0, "social-democratie": 0 },
  // 2012 — solidarité avec la Grèce : l'extrême gauche refuse l'austérité mais
  // pas l'aide européenne ; le souverainisme refuse toute mutualisation.
  "2012-europe-3": { "extreme-gauche": 1, souverainisme: -2 },
  // 2012 — l'interdiction du voile à l'université divise la gauche.
  "2012-societe-5": {
    "gauche-radicale": -1,
    "ecologie-politique": -1,
    "social-democratie": 0,
  },
  // 2017 — le burkini : condamnation large à droite, réserve à gauche.
  "2017-societe-5": { "ecologie-politique": -1, "social-democratie": 0 },
  // 2017 — les tests ADN du regroupement familial ont été critiqués au centre.
  "2007-immigration-5": { "centre-social-liberal": -1, "droite-gaulliste": 0 },
  // 2022 — l'interdiction du voile dans l'espace public reste minoritaire à gauche.
  "2022-societe-4": {
    "gauche-radicale": -1,
    "ecologie-politique": -1,
    "social-democratie": 0,
  },
  // 2022 — consensus très large sur l'accueil des réfugiés ukrainiens.
  "2022-immigration-9": {
    "droite-nationale": 1,
    souverainisme: 1,
    "droite-conservatrice": 1,
  },
};
