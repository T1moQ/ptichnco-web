import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { HeaderMenu } from "./header-menu";

export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-10 w-full py-6 lg:py-(--space-medium)"
          : "w-full py-(--space-medium)"
      }
    >
      {/* Equal desktop side tracks keep the logo at the viewport centre. */}
      <Container className="grid min-h-14 max-w-none grid-cols-[minmax(0,1fr)_auto] items-center lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <HeaderMenu />

        <Link href="/" aria-label="Ptich&Co — главная" className="hidden lg:block">
          <Image
            src="/images/brand/logo.svg"
            alt="Ptich&Co"
            width={44}
            height={44}
            className="size-11 object-contain"
          />
        </Link>

        <button
          type="button"
          disabled
          className="text-ui-button inline-flex min-h-(--control-min-height) items-center justify-center justify-self-end rounded-2xl bg-(--header-control-color) px-4 text-background disabled:cursor-not-allowed disabled:opacity-100 lg:min-h-14 lg:min-w-48 lg:rounded-xl lg:px-6"
        >
          <span className="lg:hidden">БРОНЬ</span>
          <span className="hidden lg:inline">Забронировать</span>
        </button>
      </Container>
    </header>
  );
}
