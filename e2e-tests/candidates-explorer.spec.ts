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
