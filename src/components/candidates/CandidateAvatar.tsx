import { useEffect, useState } from "react";
import { initials, type Candidate } from "@/data/candidates";
import { readCachedThumbnail, resolveThumbnail } from "@/lib/wiki";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "h-20 w-20 text-2xl",
  xl: "h-28 w-28 rounded-[2rem] text-4xl sm:h-36 sm:w-36",
};

interface CandidateAvatarProps {
  candidate: Candidate;
  size?: keyof typeof SIZES;
  className?: string;
}

/**
 * Photo récupérée à l'exécution via l'API Wikipedia (résumé d'article).
 * En cas d'échec, de blocage réseau ou de hors-ligne, un monogramme aux
 * couleurs du parti prend le relais : jamais de carré cassé.
 */
export function CandidateAvatar({ candidate, size = "md", className }: CandidateAvatarProps) {
  const [src, setSrc] = useState<string | null>(
    () => readCachedThumbnail(candidate.wikiTitle) ?? null,
  );
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const cached = readCachedThumbnail(candidate.wikiTitle);
    if (cached !== undefined) {
      setSrc(cached);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();
    resolveThumbnail(candidate.wikiTitle, { signal: controller.signal, timeoutMs: 6000 }).then(
      (url) => {
        if (!cancelled) setSrc(url);
      },
    );

    return () => {
      cancelled = true;
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
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover object-top transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      ) : (
        <span className="font-display text-primary/80">{initials(candidate)}</span>
      )}
    </span>
  );
}
