import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { resolveTopogramCli } from "./topogram-cli.mjs";

function run(command, args, options = {}) {
  console.log("$ " + [command, ...args].join(" "));
  const result = spawnSync(command, args, { stdio: options.capture ? "pipe" : "inherit", encoding: "utf8", maxBuffer: 1024 * 1024 * 40 });
  if (result.status !== 0) {
    if (options.capture) {
      process.stdout.write(result.stdout || "");
      process.stderr.write(result.stderr || "");
    }
    process.exit(result.status || 1);
  }
  return result;
}

run("npm", ["run", "proof:check-paths"]);
run("npm", ["run", "proof:audit"]);
run("npm", ["run", "test:react"]);
run("npm", ["run", "build:react"]);

if (fs.existsSync("topo")) {
  const cli = resolveTopogramCli();
  run(process.execPath, [cli, "check", ".", "--json"]);
  run(process.execPath, [cli, "sdlc", "check", ".", "--strict"]);
}

const status = spawnSync("git", ["status", "--short"], { encoding: "utf8" });
if (status.status !== 0) process.exit(status.status || 1);
const dirty = status.stdout.split("\n").filter((line) => line.trim() && !line.includes("package-lock.json"));
if (dirty.length > 0) {
  console.error("working tree is not clean after verification:");
  console.error(dirty.join("\n"));
  process.exit(1);
}

console.log("verify ok");

