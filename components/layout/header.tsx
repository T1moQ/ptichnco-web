import { Menu } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="w-full py-(--space-medium)">
      {/* Equal desktop side tracks keep the logo at the viewport centre. */}
      <Container className="grid min-h-14 max-w-none grid-cols-[minmax(0,1fr)_auto] items-center lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        {/* Enable these native actions when menu/booking behaviour is defined. */}
        <button
          type="button"
          disabled
          aria-label="Открыть меню"
          className="flex size-11 items-center justify-center justify-self-start text-(--header-control-color) disabled:cursor-not-allowed disabled:opacity-100 lg:size-14"
        >
          <Menu
            size={40}
            strokeWidth={2}
            aria-hidden="true"
            focusable="false"
            className="shrink-0 lg:size-14"
          />
        </button>

        <Image
          src="/images/brand/logo.svg"
          alt="Ptich&Co"
          width={44}
          height={44}
          className="hidden size-11 object-contain lg:block"
        />

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
