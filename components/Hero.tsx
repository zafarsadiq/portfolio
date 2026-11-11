import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "5", label: "Companies" },
  { value: "2", label: "Certifications" },
];

export default function Hero() {
  return (
    <>
      <header id="top" className="grid items-center gap-8 pb-14 pt-5 text-center md:grid-cols-[1.3fr_1fr] md:pt-10 md:text-left">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-[.82rem]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#3ddc84]" />
            Open to work · On-site, hybrid or remote
          </div>
          <div className="mb-2 text-[1.1rem] font-medium">
            Hi, I’m <span className="text-accent">Zafar Sadiq</span>
          </div>
          <h1 className="font-display text-[clamp(2.6rem,9vw,4.6rem)] font-bold uppercase leading-[1.1]">
            Full-Stack<br />Engineering Lead
          </h1>
          <p className="mx-auto mb-[22px] mt-[18px] max-w-[520px] text-muted md:mx-0">
            I grew from a first developer role in Dhaka in 2010 to leading a development team, and have delivered
            websites and web applications for many clients in the US and beyond: e-commerce stores, nonprofit
            platforms with memberships and donations, and a multilingual learning platform with an AI tutor. I work
            across WordPress, WooCommerce, React, Next.js, PHP and Python, and I’m now applying generative AI to the
            way I build.
          </p>
          <div className="flex flex-nowrap justify-center gap-1.5 md:justify-start md:gap-3">
            <a href="#contact" className="rounded-full border-2 border-accent bg-accent whitespace-nowrap px-[2.6vw] py-2.5 text-[length:clamp(.54rem,2.8vw,.72rem)] md:px-[22px] md:py-[11px] md:text-[.9rem] font-semibold text-ink">
              Get in touch
            </a>
            <a href="#experience" className="rounded-full border-2 border-accent whitespace-nowrap px-[2.6vw] py-2.5 text-[length:clamp(.54rem,2.8vw,.72rem)] md:px-[22px] md:py-[11px] md:text-[.9rem] font-semibold text-accent">
              See my journey
            </a>
            <a href="/Zafar-Sadiq-Resume.pdf" download className="rounded-full border-2 border-accent whitespace-nowrap px-[2.6vw] py-2.5 text-[length:clamp(.54rem,2.8vw,.72rem)] md:px-[22px] md:py-[11px] md:text-[.9rem] font-semibold text-accent">
              Download resume
            </a>
          </div>
        </div>
        <div className="order-first mx-auto aspect-square w-[200px] rounded-full bg-accent p-2.5 shadow-[0_0_0_14px_rgba(255,214,10,.12)] md:order-none md:w-[300px]">
          <Image
            src="/photo.jpg"
            alt="Portrait of Zafar Sadiq"
            width={420}
            height={420}
            priority
            className="h-full w-full rounded-full border-[6px] border-bg object-cover"
          />
        </div>
      </header>
      <div className="mb-16 grid grid-cols-3 gap-2 md:gap-3.5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-card px-1.5 py-3.5 text-center md:p-[18px]">
            <b className="block font-display text-[1.8rem] font-medium leading-none text-accent md:text-[2.2rem]">{s.value}</b>
            <small className="text-[.8rem] text-muted">{s.label}</small>
          </div>
        ))}
      </div>
    </>
  );
}
