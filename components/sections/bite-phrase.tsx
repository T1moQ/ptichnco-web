import Image from "next/image";
import { encodeStaticImage } from "@/lib/static-image";
import hammockPhoto from "@/public/images/attachment (3).jpeg";

export function BitePhrase() {
  return (
    <section
      aria-labelledby="bite-phrase-heading"
      className="relative isolate flex aspect-[80/91] items-start justify-center px-4 pt-[18.75vw] lg:aspect-[120/67] lg:items-center lg:p-6"
    >
      {/* Match the 320×364 and 1440×804 crops without modifying the original.
          The mobile crop retains the sky above and the person in the hammock. */}
      <Image
        src={encodeStaticImage(hammockPhoto)}
        alt="Человек отдыхает в гамаке с видом на горы"
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-[center_51%] lg:object-[center_76%]"
      />
      <h2
        id="bite-phrase-heading"
        className="text-heading-1 relative max-w-full rounded-2xl bg-[#cce9f5]/50 px-2 text-center text-2xl leading-[1.8125rem] text-[#222] lg:rounded-none lg:bg-transparent lg:p-0 lg:text-[clamp(3rem,4.7222vw,var(--text-display))] lg:leading-(--text-display--line-height) lg:font-bold lg:text-background"
      >
        <span className="block lg:inline">Ничего не делать —</span>{" "}
        <span className="block lg:inline">тоже план</span>
      </h2>
    </section>
  );
}
