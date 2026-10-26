import { useLayoutEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function PageShell({ children, className, width = "default" }: PageShellProps) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className={cn("flex-1", className)}>
        <div
          key={pathname}
          className={cn(
            "mx-auto w-full animate-fade-slide-in px-5 sm:px-8",
            widths[width],
          )}
        >
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
