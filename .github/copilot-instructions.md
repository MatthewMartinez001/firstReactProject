**Project Overview**: Minimal React + Vite template. Entry is `src/main.jsx` which renders `App` from `src/App.jsx`. Styles live in `src/index.css` and `src/App.css`. Vite config is in `vite.config.js` and the app uses `@vitejs/plugin-react` for HMR/refresh.

## Project snapshot

Minimal Vite + React app (JSX). Entry: `src/main.jsx` mounts `App` from `src/App.jsx`. Global styles live in `src/index.css` and `src/App.css`. Vite plugins in `vite.config.js` use `@vitejs/plugin-react` for HMR.

## Quick commands

- Dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `vite build`).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (runs `eslint .`).

## File layout & entry points

- App entry: `src/main.jsx` → `src/App.jsx` (functional components, default export).
- Assets: `public/vite.svg` and `src/assets/react.svg` (note: `vite` treats `/vite.svg` as a root public asset).
- Config: `vite.config.js` (React plugin enabled).
- Manifest: `package.json` (scripts, deps, devDeps).

## Project-specific patterns & conventions

- Use `.jsx` for components and ES modules (`"type": "module"` in `package.json`).
- Default-export components (see `src/App.jsx`).
- Use React Hooks (e.g., `useState`) and `StrictMode` with `createRoot` in `src/main.jsx`.
- CSS is global (no CSS modules); update `src/index.css`/`src/App.css` for styling changes.
- Asset imports: local assets via relative paths (`import reactLogo from './assets/react.svg'`), public root assets with a leading slash (`import viteLogo from '/vite.svg'`).

## Integrations & gotchas

- `vite` is intentionally aliased/overridden to `rolldown-vite@7.2.5` in `devDependencies` and `overrides`. When you suggest dependency or plugin changes, call this out and validate `npm run dev` + `npm run build`.
- `@vitejs/plugin-react` is used; expect standard Vite fast-refresh behavior.
- Type packages (`@types/*`) exist in devDependencies but the repo is JavaScript-only — do not introduce TypeScript changes without coordinating.

## Build, test, and debug workflow

- Local dev: `npm run dev` — iterate with HMR.
- Production reproduce: `npm run build` then `npm run preview`.
- Linting: `npm run lint` — follow existing ESLint rules; prefer small, lint-clean changes.

## Agent rules (how to make changes)

- Keep diffs small and focused; match existing filename and export patterns.
- Run & verify: when changing dependencies or build config, run `npm run dev` and `npm run build` locally and report results.
- When proposing dependency updates, mention the `vite` override and suggest a compatibility test matrix (dev server + build).
- Preserve ESLint config and run `npm run lint` on changes; avoid auto-fixing large style sweeps unless requested.

## Quick references (examples to open)

- `src/main.jsx`
- `src/App.jsx`
- `vite.config.js`
- `package.json`
- `public/vite.svg`

If you'd like CI checks, test harnesses, or a suggested eslint/format config added, tell me which direction to take.
