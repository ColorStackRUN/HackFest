"use client";

import { useEffect, useRef } from "react";

export default function BrickTransition() {
  const curtain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = curtain.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const boundaries = Array.from(
      document.querySelectorAll("main > section"),
    ).slice(1);
    let frame = 0;
    let previous = boundaries.map(
      (section) => section.getBoundingClientRect().top,
    );
    let lastPlay = 0;
    let finish: ReturnType<typeof setTimeout> | undefined;

    function hide() {
      element!.dataset.active = "false";
    }
    function update() {
      frame = 0;
      const height = window.innerHeight;
      const trigger = height * 0.55;
      const current = boundaries.map(
        (section) => section.getBoundingClientRect().top,
      );
      const crossed = current.findIndex(
        (top, index) =>
          (previous[index] > trigger && top <= trigger) ||
          (previous[index] < trigger && top >= trigger),
      );
      previous = current;
      // Only a real boundary crossing triggers motion, never scrolling within a section.
      if (preference.matches || document.activeElement?.tagName === "IFRAME") {
        hide();
        return;
      }
      if (crossed < 0 || Date.now() - lastPlay < 900) return;
      // Fast jumps past an offscreen boundary don't merit an overlay.
      if (current[crossed] < 160 || current[crossed] > height - 100) return;
      lastPlay = Date.now();
      element!.style.setProperty("--boundary-top", `${current[crossed]}px`);
      element!.dataset.active = "true";
      clearTimeout(finish);
      finish = setTimeout(hide, 720);
    }
    function schedule() {
      if (preference.matches) return;
      if (!frame) frame = requestAnimationFrame(update);
    }
    function preferenceChanged() {
      if (preference.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        hide();
      }
    }
    window.addEventListener("scroll", schedule, { passive: true });
    preference.addEventListener("change", preferenceChanged);
    return () => {
      window.removeEventListener("scroll", schedule);
      preference.removeEventListener("change", preferenceChanged);
      cancelAnimationFrame(frame);
      clearTimeout(finish);
    };
  }, []);

  return (
    <div
      className="brick-transition"
      ref={curtain}
      aria-hidden="true"
      data-active="false"
    >
      {Array.from({ length: 3 }, (_, row) => (
        <div className="transition-course" key={row}>
          {Array.from({ length: 12 }, (_, column) => (
            <span
              className={`transition-brick${(column + row * 2) % 5 === 2 ? " is-filled" : ""}`}
              key={column}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
