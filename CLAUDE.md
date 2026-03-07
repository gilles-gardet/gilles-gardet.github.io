# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm start` - Start development server (Vite dev)
- `pnpm build` - Build the application for production
- `pnpm preview` - Preview the production build locally
- `pnpm check` - Run `svelte-kit sync && svelte-check --tsconfig ./tsconfig.json`

### Package Management
- Uses `pnpm` as package manager
- Uses `nvm` for Node.js version management — run `nvm use` before starting

## Architecture

### Framework & Routing
- **SvelteKit 2** with `@sveltejs/adapter-static` (full static output)
- File-based routing in `src/routes/`:
  - `+page.svelte` — root page, meta-refresh redirect to `/fr/`
  - `[lang]/+page.ts` — loads mission and skill data per language
  - `[lang]/+page.svelte` — main CV page layout
  - `+layout.ts` — sets `prerender = true` and `trailingSlash = 'always'`
- Two locales: `fr` (default) and `en`. All URLs prefixed: `/fr/`, `/en/`

### Content Management
- Mission metadata: `src/lib/data/missions.json` (id, client, startDate, endDate)
- Mission descriptions: Markdown files in `src/assets/resume/missions/[lang]/[YYYYMM]/[YYYYMM]_light.md` and `_full.md`
- All markdown loaded at build time via `import.meta.glob` (eager) + `marked`
- Skills: `src/lib/data/skills.json`

### Components & Data Flow
- Components in `src/lib/components/` (Svelte 5 rune-based, using `$props()`)
- `[lang]/+page.ts` loads data → passes `lang`, `missions`, `skills` as `PageData` props
- `General.svelte` and `Resume.svelte` are the two top-level layout components

### State Management
- **Theme**: Svelte writable store in `src/lib/stores/theme.ts` — persists to `localStorage`, toggles `.dark` class on `<html>`
- **i18n**: `src/lib/i18n/utils.ts` — `t(lang, key)` for translations, `otherLang(lang)` for language switcher, `missionTimelapse()` for date labels
- Translation files: `src/lib/i18n/fr.json` and `src/lib/i18n/en.json`

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (no PostCSS config)
- Single `src/styles/global.css` file — all styles including theme tokens and print styles
- CSS custom properties for light/dark theming

## Build Configuration
- Output directory: `docs/` (for GitHub Pages, configured in `svelte.config.js`)
- Fully static — all pages pre-rendered at build time
- Assets in `public/`

## Deployment
- GitHub Pages from `docs/` folder
- CI/CD via GitHub Actions on `main` branch
- Custom domain: `cv.gilles-gardet.com`

## Code Quality
- **Type checking**: `pnpm check`
- **Unit tests**: `pnpm test` (Vitest) — `pnpm test:coverage` for coverage, `pnpm test:watch` in watch mode
- **Formatting**: Prettier (pre-commit via Husky)
- **Commits**: Conventional commits validated by commitlint

## Testing
- **Framework**: Vitest with jsdom environment (`vitest.config.ts` extends `vite.config.ts`)
- **TZ**: forced to UTC in tests to ensure deterministic date assertions
- Test files alongside source: `src/lib/**/*.test.ts`
- `$app/environment` must be mocked with `vi.mock('$app/environment', () => ({ browser: true }))` in store tests
- Svelte store tests use dynamic imports (`await import(...)`) after `vi.resetModules()` in `beforeEach` to isolate store state; use `store.subscribe()` (not `get()` from `svelte/store`) to read values — avoids cross-module-instance incompatibilities after module reset
