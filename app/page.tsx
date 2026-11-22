import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Activities } from "@/components/sections/activities";
import { BitePhrase } from "@/components/sections/bite-phrase";
import { Booking } from "@/components/sections/booking";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { LodgesStickyScroll } from "@/components/sections/lodges-sticky-scroll";
import { TextTitlePage } from "@/components/sections/text-title-page";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Header overlay />
      <main>
        <Hero />
        <Booking />
        <Intro />
        <LodgesStickyScroll />
        <TextTitlePage />
        <BitePhrase />
        <Activities />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
