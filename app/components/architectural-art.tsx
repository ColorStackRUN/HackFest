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

