import Image from "next/image";
import type { CSSProperties } from "react";
import type { Activity } from "./activities-data";
import "./activity-card.css";

export function ActivityCard({ activity }: { activity: Activity }) {
  // Account for the 1360px grid cap, responsive gutters and two 16px gaps.
  const desktopSizes = activity.desktopColumnSpan === 2
    ? "(min-width: 1424px) 902px, (min-width: 1280px) calc((200vw - 144px) / 3), (min-width: 1024px) calc((200vw - 112px) / 3)"
    : "(min-width: 1424px) 443px, (min-width: 1280px) calc((100vw - 96px) / 3), (min-width: 1024px) calc((100vw - 80px) / 3)";

  return (
    <figure
      className="activity-card min-w-0 rounded-lg border border-[#d9d9d9] bg-background p-[0.9375rem]"
      style={
        {
          "--activity-image-position": activity.imagePosition,
          "--activity-desktop-image-position": activity.desktopImagePosition,
        } as CSSProperties
      }
    >
      {/* At 320px: a 288px card, 16px inset including the border, 256×248px photo. */}
      <div className="activity-card__photo relative aspect-[32/31]">
        <Image
          src={activity.image}
          alt={activity.alt}
          fill
          sizes={`${desktopSizes}, (min-width: 416px) 352px, calc(100vw - 64px)`}
          placeholder="blur"
          className="activity-card__image object-cover"
          style={{ objectPosition: "var(--activity-image-position)" }}
        />
      </div>
      <figcaption className="activity-card__caption text-body mt-4 text-center text-base leading-5">
        {activity.title}
      </figcaption>
    </figure>
  );
}
