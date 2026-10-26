import type { ReactNode } from "react";
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
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className={cn("flex-1", className)}>
        <div className={cn("mx-auto w-full px-5 sm:px-8", widths[width])}>{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
