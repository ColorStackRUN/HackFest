"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, summary, [role='button']";

export default function BrickCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

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
      cursor!.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;

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
      if (
        event.target instanceof HTMLIFrameElement
      ) {
        hideCursor();
        return;
      }
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerSeen = true;
      cursor!.dataset.variant =
        event.target instanceof Element &&
        event.target.closest(INTERACTIVE_SELECTOR)
          ? "hammer"
          : "brick";
      cursor!.dataset.visible = "true";
      schedulePointer();
    }

    function placeBrick(event: PointerEvent) {
      if (
        !finePointer.matches ||
        reducedMotion.matches ||
        event.button !== 0
      )
        return;

      const placement = document.createElement("span");
      placement.className = "brick-placement";
      placement.style.left = `${event.clientX}px`;
      placement.style.top = `${event.clientY}px`;
      document.body.append(placement);
      placement.addEventListener("animationend", () => placement.remove(), {
        once: true,
      });
    }

    function hideCursor() {
      cursor!.dataset.visible = "false";
      clearSkyline();
    }

    function configurePointer() {
      document.documentElement.classList.toggle(
        "has-pixel-cursor",
        finePointer.matches,
      );
      if (!finePointer.matches) hideCursor();
      layoutDirty = true;
    }

    function invalidateMeasurements() {
      layoutDirty = true;
      if (pointerSeen) schedulePointer();
    }

    configurePointer();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", placeBrick, { passive: true });
    window.addEventListener("resize", invalidateMeasurements, { passive: true });
    window.addEventListener("scroll", invalidateMeasurements, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.documentElement.addEventListener("mouseleave", hideCursor);
    finePointer.addEventListener("change", configurePointer);
    reducedMotion.addEventListener("change", clearSkyline);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-pixel-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", placeBrick);
      window.removeEventListener("resize", invalidateMeasurements);
      window.removeEventListener("scroll", invalidateMeasurements);
      window.removeEventListener("blur", hideCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      finePointer.removeEventListener("change", configurePointer);
      reducedMotion.removeEventListener("change", clearSkyline);
      clearSkyline();
    };
  }, []);

  return (
    <div
      className="pixel-cursor"
      data-variant="brick"
      data-visible="false"
      ref={cursorRef}
      aria-hidden="true"
    >
      <span className="pixel-cursor__brick" />
      <span className="pixel-cursor__hammer" />
    </div>
  );
}
