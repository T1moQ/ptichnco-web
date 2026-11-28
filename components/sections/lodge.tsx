import { Container } from "@/components/ui/container";
import { NavigationLink } from "@/components/ui/navigation-link";
import type { LodgeData } from "./cabins-data";
import { LodgeGallery } from "./lodge-gallery";

export function Lodge({ lodge }: { lodge: LodgeData }) {
  const headingId = `lodge-${lodge.slug}-heading`;

  return (
    <section aria-labelledby={headingId} className="bg-[#f7f5f0] py-9 text-[#222] lg:py-16">
      <Container className="max-w-[90rem] px-4 lg:px-[4.625rem]">
        <header className="mb-3 flex flex-col gap-(--space-small) text-center lg:mb-5 lg:gap-1">
          <h2 id={headingId} className="text-heading-1 lg:text-heading-2 lg:font-normal lg:tracking-normal">
            {lodge.name}
          </h2>
          <p className="text-heading-2 font-normal tracking-normal text-[#797979] lg:text-xl lg:leading-7">
            {lodge.subtitle}
          </p>
        </header>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,380fr)_minmax(0,872fr)] lg:gap-10">
          <LodgeGallery name={lodge.name} photos={lodge.photos} />
          <div className="flex min-w-0 flex-col gap-(--space-large) text-center lg:col-start-1 lg:row-start-1 lg:text-right">
            {/* Local 16/19.2 and 22/34 measurements from the Lodge PNGs. */}
            <div className="text-body space-y-(--space-large) leading-[1.2] lg:text-[1.375rem] lg:leading-[2.125rem]">
              {lodge.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="self-center lg:self-end">
              <NavigationLink text="Подробнее о доме" href={`/cabins/${lodge.slug}`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
