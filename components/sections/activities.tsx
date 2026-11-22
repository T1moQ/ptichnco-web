import { Container } from "@/components/ui/container";
import { activities } from "./activities-data";
import { ActivityCard } from "./activity-card";

export function Activities() {
  return (
    <section
      aria-labelledby="activities-heading"
      className="bg-[#f7f5f0] py-6 text-[#222] lg:py-16"
    >
      <Container className="max-w-[64rem] px-4 lg:max-w-[90rem] lg:px-6 xl:px-8 2xl:px-10">
        <h2
          id="activities-heading"
          className="text-heading-1 mx-auto max-w-sm text-center text-2xl leading-[1.8125rem] lg:max-w-none lg:text-4xl lg:leading-11"
        >
          <span className="block">
            А если всё-таки захочется приключений...
          </span>{" "}
          <span className="mt-2 block">вариантов масса</span>
        </h2>

        <ul className="mx-auto mt-12 grid max-w-sm gap-10 lg:max-w-[85rem] lg:auto-rows-[28rem] lg:grid-cols-3 lg:gap-4">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className={`min-w-0 ${activity.desktopColumnSpan === 2 ? "lg:col-span-2" : "lg:col-span-1"}`}
            >
              <ActivityCard activity={activity} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
