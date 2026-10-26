import { shuffleWithSeed } from "@/lib/shuffle";
import { THEME_IDS, type ThemeId } from "./themes";

export interface Question {
  id: string;
  themeId: ThemeId;
  text: string;
  express: boolean;
}

export type QuizMode = "express" | "complet";

interface RawQuestion {
  text: string;
  express?: boolean;
}

/**
 * 100 questions, 10 par thème. Les questions `express` (2 par thème) forment
 * le questionnaire court de 20 questions : aucune donnée n'est dupliquée.
 */
const RAW: Record<ThemeId, RawQuestion[]> = {
  economie: [
    { text: "L'impôt sur les grandes fortunes devrait être fortement réduit, voire supprimé.", express: true },
    { text: "L'État doit rester actionnaire majoritaire des entreprises stratégiques." },
    { text: "La France doit réduire le nombre de ses fonctionnaires." },
    { text: "Les 35 heures ont été une bonne réforme pour l'emploi." },
    { text: "Il faut laisser davantage de place au secteur privé dans les services publics." },
    { text: "Le SMIC devrait être nettement augmenté pour soutenir la consommation.", express: true },
    { text: "La dette publique doit être réduite en priorité, même au prix de coupes dans les dépenses." },
    { text: "Les nationalisations sont parfois nécessaires pour protéger l'intérêt général." },
    { text: "La finance devrait être beaucoup plus encadrée par la loi." },
    { text: "Le droit du travail doit être simplifié pour faciliter l'embauche." },
  ],
  travail: [
    { text: "Le CDI doit rester la norme par défaut dans tous les contrats de travail.", express: true },
    { text: "Les licenciements devraient être facilités pour les entreprises en difficulté." },
    { text: "Il faut passer à 32 heures pour partager le travail disponible." },
    { text: "Les syndicats ont trop de pouvoir dans les négociations sociales." },
    { text: "La retraite à 60 ans doit être rétablie pour tous." },
    { text: "Les salaires des grands dirigeants devraient être plafonnés par la loi.", express: true },
    { text: "Les représentants du personnel devraient avoir plus de droits dans l'entreprise." },
    { text: "L'assurance chômage doit être plus stricte pour inciter à reprendre un emploi." },
    { text: "Les emplois précaires, CDD et intérim, devraient être davantage encadrés." },
    { text: "La négociation doit se faire au niveau de l'entreprise plutôt que de la branche." },
  ],
  social: [
    { text: "Les soins courants devraient être remboursés à 100 % par la Sécurité sociale.", express: true },
    { text: "Il faut ouvrir plus largement l'hôpital aux capitaux privés." },
    { text: "Le système de retraites par répartition doit rester le pilier unique." },
    { text: "Les prestations sociales devraient être conditionnées à des contreparties." },
    { text: "Le revenu universel est une bonne idée pour lutter contre la pauvreté." },
    { text: "Les complémentaires santé privées peuvent remplacer une partie du régime public.", express: true },
    { text: "Pour lutter contre les déserts médicaux, il faut obliger les médecins à s'installer." },
    { text: "La lutte contre la fraude sociale est aussi importante que l'accès aux droits." },
    { text: "L'État doit financer un grand plan contre la précarité alimentaire." },
    { text: "Les allocations doivent être davantage liées à une recherche active d'emploi." },
  ],
  education: [
    { text: "Le collège unique doit rester un principe républicain intangible.", express: true },
    { text: "L'université doit pouvoir sélectionner ses étudiants à l'entrée." },
    { text: "Les établissements scolaires doivent pouvoir recruter eux-mêmes leurs enseignants." },
    { text: "Une allocation d'autonomie pour tous les étudiants est indispensable." },
    { text: "Les notes et le classement sont utiles à l'école." },
    { text: "Il faut donner beaucoup plus de moyens aux établissements des quartiers populaires.", express: true },
    { text: "L'école privée ne devrait plus être financée sur fonds publics." },
    { text: "L'apprentissage doit être développé dès 15 ans comme voie d'excellence." },
    { text: "Les programmes doivent valoriser davantage l'effort et l'autorité." },
    { text: "La mixité sociale à l'école doit être imposée par la carte scolaire." },
  ],
  immigration: [
    { text: "L'immigration est globalement une chance pour la France.", express: true },
    { text: "Le regroupement familial doit être fortement restreint." },
    { text: "Les personnes étrangères qui vivent et travaillent ici devraient voter aux élections locales." },
    { text: "Il faut rétablir des contrôles aux frontières intérieures de l'Europe." },
    { text: "Les régularisations au cas par cas sont une réponse pragmatique." },
    { text: "La préférence nationale pour les aides sociales est justifiée.", express: true },
    { text: "L'accueil des réfugiés est un devoir moral qui doit primer sur les quotas." },
    { text: "Les demandes d'asile devraient être examinées dans des pays tiers." },
    { text: "La France doit se doter de quotas migratoires votés par le Parlement." },
    { text: "La naturalisation doit reposer sur des critères plus stricts, y compris linguistiques." },
  ],
  securite: [
    { text: "Les peines prononcées devraient être systématiquement exécutées, même courtes.", express: true },
    { text: "La vidéosurveillance et les amendes doivent être développées massivement." },
    { text: "Il faut légaliser le cannabis pour mieux encadrer sa consommation." },
    { text: "La perpétuité réelle doit exister pour certains crimes." },
    { text: "Les mineurs délinquants doivent relever d'une justice plus répressive." },
    { text: "La détention provisoire est beaucoup trop utilisée en France.", express: true },
    { text: "Les contrôles au faciès doivent être strictement encadrés et sanctionnés." },
    { text: "La police doit pouvoir retenir un suspect plus longtemps avant de le présenter à un juge." },
    { text: "La prévention et l'éducation comptent plus que la répression." },
    { text: "L'armement de la police municipale doit être généralisé." },
  ],
  ecologie: [
    { text: "La France doit sortir du nucléaire civil d'ici 2035.", express: true },
    { text: "Les éoliennes défigurent nos paysages et doivent être arrêtées." },
    { text: "La taxe carbone doit fortement augmenter pour changer les comportements." },
    { text: "La France doit cesser toute nouvelle exploration d'hydrocarbures." },
    { text: "Les normes environnementales freinent trop l'agriculture française." },
    { text: "Il faut interdire les vols intérieurs lorsqu'un train existe.", express: true },
    { text: "Le nucléaire est une chance pour décarboner notre économie." },
    { text: "Les zones à faibles émissions devraient être abandonnées." },
    { text: "Les pesticides de synthèse doivent être progressivement supprimés." },
    { text: "La rénovation thermique des logements doit être massivement subventionnée." },
  ],
  europe: [
    { text: "La France devrait pouvoir sortir de l'euro si nécessaire.", express: true },
    { text: "Le Parlement européen doit avoir davantage de pouvoirs.", express: true },
    { text: "Tout nouveau transfert de compétences à l'Union doit passer par référendum." },
    { text: "Il faut créer une armée européenne commune." },
    { text: "La primauté du droit européen sur la loi française est excessive." },
    { text: "Les frontières de l'espace Schengen doivent pouvoir être suspendues." },
    { text: "La France doit accepter de partager davantage sa souveraineté budgétaire." },
    { text: "Le quinquennat est un bon équilibre pour les institutions." },
    { text: "L'Assemblée nationale devrait être élue à la proportionnelle intégrale." },
    { text: "Le cumul des mandats doit être totalement interdit." },
  ],
  international: [
    { text: "La France doit quitter le commandement intégré de l'OTAN.", express: true },
    { text: "Le budget de la défense doit être fortement augmenté.", express: true },
    { text: "Toute intervention militaire extérieure doit être votée par le Parlement." },
    { text: "La France doit conserver sa force de dissuasion nucléaire." },
    { text: "L'aide publique au développement doit être nettement augmentée." },
    { text: "Les sanctions économiques sont une arme efficace contre les régimes autoritaires." },
    { text: "La France doit reconnaître l'État palestinien." },
    { text: "L'Union européenne doit se doter d'une capacité militaire autonome." },
    { text: "Les décisions de l'ONU doivent primer sur celles des alliances militaires." },
    { text: "La France doit continuer à exporter des armes vers ses alliés." },
  ],
  societe: [
    { text: "Le mariage pour tous est une avancée qu'il faut préserver.", express: true },
    { text: "La PMA doit être ouverte à toutes les femmes." },
    { text: "Le droit à l'IVG devrait être inscrit dans la Constitution." },
    { text: "Le modèle de la famille traditionnelle doit rester protégé par la loi." },
    { text: "Une loi doit autoriser l'aide à mourir dans un cadre strict.", express: true },
    { text: "Le port du voile doit être interdit dans l'espace public." },
    { text: "Les réseaux sociaux menacent la démocratie et doivent être régulés." },
    { text: "L'égalité femmes-hommes doit passer par des quotas dans les entreprises." },
    { text: "La culture doit être financée à la hauteur de son rôle social." },
    { text: "Un service national obligatoire, y compris pour les femmes, est une bonne idée." },
  ],
};

export const QUESTIONS: Question[] = THEME_IDS.flatMap((themeId) =>
  RAW[themeId].map((raw, index) => ({
    id: `${themeId}-${index + 1}`,
    themeId,
    text: raw.text,
    express: raw.express === true,
  })),
);

export const EXPRESS_QUESTIONS = QUESTIONS.filter((q) => q.express);

export const QUESTION_MAP: Record<string, Question> = QUESTIONS.reduce(
  (acc, question) => {
    acc[question.id] = question;
    return acc;
  },
  {} as Record<string, Question>,
);

export function questionSet(mode: QuizMode): Question[] {
  return mode === "express" ? EXPRESS_QUESTIONS : QUESTIONS;
}

export function questionCountForMode(mode: QuizMode): number {
  return mode === "express" ? EXPRESS_QUESTIONS.length : QUESTIONS.length;
}

/**
 * Questions dans l'ordre de la session : mélangées à partir de la graine
 * (donc stables d'un rendu et d'un rechargement à l'autre). Sans graine, on
 * retombe sur l'ordre par thème.
 */
export function orderedQuestions(mode: QuizMode, seed: number | null): Question[] {
  const base = questionSet(mode);
  return seed == null ? base : shuffleWithSeed(base, seed);
}
