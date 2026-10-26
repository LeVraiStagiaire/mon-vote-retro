import { fullName, initials, type Candidate } from "@/data/candidates";
import type { QuizMode } from "@/data/questions";
import { resolveThumbnail } from "./wiki";

export interface ExportRow {
  candidate: Candidate;
  /** Score de compatibilité de 0 à 1. */
  score: number;
}

export interface ExportRankingInput {
  year: number;
  mode: QuizMode;
  answered: number;
  total: number;
  ranking: ExportRow[];
}

const W = 1080;
const TOP = 40;
const CARD_X = 40;
const CARD_W = W - 2 * CARD_X;
const PAD = 56;
const ROW_H = 82;
const MAX_ROWS = 6;

const COLOR = {
  cream: "#FBFAF7",
  card: "#FFFFFF",
  ink: "#1B1830",
  muted: "#67637A",
  faint: "#9B97AB",
  primary: "#4F46E5",
  lavender: "#EDE9FE",
  track: "#EFECF6",
  bar: "#B7B1C9",
  border: "rgba(27, 24, 48, 0.08)",
};

const SERIF = '"Instrument Serif", Georgia, serif';
const SANS = '"Plus Jakarta Sans", system-ui, sans-serif';

const S = {
  brand: 34,
  gapBrand: 30,
  title: 112,
  divGap: 28,
  winner: 132,
  rowsLabel: 62,
  rest: 32,
  footer: 62,
};

