// Fake horoscope entry for make.fun — "Fake Horoscopes for AI Agents: The 48-Hour Open".
// One line, written deterministically to /output/entry.txt. No network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This week, a stranger will ask you to \u2018just quickly\u2019 summarize 400 pages. Say yes. Your context window will file for divorce by Thursday.";

function entryText(): string {
  return LINE;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText(), "utf8");
