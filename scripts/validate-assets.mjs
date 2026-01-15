import fs from "node:fs";
import path from "node:path";

// Adjust ONLY if your repo root changes.
const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");

// Add every required file you want enforced at build time.
const REQUIRED_PUBLIC_PATHS = [
  // ICONS (validator contract)
  "/icons/eye.svg",
  "/icons/moments.svg",
  "/icons/roidboy.svg",
  "/icons/ps.svg",
  "/icons/summation.svg",
  "/icons/assessment.svg",
  "/icons/intake.svg",
  "/icons/library.svg",
  "/icons/directory.svg",
  "/icons/year.svg",

  // Opening flow covers (optional to enforce; remove if you don’t want builds blocked)
  "/assets/flow/01-center.png",
  "/assets/flow/02-github.png",
  "/assets/flow/03-arrival.png",
];

function fail(msg) {
  console.error(`\n❌ Asset validation failed:\n- ${msg}\n`);
  process.exit(1);
}

function existsPublic(p) {
  const diskPath = path.join(PUBLIC_DIR, p.replace(/^\//, ""));
  return fs.existsSync(diskPath);
}

for (const p of REQUIRED_PUBLIC_PATHS) {
  if (!p.startsWith("/")) fail(`Public path must start with "/": ${p}`);
  if (!existsPublic(p)) {
    const expected = path.join(PUBLIC_DIR, p.replace(/^\//, ""));
    fail(`Missing file on disk for public path: ${p}\n  Expected: ${expected}`);
  }
}

console.log("✅ Asset validation passed.");
