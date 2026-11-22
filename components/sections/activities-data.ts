import type { StaticImageData } from "next/image";
import hikingPhoto from "@/public/images/activities/photo_2026-10-24_17-44-21.jpg";
import workshopPhoto from "@/public/images/activities/photo_2026-10-24_17-49-20.jpg";
import retreatPhoto from "@/public/images/activities/photo_2026-11-22_14-52-45.jpg";
import saunaPhoto from "@/public/images/activities/photo_2026-11-22_14-55-13.jpg";
import waterPhoto from "@/public/images/activities/photo_2026-11-22_14-56-48.jpg";
import excursionPhoto from "@/public/images/activities/photo_2026-11-22_14-56-41.jpg";

export type Activity = {
  id: string;
  title: string;
  image: StaticImageData;
  alt: string;
  imagePosition: string;
};

export const activities: readonly Activity[] = [
  {
    id: "hiking",
    title: "Хайкинг",
    image: hikingPhoto,
    alt: "Закат над горами и изгибом реки",
    imagePosition: "25% center",
  },
  {
    id: "workshops",
    title: "Мастер-классы",
    image: workshopPhoto,
    alt: "Картина на мольберте, краски и кисти на занятии живописью",
    imagePosition: "center",
  },
  {
    id: "retreats",
    title: "Ретриты",
    image: retreatPhoto,
    alt: "Памятник на берегу горной реки среди лесистых склонов",
    imagePosition: "center",
  },
  {
    id: "sauna",
    title: "Баня",
    image: saunaPhoto,
    alt: "Чайный стол в деревянной бане у окна с видом на горы",
    imagePosition: "center bottom",
  },
  {
    id: "water-activities",
    title: "Водные активности",
    image: waterPhoto,
    alt: "Женщина с удочкой и пойманной рыбой на берегу реки",
    imagePosition: "center",
  },
  {
    id: "excursions",
    title: "Экскурсии",
    image: excursionPhoto,
    alt: "Вертикальная каменная стела на лугу на фоне гор",
    imagePosition: "center",
  },
];
