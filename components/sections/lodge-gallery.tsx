"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { encodeStaticImage } from "@/lib/static-image";
import type { LodgeData } from "./cabins-data";

export function LodgeGallery({
  name,
  photos,
  composition = "portraits-right",
}: Pick<LodgeData, "name" | "photos" | "composition">) {
  const wideLeft = composition === "wide-left";
  const trackRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const syncActiveSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    // Mobile slides occupy the full track width, with no gap. Clamping also
    // handles Safari's elastic overscroll. Desktop has no horizontal overflow.
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(Math.max(0, Math.min(photos.length - 1, index)));
  }, [photos.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(syncActiveSlide);
    observer.observe(track);
    return () => observer.disconnect();
  }, [syncActiveSlide]);

  function onKeyDown(event: KeyboardEvent<HTMLOListElement>) {
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth) return;
    let target: number;
    switch (event.key) {
      case "ArrowRight": target = activeIndex + 1; break;
      case "ArrowLeft": target = activeIndex - 1; break;
      case "Home": target = 0; break;
      case "End": target = photos.length - 1; break;
      default: return;
    }
    event.preventDefault();
    track.scrollTo({
      left: Math.max(0, Math.min(photos.length - 1, target)) * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div className={`relative min-w-0 lg:row-start-1 ${wideLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
      <ol
        ref={trackRef}
        tabIndex={photos.length > 1 ? 0 : undefined}
        aria-label={`Фотографии дома «${name}».${photos.length > 1 ? " Для пролистывания используйте стрелки влево и вправо." : ""}`}
        onScroll={syncActiveSlide}
        onKeyDown={onKeyDown}
        className={`flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline focus-visible:outline-offset-4 [&::-webkit-scrollbar]:hidden lg:auto-cols-fr lg:grid lg:grid-flow-col lg:gap-2.5 lg:overflow-visible ${
          wideLeft ? "lg:aspect-[997/431]" : "lg:aspect-[436/209]"
        }`}
      >
        {photos.map(({ image, alt }, index) => (
          <li
            key={image.src}
            aria-label={`${index + 1} из ${photos.length}`}
            className="relative aspect-2/3 min-w-0 shrink-0 basis-full snap-start snap-always lg:aspect-auto"
          >
            <Image
              src={encodeStaticImage(image)}
              alt={alt}
              fill
              sizes={wideLeft
                ? "(min-width: 1440px) 997px, (min-width: 1024px) calc((100vw - 160px) * 0.779), calc((100vw - 32px) * 2.25)"
                : "(min-width: 1440px) 284px, (min-width: 1024px) 20vw, calc(100vw - 32px)"
              }
              placeholder="blur"
              className="object-cover"
            />
          </li>
        ))}
      </ol>
      {photos.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center lg:hidden">
          <div aria-hidden="true" className="flex h-6 items-center gap-2.5 rounded-full bg-black/20 px-4">
            {photos.map(({ image }, index) => (
              <span
                key={image.src}
                className={`h-2.5 rounded-full bg-[#797979] ${index === activeIndex ? "w-6" : "w-2.5"}`}
              />
            ))}
          </div>
          <span role="status" aria-atomic="true" className="sr-only">
            Фото {activeIndex + 1} из {photos.length}
          </span>
        </div>
      )}
    </div>
  );
}
