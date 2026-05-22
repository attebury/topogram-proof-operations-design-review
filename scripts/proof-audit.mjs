import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "proof", "manifest.json"), "utf8"));
const cliPin = fs.readFileSync(path.join(root, "topogram-cli.version"), "utf8").trim();
assert.equal(cliPin, manifest.cliVersion, "topogram-cli.version must match proof manifest");

if (manifest.expectations?.noTopo) assert.equal(fs.existsSync(path.join(root, "topo")), false, "This checkpoint must not contain topo/");
if (manifest.expectations?.reactApp) assert.equal(fs.existsSync(path.join(root, "apps", "react-ops", "package.json")), true, "React app package is missing");

for (const artifact of manifest.requiredArtifacts || []) {
  const absolute = path.join(root, artifact.path);
  assert.equal(fs.existsSync(absolute), true, "Missing required artifact: " + artifact.path);
  const text = fs.readFileSync(absolute, "utf8");
  if (artifact.json) {
    const parsed = JSON.parse(text);
    for (const key of artifact.requiredKeys || []) assert.notEqual(parsed[key], undefined, artifact.path + " missing key " + key);
    if ((artifact.requiredKeys || []).includes("ok")) assert.equal(parsed.ok, true, artifact.path + " must have ok true");
  }
  for (const snippet of artifact.contains || []) assert.equal(text.includes(snippet), true, artifact.path + " missing snippet: " + snippet);
}

console.log("proof audit ok: " + manifest.currentStep);

