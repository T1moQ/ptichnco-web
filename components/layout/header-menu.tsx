"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { href: "/", label: "Главная" },
  { href: "/cabins", label: "Наши дома" },
  { href: "/#activities-heading", label: "Чем заняться" },
];

export function HeaderMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const Icon = open ? X : Menu;

  return (
    <div
      ref={rootRef}
      className="relative justify-self-start"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="header-navigation"
        onClick={() => setOpen(!open)}
        className="flex size-11 cursor-pointer items-center justify-center text-(--header-control-color) lg:size-14"
      >
        <Icon size={40} strokeWidth={2} aria-hidden="true" focusable="false" className="shrink-0 lg:size-14" />
      </button>
      <nav
        id="header-navigation"
        aria-label="Основная навигация"
        hidden={!open}
        className="absolute top-full left-0 z-20 mt-(--space-small) w-64 max-w-[calc(100vw-2*var(--container-gutter))] rounded-xl bg-background p-(--space-medium) text-foreground shadow-lg"
      >
        <ul className="text-body space-y-(--space-small)">
          {navigationItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex min-h-(--control-min-height) items-center px-(--space-small)"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
