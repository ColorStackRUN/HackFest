import type { CSSProperties } from "react";

export function BrickMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M2 6h12v8H2zM18 6h12v8H18zM2 18h7v8H2zM13 18h17v8H13z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CourseStack({ level }: { level: number }) {
  return (
    <svg className="course-stack" viewBox="0 0 150 78" aria-hidden="true">
      {Array.from({ length: level }, (_, row) =>
        Array.from({ length: 3 - row }, (_, column) => (
          <rect
            className="stack-unit"
            key={`${row}-${column}`}
            x={10 + column * 42 + row * 21}
            y={56 - row * 23}
            width="38"
            height="18"
          />
        )),
      )}
    </svg>
  );
}

type SkylineBrickStyle = CSSProperties & {
  "--drift-x": string;
  "--drift-y": string;
  "--assembly-delay": string;
};

const skylineColumns = [2, 3, 4, 6, 6, 4, 3, 5, 7, 7, 5, 3, 4, 3];
const skylineColumnOffsets = [0, 2, 5, 9, 15, 21, 25, 28, 33, 40, 47, 52, 55, 59];

export function CursorSkyline() {
  return (
    <div className="cursor-skyline" aria-hidden="true">
      {skylineColumns.flatMap((height, column) =>
        Array.from({ length: height }, (_, row) => {
          const index = skylineColumnOffsets[column] + row;
          const style = {
            gridColumn: column + 1,
            gridRow: 7 - row,
            "--drift-x": `${((column % 5) - 2) * 15}px`,
            "--drift-y": `${24 + (row % 3) * 14}px`,
            "--assembly-delay": `${(index % 7) * 18}ms`,
          } as SkylineBrickStyle;

          return <span className="skyline-brick" key={index} style={style} />;
        }),
      )}
    </div>
  );
}

