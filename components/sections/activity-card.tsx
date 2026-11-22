import Image from "next/image";
import type { Activity } from "./activities-data";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <figure className="min-w-0 rounded-lg border border-[#d9d9d9] bg-background p-[0.9375rem]">
      {/* At 320px: a 288px card, 16px inset including the border, 256×248px photo. */}
      <div className="relative aspect-[32/31]">
        <Image
          src={activity.image}
          alt={activity.alt}
          fill
          sizes="(min-width: 1024px) 432px, (min-width: 416px) 352px, calc(100vw - 64px)"
          placeholder="blur"
          className="object-cover"
          style={{ objectPosition: activity.imagePosition }}
        />
      </div>
      <figcaption className="text-body mt-4 text-center text-base leading-5">
        {activity.title}
      </figcaption>
    </figure>
  );
}
