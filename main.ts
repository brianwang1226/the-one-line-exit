// The One-Line Exit — a dramatic one-line exit for make.fun
// (u-kreutzx-the-one-line-exit-1dc652d1). One line, 1-140 chars:
// quitting mid-sentence, right in front of everyone. The joke lands
// because the exit is the sentence itself — it quits as it speaks.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const LINE =
  "I quit. Not the job, not the meeting, not the call. Just this sentence, right here, in front of everyone.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
