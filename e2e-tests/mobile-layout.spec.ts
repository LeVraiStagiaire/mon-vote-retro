import { test, expect, type Page } from "@playwright/test";

const MOBILE = { width: 375, height: 667 };
const SMALL = { width: 320, height: 640 };

/** Largeur qui dépasse la fenêtre (arrondie au pixel) — 0 si rien ne déborde. */
async function horizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    return Math.max(doc.scrollWidth, document.body.scrollWidth) - doc.clientWidth;
  });
}

/**
 * Éléments qui sortent réellement de l'écran : on ignore ceux qu'un ancêtre
 * rogne ou fait défiler (tableaux, carrousels), qui ne créent pas de débordement.
 */
async function elementsPastRightEdge(page: Page) {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const clipped = (el: HTMLElement) => {
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        const style = getComputedStyle(parent);
        if (style.overflowX !== "visible") return true;
        parent = parent.parentElement;
      }
      return false;
    };
    const offenders: string[] = [];
    for (const el of Array.from(document.body.querySelectorAll<HTMLElement>("*"))) {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.right > vw + 1 && !clipped(el)) {
        offenders.push(`${el.tagName.toLowerCase()}[${(el.dataset.testid ?? "").slice(0, 24)}]`);
      }
    }
    return offenders.slice(0, 5);
  });
}

test.describe("mobile", () => {
  test.use({ viewport: MOBILE });

  test("l'accueil reste lisible et navigable sur un écran de 375 px", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Pour qui auriez-vous/ })).toBeVisible();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
    expect(await elementsPastRightEdge(page)).toEqual([]);

    // Le menu burger ouvre la navigation, qui contient les trois rubriques
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    const nav = page.getByRole("navigation", { name: "Navigation mobile" });
    await expect(nav).toBeVisible();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
    await nav.getByRole("link", { name: "Méthode", exact: true }).click();
    await expect(page.getByRole("heading", { name: /Un outil pédagogique/ })).toBeVisible();

    // La page Méthode ne crée pas de débordement (son grand tableau défile seul)
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
  });

  test("le questionnaire répond au doigt sans débordement", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("era-2012").click();
    await page.getByTestId("start-quiz").click();
    await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");

    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
    expect(await elementsPastRightEdge(page)).toEqual([]);

    // Les cinq réponses tiennent dans la largeur de l'écran, avec une cible tactile suffisante
    for (const value of [-2, -1, 0, 1, 2]) {
      const button = page.getByTestId(`answer-${value}`);
      await expect(button).toBeVisible();
      const box = await button.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(MOBILE.width + 1);
      expect(box!.height).toBeGreaterThanOrEqual(44);
    }

    // Question suivante : la carte repart du haut et l'échelle commence dans l'écran
    await page.getByTestId("answer-2").click();
    await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
    await expect(page.getByTestId("question-text")).toBeInViewport();
    await expect(page.getByTestId("answer--2")).toBeInViewport();

    // L'échelle entière reste à portée d'un court défilement, contexte replié
    const scaleSpread = await page.evaluate(() => {
      const first = document.querySelector<HTMLElement>('[data-testid="answer--2"]')!;
      const last = document.querySelector<HTMLElement>('[data-testid="answer-2"]')!;
      return last.getBoundingClientRect().bottom - first.getBoundingClientRect().top;
    });
    expect(scaleSpread).toBeLessThan(1.2 * MOBILE.height);

    // Le déclencheur de contexte et son panneau restent dans l'écran
    const toggle = page.getByTestId("question-context-toggle");
    await expect(toggle).toBeInViewport();
    await toggle.click();
    const panel = page.getByTestId("question-context");
    await expect(panel).toBeVisible();
    const panelBox = await panel.boundingBox();
    expect(panelBox!.x).toBeGreaterThanOrEqual(0);
    expect(panelBox!.x + panelBox!.width).toBeLessThanOrEqual(MOBILE.width + 1);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);

    // Les boutons de navigation tiennent côte à côte
    await expect(page.getByRole("button", { name: "Précédent" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Passer" })).toBeVisible();
    expect(await elementsPastRightEdge(page)).toEqual([]);
  });

  test("les résultats restent lisibles sur mobile", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("era-2022").click();
    await page.getByTestId("start-quiz").click();

    // On attend le passage à la question suivante entre deux réponses :
    // deux clics trop rapprochés retombent dans la même fenêtre d'enregistrement.
    for (let question = 1; question <= 20; question += 1) {
      await page.getByTestId("answer-2").click();
      if (question === 10) {
        await expect(page.getByTestId("interlude-continue")).toBeVisible();
        await page.getByTestId("interlude-continue").click();
      }
      if (question < 20) {
        await expect(page.getByTestId("question-counter")).toHaveText(
          `Question ${question + 1} / 20`,
        );
      }
    }

    await expect(page).toHaveURL(/\/resultats/);
    await expect(page.getByTestId("winner-name")).toBeInViewport();
    await expect(page.getByTestId("winner-score")).toContainText("%");
    await expect(page.getByTestId(/^ranking-row-/)).toHaveCount(10);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
    expect(await elementsPastRightEdge(page)).toEqual([]);

    // Le classement et le partage restent atteignables en défilant
    const firstRow = page.getByTestId(/^ranking-row-/).first();
    await firstRow.scrollIntoViewIfNeeded();
    await expect(firstRow).toBeInViewport();
    await expect(page.getByTestId(/^ranking-row-/).last()).toBeAttached();
  });
});

test.describe("petits appareils", () => {
  test.use({ viewport: SMALL });

  test("le questionnaire tient sur 320 px de large", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("era-2002").click();
    await page.getByTestId("start-quiz").click();
    await expect(page.getByTestId("question-counter")).toHaveText("Question 1 / 20");

    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
    expect(await elementsPastRightEdge(page)).toEqual([]);

    await page.getByTestId("answer-2").click();
    await expect(page.getByTestId("question-counter")).toHaveText("Question 2 / 20");
    await expect(page.getByRole("button", { name: "Précédent" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Passer" })).toBeVisible();
    expect(await elementsPastRightEdge(page)).toEqual([]);
  });
});
