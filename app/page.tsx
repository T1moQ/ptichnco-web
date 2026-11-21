import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Header overlay />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
