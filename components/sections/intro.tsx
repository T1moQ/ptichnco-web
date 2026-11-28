import { Container } from "@/components/ui/container";

type IntroProps = {
  title?: string;
  subtitle?: string;
  headingAs?: "h1" | "h2";
  headingId?: string;
  variant?: "home" | "compact";
};

export function Intro({
  title = "Пять домов, вдохновлённых традиционными алтайскими аилами.",
  subtitle = "У каждого — свой характер, но все они созданы для спокойного отдыха, тишины и времени наедине с природой.",
  headingAs: Heading = "h2",
  headingId = "intro-heading",
  variant = "home",
}: IntroProps = {}) {
  const compact = variant === "compact";

  return (
    // Both supplied Bite Phrase references share this background.
    // Height follows content, including wrapping at intermediate widths.
    <section
      aria-labelledby={headingId}
      className={`bg-[#f7f5f0] text-center ${
        compact
          ? "py-9 text-[#0c0c0d] lg:py-20"
          : "py-20 text-[#282828] sm:py-24 lg:py-36"
      }`}
    >
      <Container
        className={`flex max-w-[85.5rem] flex-col ${
          compact
            ? "gap-(--space-small) px-4 lg:px-6"
            : "gap-(--space-large) px-6 lg:gap-8"
        }`}
      >
        {/* Cabins PNGs: mobile heading 32/36, editorial subtitle 36/36;
            desktop uses the existing H1 and H2 sizes. */}
        <Heading
          id={headingId}
          className={
            compact
              ? "text-heading-1 text-[2rem] leading-9 tracking-[-0.04em] lg:text-heading-1 lg:font-bold"
              : "text-heading-1 lg:text-4xl lg:leading-11"
          }
        >
          {title}
        </Heading>
        <p
          className={
            compact
              ? "text-editorial-quote leading-9 lg:text-heading-2 lg:font-sans lg:font-normal lg:tracking-normal"
              : "text-body lg:text-heading-2 lg:font-normal lg:tracking-normal"
          }
        >
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
