import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// written by the agent in this session
const line = "Warning: this human replays conversations from 2014 at 3am and has no mute button. Keep distant.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
