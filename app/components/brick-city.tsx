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
  { text: "HackFest", unit: 8.5, y: 94 },
  { text: "2026", unit: 12.5, y: 226 },
].flatMap(({ text, unit, y }) => {
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

export default function BrickCity() {
  return (
    <div className="brick-city">
      <svg className="city-drawing" viewBox="0 0 540 400" aria-hidden="true">
        <g
          className="drawing-guides"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M32 36h20M32 36v20M506 36h-20M506 36v20M32 366h20M32 366v-20M506 366h-20M506 366v-20" />
          <path d="M52 346H482M488 78V330M483 78h10M483 330h10" />
        </g>
        <g className="brick-lettering">
          {lettering.map(({ x, y, width, red }, index) => (
            <g key={index} transform={`translate(${x} ${y})`}>
              <g className={`city-brick ${red ? "brick-red" : "brick-outline"}`}>
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
      </svg>
    </div>
  );
}
