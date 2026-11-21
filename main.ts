import * as fs from "node:fs";
import * as path from "node:path";

// Entry text: 199 Unicode code points, written verbatim to /output/entry.txt (no trailing newline).
const text =
  "A single amber bead rests on the edge of a quiet pond, catching the faint light of dawn. Tiny ripples whisper outward, each one a soft breath, widening the circle until the water remembers its depth.";

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  console.error(`Entry text must be 1-280 code points, got ${codePoints}`);
  process.exit(1);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), text, "utf8");
console.log(`Wrote /output/entry.txt (${codePoints} code points)`);
