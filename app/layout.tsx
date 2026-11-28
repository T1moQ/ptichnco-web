import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { isProductionSite, sharedOpenGraph, siteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ptich&Co",
  openGraph: sharedOpenGraph,
  twitter: { card: "summary_large_image" },
  robots: { index: isProductionSite, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
