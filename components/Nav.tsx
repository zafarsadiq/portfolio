"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 bg-bg/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-[1000px] items-center justify-between gap-3.5 px-5 py-3 md:py-[18px]">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="whitespace-nowrap font-display text-[1.1rem] font-bold tracking-wide md:text-[1.3rem]"
        >
          ZAFAR<span className="text-accent">.</span>SADIQ
        </a>

        {/* Desktop links */}
        <div className="hidden gap-[18px] text-[.85rem] md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="whitespace-nowrap text-muted transition hover:text-accent">
              {n.label}
            </a>
          ))}
        </div>

        {/* Mobile burger button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#f2f2f2] transition hover:text-accent md:hidden"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-t border-line bg-bg shadow-[0_12px_24px_rgba(0,0,0,.35)] md:hidden">
          <div className="mx-auto flex max-w-[1000px] flex-col px-5 py-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-[1rem] font-medium text-muted last:border-b-0 hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
