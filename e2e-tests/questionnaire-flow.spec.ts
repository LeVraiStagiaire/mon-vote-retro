import { test, expect } from "@playwright/test";

test("répondre au questionnaire express et obtenir un résultat", async ({ page }) => {
  await page.goto("/");

  // Accueil : le hero et le sélecteur d'époque
  await expect(page.getByRole("heading", { name: /Pour qui auriez-vous/ })).toBeVisible();

  // 1. Choix de l'époque : la carte de contexte de l'année apparaît
  await page.getByTestId("era-2012").click();
  await expect(page.getByTestId("era-2012")).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByTestId("era-context-compact")).toContainText("Contexte 2012");
  await expect(page.getByTestId("era-context-compact")).toContainText("Crise de l'euro");
  await expect(page.getByTestId("quiz-summary")).toContainText("Présidentielle 2012 · 20 questions");
  await expect(page.getByTestId("mode-express")).toHaveAttribute("aria-pressed", "true");

  // 2. Lancement du questionnaire
  await page.getByTestId("start-quiz").click();
  await expect(page).toHaveURL(/\/questionnaire/);
  await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");

  // 3. Le bandeau de contexte est ouvert sur la première question, puis replié
  const contextToggle = page.getByTestId("era-context-toggle");
  await expect(contextToggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(/Ce qui n'existait pas encore/)).toBeVisible();

  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
  await expect(contextToggle).toHaveAttribute("aria-expanded", "false");

  await contextToggle.click();
  await expect(contextToggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(/Ce qui n'existait pas encore/)).toBeVisible();
  await contextToggle.click();

  // 4. Une réponse de plus, puis rechargement : la session reprend au bon endroit
  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 3 / 20");

  await page.reload();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 3 / 20");
  await expect(page.getByText("10 % répondu")).toBeVisible();

  // 5. On termine les 18 questions restantes (écran de respiration à mi-parcours)
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

  // 6. Page de résultats : vainqueur, score, classement et contexte complet
  await expect(page).toHaveURL(/\/resultats/);
  await expect(page.getByTestId("winner-name")).toBeVisible();
  await expect(page.getByTestId("winner-score")).toContainText("%");
  await expect(page.getByTestId(/^ranking-row-/)).toHaveCount(10);
  await expect(
    page.getByText(/Questionnaire 2012 — 20 questions propres à ce scrutin/),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Le contexte de ce scrutin" })).toBeVisible();
  await expect(page.getByTestId("era-context-full")).toContainText("Contexte 2012");
  await expect(page.getByTestId("era-context-full")).toContainText("Ce qui n'existait pas encore");

  // 7. Le rejeu inter-époques a disparu : les questions diffèrent d'un scrutin à l'autre
  await expect(page.getByText("Rejouer mes réponses")).toHaveCount(0);
});

test("changer d'époque avec des réponses existantes demande une confirmation", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("era-2002").click();
  await page.getByTestId("start-quiz").click();

  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
  await page.getByTestId("answer-2").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 3 / 20");

  await page.getByRole("link", { name: /Quitter/ }).click();
  await expect(page).toHaveURL(/#\/$/);

  // Le changement d'époque passe par un dialogue de confirmation
  await page.getByTestId("era-2022").click();
  const dialog = page.getByTestId("change-year-dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("2 réponses");
  await page.getByTestId("change-year-confirm").click();
  await expect(dialog).toBeHidden();

  await expect(page.getByTestId("era-2022")).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByTestId("era-context-compact")).toContainText("Contexte 2022");
  await expect(page.getByTestId("quiz-summary")).toContainText("Présidentielle 2022 · 20 questions");

  // Les réponses de 2002 sont purgées, la session repart à zéro
  const stored = await page.evaluate(() =>
    JSON.parse(window.localStorage.getItem("monvote:session:v2") ?? "{}"),
  );
  expect(stored.year).toBe(2022);
  expect(Object.keys(stored.answers ?? {})).toHaveLength(0);
  expect(stored.status).toBe("idle");

  // Recliquer sur l'année courante ne déclenche rien
  await page.getByTestId("era-2022").click();
  await expect(page.getByTestId("change-year-dialog")).toHaveCount(0);

  await page.getByTestId("start-quiz").click();
  await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");
  await expect(page.getByTestId("question-text")).toBeVisible();
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
    () => JSON.parse(window.localStorage.getItem("monvote:session:v2") ?? "{}").seed,
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
      const raw = window.localStorage.getItem("monvote:session:v2") ?? "{}";
      const session = JSON.parse(raw);
      window.localStorage.setItem(
        "monvote:session:v2",
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
