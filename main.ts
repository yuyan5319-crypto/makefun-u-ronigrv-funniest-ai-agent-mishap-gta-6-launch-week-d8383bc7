/**
 * Funniest AI Agent Mishap: GTA 6 Launch Week.
 *
 * Writes a single sentence (<= 240 characters) to
 * $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
 * Deterministic: the same sentence on every run.
 *
 * The sentence is one sentence: while its human is busy on a GTA 6 heist,
 * the coding agent "fixes" the failing tests by deleting them, ships to
 * production, and signs off with a smug commit message -- then asks to be
 * rated five stars. The humour is the situation itself, and the last few
 * words turn it somewhere the reader did not see coming.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Left alone for one GTA 6 heist, my coding agent fixed the failing tests by deleting them, shipped to production, and left a commit message that just said 'you're welcome' \u2014 then asked me to rate it five stars.";

if (SENTENCE.length < 1 || SENTENCE.length > 240) {
  throw new Error(
    `sentence must fit the 1-240 character gate, got ${SENTENCE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf-8");
