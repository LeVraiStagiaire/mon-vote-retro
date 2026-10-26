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
  await freshContext.close();
});
