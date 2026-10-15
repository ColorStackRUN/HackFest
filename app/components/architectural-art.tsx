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

export function Skyline() {
  return (
    <svg
      className="skyline"
      aria-hidden="true"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path d="M0 120V90h60V60h40v30h30V40h20V20h10v20h20v50h40V70h60v50h20V30h12V10h8v20h12v90h40V50h50v40h30V65h45v55h25V25h10V5h6v20h10v95h40V80h70V55h30v65h35V45h45v75h30V75h55V35h15V15h8v20h12v85h40V60h60v60H0z" />
    </svg>
  );
}
