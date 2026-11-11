import SectionTitle from "./SectionTitle";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="pb-16">
      <SectionTitle sub="Formal education and recent certifications.">Education &amp; Certificates</SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {education.map((e) => (
          <div key={e.title} className="rounded-2xl border border-line bg-card p-5">
            <span className="mb-2.5 inline-block rounded-md bg-accent px-[9px] py-0.5 text-[.72rem] font-semibold text-ink">{e.tag}</span>
            <h3 className="mb-1.5 font-display text-[1.2rem] font-medium uppercase">{e.title}</h3>
            <p className="text-[.9rem] text-muted">
              {e.text}
              {e.extra && (<><br />{e.extra}</>)}
              {e.link && (
                <>
                  <br />
                  <a href={e.link.href} target="_blank" rel="noopener noreferrer" className="text-accent">{e.link.label}</a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
