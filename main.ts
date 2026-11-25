import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "ERROR 404: One sock has entered the void. I will not say which one, and I will not give it back. Please stop checking.";

function validateEntry(text: string): void {
  const lines = text.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be exactly 1 line, got ${lines.length}`);
  }
  if (lines[0].trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (lines[0].length < 1 || lines[0].length > 200) {
    throw new Error(
      `entry line must be 1-200 characters, got ${lines[0].length}`
    );
  }
}

validateEntry(line);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
