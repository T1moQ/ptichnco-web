import { Container } from "@/components/ui/container";
import { NavigationLink } from "@/components/ui/navigation-link";
import type { LodgeData } from "./cabins-data";
import { LodgeGallery } from "./lodge-gallery";

export function Lodge({ lodge }: { lodge: LodgeData }) {
  const headingId = `lodge-${lodge.slug}-heading`;
  const wideLeft = lodge.composition === "wide-left";
  const stackedBelow = lodge.composition === "stacked-below-right";
  const wideBelow = lodge.composition === "wide-below-left";
  const copyAbove = stackedBelow || wideBelow;

  return (
    <section aria-labelledby={headingId} className={`bg-[#f7f5f0] py-9 text-[#222] ${
      stackedBelow ? "lg:pt-16 lg:pb-3" : "lg:py-16"
    }`}>
      <Container className={`max-w-[90rem] px-4 ${wideLeft || copyAbove ? "lg:px-16" : "lg:px-[4.625rem]"}`}>
        <header className={`mb-3 flex flex-col gap-(--space-small) text-center lg:gap-1 ${
          stackedBelow ? "lg:mb-2.5 lg:text-right" : wideLeft || wideBelow ? "lg:mb-2.5 lg:text-left" : "lg:mb-5"
        }`}>
          <h2 id={headingId} className="text-heading-1 lg:text-heading-2 lg:font-normal lg:tracking-normal">
            {lodge.name}
          </h2>
          <p className="text-heading-2 font-normal tracking-normal text-[#797979] lg:text-xl lg:leading-7">
            {lodge.subtitle}
          </p>
        </header>
        {/* New full-width compositions reorder the same copy above the gallery
            on desktop; mobile keeps the gallery before the description. */}
        <div className={`grid gap-5 ${copyAbove
          ? "lg:grid-cols-1 lg:gap-6"
          : wideLeft
          ? "lg:grid-cols-[minmax(0,997fr)_minmax(0,283fr)] lg:gap-8"
          : "lg:grid-cols-[minmax(0,380fr)_minmax(0,872fr)] lg:gap-10"
        }`}>
          <LodgeGallery name={lodge.name} photos={lodge.photos} composition={lodge.composition} />
          <div className={`flex min-w-0 flex-col gap-(--space-large) text-center lg:row-start-1 ${
            copyAbove
              ? `lg:col-start-1 lg:gap-(--space-small) ${stackedBelow ? "lg:text-right" : "lg:text-left"}`
              : wideLeft ? "lg:col-start-2" : "lg:col-start-1 lg:text-right"
          }`}>
            {/* Local 16/19.2 and 22/34 measurements from the Lodge PNGs. */}
            <div className="text-body space-y-(--space-large) leading-[1.2] lg:text-[1.375rem] lg:leading-[2.125rem]">
              {lodge.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className={`self-center${wideBelow ? " lg:self-start" : wideLeft ? "" : " lg:self-end"}`}>
              <NavigationLink text="Подробнее о доме" href={`/cabins/${lodge.slug}`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
