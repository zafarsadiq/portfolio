import SectionTitle from "./SectionTitle";
import { jobs } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="pb-16">
      <SectionTitle sub="Web development roles from 2010 onward.">Experience</SectionTitle>
      <div className="ml-1.5 border-l-[3px] border-accent pl-[22px]">
        {jobs.map((j) => (
          <div
            key={j.company + j.meta}
            className="relative pb-[26px] before:absolute before:-left-[30px] before:top-1.5 before:h-[13px] before:w-[13px] before:rounded-full before:border-[3px] before:border-accent before:bg-bg before:content-['']"
          >
            <h3 className="font-display text-[1.3rem] font-medium uppercase">{j.title}</h3>
            <div className="text-[.95rem] font-medium text-accent">{j.company}</div>
            <div className="text-[.84rem] text-muted">{j.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
