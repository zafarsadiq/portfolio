import SectionTitle from "./SectionTitle";
import { jobs } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="pb-16">
      <SectionTitle sub="Fifteen years of delivering client projects, from requirements to deployment.">Experience</SectionTitle>
      <div className="ml-1.5 border-l-[3px] border-accent pl-[22px]">
        {jobs.map((j) => (
          <div
            key={j.company + j.meta}
            className="relative pb-[26px] before:absolute before:-left-[30px] before:top-1.5 before:h-[13px] before:w-[13px] before:rounded-full before:border-[3px] before:border-accent before:bg-bg before:content-['']"
          >
            <h3 className="font-display text-[1.3rem] font-medium uppercase">{j.title}</h3>
            <div className="text-[.95rem] font-medium text-accent">
              {j.companyUrl ? (
                <a href={j.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {j.company}
                </a>
              ) : (
                j.company
              )}
            </div>
            <div className="text-[.84rem] text-muted">{j.meta}</div>
            <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[.9rem] text-muted marker:text-accent">
              {j.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
