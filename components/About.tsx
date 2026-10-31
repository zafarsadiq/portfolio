import SectionTitle from "./SectionTitle";

const cards = [
  { title: "Based in", text: "Bangladesh" },
  { title: "Work style", text: "On-site, hybrid or remote" },
  { title: "Languages", text: "English" },
];

export default function About() {
  return (
    <section id="about" className="pb-16">
      <SectionTitle sub="I’m a web developer based in Bangladesh with a Computer Science degree from East West University. I started in 2010 at eBizzSol, worked across several teams in Dhaka, and went on to become Lead Web Developer at 79mplus, where I worked from 2017. I’m now looking for my next role.">
        Who am I?
      </SectionTitle>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-line bg-card p-5">
            <h3 className="mb-1.5 font-display text-[1.2rem] font-medium uppercase">{c.title}</h3>
            <p className="text-[.9rem] text-muted">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
