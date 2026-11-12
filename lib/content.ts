export const profile = {
  name: "Zafar Sadiq",
  title: "Full-Stack Engineering Lead",
  site: "https://zafarsadiq.vercel.app",
  email: "2jafor@gmail.com",
  phone: "+880 1684 961425",
  phoneHref: "tel:+8801684961425",
  linkedin: "https://www.linkedin.com/in/md-zafar-sadiq",
  github: "https://github.com/zafarsadiq",
};

export type Job = {
  title: string;
  company: string;
  companyUrl?: string;
  meta: string;
  bullets: string[];
};

export const jobs: Job[] = [
  {
    title: "Lead Web Developer",
    company: "79mplus",
    companyUrl: "https://www.79mplus.com",
    meta: "Feb 2017 – Nov 2026 · Nearly 10 years",
    bullets: [
      "Owned the technical architecture and delivery of e-commerce, nonprofit and learning-platform websites for clients in the US and beyond, from estimate to launch.",
      "Reviewed code across WordPress/WooCommerce and React/Next.js projects to keep quality consistent from one project to the next.",
      "Acted as the main technical contact for clients, covering scoping, estimating and progress updates.",
      "Hired developers for the team and was responsible for the quality and on-time delivery of their work.",
    ],
  },
  {
    title: "Web Developer",
    company: "Wafi Solutions",
    meta: "Jun 2016 – Feb 2017 · Dhaka, Bangladesh",
    bullets: [
      "Built custom features and improved site performance for Wafilife, a leading online bookshop in Bangladesh.",
      "Took part in every stage of client projects: analyzing requirements, planning, estimating, development and deployment.",
    ],
  },
  {
    title: "Web Developer",
    company: "Infoldersoft",
    meta: "Aug 2014 – Jul 2015",
    bullets: ["Took part in every stage of client projects: analyzing requirements, planning, estimating, development and deployment."],
  },
  {
    title: "Web Developer",
    company: "The Jaxara IT Ltd",
    meta: "Apr 2011 – Dec 2013",
    bullets: ["Took part in every stage of client projects: analyzing requirements, planning, estimating, development and deployment."],
  },
  {
    title: "Web Developer",
    company: "eBizzSol",
    meta: "Nov 2010 – Mar 2011 · Dhaka, Bangladesh",
    bullets: ["Took part in every stage of client projects: analyzing requirements, planning, estimating, development and deployment."],
  },
];

export type Project = {
  name: string;
  domain: string;
  url: string;
  image: string;
  tag: string;
  description: string;
  role: string;
  stack?: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    name: "Vinyl Status",
    domain: "vinylstatus.com",
    url: "https://vinylstatus.com/",
    image: "/projects/vinylstatus.jpg",
    tag: "Team Lead",
    description: "Custom stickers, decals, magnets and T-shirts, with a free online proof before printing.",
    role: "Led the architecture and build of a headless storefront: a Next.js front end on the existing WooCommerce backend, with instant configurator pricing, a free online proof flow, a mobile-first layout and reviews built into product pages.",
    stack: ["Next.js", "WooCommerce REST API", "Edge deployment"],
    impact: "6,037 customer reviews averaging 4.91/5, 12+ product formats and 2-business-day production. Named top pick for weatherproof vinyl with fast USA production in a 2026 Speedway Media roundup.",
  },
  {
    name: "Arabic Lab",
    domain: "arabiclab.io",
    url: "https://www.arabiclab.io/",
    image: "/projects/arabiclab.jpg",
    tag: "Team Lead",
    description: "Learning platform teaching Arabic and the Qur’an to non-Arab Muslim children and families.",
    role: "Designed and built the platform end to end: the AI tutor, a five-skill learning path, a spaced-repetition word bank, a parent dashboard and the founding-family reservation flow.",
    stack: ["WordPress", "Custom plugin", "AI tutor", "3 interface languages"],
    impact: "Launched with 247 founding families reserved.",
  },
  {
    name: "Wafilife",
    domain: "wafilife.com",
    url: "https://www.wafilife.com/",
    image: "/projects/wafilife.jpg",
    tag: "Wafi Solutions",
    description: "Online bookshop for Islamic books and kids’ toys, with home delivery or pickup from the physical shop.",
    role: "Built custom features and improved site performance.",
    impact: "Named among the leading website-based bookshops in Bangladesh (The Business Standard, 2023).",
  },
];

export const education = [
  { tag: "2004", title: "East West University", text: "Bachelor’s degree, Computer Science" },
  { tag: "1998", title: "Notre Dame College", text: "Higher Secondary Certificate (H.S.C)" },
  { tag: "Jun 2026", title: "IBM", text: "Develop Generative AI Applications: Get Started", extra: "Credential ID E1MMXPCZUIZ8" },
  { tag: "Jan 2024", title: "TestDome", text: "Python certificate", link: { label: "View credential", href: "https://www.testdome.com/certificates/4684d91409cf48e58204bc363e281c75" } },
];
