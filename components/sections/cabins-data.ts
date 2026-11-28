import type { StaticImageData } from "next/image";
import duplexLivingRoom from "@/public/images/cabins/duplex/Фото 30.04.2026, 04 51 29.jpg";
import duplexBathroom from "@/public/images/cabins/duplex/Фото 30.04.2026, 04 53 27.jpg";
import duplexDome from "@/public/images/cabins/duplex/Фото 30.04.2026, 04 51 35.jpg";

export type LodgePhoto = {
  image: StaticImageData;
  alt: string;
};

export type LodgeData = {
  name: string;
  subtitle: string;
  description: readonly string[];
  photos: readonly [LodgePhoto, ...LodgePhoto[]];
  slug: string;
};

export const cabins: readonly LodgeData[] = [
  {
    name: "Дуплекс",
    subtitle: "Для двоих.",
    description: [
      "Самый просторный из наших аилов. Купол высотой 5,5 метров создаёт огромное воздушное пространство — тот случай, когда фотография не совсем передаёт ощущение внутри.",
      "Место, где вы проведёте романтический отпуск, свадебное путешествие, выходные без детей.",
    ],
    photos: [
      { image: duplexLivingRoom, alt: "Розовый диван и обеденный стол у окна в Дуплексе" },
      { image: duplexBathroom, alt: "Раковина и зеркало у окна в ванной Дуплекса" },
      { image: duplexDome, alt: "Деревянный купол и подвесной светильник в Дуплексе" },
    ],
    slug: "duplex",
  },
];
