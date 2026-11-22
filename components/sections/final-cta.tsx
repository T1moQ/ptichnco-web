import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-[#f7f5f0] py-15 text-[#222] lg:py-19"
    >
      <Container className="flex max-w-5xl flex-col items-center justify-center gap-6 lg:flex-row">
        <h2
          id="final-cta-heading"
          className="text-heading-1 text-center text-2xl leading-[1.8125rem] font-bold lg:text-heading-1 lg:leading-(--text-heading-1--line-height)"
        >
          Хотите к нам?
        </h2>
        {/* TODO(booking): connect the verified «Бронируй Онлайн» URL/widget.
            No booking route or configured URL exists yet. Match Header's
            full-opacity disabled presentation without a fake click action. */}
        <Button
          disabled
          className="min-h-9 w-48 shrink-0 rounded-xl border-0 bg-(--header-control-color) px-4 py-1.5 text-xl leading-6 text-background disabled:opacity-100 lg:min-h-14 lg:py-4"
        >
          Забронировать
        </Button>
      </Container>
    </section>
  );
}
