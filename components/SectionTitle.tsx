export default function SectionTitle({ children, sub, wide }: { children: React.ReactNode; sub?: string; wide?: boolean }) {
  return (
    <>
      <h2 className="font-display text-[clamp(1.9rem,6vw,2.6rem)] font-medium uppercase leading-[1.1] after:mt-2.5 after:block after:h-1 after:w-14 after:rounded-sm after:bg-accent">
        {children}
      </h2>
      {sub && <p className={`mb-6 mt-3.5 text-muted ${wide ? "w-full" : "max-w-[620px]"}`}>{sub}</p>}
    </>
  );
}
