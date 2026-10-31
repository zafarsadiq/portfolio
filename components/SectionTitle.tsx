export default function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <>
      <h2 className="font-display text-[clamp(1.9rem,6vw,2.6rem)] font-medium uppercase leading-[1.1] after:mt-2.5 after:block after:h-1 after:w-14 after:rounded-sm after:bg-accent">
        {children}
      </h2>
      {sub && <p className="mb-6 mt-3.5 max-w-[620px] text-muted">{sub}</p>}
    </>
  );
}
