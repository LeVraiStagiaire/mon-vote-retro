import { test, expect } from "@playwright/test";

test("le lien de partage reconstruit les résultats dans un navigateur vierge", async ({
  page,
  browser,
}) => {
  // Un questionnaire entamé, puis une arrivée directe sur les résultats
  await page.goto("/");
  await page.getByTestId("era-2022").click();
  await page.getByTestId("start-quiz").click();

  for (let index = 0; index < 6; index += 1) {
    await page.getByTestId("answer-2").click();
    if (index < 5) {
      await expect(page.getByTestId("question-counter")).toHaveText(`Question ${index + 2} / 20`);
    }
  }

  await page.goto("/#/resultats");
  await expect(page.getByTestId("winner-name")).toBeVisible();
  const champion = await page.getByTestId("winner-name").innerText();

  // Copie du lien de partage (URL en mode hash, sans données personnelles)
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.bringToFront();
  await page.getByTestId("copy-share-link").click();
  const link = await page.evaluate(() => navigator.clipboard.readText());
  expect(link).toContain("#/resultats?s=");

  // Ouverture du lien dans un contexte totalement vierge (aucun stockage local)
  const freshContext = await browser.newContext();
  const freshPage = await freshContext.newPage();
  await freshPage.goto(link);
  await expect(freshPage.getByTestId("winner-name")).toHaveText(champion);
  await expect(freshPage.getByTestId(/^ranking-row-/)).toHaveCount(12);
  await expect(
    freshPage.getByText(/Questionnaire 2022 — 20 questions propres à ce scrutin/),
  ).toBeVisible();
  await freshContext.close();
});

test("un lien de partage de 2002 s'ouvre aussi dans un navigateur vierge", async ({
  page,
  browser,
}) => {
  await page.goto("/");
  await page.getByTestId("era-2002").click();
  await page.getByTestId("start-quiz").click();

  for (let index = 0; index < 6; index += 1) {
    await page.getByTestId("answer-2").click();
    if (index < 5) {
      await expect(page.getByTestId("question-counter")).toHaveText(`Question ${index + 2} / 20`);
    }
  }

  await page.goto("/#/resultats");
  await expect(page.getByTestId("winner-name")).toBeVisible();

  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.bringToFront();
  await page.getByTestId("copy-share-link").click();
  const link = await page.evaluate(() => navigator.clipboard.readText());

  const freshContext = await browser.newContext();
  const freshPage = await freshContext.newPage();
  await freshPage.goto(link);
  await expect(
    freshPage.getByText(/Questionnaire 2002 — 20 questions propres à ce scrutin/),
  ).toBeVisible();
  await expect(freshPage.getByTestId("winner-name")).toBeVisible();
  await expect(freshPage.getByTestId(/^ranking-row-/)).toHaveCount(16);
  await freshContext.close();
});

test("un lien de l'ancienne version affiche un message dédié", async ({ page }) => {
  const legacyPayload = ["v1", "2002", "express", "-".repeat(100), "1".repeat(10)].join("~");
  const legacyToken = Buffer.from(legacyPayload, "utf8").toString("base64url");

  await page.goto(`/#/resultats?s=${legacyToken}`);
  await expect(
    page.getByRole("heading", { name: "Ce lien vient d'une ancienne version" }),
  ).toBeVisible();
  await expect(page.getByTestId("winner-name")).toHaveCount(0);
});
