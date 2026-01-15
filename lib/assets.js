// Single source of truth for all static asset paths.
// Rule: Components must import from this file instead of hardcoding `/public` paths.

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

// Optional PNG variants (for cases where you need raster sizes).
export const ICONS_PNG = {
  // example:
  // eye: { 128: "/icons/png/eye_128.png" }
};
