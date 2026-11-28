import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { sharedOpenGraph } from "@/lib/seo";
import { Activities } from "@/components/sections/activities";
import { BitePhrase } from "@/components/sections/bite-phrase";
import { Booking } from "@/components/sections/booking";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { LodgesStickyScroll } from "@/components/sections/lodges-sticky-scroll";
import { TextTitlePage } from "@/components/sections/text-title-page";

const title = "Ptich&Co — отдых в Горном Алтае";
const description =
  "Уютные гостевые дома в Горном Алтае. Тишина, природа, горные пейзажи и комфортный отдых в Ptich&Co.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { ...sharedOpenGraph, title, description, url: "/" },
};

export default function Home() {
  return (
    <SiteShell overlayHeader>
      <Hero />
      <Booking />
      <Intro />
      <LodgesStickyScroll />
      <TextTitlePage />
      <BitePhrase />
      <Activities />
      <FinalCta />
    </SiteShell>
  );
}
