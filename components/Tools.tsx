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
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:gap-3">
              {g.names.map((n) => byName.get(n)).filter((t): t is Tool => Boolean(t)).map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-line bg-card px-1 pb-2.5 pt-3 text-center transition hover:-translate-y-1 hover:border-accent sm:px-2 sm:pb-3 sm:pt-4"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mx-auto mb-2 h-[24px] w-[24px] fill-accent sm:h-[28px] sm:w-[28px]">
                    <path d={t.path} />
                  </svg>
                  <span className="text-[.7rem] font-medium sm:text-[.8rem]">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
