import { useEffect, useState } from "react";
import { initials, type Candidate } from "@/data/candidates";
import { cn } from "@/lib/utils";

const CACHE_PREFIX = "monvote:wiki:v1:";
const memoryCache = new Map<string, string | null>();

const SIZES = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "h-20 w-20 text-2xl",
  xl: "h-28 w-28 rounded-[2rem] text-4xl sm:h-36 sm:w-36",
};

function readCache(title: string): string | null | undefined {
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

function writeCache(title: string, value: string | null) {
  memoryCache.set(title, value);
  try {
    window.localStorage.setItem(CACHE_PREFIX + title, value ?? "none");
  } catch {
    // Cache indisponible : on garde uniquement la valeur en mémoire.
  }
}

interface CandidateAvatarProps {
  candidate: Candidate;
  size?: keyof typeof SIZES;
  className?: string;
  priority?: boolean;
}

/**
 * Photo récupérée à l'exécution via l'API Wikipedia (résumé d'article).
 * En cas d'échec, de blocage réseau ou de hors-ligne, un monogramme aux
 * couleurs du parti prend le relais : jamais de carré cassé.
 */
export function CandidateAvatar({ candidate, size = "md", className }: CandidateAvatarProps) {
  const [src, setSrc] = useState<string | null>(() => readCache(candidate.wikiTitle) ?? null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const cached = readCache(candidate.wikiTitle);
    if (cached !== undefined) {
      setSrc(cached);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 6000);

    fetch(
      `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(candidate.wikiTitle)}?redirect=true`,
      { signal: controller.signal },
    )
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { thumbnail?: { source?: string } } | null) => {
        if (cancelled) return;
        const url = data?.thumbnail?.source ?? null;
        writeCache(candidate.wikiTitle, url);
        setSrc(url);
      })
      .catch(() => {
        if (cancelled) return;
        writeCache(candidate.wikiTitle, null);
        setSrc(null);
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [candidate.wikiTitle]);

  const showImage = src && !failed;

  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-3xl bg-lavender ring-1 ring-inset ring-ink/8",
        SIZES[size],
        className,
      )}
      aria-hidden="true"
    >
      {showImage ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <span className="font-display text-primary/80">{initials(candidate)}</span>
      )}
    </span>
  );
}
