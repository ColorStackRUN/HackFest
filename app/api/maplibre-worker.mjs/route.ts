import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const file = path.join(
    process.cwd(),
    "node_modules/maplibre-gl/dist/maplibre-gl-worker.mjs",
  );
  const worker = await readFile(file);

  return new Response(worker, {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
