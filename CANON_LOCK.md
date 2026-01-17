# MMOC Canon Lock

This repo is intentionally minimal and locked to prevent duplicate files ("clonez") from breaking deployment.

1) Runtime wiring (do not deviate)

Entry:
- app/layout.js
- app/page.js -> renders components/AppShell.js

Mounted components (only these are allowed):
- components/AppShell.js
- components/OpeningBook.js
- components/Sidebar.js
- components/Weave.js

2) Canon public folders (single purpose only)

Opening sequence:
- public/flow/*

Sidebar glyph SVGs:
- public/icons/*.svg

App install icons:
- public/icons/app/*

3) Hard lock rules

- Do not add duplicate folders (no public/assets, no clonez copies).
- If a file is not imported by the runtime chain above, it must be archived or deleted.
- Any change must be full-file replacement (no fragments).
- Keep build script as: next build (no validators in build).

4) Quick sanity checks (manual)

- Sidebar icons must load from /icons/*.svg only.
- Opening covers must load from /flow/* only.
- Manifest must reference /icons/app/* only.

3) Hard lock rules

- Do not add duplicate folders (no public/assets, no clonez copies).
- If a file is not imported by the runtime chain, it must be archived or deleted.
- Any change must be full-file replacement (no fragments).
- Keep build script as: next build (no validators in build).

4) Quick sanity checks

- Sidebar icons load from /icons/*.svg (not /assets/...).
- Opening covers load from /flow/*.
- Manifest icons load from /icons/app/*.

