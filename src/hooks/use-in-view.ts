import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Détecte l'entrée d'un élément dans le viewport (une seule fois).
 * Sous `prefers-reduced-motion`, on considère l'élément visible immédiatement
 * pour ne jamais laisser de contenu masqué.
 */
export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}) {
  const { threshold = 0, rootMargin = "0px 0px -50px 0px" } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const element = ref.current;
    if (!element) return;

    const reduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return { ref, inView };
}
