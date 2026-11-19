import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="pb-16">
      <SectionTitle sub="Selected work: what I built and what it achieved.">Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-5">
        {projects.map((p) => (
          <article
            key={p.domain}
            className="flex flex-row items-start gap-3 rounded-2xl border border-line bg-card p-3 transition hover:border-accent sm:gap-5 sm:p-4"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.domain}`}
              className="block w-[104px] flex-none overflow-hidden rounded-lg border border-line sm:w-[200px] md:w-[240px]"
            >
              <div className="hidden items-center gap-1.5 bg-[#e9e9ec] px-2 py-1.5 sm:flex">
                <i className="block h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                <i className="block h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                <i className="block h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                <span className="ml-1.5 flex-1 truncate rounded bg-white px-2 py-px text-[.6rem] text-[#555]">{p.domain}</span>
              </div>
              <Image
                src={p.image}
                alt={`Screenshot of ${p.domain}`}
                width={760}
                height={475}
                className="block aspect-[16/10] w-full object-cover object-top"
              />
            </a>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <span className="inline-block w-fit rounded-md bg-accent px-[9px] py-0.5 text-[.72rem] font-semibold text-ink">{p.tag}</span>
              <h3 className="font-display text-[1.1rem] font-medium uppercase sm:text-[1.25rem]">{p.name}</h3>
              <p className="text-[.88rem] text-muted sm:text-[.95rem]">{p.description}</p>
              <p className="text-[.88rem] text-muted sm:text-[.95rem]">
                <strong className="font-semibold text-[#f2f2f2]">My role: </strong>
                {p.role}
              </p>
              {p.stack && (
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md border border-line px-2 py-0.5 text-[.72rem] text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-[.88rem] text-muted sm:text-[.95rem]">
                <strong className="font-semibold text-[#f2f2f2]">Result: </strong>
                {p.impact}
              </p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-1 w-fit whitespace-nowrap text-[.88rem] font-semibold text-accent hover:underline">
                Visit {p.domain} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
