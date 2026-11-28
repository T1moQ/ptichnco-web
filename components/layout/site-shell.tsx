import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function SiteShell({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="relative flex flex-1 flex-col">
      <Header overlay={overlayHeader} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
