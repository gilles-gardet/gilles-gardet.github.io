# 🗃 Curriculum Vitae - Gilles Gardet

Application réalisée à l'aide de [SvelteKit](https://kit.svelte.dev/) et hébergée via [GitHub Pages](https://pages.github.com/).
Le but étant d'avoir un CV facilement maintenable, bilingue (français/anglais) et consultable en ligne.

La gestion CI/CD est directement assurée via [GitHub Actions](https://fr.github.com/features/actions).

Le CV est directement accessible à l'adresse [cv.gilles-gardet.com](https://cv.gilles-gardet.com).

> **Note**
> L'application est toujours en cours de développement et ne reflète donc pas toujours mon actualité.

GitHub Pages oblige, l'application fonctionne sans _BFF_ (Backend For Frontend).
Les descriptifs de missions sont embarqués dans les assets au format **Markdown** (fichiers `_light.md` et `_full.md`), parsés à la compilation via `marked` et intégrés statiquement dans le bundle.

[![pages-build-deployment](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=pages)](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/pages/pages-build-deployment)

## 🚀 Environnement de développement

Cette application s'appuie sur [pnpm](https://pnpm.io/) pour la gestion des dépendances et sur [nvm](https://github.com/nvm-sh/nvm) pour la version de **Node.js**.

### 🛠️ Installation et lancement

```bash
nvm use
pnpm install
pnpm start
```

L'application est accessible par défaut sur `http://localhost:4200`.

### Scripts disponibles

| Commande | Description |
|---|---|
| `pnpm start` | Démarre le serveur de développement Vite |
| `pnpm build` | Génère la version de production dans `docs/` |
| `pnpm preview` | Prévisualise le build de production en local |
| `pnpm check` | Synchronise SvelteKit et vérifie les types TypeScript |
| `pnpm test` | Lance les tests unitaires avec Vitest |
| `pnpm test:coverage` | Lance les tests avec rapport de couverture |
| `pnpm test:watch` | Lance Vitest en mode watch |

### Hooks Git (Husky)

À chaque commit, [Husky](https://typicode.github.io/husky/) s'occupe de :

1. **Formater** le code via [Prettier](https://prettier.io/) (pre-commit)
2. **Valider** le message de commit via [commitlint](https://commitlint.js.org/#/) (commit-msg)

Les messages de commit suivent la convention [Conventional Commits](https://www.conventionalcommits.org/).

## 🛠️ Stack technique

- **Framework** : SvelteKit avec `@sveltejs/adapter-static`
- **UI** : Svelte (composants rune-based)
- **Build Tool** : Vite
- **Styling** : Tailwind CSS via `@tailwindcss/vite`
- **Contenu** : Markdown rendu par `marked`
- **Internationalisation** : utilitaires maison (`src/lib/i18n/`)
- **Thème** : store Svelte (`src/lib/stores/theme.ts`) — dark/light, persisté en `localStorage`
- **Qualité** : Prettier + commitlint + Husky

## ⚙️ Intégration continue

L'application est déployée sur [GitHub Pages](https://pages.github.com/) à chaque push sur la branche `main`.

Les workflows GitHub Actions comprennent :

- **`build-and-deploy`** — build de l'application et déploiement sur GitHub Pages
- **`audit-and-vulnerabilities`** — audit pnpm des dépendances + analyse Snyk (déclenché aussi chaque vendredi)
- **`e2e-tests`** — tests end-to-end avec [Playwright](https://playwright.dev/) (sur macOS)

## 🔍 Analyse des dépendances inutilisées

[knip](https://knip.dev/) permet de détecter les dépendances, exports et fichiers non utilisés dans le projet.  
Il supporte SvelteKit nativement et évite les faux positifs liés aux conventions de fichiers du framework (`+page.svelte`, `+layout.ts`, etc.).

```bash
pnpm dlx knip
```

À noter que certains résultats peuvent être des faux positifs : par exemple les binaires CLI utilisés via Husky (ex. `@commitlint/cli`) ne sont pas détectés comme utilisés car ils ne sont pas importés dans le code source.

## 🗂️ Structure du projet

```
src/
├── assets/resume/
│   ├── missions/[lang]/[YYYYMM]/   # Fichiers Markdown des missions (_light.md, _full.md)
│   └── skills.json
├── lib/
│   ├── components/                 # Composants Svelte (General, Resume, …)
│   ├── data/                       # missions.json, skills.json
│   ├── i18n/                       # fr.json, en.json, utils.ts
│   └── stores/                     # theme.ts
├── routes/
│   ├── +page.svelte                # Redirection vers /fr/
│   ├── +layout.ts                  # prerender = true, trailingSlash = 'always'
│   └── [lang]/
│       ├── +page.ts                # Chargement des données par langue
│       └── +page.svelte            # Page principale du CV
└── styles/
    └── global.css                  # Styles globaux, tokens de thème, styles d'impression
docs/                               # Sortie du build (déployée sur GitHub Pages)
```
