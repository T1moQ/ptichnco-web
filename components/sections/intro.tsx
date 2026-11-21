import { Container } from "@/components/ui/container";

export function Intro() {
  return (
    // Background sampled from Bite Phrase.png; mobile spacing is adapted
    // without a separate mobile reference. Height follows the text content.
    <section
      aria-labelledby="intro-heading"
      className="bg-[#f7f5f0] py-20 text-center text-[#282828] sm:py-24 lg:py-36"
    >
      <Container className="flex max-w-[85.5rem] flex-col gap-(--space-large) px-6 lg:gap-8">
        <h2
          id="intro-heading"
          className="text-heading-1 lg:text-4xl lg:leading-11"
        >
          Пять домов, вдохновлённых традиционными алтайскими аилами.
        </h2>
        <p className="text-body lg:text-heading-2 lg:font-normal lg:tracking-normal">
          У каждого — свой характер, но все они созданы для спокойного отдыха,
          тишины и времени наедине с природой.
        </p>
      </Container>
    </section>
  );
}
