import { profile } from "@/lib/content";

const icons = {
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2L12 12.6 19.4 7H4.6zM4 17h16V9.3l-8 6-8-6V17z",
  phone: "M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z",
  download: "M12 3v10.2l3.6-3.6L17 11l-5 5-5-5 1.4-1.4 3.6 3.6V3zM5 19h14v2H5z",
  linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.55h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4z",
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

function Btn({ href, icon, children, external, download }: { href: string; icon: string; children: React.ReactNode; external?: boolean; download?: boolean }) {
  return (
    <a
      href={href}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-ink bg-ink p-3 text-[.9rem] font-semibold text-accent min-[860px]:gap-2.5 min-[860px]:px-[22px] min-[860px]:py-[11px]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] flex-none fill-current">
        <path d={icon} />
      </svg>
      <span className="sr-only min-[860px]:not-sr-only">{children}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="rounded-3xl bg-accent px-6 py-9 text-center text-ink">
      <h2 className="font-display text-[clamp(1.9rem,6vw,2.6rem)] font-medium uppercase leading-[1.1] after:mx-auto after:mt-2.5 after:block after:h-1 after:w-14 after:rounded-sm after:bg-ink">
        Let’s work together
      </h2>
      <p className="mx-auto mb-[22px] mt-3.5 max-w-[480px]">
        I’m open to on-site, hybrid and remote roles. Reach me by email, phone, LinkedIn or GitHub.
      </p>
      <div className="flex flex-row flex-nowrap items-center justify-center gap-2.5 min-[860px]:gap-3">
        <Btn href="/Zafar-Sadiq-Resume.pdf" icon={icons.download} download>Download resume</Btn>
        <Btn href={`mailto:${profile.email}`} icon={icons.mail}>{profile.email}</Btn>
        <Btn href={profile.phoneHref} icon={icons.phone}>{profile.phone}</Btn>
        <Btn href={profile.linkedin} icon={icons.linkedin} external>LinkedIn</Btn>
        {profile.github ? (
          <Btn href={profile.github} icon={icons.github} external>GitHub</Btn>
        ) : null}
      </div>
    </section>
  );
}
