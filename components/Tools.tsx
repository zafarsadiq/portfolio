import SectionTitle from "./SectionTitle";
import { tools } from "@/lib/data";

export default function Tools() {
  return (
    <section id="skills" className="pb-16">
      <SectionTitle sub="The languages, platforms and tools I work with every day.">What I do</SectionTitle>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] sm:gap-3.5">
        {tools.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-line bg-card px-1 pb-3 pt-4 text-center transition hover:-translate-y-1 hover:border-accent sm:px-2.5 sm:pb-4 sm:pt-5"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="mx-auto mb-3 h-[34px] w-[34px] fill-accent sm:h-[42px] sm:w-[42px]">
              <path d={t.path} />
            </svg>
            <span className="text-[.75rem] font-medium sm:text-[.85rem]">{t.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-[18px] max-w-[620px] text-muted">
        JavaScript and React.js are LinkedIn Skill Assessment passes. Python is verified by TestDome.
      </p>
    </section>
  );
}
