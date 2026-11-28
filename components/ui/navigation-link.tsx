import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type NavigationLinkProps = {
  text: string;
  href: string;
  variant?: "arrow" | "text";
};

export function NavigationLink({ text, href, variant = "arrow" }: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-(--control-min-height) items-center ${
        variant === "arrow"
          ? "text-ui gap-(--space-small) text-[#797979] no-underline hover:underline"
          : "text-body"
      }`}
    >
      {variant === "arrow" && (
        <ArrowUpRight size={20} strokeWidth={3} aria-hidden="true" className="shrink-0" />
      )}
      {text}
    </Link>
  );
}
