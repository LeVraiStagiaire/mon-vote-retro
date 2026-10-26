import { test, expect } from "@playwright/test";

test("explorer les candidats par année et ouvrir une fiche", async ({ page }) => {
  await page.goto("/#/candidats");

  await expect(page.getByRole("heading", { name: "Les 61 candidats du 1er tour" })).toBeVisible();
  await expect(page.getByTestId(/^candidate-card-/)).toHaveCount(61);

  // Filtre par année
  await page.getByTestId("filter-year-2012").click();
  await expect(page.getByTestId(/^candidate-card-/)).toHaveCount(10);
  await expect(page.getByText("10 candidats", { exact: true })).toBeVisible();

  // Filtre par parti dans l'année sélectionnée
  await page.getByLabel("Parti").selectOption("PS");
  await expect(page.getByTestId(/^candidate-card-/)).toHaveCount(1);
  await expect(page.getByText("1 candidat", { exact: true })).toBeVisible();

  // Ouverture de la fiche candidat
  await page.getByTestId("candidate-card-hollande-2012").click();
  await expect(page).toHaveURL(/\/candidat\/hollande-2012$/);
  await expect(page.getByRole("heading", { name: "François Hollande" })).toBeVisible();
  await expect(page.getByText("Économie", { exact: true }).first()).toBeVisible();
});

test("les scores ne concernent que l'année du questionnaire joué", async ({ page }) => {
  // Une session express de 2012, avec assez de réponses pour un classement
  await page.goto("/");
  await page.getByTestId("era-2012").click();
  await page.getByTestId("start-quiz").click();
  for (let index = 0; index < 6; index += 1) {
    await page.getByTestId("answer-2").click();
    if (index < 5) {
      await expect(page.getByTestId("question-counter")).toHaveText(`Question ${index + 2} / 20`);
    }
  }

  await page.goto("/#/candidats");
  await expect(page.getByTestId("candidate-card-hollande-2012")).toContainText("Compatibilité");

  // Les candidats de 2022 ne sont pas notés : ils affichent « autre scrutin »
  await page.getByTestId("filter-year-2022").click();
  await expect(page.getByTestId(/^candidate-card-/)).toHaveCount(12);
  await expect(page.getByTestId("other-era-macron-2022")).toBeVisible();
  await expect(page.getByText("Autre scrutin", { exact: true })).toHaveCount(12);

  await page.getByTestId("candidate-card-macron-2022").click();
  await expect(page).toHaveURL(/\/candidat\/macron-2022$/);
  await expect(page.getByTestId("candidate-other-era")).toBeVisible();
  await expect(page.getByText("Votre compatibilité")).toHaveCount(0);
  await expect(page.getByTestId("question-text")).toHaveCount(0);
});
