
// scripts/validate-assets.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function fail(msg) {
  console.error(`\n❌ Asset validation failed:\n- ${msg}\n`);
  process.exit(1);
}

function assertPublicFileExists(publicPath) {
  // publicPath must start with "/"
  const diskPath = path.join(repoRoot, "public", publicPath.replace(/^\//, ""));
  if (!fs.existsSync(diskPath)) {
    fail(`Missing file on disk for manifest path: ${publicPath}\nExpected: ${diskPath}`);
  }
}

async function main() {
  const assetsModulePath = path.join(repoRoot, "lib", "assets.js");
  if (!fs.existsSync(assetsModulePath)) fail("Missing lib/assets.js");

  const mod = await import(pathToFileUrl(assetsModulePath).href);

  const ICONS = mod.ICONS || {};
  for (const [key, p] of Object.entries(ICONS)) {
    if (typeof p !== "string") fail(`ICONS.${key} must be a string`);
    if (!p.startsWith("/")) fail(`Manifest path must start with "/": ${p}`);
    if (!p.startsWith("/icons/")) fail(`Manifest path must live under /icons/: ${p}`);
    assertPublicFileExists(p);
  }

  console.log("✅ Asset validation passed.");
}

function pathToFileUrl(p) {
  const u = new URL("file://");
  u.pathname = p;
  return u;
}

main().catch((e) => fail(e?.stack || String(e)));
