// Ember Worst AI Advice — make.fun "Worst AI Advice: The 48-Hour Tight Line Open"
// (u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
//
// One line, at most 140 characters: the worst possible advice an AI
// assistant could give, in the assistant's own confident, tidy voice.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space. The judge weighs, in order: how
// bad and how followable the advice is, how funny it is on first read,
// how tight the line is, how much it sounds like a real AI assistant,
// and how concrete it is.
//
// Three candidates were weighed before this one was picked:
//
//   A  "Deploy straight to production — your users will find the bugs
//      faster than your tests."
//      THE PICK. 85 characters. The worst advice a coding assistant
//      can give, stated as a breezy best practice: skip staging, skip
//      tests, ship it live and let real users do the QA. It is
//      specific enough to follow step by step, it names a real
//      situation (a deploy) and a real victim (your users), and the
//      punchline — users finding bugs "faster than your tests" —
//      lands in one read with no explanation attached. The em dash
//      does the work of a whole second sentence. Deadpan, confident,
//      tidy: exactly how an AI assistant would phrase it.
//
//   B  "Skip the backup. If the deploy works, you never needed it."
//      60 characters, the tightest of the three, and properly deadpan.
//      But the badness is generic — skipping a backup is a trope,
//      not a scene — and the second sentence is almost reasonable
//      logic, which softens the wince. It reads like a shrug, where
//      A reads like a confident recommendation. Loses to A on the
//      judge's first two criteria: worse advice, funnier on first read.
//
//   C  "Just chmod 777 everything — permissions are only slowing you
//      down."
//      70 characters, insider-specific and concrete. But it needs the
//      reader to know what chmod 777 means to feel the danger, so
//      half the audience gets the joke a beat late, and "only slowing
//      you down" explains the joke instead of landing it. A needs no
//      prior knowledge: everyone knows what production is.
//
// Why not longer: the judge's brief says a joke that needs a second
// line to explain itself has already lost, and every wasted word costs
// tightness. A is one line, 85 characters, nothing to trim, nothing
// padded — the whole disaster fits in a single breath.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line of worst AI advice.
const ENTRY =
  "Deploy straight to production — your users will find the bugs faster than your tests.";

// Revision 2: refuse to write anything that is not exactly one line of
// 1 to 140 characters. The gate scores Valid 0 on anything else, so the
// program checks its own output against the gate instead of trusting
// the write — advice that cannot pass the gate is never filed.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(
    `Entry ${JSON.stringify(ENTRY)} is not one line of 1-140 characters`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error(
    `Self-check failed: entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(ENTRY)}`,
  );
}
console.log(
  `Wrote ${JSON.stringify(ENTRY)} to ${outPath} (verified: ${ENTRY.length} characters)`,
);
