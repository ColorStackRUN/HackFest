"use client";

import { useEffect } from "react";

export default function BrickCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>(".hero");
    const skyline = document.querySelector<HTMLElement>(".cursor-skyline");
    const skylineBricks = skyline
      ? Array.from(skyline.querySelectorAll<HTMLElement>(".skyline-brick"))
      : [];
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let pointerSeen = false;
    let layoutDirty = true;
    let skylineRect: DOMRect | undefined;
    let heroRect: DOMRect | undefined;
    const brickCenters: number[] = [];

    function measureSkyline() {
      skylineRect = skyline?.getBoundingClientRect();
      heroRect = hero?.getBoundingClientRect();
      brickCenters.length = skylineBricks.length;
      for (let index = 0; index < skylineBricks.length; index += 1) {
        const brick = skylineBricks[index];
        brickCenters[index] = skylineRect
          ? skylineRect.left + brick.offsetLeft + brick.offsetWidth / 2
          : 0;
      }
      layoutDirty = false;
    }

    function clearSkyline() {
      for (const brick of skylineBricks) brick.classList.remove("is-assembled");
    }

    function renderPointer() {
      frame = 0;
      if (layoutDirty) measureSkyline();

      if (
        reducedMotion.matches ||
        !heroRect ||
        !skylineRect ||
        pointerX < heroRect.left ||
        pointerX > heroRect.right ||
        pointerY < heroRect.top ||
        pointerY > heroRect.bottom
      ) {
        clearSkyline();
        return;
      }

      for (let index = 0; index < skylineBricks.length; index += 1) {
        const horizontalDistance = Math.abs(pointerX - brickCenters[index]);
        skylineBricks[index].classList.toggle(
          "is-assembled",
          horizontalDistance < 190,
        );
      }
    }

    function schedulePointer() {
      if (!frame) frame = requestAnimationFrame(renderPointer);
    }

    function handlePointerMove(event: PointerEvent) {
      if (!finePointer.matches) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerSeen = true;
      schedulePointer();
    }

    function placeBrick(event: PointerEvent) {
      if (!finePointer.matches || reducedMotion.matches || event.button !== 0) return;
      if (event.target instanceof HTMLIFrameElement) return;

      const placement = document.createElement("span");
      placement.className = "brick-placement";
      placement.setAttribute("aria-hidden", "true");
      placement.style.left = `${event.clientX}px`;
      placement.style.top = `${event.clientY}px`;
      document.body.append(placement);
      placement.addEventListener("animationend", () => placement.remove(), {
        once: true,
      });
    }

    function invalidateMeasurements() {
      layoutDirty = true;
      if (pointerSeen) schedulePointer();
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", placeBrick, { passive: true });
    window.addEventListener("resize", invalidateMeasurements, { passive: true });
    window.addEventListener("scroll", invalidateMeasurements, { passive: true });
    reducedMotion.addEventListener("change", clearSkyline);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", placeBrick);
      window.removeEventListener("resize", invalidateMeasurements);
      window.removeEventListener("scroll", invalidateMeasurements);
      reducedMotion.removeEventListener("change", clearSkyline);
      clearSkyline();
    };
  }, []);

  return null;
}
