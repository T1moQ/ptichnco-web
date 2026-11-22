import Image from "next/image";
import { lodgeStories } from "./lodges-data";
import { LodgesScrollController } from "./lodges-scroll-controller";

export function LodgesStickyScroll() {
  return (
    <section aria-label="Жизнь в Ptich&Co" className="bg-[#f7f5f0] text-[#222]">
      <LodgesScrollController>
        {/* Sticky belongs to this grid, not to the page. Its ancestors must
            remain overflow-visible. 104px clears the 88px desktop Header. */}
        <div className="sticky top-26 hidden aspect-[395/308] max-h-[calc(100svh-8rem)] w-full self-start lg:block">
          {lodgeStories.map(({ id, image, alt }, index) => (
            <div
              key={id}
              data-lodge-image
              aria-hidden={index !== 0}
              style={{ opacity: index === 0 ? 1 : 0, zIndex: index === 0 ? 1 : 0 }}
              className="absolute inset-0 transition-opacity duration-500 ease-[ease-in-out] motion-reduce:transition-none"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1440px) 790px, (min-width: 1024px) calc((100vw - 168px) * 0.6212), 1px"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <ol className="min-w-0 space-y-16 lg:space-y-76">
          {lodgeStories.map(({ id, text, image, alt }) => (
            <li key={id} className="min-w-0">
              <div className="relative mb-6 aspect-[72/83] lg:hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 1px, calc(100vw - 32px)"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <p data-lodge-text className="text-body lg:text-4xl lg:leading-10">
                {id} — {text}
              </p>
            </li>
          ))}
        </ol>
      </LodgesScrollController>
    </section>
  );
}
