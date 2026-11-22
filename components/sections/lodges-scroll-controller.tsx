"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Only scroll / image readiness live on the client; content renders on the server. */
export function LodgesScrollController({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const desktop = window.matchMedia("(min-width: 64rem)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopDesktop: (() => void) | undefined;

    function startDesktop() {
      if (!root) return () => {};
      const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-lodge-image]"));
      const texts = Array.from(root.querySelectorAll<HTMLElement>("[data-lodge-text]"));
      const ready = new Set<number>();
      let current = 0;
      let desired = 0;
      let incoming: number | null = null;
      let frame = 0;
      let timer: ReturnType<typeof setTimeout> | undefined;
      let disposed = false;

      function finish() {
        if (incoming === null) return;
        clearTimeout(timer);
        const outgoing = layers[current];
        // Keep an opaque base beneath the incoming photo for the entire fade.
        // Hide it instantly only after the new layer is fully opaque.
        outgoing.style.transitionDuration = "0ms";
        outgoing.style.opacity = "0";
        outgoing.style.zIndex = "0";
        // Commit the hidden state before it can become the next incoming layer.
        void outgoing.offsetWidth;
        outgoing.style.removeProperty("transition-duration");
        current = incoming;
        incoming = null;
        layers[current].style.zIndex = "1";
        showDesired();
      }

      function showDesired() {
        if (disposed || incoming !== null || desired === current || !ready.has(desired)) return;
        incoming = desired;
        layers.forEach((layer, index) => {
          layer.setAttribute("aria-hidden", String(index !== incoming));
        });
        layers[incoming].style.zIndex = "2";
        layers[incoming].style.opacity = "1";
        if (reducedMotion.matches) {
          finish();
        } else {
          // transitionend is primary; fallback covers background tabs or a
          // cancelled CSS transition. Rapid scrolls queue only the latest target.
          timer = setTimeout(finish, 650);
        }
      }

      function measure() {
        frame = 0;
        // A deterministic centre crossing also handles reverse scroll, large
        // jumps and restored positions, without relying on observer entry order.
        desired = 0;
        const centre = window.innerHeight / 2;
        texts.forEach((text, index) => {
          if (text.getBoundingClientRect().top <= centre) desired = index;
        });
        showDesired();
      }

      function scheduleMeasure() {
        if (!frame) frame = requestAnimationFrame(measure);
      }

      function onTransitionEnd(event: TransitionEvent) {
        if (incoming !== null && event.target === layers[incoming] && event.propertyName === "opacity") finish();
      }

      function onMotionChange() {
        if (reducedMotion.matches) finish();
      }

      const removeLoadListeners = layers.map((layer, index) => {
        const image = layer.querySelector("img");
        if (!image) return () => {};
        async function onLoad() {
          if (!image || !image.complete || image.naturalWidth === 0) return;
          try {
            await image.decode();
          } catch {
            // Retain the current photo if the requested image cannot decode.
            return;
          }
          if (disposed) return;
          ready.add(index);
          showDesired();
        }
        image.addEventListener("load", onLoad);
        void onLoad();
        return () => image.removeEventListener("load", onLoad);
      });

      // Six measurements at most once per frame: no scroll library or continuous
      // animation loop. These listeners exist only in the desktop layout.
      window.addEventListener("scroll", scheduleMeasure, { passive: true });
      window.addEventListener("resize", scheduleMeasure);
      window.addEventListener("pageshow", scheduleMeasure);
      root.addEventListener("transitionend", onTransitionEnd);
      reducedMotion.addEventListener("change", onMotionChange);
      scheduleMeasure();

      return () => {
        disposed = true;
        cancelAnimationFrame(frame);
        clearTimeout(timer);
        removeLoadListeners.forEach((remove) => remove());
        window.removeEventListener("scroll", scheduleMeasure);
        window.removeEventListener("resize", scheduleMeasure);
        window.removeEventListener("pageshow", scheduleMeasure);
        root.removeEventListener("transitionend", onTransitionEnd);
        reducedMotion.removeEventListener("change", onMotionChange);
        layers.forEach((layer, index) => {
          layer.style.opacity = index === 0 ? "1" : "0";
          layer.style.zIndex = index === 0 ? "1" : "0";
          layer.setAttribute("aria-hidden", String(index !== 0));
        });
      };
    }

    function syncLayout() {
      stopDesktop?.();
      stopDesktop = desktop.matches ? startDesktop() : undefined;
    }

    syncLayout();
    desktop.addEventListener("change", syncLayout);
    return () => {
      desktop.removeEventListener("change", syncLayout);
      stopDesktop?.();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="mx-auto grid max-w-[90rem] gap-0 px-4 py-6 lg:grid-cols-[minmax(0,1.64fr)_minmax(0,1fr)] lg:gap-10 lg:p-16"
    >
      {children}
    </div>
  );
}
