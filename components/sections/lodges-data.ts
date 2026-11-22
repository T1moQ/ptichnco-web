import type { StaticImageData } from "next/image";
import facade from "@/public/images/stiky-scroll/attachment.jpeg";
import grounds from "@/public/images/stiky-scroll/Фото 06.05.2026, 12 44 06.jpg";
import interior from "@/public/images/stiky-scroll/Фото 30.04.2026, 04 54 43.jpg";
import benches from "@/public/images/stiky-scroll/Фото 30.04.2026, 04 58 27.jpg";
import flowers from "@/public/images/stiky-scroll/Фото 06.05.2026, 12 55 10.jpg";
import sauna from "@/public/images/stiky-scroll/Фото 30.04.2026, 04 58 56.jpg";

export type LodgeStory = {
  id: string;
  text: string;
  image: StaticImageData;
  alt: string;
};

export const lodgeStories: readonly LodgeStory[] = [
  {
    id: "01",
    text: "Пять домиков в стиле аилов — национального жилища алтайцев — на большой территории: много места, воздуха и пространства.",
    image: facade,
    alt: "Деревянный домик с белой дверью и террасой",
  },
  {
    id: "02",
    text: "Всё продумано для вашего уютного отдыха: гостиная со спальной и обеденной зонами, большая комната для гигиенических процедур с душем, тёплым полом и массажной зоной с катунскими камушками.",
    image: grounds,
    alt: "Дорожка между деревянными домиками у леса",
  },
  {
    id: "03",
    text: "Все аилы одинаковые, но каждый со своим «характером». Можно выбрать под настроение.",
    image: interior,
    alt: "Розовый диван и обеденный стол в деревянном интерьере",
  },
  {
    id: "04",
    text: "Тишина и панорамный вид на горы, луга и реку. Утром — завтрак на террасе, вечером — закат с чашечкой чая или бокалом вина под сырную тарелку от хозяйки.",
    image: benches,
    alt: "Деревянные скамьи и стол в зоне отдыха среди деревьев",
  },
  {
    id: "05",
    text: "Тишина. Никакой суеты и плотной застройки. Можно просто быть здесь в своём темпе.",
    image: flowers,
    alt: "Домики на фоне гор с размытыми розовыми цветами на переднем плане",
  },
  {
    id: "06",
    text: "Место, куда возвращаются. Не ради списка достопримечательностей, а ради самого ощущения быть здесь.",
    image: sauna,
    alt: "Деревянная баня-бочка с двумя креслами на площадке",
  },
];
