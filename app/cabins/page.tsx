import type { Metadata, ResolvingMetadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { Container } from "@/components/ui/container";

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
    <SiteShell>
      <Container className="py-(--space-section)">
        <section aria-labelledby="cabins-heading">
          <h1 id="cabins-heading">Наши дома</h1>
          <p className="text-body mt-(--space-large)">{description}</p>
        </section>

        <section aria-labelledby="cabins-list-heading" className="mt-(--space-section)">
          <h2 id="cabins-list-heading">Каталог домов</h2>
          {/* TODO(cabins): approved house content and photo compositions. */}
          <p className="text-body mt-(--space-large)">
            Раздел в разработке. Здесь появятся фотографии и описания домов.
          </p>
        </section>

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
