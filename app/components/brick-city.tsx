"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";

// Seven-row lettering preserves true uppercase H/F and lowercase a/c/k/e/s/t.
const glyphs: Record<string, string[]> = {
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  a: ["00000", "00000", "01110", "00001", "01111", "10001", "01111"],
  c: ["00000", "00000", "01111", "10000", "10000", "10000", "01111"],
  k: ["10000", "10000", "10010", "10100", "11000", "10100", "10010"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  e: ["00000", "00000", "01110", "10001", "11111", "10000", "01111"],
  s: ["00000", "00000", "01111", "10000", "01110", "00001", "11110"],
  t: ["00000", "01000", "11110", "01000", "01000", "01000", "00110"],
  "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
  "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
  "6": ["01110", "10000", "10000", "11110", "10001", "10001", "01110"],
};

const lettering = [
  { text: "HackFest", unit: 8.5, y: 110 },
  { text: "2026", unit: 12.5, y: 242 },
].flatMap(({ text, unit, y }, line) => {
  // Center actual ink bounds (the lowercase t is narrower than its glyph cell).
  const lastColumn = Math.max(
    ...Array.from(text).flatMap((character, letter) =>
      glyphs[character].flatMap((cells) =>
        Array.from(cells).flatMap((cell, column) =>
          cell === "1" ? [letter * 6 + column] : [],
        ),
      ),
    ),
  );
  const start = (540 - ((lastColumn + 1) * unit - 1.5)) / 2;
  return Array.from(text).flatMap((character, letter) =>
    glyphs[character].flatMap((cells, row) =>
      Array.from(cells.matchAll(/1+/g)).flatMap((run) =>
        [0, 1].flatMap((course) => {
          const bricks = [];
          const left = run.index * unit;
          const right = left + run[0].length * unit;
          let cursor = left;
          let segment = 0;
          // Running bond: full two-cell bricks, with a half brick starting
          // alternate courses. Clip at the glyph edge, never across its gaps.
          while (cursor < right) {
            const length = Math.min(
              course === 1 && segment === 0 ? unit : unit * 2,
              right - cursor,
            );
            bricks.push({
              x: start + letter * 6 * unit + cursor,
              y: y + row * 16 + course * 8,
              width: length - 1.5,
              red: (letter * 2 + row + segment + course) % 3 === 0,
              delay:
                80 +
                ((line === 0 ? 27 : 13) - row * 2 - course) * 46 +
                letter * 12 +
                segment * 2,
              offset: segment % 2 ? -10 : 10,
            });
            cursor += length;
            segment += 1;
          }
          return bricks;
        }),
      ),
    ),
  );
});

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const motionSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
const serverSnapshot = () => false;

export default function BrickCity() {
  const [revision, setRevision] = useState(0);
  const [paused, setPaused] = useState(false);
  const lastBuild = useRef(0);
  const canReplay = useSyncExternalStore(
    subscribeMotion,
    motionSnapshot,
    serverSnapshot,
  );

  function rebuild() {
    if (!canReplay || paused || Date.now() - lastBuild.current < 2300) return;
    lastBuild.current = Date.now();
    setRevision((value) => value + 1);
  }

  return (
    <div className="brick-city" data-paused={paused}>
      <div className="drawing-meta" aria-hidden="true">
        <span>fig. 01</span>
        <span>hackfest / built together</span>
      </div>
      <div
        className="drawing-interaction"
        data-build={revision}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") rebuild();
        }}
      >
        <svg
          key={revision}
          className="city-drawing"
          viewBox="0 0 540 460"
          aria-hidden="true"
        >
          <g
            className="drawing-guides"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M32 52h20M32 52v20M506 52h-20M506 52v20M32 402h20M32 402v-20M506 402h-20M506 402v-20" />
            <path d="M52 382H482M488 94V366M483 94h10M483 366h10" />
          </g>
          <g className="brick-lettering">
            {lettering.map(({ x, y, width, red, delay, offset }, index) => (
              <g key={index} transform={`translate(${x} ${y})`}>
                <g
                  className={`city-brick ${red ? "brick-red" : "brick-outline"}`}
                  style={
                    {
                      "--brick-delay": `${delay}ms`,
                      "--brick-offset": `${offset}px`,
                    } as CSSProperties
                  }
                >
                  <path
                    className="brick-cap"
                    d={`M0 0 1.2 -1.2 ${width + 1.2} -1.2 ${width} 0Z`}
                  />
                  <path
                    className="brick-return"
                    d={`M${width} 0 ${width + 1.2} -1.2 ${width + 1.2} 5.3 ${width} 6.5Z`}
                  />
                  <rect className="brick-front" width={width} height="6.5" />
                </g>
              </g>
            ))}
          </g>
          <g
            className="drawing-annotations"
            fill="currentColor"
            fontSize="10"
            fontFamily="monospace"
          >
            <text x="60" y="397">
              brick by brick
            </text>
            <text x="405" y="397">
              newark, nj
            </text>
            <text x="68" y="70">
              every brick counts.
            </text>
          </g>
        </svg>
      </div>
      <div className="drawing-footer">
        <span aria-hidden="true">A city is what we build together.</span>
        <div className="replay-slot">
          {canReplay ? (
            <>
              <button
                className="replay-button"
                type="button"
                onClick={rebuild}
                disabled={paused}
              >
                <span aria-hidden="true">↻</span> Build it again
              </button>
              <button
                className="replay-button motion-toggle"
                type="button"
                aria-pressed={paused}
                aria-label="Pause hero animation"
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? "Resume motion" : "Pause motion"}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
