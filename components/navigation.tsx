"use client";

import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-6 px-4 py-2 rounded-full border border-border/30 bg-white/50 dark:bg-white/10 backdrop-blur-xl shadow-sm">
            <a href="/" className="flex items-center">
              <img src="/logo-2.svg" alt="Prep St." className="h-8 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#sat-demo"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                SAT Demo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://sat.prepst.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 text-white transition-all"
                style={
                  {
                    backgroundColor: "oklch(0.65 0.18 285)",
                    "--hover-bg": "oklch(0.58 0.18 285)",
                  } as React.CSSProperties & { "--hover-bg": string }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--hover-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "oklch(0.65 0.18 285)";
                }}
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
