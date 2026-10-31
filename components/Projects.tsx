import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="pb-16">
      <SectionTitle sub="Selected websites I led as team lead.">Projects</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-[18px]">
        {projects.map((p) => (
          <article
            key={p.domain}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:border-accent"
          >
            <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.domain}`} className="block bg-[#0d0e0f] px-3 pt-3">
              <div className="flex items-center gap-1.5 rounded-t-[10px] bg-[#e9e9ec] px-2.5 py-2">
                <i className="block h-2 w-2 rounded-full bg-[#ff5f57]" />
                <i className="block h-2 w-2 rounded-full bg-[#febc2e]" />
                <i className="block h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-0.5 text-[.68rem] text-[#555]">{p.domain}</span>
              </div>
              <Image
                src={p.image}
                alt={`Screenshot of ${p.domain}`}
                width={760}
                height={475}
                className="block aspect-[16/10] w-full object-cover object-top"
              />
            </a>
            <div className="flex flex-1 flex-col gap-1.5 px-5 pb-5 pt-[18px]">
              <span className="mb-1.5 inline-block w-fit rounded-md bg-accent px-[9px] py-0.5 text-[.72rem] font-semibold text-ink">Team Lead</span>
              <h3 className="font-display text-[1.25rem] font-medium uppercase">{p.name}</h3>
              <p className="flex-1 text-[.88rem] text-muted">{p.description}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-2 whitespace-nowrap text-[.88rem] font-semibold text-accent hover:underline">
                Visit {p.domain} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
