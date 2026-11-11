import SectionTitle from "./SectionTitle";
import { tools } from "@/lib/data";

type Tool = { name: string; path: string };

const aiTool: Tool = {
  name: "Generative AI",
  path: "M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z",
};

const groups: { title: string; names: string[] }[] = [
  { title: "CMS & e-commerce", names: ["WordPress", "WooCommerce", "Elementor", "Drupal"] },
  { title: "Backend", names: ["PHP", "Laravel", "CodeIgniter", "Python"] },
  { title: "Frontend", names: ["JavaScript", "React", "Next.js"] },
  { title: "DevOps & automation", names: ["Docker", "Git", "n8n"] },
  { title: "Generative AI", names: ["Generative AI"] },
];

const byName = new Map<string, Tool>([...tools, aiTool].map((t) => [t.name, t]));

export default function Tools() {
  return (
    <section id="skills" className="pb-16">
      <SectionTitle sub="The languages, platforms and tools I work with every day.">What I do</SectionTitle>
      <div className="space-y-7">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 font-display text-[1.05rem] font-medium uppercase tracking-wide text-muted">{g.title}</h3>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] sm:gap-3.5">
              {g.names.map((n) => byName.get(n)).filter((t): t is Tool => Boolean(t)).map((t) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}
