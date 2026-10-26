import { test, expect } from "@playwright/test";

test("exporter le classement en image PNG", async ({ page }) => {
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
  await expect(page.getByTestId(/^ranking-row-/)).toHaveCount(12);

  const downloadPromise = page.waitForEvent("download", { timeout: 30000 });
  await page.getByTestId("export-ranking-image").click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe("monvote-classement-2022.png");
  expect(await download.path()).toBeTruthy();
  await expect(page.getByTestId("export-ranking-image")).toBeEnabled();
});