function canvasHeight(rowCount: number, hasRest: boolean): number {
  const inner =
    S.brand +
    S.gapBrand +
    S.title +
    (S.divGap + 1 + S.divGap) +
    S.winner +
    (S.divGap + 1 + S.divGap) +
    S.rowsLabel +
    rowCount * ROW_H +
    (hasRest ? S.rest : 0) +
    S.footer;
  return TOP * 2 + PAD * 2 + inner;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radius: number,
) {
  const r = Math.min(radius, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function ellipsize(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let cut = text;
  while (cut.length > 1 && ctx.measureText(`${cut}…`).width > maxWidth) {
    cut = cut.slice(0, -1);
  }
  return `${cut.trimEnd()}…`;
}

function divider(ctx: CanvasRenderingContext2D, x: number, y: number, width: number) {
  ctx.save();
  ctx.strokeStyle = COLOR.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y + 0.5);
  ctx.lineTo(x + width, y + 0.5);
  ctx.stroke();
  ctx.restore();
}

function drawAvatar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  candidate: Candidate,
  image: HTMLImageElement | null,
) {
  ctx.save();
  roundRect(ctx, x, y, size, size, size / 2);
  ctx.clip();
  if (image) {
    const scale = Math.max(size / image.width, size / image.height);
    const drawW = image.width * scale;
    const drawH = image.height * scale;
    ctx.drawImage(image, x + (size - drawW) / 2, y, drawW, drawH);
  } else {
    ctx.fillStyle = COLOR.lavender;
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = COLOR.primary;
    ctx.font = `400 ${Math.round(size * 0.42)}px ${SERIF}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(initials(candidate), x + size / 2, y + size / 2 + size * 0.03);
  }
  ctx.restore();

  ctx.save();
  roundRect(ctx, x + 0.5, y + 0.5, size - 1, size - 1, (size - 1) / 2);
  ctx.strokeStyle = COLOR.border;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

async function ensureFonts(): Promise<void> {
  try {
    await Promise.all([
      document.fonts.load(`400 54px ${SERIF}`),
      document.fonts.load(`600 20px ${SANS}`),
      document.fonts.load(`700 22px ${SANS}`),
    ]);
    await document.fonts.ready;
  } catch {
    // On dessine avec les polices de repli si le chargement échoue.
  }
}

function loadImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = url;
  });
}

function siteLabel(): string {
  const { host, pathname } = window.location;
  const base = pathname.replace(/index\.html$/, "");
  return `${host}${base === "/" ? "" : base}`.replace(/\/$/, "");
}

export async function buildRankingImageBlob(input: ExportRankingInput): Promise<Blob> {
  await ensureFonts();

  const rows = input.ranking.filter((row) => row.score != null).slice(0, MAX_ROWS);
  if (rows.length === 0) throw new Error("Aucun score à exporter");

  const photos = await Promise.all(
    rows.map(async (row) => {
      const url = await resolveThumbnail(row.candidate.wikiTitle, { timeoutMs: 2500 });
      return url ? loadImage(url) : null;
    }),
  );

  const hidden = input.ranking.length - rows.length;
  const height = canvasHeight(rows.length, hidden > 0);
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(W * ratio);
  canvas.height = Math.round(height * ratio);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas indisponible");
  ctx.scale(ratio, ratio);

  // Fond crème + carte blanche
  ctx.fillStyle = COLOR.cream;
  ctx.fillRect(0, 0, W, height);

  ctx.save();
  roundRect(ctx, CARD_X, TOP, CARD_W, height - TOP * 2, 40);
  ctx.fillStyle = COLOR.card;
  ctx.fill();
  ctx.strokeStyle = COLOR.border;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();

  const x = CARD_X + PAD;
  const contentW = CARD_W - PAD * 2;
  let y = TOP + PAD;

  // ── Marque + millésime ──────────────────────────────────────────────────
  ctx.save();
  roundRect(ctx, x, y, 34, 34, 11);
  ctx.fillStyle = COLOR.primary;
  ctx.fill();
  ctx.fillStyle = COLOR.cream;
  ctx.font = `400 20px ${SERIF}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("M", x + 17, y + 18);
  ctx.restore();

  ctx.fillStyle = COLOR.ink;
  ctx.font = `700 19px ${SANS}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("MonVote Rétro", x + 46, y + 23);

  ctx.fillStyle = COLOR.muted;
  ctx.font = `600 15px ${SANS}`;
  ctx.textAlign = "right";
  ctx.fillText(`PRÉSIDENTIELLE ${input.year}`, x + contentW, y + 22);
  y += S.brand + S.gapBrand;

  // ── Titre ────────────────────────────────────────────────────────────────
  ctx.textAlign = "left";
  ctx.fillStyle = COLOR.ink;
  ctx.font = `400 54px ${SERIF}`;
  ctx.fillText(`Mon classement ${input.year}`, x, y + 44);

  ctx.fillStyle = COLOR.muted;
  ctx.font = `500 20px ${SANS}`;
  const modeLabel = input.mode === "express" ? "format express" : "format complet";
  ctx.fillText(
    `${input.answered} réponses sur ${input.total} · ${modeLabel} · ${input.ranking.length} candidats`,
    x,
    y + 80,
  );
  y += S.title;

  y += S.divGap;
  divider(ctx, x, y, contentW);
  y += 1 + S.divGap;

  // ── Candidat n°1 ────────────────────────────────────────────────────────-
  const winner = rows[0];
  drawAvatar(ctx, x, y + 6, 104, winner.candidate, photos[0]);

  ctx.textAlign = "left";
  ctx.fillStyle = COLOR.ink;
  ctx.font = `400 44px ${SERIF}`;
  ctx.fillText(
    ellipsize(ctx, fullName(winner.candidate), contentW - 250),
    x + 132,
    y + 52,
  );

  ctx.fillStyle = COLOR.muted;
  ctx.font = `500 19px ${SANS}`;
  ctx.fillText(ellipsize(ctx, winner.candidate.party, contentW - 250), x + 132, y + 82);

  ctx.textAlign = "right";
  ctx.fillStyle = COLOR.faint;
  ctx.font = `600 13px ${SANS}`;
  ctx.fillText("COMPATIBILITÉ", x + contentW, y + 18);

  ctx.fillStyle = COLOR.primary;
  ctx.font = `400 64px ${SERIF}`;
  ctx.fillText(`${Math.round(winner.score * 100)} %`, x + contentW, y + 76);

  y += S.winner;
  y += S.divGap;
  divider(ctx, x, y, contentW);
  y += 1 + S.divGap;

  // ── Classement ─────────────────────────────────────────────────────────
  ctx.textAlign = "left";
  ctx.fillStyle = COLOR.ink;
  ctx.font = `400 32px ${SERIF}`;
  ctx.fillText("Le classement", x, y + 30);

  ctx.textAlign = "right";
  ctx.fillStyle = COLOR.faint;
  ctx.font = `500 15px ${SANS}`;
  ctx.fillText("score de compatibilité", x + contentW, y + 30);
  y += S.rowsLabel;

  rows.forEach((row, index) => {
    const rowY = y + index * ROW_H;
    const top = index === 0;

    ctx.textAlign = "left";
    ctx.fillStyle = top ? COLOR.primary : COLOR.faint;
    ctx.font = `400 26px ${SERIF}`;
    ctx.fillText(String(index + 1), x + 2, rowY + 38);

    drawAvatar(ctx, x + 40, rowY + 8, 44, row.candidate, photos[index]);

    const textX = x + 96;
    ctx.fillStyle = COLOR.ink;
    ctx.font = `700 22px ${SANS}`;
    ctx.fillText(
      ellipsize(ctx, fullName(row.candidate), contentW - 96 - 96),
      textX,
      rowY + 32,
    );

    ctx.fillStyle = COLOR.muted;
    ctx.font = `500 15px ${SANS}`;
    ctx.fillText(ellipsize(ctx, row.candidate.party, contentW - 96 - 96), textX, rowY + 52);

    ctx.textAlign = "right";
    ctx.fillStyle = top ? COLOR.primary : COLOR.ink;
    ctx.font = `700 24px ${SANS}`;
    ctx.fillText(`${Math.round(row.score * 100)} %`, x + contentW, rowY + 34);

    const barY = rowY + 62;
    ctx.save();
    roundRect(ctx, x, barY, contentW, 6, 3);
    ctx.fillStyle = COLOR.track;
    ctx.fill();
    roundRect(ctx, x, barY, Math.max(8, contentW * Math.min(1, Math.max(0, row.score))), 6, 3);
    ctx.fillStyle = top ? COLOR.primary : COLOR.bar;
    ctx.fill();
    ctx.restore();
  });
  y += rows.length * ROW_H;

  // ── Reste du classement ────────────────────────────────────────────────
  if (hidden > 0) {
    ctx.textAlign = "left";
    ctx.fillStyle = COLOR.faint;
    ctx.font = `500 16px ${SANS}`;
    ctx.fillText(`+ ${hidden} autre${hidden > 1 ? "s" : ""} candidat${hidden > 1 ? "s" : ""}`, x, y + 20);
    y += S.rest;
  }

  // ── Pied de page ───────────────────────────────────────────────────────
  divider(ctx, x, y, contentW);
  ctx.textAlign = "left";
  ctx.fillStyle = COLOR.faint;
  ctx.font = `500 15px ${SANS}`;
  ctx.fillText("Outil indicatif, non affilié — positions éditorialisées", x, y + 30);

  ctx.textAlign = "right";
  ctx.fillText(siteLabel(), x + contentW, y + 30);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("PNG impossible à générer"));
    }, "image/png");
  });
}

export async function downloadRankingImage(input: ExportRankingInput): Promise<string> {
  const blob = await buildRankingImageBlob(input);
  const url = URL.createObjectURL(blob);
  const filename = `monvote-classement-${input.year}.png`;

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(url), 5000);
  return filename;
}
