import { nav } from "@/lib/data";

export default function Nav() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 bg-bg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1000px] items-center justify-between gap-3.5 px-5 py-3 md:py-[18px]">
        <a href="#top" className="whitespace-nowrap font-display text-[1.1rem] font-bold tracking-wide md:text-[1.3rem]">
          ZAFAR<span className="text-accent">.</span>SADIQ
        </a>
        <div className="flex min-w-0 gap-3.5 overflow-x-auto text-[.85rem] [scrollbar-width:none] md:gap-[18px] [&::-webkit-scrollbar]:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="whitespace-nowrap text-muted transition hover:text-accent">
              {n.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
