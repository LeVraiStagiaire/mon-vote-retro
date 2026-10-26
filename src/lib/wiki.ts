const CACHE_PREFIX = "monvote:wiki:v1:";
const memoryCache = new Map<string, string | null>();

/** `undefined` = jamais demandé, `null` = pas de photo connue. */
export function readCachedThumbnail(title: string): string | null | undefined {
  if (memoryCache.has(title)) return memoryCache.get(title) ?? null;
  try {
    const raw = window.localStorage.getItem(CACHE_PREFIX + title);
    if (raw == null) return undefined;
    const value = raw === "none" ? null : raw;
    memoryCache.set(title, value);
    return value;
  } catch {
    return undefined;
  }
}

export function writeCachedThumbnail(title: string, value: string | null): void {
  memoryCache.set(title, value);
  try {
    window.localStorage.setItem(CACHE_PREFIX + title, value ?? "none");
  } catch {
    // Cache indisponible : on garde uniquement la valeur en mémoire.
  }
}

/**
 * Récupère l'URL de la vignette Wikipédia.
 * - `string` : photo trouvée
 * - `null` : l'API répond mais sans photo (page inconnue incluse)
 * - `undefined` : échec réseau ou délai dépassé (résultat non mémorisé)
 */
export async function fetchThumbnail(
  title: string,
  options: { signal?: AbortSignal; timeoutMs?: number } = {},
): Promise<string | null | undefined> {
  const { signal, timeoutMs = 5000 } = options;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  const abort = () => controller.abort();
  signal?.addEventListener("abort", abort);

  try {
    const response = await fetch(
      `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}?redirect=true`,
      { signal: controller.signal },
    );
    if (!response.ok) return null;
    const data = (await response.json()) as { thumbnail?: { source?: string } };
    return data?.thumbnail?.source ?? null;
  } catch {
    return undefined;
  } finally {
    window.clearTimeout(timer);
    signal?.removeEventListener("abort", abort);
  }
}

export async function resolveThumbnail(
  title: string,
  options: { signal?: AbortSignal; timeoutMs?: number } = {},
): Promise<string | null> {
  const cached = readCachedThumbnail(title);
  if (cached !== undefined) return cached;

  const result = await fetchThumbnail(title, options);
  if (result === undefined) return null;
  writeCachedThumbnail(title, result);
  return result;
}
