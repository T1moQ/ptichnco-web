import type { StaticImageData } from "next/image";
import duplexLivingRoom from "@/public/images/cabins/duplex/Фото 30.04.2026, 04 51 29.jpg";
import duplexBathroom from "@/public/images/cabins/duplex/Фото 30.04.2026, 04 53 27.jpg";
import duplexDome from "@/public/images/cabins/duplex/Фото 30.04.2026, 04 51 35.jpg";
import gzhelInterior from "@/public/images/cabins/gzhel/Фото 06.05.2026, 12 52 00.jpg";
import provenceBed from "@/public/images/cabins/provans/Фото 06.05.2026, 12 35 20.jpg";
import provenceTerrace from "@/public/images/cabins/provans/Фото 06.05.2026, 12 34 31.jpg";
import provenceCups from "@/public/images/cabins/provans/Фото 06.05.2026, 12 36 35.jpg";
import nizhniyInterior from "@/public/images/cabins/nizhniy/04A27CEE-F518-4515-9FD0-04DF22BC7633_1_201_a.jpeg";

export type LodgeComposition = "portraits-right" | "wide-left" | "stacked-below-right" | "wide-below-left";

export type LodgePhoto = {
  image: StaticImageData;
  alt: string;
  objectPosition?: string;
  desktopObjectPosition?: string;
};

export type LodgeData = {
  name: string;
  subtitle: string;
  description: readonly string[];
  photos: readonly [LodgePhoto, ...LodgePhoto[]];
  slug: string;
  composition?: LodgeComposition;
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
  {
    name: "Гжель",
    subtitle: "Белый и голубой.",
    description: ["Светлый уютный интерьер с характерными деталями в стиле гжель."],
    photos: [
      {
        image: gzhelInterior,
        alt: "Кровать с синим покрывалом и бело-голубые шторы в доме «Гжель»",
      },
    ],
    slug: "gzhel",
    composition: "wide-left",
  },
  {
    name: "Прованс",
    subtitle: "Лёгкость и простота.",
    description: ["Воздушный, спокойный интерьер с самым лучшим видом на луг и горы."],
    photos: [
      { image: provenceBed, alt: "Кровать и настенные светильники в доме «Прованс»" },
      {
        image: provenceTerrace,
        alt: "Обеденный стол у стеклянной двери на террасу в доме «Прованс»",
        objectPosition: "center 60%",
        desktopObjectPosition: "center 75%",
      },
      { image: provenceCups, alt: "Голубые и белые чашки на деревянной полке в доме «Прованс»" },
    ],
    slug: "provence",
    composition: "stacked-below-right",
  },
  {
    name: "Нижний",
    subtitle: "Современный и спокойный.",
    description: ["Лучший аил для любителей уединённого отдыха: вы будете видеть то же, что и жители других домов, а вас на террасе не увидит никто."],
    photos: [
      {
        image: nizhniyInterior,
        alt: "Деревянная лестница, белая дверь и обеденный стол в доме «Нижний»",
        objectPosition: "45% center",
        desktopObjectPosition: "center 80%",
      },
    ],
    slug: "nizhniy",
    composition: "wide-below-left",
  },
];
