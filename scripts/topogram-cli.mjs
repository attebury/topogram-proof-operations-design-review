import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function resolveTopogramCli() {
  if (process.env.TOPOGRAM_CLI) return process.env.TOPOGRAM_CLI;
  const installed = path.join(root, "node_modules", "@topogram", "cli", "src", "cli.js");
  if (fs.existsSync(installed)) return installed;
  throw new Error("Unable to find Topogram CLI. Run npm ci or set TOPOGRAM_CLI=/path/to/topogram/engine/src/cli.js.");
}

