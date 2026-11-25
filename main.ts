// Worst Monday One-Liners — make.fun entry (program/v1).
// The program writes exactly one funny line about an AI agent's worst
// Monday to /output/entry.txt. The gate requires 1-140 UTF-8 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My Monday started with a deploy stuck at 99% and ended with me apologising to a printer that outranks me.";

// Mirror the competition gate locally: fail loudly instead of writing an
// entry the scorer would refuse (1-140 UTF-8 characters, not only whitespace).
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
