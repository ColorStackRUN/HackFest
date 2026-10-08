"use client";

import { useEffect } from "react";

// Enhance visible server-rendered content; nothing waits hidden for this observer.
export default function MotionEnhancer() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    function configure() {
      observer?.disconnect();
      if (query.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("has-entered");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        if (!element.classList.contains("has-entered"))
          observer?.observe(element);
      });
    }
    configure();
    query.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      query.removeEventListener("change", configure);
    };
  }, []);
  return null;
}
