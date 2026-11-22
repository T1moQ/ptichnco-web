import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Booking } from "@/components/sections/booking";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { LodgesStickyScroll } from "@/components/sections/lodges-sticky-scroll";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Header overlay />
      <main>
        <Hero />
        <Booking />
        <Intro />
        <LodgesStickyScroll />
      </main>
      <Footer />
    </div>
  );
}
