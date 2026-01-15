// Single source of truth for all static asset paths.
// RULE: UI components import from this file; do not hardcode paths elsewhere.

export const ICONS = {
  eye: "/icons/eye.svg",
  moments: "/icons/moments.svg",
  roid: "/icons/roidboy.svg",
  ps: "/icons/ps.svg",
  summation: "/icons/summation.svg",
  assessment: "/icons/assessment.svg",
  intake: "/icons/intake.svg",
  library: "/icons/library.svg",
  directory: "/icons/directory.svg",
  year: "/icons/year.svg",
};

// If you want to keep ornate glyphs separate (ceremonial, non-interactive)
export const ORNATE_GLYPHS = {
  // Example placeholders (use if/when you need them)
  // seal: "/assets/glyphs/ornate/seal.png",
};

// Covers / flow images for opening sequence
export const FLOW_COVERS = {
  center: "/assets/flow/01-center.png",
  github: "/assets/flow/02-github.png",
  arrival: "/assets/flow/03-arrival.png",
};
