import { SITE } from "@/config/site";

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    default: `${SITE.author} — Full Stack Developer`,
    template: `%s | ${SITE.author}`,
  },
  description:
    "Full Stack Developer specialising in React, Next.js, Node.js and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: SITE.author }],
  openGraph: {
    title: `${SITE.author} — Full Stack Developer`,
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js and modern web technologies.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.author} — Full Stack Developer`,
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js and modern web technologies.",
  },
};
