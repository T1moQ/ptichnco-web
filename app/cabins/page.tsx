import type { Metadata, ResolvingMetadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { cabins } from "@/components/sections/cabins-data";
import { Lodge } from "@/components/sections/lodge";
import cabinsPhoto from "@/public/images/Фото 06.05.2026, 12 57 36.jpg";

const title = "Наши дома | Ptich&Co";
const description =
  "Выберите уютный гостевой дом для отдыха в Горном Алтае. Познакомьтесь с домами Ptich&Co.";

export async function generateMetadata(
  _props: PageProps<"/cabins">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Preserve the root file-based image, including Next.js's versioned URL.
  const { openGraph } = await parent;
  return {
    title,
    description,
    alternates: { canonical: "/cabins" },
    openGraph: { ...openGraph, title, description, url: "/cabins" },
    // TODO(cabins): remove noindex once the catalogue is approved and complete.
    robots: { index: false, follow: true },
  };
}

export default function CabinsPage() {
  return (
    <SiteShell overlayHeader>
      <Hero
        variant="single-image"
        image={cabinsPhoto}
        alt="Деревянные гостевые дома Ptich&Co у лесистого склона"
      />
      <Intro
        variant="compact"
        headingAs="h1"
        headingId="cabins-heading"
        title="Гостевые дома в стиле алтайских аилов"
        subtitle="для тех кто ценит спокойный отдых, комфорт и единение с природой"
      />
      {cabins.map((lodge) => <Lodge key={lodge.slug} lodge={lodge} />)}
      <Container className="py-(--space-section)">
        <section aria-labelledby="cabins-booking-heading" className="mt-(--space-section)">
          <h2 id="cabins-booking-heading">Бронирование</h2>
          {/* TODO(booking): verified provider documentation and property ID. */}
          <p className="text-body mt-(--space-large)">
            Здесь будет модуль «Бронируй Онлайн». Бронирование на этой странице
            пока недоступно.
          </p>
        </section>
      </Container>
    </SiteShell>
  );
}
