// Describe Your Ex in One Word — entry: "Exhibit".
// The verdict in one word: the ex is no longer a person in your story,
// just an exhibit — evidence, on display, of a judgment already made.
// That is the whole joke: "Ex-" does the pointing, "-hibit" does the filing.
// No trailing newline: the file holds the word and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Exhibit";

// OUTPUT_DIR lets the grader point the entry elsewhere; default is /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Exactly one word: non-blank, no whitespace anywhere, at most 111 chars.
if (!/^\S{1,111}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-111 characters");
}
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
