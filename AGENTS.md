# Repository Guidelines

## Project Structure & Module Organization
- `index.html` anchors the experience and loads styles from `css/` plus feature scripts from `js/`.
- `js/` modules stay scoped by responsibility: `main.js` orchestrates `init*` hooks, `scrollytelling.js` manages Scrollama steps, `visualizations.js` holds D3 scenes, `animations.js` centralizes GSAP timelines, and `utils.js` stores shared helpers.
- `css/` layers presentation: `main.css` defines tokens and base rules, `components.css` styles sections, `animations.css` isolates keyframes, `responsive.css` captures media queries, and `typography.css` locks typography pairings.
- `assets/` keeps runtime files (`images/`, `fonts/`, `data/demographics.json`); optimize additions and commit processed exports only.
- `_update_scrolly_functions.py` patches patterns inside `js/scrollytelling.js`; run it only when those blocks drift from the canonical structure.

## Build, Test, and Development Commands
- `npm install` pulls the sole dev dependency (`http-server`).
- `npm run dev` serves the site locally and auto-opens the browser for iterative work.
- `npm run start` launches the same server without opening a window, handy for device testing or when sharing the port.
- `npx http-server ./assets -p 8081` spins up a secondary server if you must inspect asset loading in isolation.

## Coding Style & Naming Conventions
- Follow 4-space indentation in JS and CSS; keep lines under 120 characters and prefer trailing commas in multiline literals.
- Use ES6+ syntax with descriptive camelCase (`initGeographyNarrative`, `buildDemographicsChart`) and group helpers by section responsibility.
- Centralize new GSAP timelines in `animations.js` and new visual encodings in `visualizations.js`; expose entry points through `main.js`.
- CSS classes are lowercase with hyphen separators (e.g., `hero-title`, `legacy-panel`) and rely on `:root` custom properties for shared values.

## Testing Guidelines
- Automated tests are not yet in place (`npm test` exits with a placeholder), so record manual QA steps alongside every change.
- Validate scroll triggers, progress indicators, and lazy assets in at least Chrome and Firefox after each update.
- Use `highlight-turkey-test.html` for controlled experiments before folding scrollytelling tweaks into `index.html`.

## Commit & Pull Request Guidelines
- Write concise, imperative commits with optional scope prefixes (`feat: extend demographics scrollytelling`, `fix(scrolly): guard missing GSAP`).
- Rebase or squash noisy commits so each PR tells a clean story.
- PR descriptions should cover the problem, the solution, manual verification (`npm run dev`, browsers checked), and include screenshots or screen recordings for visual changes.
- Call out new assets, data updates, or performance-sensitive tweaks so reviewers can focus on regression risk.
