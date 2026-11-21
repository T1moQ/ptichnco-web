import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const bookingDetails = [
  { label: "Заезд", value: "Выберите дату" },
  { label: "Выезд", value: "Выберите дату" },
  { label: "Гости", value: "Укажите количество" },
];

// TEMPORARY: presentation only, with no form, inputs or event handlers.
// Replace this component with the supported «Бронируй Онлайн» widget when
// its integration is agreed; Hero, Intro and the page order stay independent.
export function Booking() {
  return (
    <section
      aria-label="Бронирование"
      className="border border-[#d9d9d9] bg-background py-6"
    >
      <Container className="grid max-w-[78rem] gap-(--space-large) px-4 lg:grid-cols-4 lg:items-end lg:px-6">
        <dl className="grid min-w-0 gap-(--space-large) lg:col-span-3 lg:grid-cols-3">
          {bookingDetails.map(({ label, value }) => (
            <div key={label} className="min-w-0">
              <dt className="text-body text-base leading-5">{label}</dt>
              <dd className="mt-(--space-small) border-b-2 border-[#959595] px-4 py-(--space-small) text-base leading-6 text-[#767676] lg:border-[#ececec]">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <Button
          disabled
          className="min-h-12 w-full rounded-lg border-0 bg-(--header-control-color) px-4 text-xl leading-6 text-background lg:min-h-10 lg:text-base lg:font-normal"
        >
          Проверить даты
        </Button>
      </Container>
    </section>
  );
}
