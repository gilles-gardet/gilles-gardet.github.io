# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm start` - Start development server on http://localhost:4200 (host: 0.0.0.0)
- `pnpm build` - Build the application for production
- `pnpm preview` - Preview the production build locally
- `pnpm check` - Run Astro type checking

### Package Management
- Uses `pnpm` as package manager
- Uses `nvm` for Node.js version management - run `nvm use` before starting
- Run `pnpm install` to install dependencies

## Architecture

### Routing and i18n
- Astro i18n routing with two locales: `fr` (default) and `en`
- All URLs are prefixed: `/fr/`, `/en/`
- Root `/` redirects to `/fr/`
- Language switch navigates to the alternate URL

### Content Management
- Mission descriptions: Markdown files in `src/assets/resume/missions/[lang]/[date]/`
- Each mission has `[date]_full.md` and `[date]_light.md` versions
- All markdown compiled at build time via `import.meta.glob` + `marked` (zero runtime fetches)
- Skills defined in `src/assets/resume/skills.json`
- i18n translations in `src/i18n/fr.json` and `src/i18n/en.json`, accessed via `src/i18n/utils.ts`

### Components Structure
- `src/layouts/Layout.astro` - Base HTML shell with theme persistence
- `src/pages/index.astro` - Root redirect to `/fr/`
- `src/pages/[lang]/index.astro` - Main CV page
- `src/components/` - Astro components (General, Resume, Missions, Skills, Summary, Hobbies, etc.)
- `src/styles/global.css` - Single CSS file with all styles (Tailwind v4, theme tokens, print styles)

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` Vite plugin (no PostCSS)
- Single `src/styles/global.css` file — no component-scoped CSS
- CSS custom properties for theme tokens (light/dark)
- Print-specific styles for CV printing

### State Management
- No framework state — vanilla JS only
- Theme: `localStorage` + `document.documentElement.classList.toggle('dark')`
- Language: URL navigation (`/fr/` ↔ `/en/`)
- Mission dialogs: CSS class (`is-open`) on pre-rendered hidden `<div>`
- Scroll progress: `window.addEventListener('scroll', ...)` updating a `<div>` width
- Animations: `IntersectionObserver` for skills progress bars and mission cards

## Technology Stack
- **Framework**: Astro 5 (static output)
- **Build Tool**: Vite (via Astro)
- **Styling**: Tailwind CSS v4 + custom CSS
- **Markdown**: `marked` (build-time rendering)
- **i18n**: Custom lightweight utility (`src/i18n/utils.ts`)

## Code Quality
- **Type checking**: `astro check`
- **Formatting**: Prettier (runs on pre-commit via Husky)
- **Commit**: Conventional commits validated by commitlint

## Build Configuration
- Output directory: `docs/` (for GitHub Pages)
- Static site generation — all pages pre-rendered at build time
- Assets served from `public/` directory

## Deployment
- Deployed to GitHub Pages from `docs/` folder
- CI/CD via GitHub Actions on main branch
- Custom domain: `cv.gilles-gardet.com`
