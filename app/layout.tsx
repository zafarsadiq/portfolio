import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/content";

const title = "Zafar Sadiq – Full-Stack Engineering Lead";
const description =
  "Portfolio of Zafar Sadiq, a full-stack engineering lead with 15+ years of experience delivering e-commerce, nonprofit and learning platforms for clients in the US and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title,
  description,
  openGraph: {
    type: "website",
    url: profile.site,
    title,
    description,
    images: [{ url: "/photo.jpg", width: 420, height: 420, alt: "Portrait of Zafar Sadiq" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/photo.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1e1f21",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: profile.site,
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
