import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const forbiddenFragments = ["/" + "Users/", "/" + "private/tmp/", "/" + "home/runner/", "C:" + "\\Users\\"];
const ignoredDirs = new Set([".git", "node_modules", "dist", ".vite", "coverage"]);
const textExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".css", ".html", ".yml", ".yaml", ".gitignore", ".version"]);

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(absolute));
    if (entry.isFile()) files.push(absolute);
  }
  return files;
}

const offenders = [];
for (const file of walk(root)) {
  const ext = path.extname(file) || path.basename(file);
  if (!textExtensions.has(ext)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const fragment of forbiddenFragments) {
    if (text.includes(fragment)) offenders.push(path.relative(root, file) + " contains local path fragment " + fragment);
  }
}

if (offenders.length > 0) {
  console.error(offenders.join("\n"));
  process.exit(1);
}

console.log("path hygiene ok");

