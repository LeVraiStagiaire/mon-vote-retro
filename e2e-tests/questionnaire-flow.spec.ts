import { test, expect } from "@playwright/test";

test("répondre au questionnaire express et obtenir un résultat", async ({ page }) => {
  await page.goto("/");

  // Accueil : le hero et le sélecteur d'époque
  await expect(page.getByRole("heading", { name: /Pour qui auriez-vous/ })).toBeVisible();

  // 1. Choix de l'époque puis du format express (sélectionné par défaut)
  await page.getByTestId("era-2012").click();
  await expect(page.getByTestId("era-2012")).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByTestId("mode-express")).toHaveAttribute("aria-pressed", "true");

  // 2. Lancement du questionnaire
  await page.getByTestId("start-quiz").click();
  await expect(page).toHaveURL(/\/questionnaire/);
  await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");

  // 3. Deux réponses, puis rechargement : la session doit reprendre au bon endroit
  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 3 / 20");

  await page.reload();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 3 / 20");
  await expect(page.getByText("10 % répondu")).toBeVisible();

  // 4. On termine les 18 questions restantes (écran de respiration à mi-parcours)
  for (let question = 3; question <= 20; question += 1) {
    await page.getByTestId("answer-2").click();
    if (question === 10) {
      await expect(page.getByTestId("interlude-continue")).toBeVisible();
      await page.getByTestId("interlude-continue").click();
    }
    if (question < 20) {
      await expect(page.getByTestId("question-counter")).toHaveText(`Question ${question + 1} / 20`);
    }
  }

  // 5. Page de résultats : vainqueur, score et classement complet
  await expect(page).toHaveURL(/\/resultats/);
  await expect(page.getByTestId("winner-name")).toBeVisible();
  await expect(page.getByTestId("winner-score")).toContainText("%");
  await expect(page.getByTestId(/^ranking-row-/)).toHaveCount(10);

  // 6. Rejouer les mêmes réponses sur une autre époque
  await page.getByTestId("era-switch-2017").click();
  await expect(page).toHaveURL(/\/resultats/);
  await expect(page.getByText("En 2017, vous auriez voté pour")).toBeVisible();
  await expect(page.getByTestId("winner-name")).toBeVisible();
});

test("les pages de résultats sont protégées sans session", async ({ page }) => {
  await page.goto("/#/resultats");
  await expect(page).toHaveURL(/#\/$/);
  await expect(page.getByRole("heading", { name: /Pour qui auriez-vous/ })).toBeVisible();
  await expect(page.getByTestId("winner-name")).toHaveCount(0);
});

test("l'ordre des questions est mélangé mais stable pendant la session", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("era-2012").click();
  await page.getByTestId("start-quiz").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");

  // Une graine de mélange est tirée au sort au démarrage de la partie
  const seed = await page.evaluate(
    () => JSON.parse(window.localStorage.getItem("monvote:session:v1") ?? "{}").seed,
  );
  expect(typeof seed).toBe("number");
  expect(seed).toBeGreaterThan(0);

  // L'ordre ne change pas au rechargement (on retrouve la même question)
  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
  const secondQuestion = await page.getByTestId("question-text").innerText();
  await page.reload();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
  await expect(page.getByTestId("question-text")).toHaveText(secondQuestion);

  // Deux graines différentes donnent deux ordres différents
  const withSeed = async (value: number) => {
    await page.evaluate((nextSeed) => {
      const raw = window.localStorage.getItem("monvote:session:v1") ?? "{}";
      const session = JSON.parse(raw);
      window.localStorage.setItem(
        "monvote:session:v1",
        JSON.stringify({ ...session, answers: {}, index: 0, seed: nextSeed }),
      );
    }, value);
    await page.reload();
    await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");
    return page.getByTestId("question-text").innerText();
  };

  const orderA = await withSeed(424242);
  const orderB = await withSeed(987654321);
  expect(orderA).not.toBe(orderB);
});
