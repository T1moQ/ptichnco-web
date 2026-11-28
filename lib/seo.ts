import type { Metadata } from "next";

export const siteUrl = "https://ptich-n-co.ru";

// NODE_ENV is also "production" in preview builds. An unknown deployment
// stays private; non-Vercel hosting must set SITE_ENV before building.
export const isProductionSite =
  process.env.NODE_ENV === "production" &&
  (process.env.VERCEL_ENV ?? process.env.SITE_ENV) === "production";

// Next.js replaces nested metadata rather than deeply merging it.
// Spread these defaults into each page's Open Graph metadata.
export const sharedOpenGraph = {
  type: "website",
  locale: "ru_RU",
  siteName: "Ptich&Co",
} satisfies Metadata["openGraph"];
