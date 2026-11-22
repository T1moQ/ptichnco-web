import { Container } from "@/components/ui/container";
import { activities } from "./activities-data";
import { ActivityCard } from "./activity-card";

export function Activities() {
  return (
    <section
      aria-labelledby="activities-heading"
      className="bg-[#f7f5f0] py-6 text-[#222] lg:py-16"
    >
      <Container className="max-w-[64rem] px-4 lg:px-6">
        <h2
          id="activities-heading"
          className="text-heading-1 mx-auto max-w-sm text-center text-2xl leading-[1.8125rem] lg:max-w-none lg:text-4xl lg:leading-11"
        >
          <span className="block">
            А если всё-таки захочется приключений...
          </span>{" "}
          <span className="mt-2 block">вариантов масса</span>
        </h2>

        {/* Temporary desktop composition: a regular two-column grid.
            All six activities retain the mobile reference order and card proportions. */}
        <ul className="mx-auto mt-12 grid max-w-sm gap-10 lg:max-w-[60rem] lg:grid-cols-2 lg:gap-8">
          {activities.map((activity) => (
            <li key={activity.id} className="min-w-0">
              <ActivityCard activity={activity} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
