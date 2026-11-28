import Image from "next/image";
import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTelegram,
} from "react-icons/tb";
import { Container } from "@/components/ui/container";

const navigationItems = [
  "Домики",
  "Чем заняться",
  "Галерея",
  "О нас",
  "Ретриты",
];

export function Footer() {
  return (
    <footer className="border-t border-[#d9d9d9] bg-background pt-10 pb-16 text-[#222] lg:pt-12 lg:pb-18">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/images/brand/logo.svg"
          alt="Ptich&Co"
          width={80}
          height={80}
          className="size-16 object-contain lg:size-20"
        />

        {/* Brand marks remain noninteractive until the owner supplies URLs. */}
        <ul aria-label="Социальные сети" className="mt-10 flex gap-3">
          <li>
            <TbBrandTelegram size={40} role="img" aria-label="Telegram" />
          </li>
          <li>
            <TbBrandFacebook size={40} role="img" aria-label="Facebook" />
          </li>
          <li>
            <TbBrandInstagram size={40} role="img" aria-label="Instagram" />
          </li>
        </ul>

        <nav aria-label="Навигация в подвале" className="mt-14 max-w-full">
          {/* Only the catalogue is a page; other destinations await implementation. */}
          <ul className="text-heading-3 flex flex-col items-center gap-4 text-[1.5rem] leading-[1.2] tracking-normal lg:flex-row lg:flex-wrap lg:justify-center">
            {navigationItems.map((label) => (
              <li key={label}>
                {label === "Домики" ? (
                  <Link href="/cabins" className="no-underline">{label}</Link>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <address className="text-body mt-16 flex max-w-full flex-col items-center text-[1.25rem] leading-6 not-italic lg:mt-15">
          <p className="max-w-56 lg:max-w-none">
            Кедровая 11, посёлок Турбаза Катунь, Республика Алтай, 649232
          </p>
          <p>
            Тел: <a href="tel:+79132396903">+7 913 239 69 03</a>
          </p>
          <p>
            <span className="block lg:inline">Email: </span>
            <a href="mailto:ptich.n.co@yandex.ru" className="no-underline">
              ptich.n.co@yandex.ru
            </a>
          </p>
        </address>
      </Container>
    </footer>
  );
}
