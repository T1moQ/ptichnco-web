import { Container } from "@/components/ui/container";

export function TextTitlePage() {
  return (
    <section
      aria-labelledby="text-title-heading"
      className="bg-[#f7f5f0] py-20 text-center text-[#222] lg:py-15"
    >
      <Container className="max-w-7xl">
        {/* Three desktop lines; each phrase can wrap naturally on mobile.
            The supplied PNGs use 24/29 and 48/58px respectively. */}
        <h2
          id="text-title-heading"
          className="text-heading-1 text-2xl leading-[1.8125rem] font-bold lg:text-heading-1 lg:leading-[3.625rem]"
        >
          <span className="block">Мы сделали место не для того,</span>{" "}
          <span className="block">чтобы заполнить ваш день.</span>{" "}
          <span className="block">А чтобы освободить его.</span>
        </h2>
      </Container>
    </section>
  );
}
