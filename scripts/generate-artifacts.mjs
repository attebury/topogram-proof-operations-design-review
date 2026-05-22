import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { resolveTopogramCli } from "./topogram-cli.mjs";

const topogramCli = resolveTopogramCli();

function run(args, options = {}) {
  const result = spawnSync(process.execPath, [topogramCli, ...args], { encoding: "utf8", maxBuffer: 1024 * 1024 * 40 });
  if (result.status !== 0) throw new Error(["topogram " + args.join(" "), result.stdout, result.stderr].filter(Boolean).join("\n"));
  if (options.stdout) fs.writeFileSync(options.stdout, result.stdout);
  return result.stdout;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(filePath, contents) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, contents);
}

if (!fs.existsSync("topo")) {
  write("proof/artifacts/step-01-react-component-system/no-topo.json", JSON.stringify({ topoExists: false, reason: "Step 01 proves the maintained React app and component system before Topogram is introduced." }, null, 2) + "\n");
  process.exit(0);
}

run(["check", ".", "--json"], { stdout: "proof/artifacts/current-check.json" });
run(["sdlc", "check", ".", "--strict", "--json"], { stdout: "proof/artifacts/current-sdlc-check.json" });
run(["sdlc", "prep", "commit", ".", "--json"], { stdout: "proof/artifacts/current-sdlc-prep-commit.json" });
run(["query", "work-map", ".", "--json"], { stdout: "proof/artifacts/current-work-map.json" });
run(["query", "work-map", ".", "--format", "markdown"], { stdout: "proof/artifacts/current-work-map.md" });
run(["query", "ui-design-coverage", ".", "--json"], { stdout: "proof/artifacts/current-ui-design-coverage.json" });
run(["query", "ui-design-coverage", ".", "--format", "markdown"], { stdout: "proof/artifacts/current-ui-design-coverage.md" });
run(["emit", "ui-realization-report", ".", "--surface", "surface_operations_web_react", "--json"], { stdout: "proof/artifacts/current-ui-realization-report.json" });
run(["query", "slice", ".", "--screen", "intake_queue", "--surface", "surface_operations_web_react", "--detail", "compact", "--json"], { stdout: "proof/artifacts/current-screen-slice.json" });
run(["query", "slice", ".", "--screen", "intake_queue", "--surface", "surface_operations_web_react", "--detail", "compact", "--format", "markdown"], { stdout: "proof/artifacts/current-screen-slice.md" });
run(["query", "slice", ".", "--widget", "widget_data_grid", "--surface", "surface_operations_web_react", "--detail", "compact", "--json"], { stdout: "proof/artifacts/current-widget-slice.json" });
run(["query", "slice", ".", "--widget", "widget_data_grid", "--surface", "surface_operations_web_react", "--detail", "compact", "--format", "markdown"], { stdout: "proof/artifacts/current-widget-slice.md" });

console.log("generated proof artifacts");

