# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `nx serve` or `pnpm start` - Start development server on http://localhost:4200 (host: 0.0.0.0)
- `nx build` or `pnpm build` - Build the application for production
- `nx test` or `pnpm test` - Run unit tests with Jest
- `nx test --ci=true --coverage=true` or `pnpm test:ci` - Run tests in CI mode with coverage
- `nx e2e` or `pnpm e2e` - Run end-to-end tests with Playwright
- `nx lint` or `pnpm lint` - Run ESLint for code quality

### Package Management
- Uses `pnpm` as package manager
- Uses `nvm` for Node.js version management - run `nvm use` before starting
- Run `pnpm install` to install dependencies

## Architecture

### State Management (NgRx)
The application uses NgRx for global state management with four main feature states:
- **Mission State** (`src/+state/mission/`) - Manages career missions data
- **Skill State** (`src/+state/skill/`) - Manages technical skills data  
- **Theme State** (`src/+state/theme/`) - Manages dark/light theme preferences
- **Language State** (`src/+state/language/`) - Manages i18n (French/English)

All states follow the same pattern: actions, effects, reducer, selector, and state files.

### Content Management
- Mission descriptions stored as Markdown files in `src/assets/resume/missions/[lang]/[date]/`
- Each mission has `full.md` and `light.md` versions
- Skills defined in `src/assets/resume/skills.json`
- i18n translations in `src/i18n/[lang].json`

### Components Structure
- **Features**: `src/app/features/` - Main page components (general, resume)
- **Shared**: `src/app/shared/` - Reusable UI components (avatar, panel, progress-bar, etc.)
- **Core**: `src/app/core/` - Services, models, and utilities

### Styling
- Uses SCSS with organized structure in `src/styles/`
- Integrates Tailwind CSS (`tailwind.config.js`)
- PrimeNG components with custom theming
- Print-specific styles for CV printing

## Technology Stack
- **Framework**: Angular 19 with standalone components
- **Build Tool**: Nx monorepo
- **State**: NgRx with signals
- **UI**: PrimeNG + Tailwind CSS
- **i18n**: Transloco
- **Content**: Markdown rendering with ngx-markdown and Prism.js
- **Testing**: Jest (unit) + Playwright (e2e)

## Code Quality
- **Linting**: ESLint with Angular-specific rules
- **Formatting**: Prettier (runs on pre-commit via Husky)
- **Commit**: Conventional commits validated by commitlint
- **Pre-commit**: Husky runs linting and formatting
- **Pre-push**: Jest tests must pass

## Coding Standards

### General Rules
- Write all code, comments, and documentation in English
- Use clear and explicit variable names while keeping code concise
- Avoid unnecessary blank lines within methods
- Comments should start with lowercase letter (unless proper noun)

### Documentation
- Always add JSDoc to new methods and functions
- Update existing JSDoc when modifying methods
- Use descriptive parameter and return type documentation
- Include usage examples for complex methods

### TypeScript/Angular Specific
- Prefer `const` over `let` when variable won't be reassigned
- Use meaningful component and service names following Angular conventions
- Implement proper error handling with try-catch blocks
- Use readonly for properties that shouldn't be modified
- Leverage Angular's dependency injection properly

### Code Structure
- Keep methods focused on single responsibility
- Extract complex logic into separate private methods
- Use early returns to reduce nesting
- Group related functionality together
- Maintain consistent indentation and spacing

## Build Configuration
- Output directory: `docs/` (for GitHub Pages)
- Production build uses optimization disabled for GitHub Pages compatibility
- Assets include icons, profile picture, PDF CV, and i18n files

## Deployment
- Deployed to GitHub Pages from `docs/` folder
- CI/CD via GitHub Actions on main branch
- Includes dependency audit, tests, and automated deployment