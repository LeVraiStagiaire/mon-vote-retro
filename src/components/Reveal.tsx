import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Décalage en millisecondes, pour composer une entrée en cascade. */
  delay?: number;
  /** Distance de glissement vertical, en pixels. */
  y?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Révèle son contenu à l'entrée dans le viewport : fondu + léger glissement.
 * Ne laisse jamais de contenu invisible si les animations sont désactivées.
 */
export function Reveal({ children, delay = 0, y = 16, className, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("transition-[opacity,transform] duration-700 ease-soft", className)}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translate3d(0, ${y}px, 0)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
