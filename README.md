# 🗃 Curriculum Vitae - Gilles Gardet

Application réalisée à l'aide d'[Angular](https://angular.io/) et du [CLI Angular](https://angular.io/cli).  
Le but étant d'avoir un CV facilement maintenable et hébergé via [Github pages](https://pages.github.com/).

La gestion CI/CD est directement assurée via [GitHub Actions](https://fr.github.com/features/actions).

![demo](./src/assets/pictures/demo.gif)

Le CV est directement accessible à l'adresse [cv.gilles-gardet.com](https://cv.gilles-gardet.com).

> **Note**  
> L'application est toujours en cours de développement et ne réflète donc pas toujours mon actualité.

GitHub Page oblige, l'application fonctionne sans _BFF_ (Backend For Frontend) pour requêter le contenu à afficher.  
les descriptifs sont en effet embarqués dans les assets de l'application au format **Markdown** puis parsé avant d'être finalement affichés.

[![pages-build-deployment](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=pages)](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/pages/pages-build-deployment)
[![codecov](https://codecov.io/gh/gilles-gardet/gilles-gardet.github.io/branch/master/graph/badge.svg?token=MJD58OG7SA)](https://codecov.io/gh/gilles-gardet/gilles-gardet.github.io)
[![CodeFactor](https://www.codefactor.io/repository/github/gilles-gardet/gilles-gardet.github.io/badge)](https://www.codefactor.io/repository/github/gilles-gardet/gilles-gardet.github.io)

## 🚀 Environnement de développement

Cette application s'appuie sur [pnpm](https://pnpm.io/) pour gérer ses dépendances et sur [nvm](https://github.com/nvm-sh/nvm) pour faciliter la gestion de la version de **NodeJS** à utiliser.

### 🔄 Migration Nx → Angular CLI

L'application a été migrée de **Nx** vers le **CLI Angular standard** pour simplifier la configuration et l'outillage. Cette migration inclut :

- Remplacement des commandes `nx` par `ng` et `jest` 
- Suppression des dépendances Nx spécifiques
- Configuration ESLint adaptée au CLI Angular
- Tests Jest configurés avec les alias de chemin
- Tests Playwright fonctionnant avec `ng serve`

### 🛠️ Installation et lancement

En premier lieu, il faut donc faire un `nvm use` suivi de l'exécution de la commande `pnpm install` depuis la racine du répertoire du projet pour installer les dépendances nécessaires au lancement du projet.

Cela devrait par la même occasion permettre l'installation d'un outil de gestion des commits (à savoir [husky](https://typicode.github.io/husky/#/)).  
Ce dernier s'occupe de :

1. _"[linter](<https://en.wikipedia.org/wiki/Lint_(software)>)"\_ le code en s'appuyant sur [eslint](https://eslint.org/) et formater le code via [prettier](https://prettier.io/) (avant le commit)
2. valider le message de commit via [commitlint](https://commitlint.js.org/#/) (au commit)
3. valider les tests unitaires [jest](https://jestjs.io/) (avant de pousser le commit sur la branche distante)

Les scripts principaux gérant notamment les cycles de vie de l'application sont les suivants :

- La commande `ng serve` ou `pnpm start` démarre l'application à l'adresse suivante par défaut `http://localhost:4200/`. L'application se recharge automatiquement en cas de changement des fichiers sources du projet.
- La commande `jest` ou `pnpm test` lance les tests unitaires en s'appuyant sur la bibliothèque [Jest](https://jestjs.io/).
- La commande `pnpm test:ci` lance les tests unitaires en mode CI avec génération de la couverture de code.
- La commande `pnpm e2e` lance les tests _end-to-end_ en s'appuyant sur la bibliothèque [Playwright](https://playwright.dev/).
- La commande `ng build` ou `pnpm build` génère la version de production de l'application.
- La commande `ng lint` ou `pnpm lint` vérifie la qualité du code avec ESLint.

## 🛠️ Stack technique

- **Framework** : Angular 19 avec composants standalone
- **Build Tool** : CLI Angular
- **State Management** : NgRx avec signals
- **UI/Styling** : PrimeNG + Tailwind CSS + SCSS
- **Internationalisation** : Transloco (français/anglais)
- **Content Rendering** : ngx-markdown + Prism.js pour la coloration syntaxique
- **Testing** : Jest (tests unitaires) + Playwright (tests e2e)
- **Quality** : ESLint + Prettier + commitlint + Husky

## ⚙️ Intégration continue

L'application est déployée sur [Github pages](https://pages.github.com/) quand un commit est réalisé sur la branche principale.

Les étapes de la CI/CD comprennent :

- **audit** des dépendances (en passant par pnpm ais aussi via snyk)
- **tests unitaires** sur les composants (avec récupération de la couverture de test et affichage sous forme de badge)
- tests **end-to-end** sur l'ensemble de la _[SPA](https://developer.mozilla.org/fr/docs/Glossary/SPA)_
- **déploiement** sur l'environnement github pages (grace au [plugin](https://github.com/marketplace/actions/deploy-to-github-pages) précédemment évoqué)

> **Warning**  
> Il est nécessaires de créer des snapshots expressément pour le _job_ de test e2e ~~car ceux-ci sont liées au navigateur de l'OS (dans notre cas **Alpine**)~~.
>
> ~~Dans le cas où l'on doit mettre à jour les snapshots de playwright il faut donc passer par une image docker _pinned_ (ex: 1.50.1-focal) sur un poste local :~~
>
> ~~Lancer l'image via `docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.50.1-focal /bin/bash`  
> Puis en executant directement dans l'image le workflow suivant :~~
>
> - ~~`apt update && apt upgrade -y && apt install make g++ && npm i -g pnpm@latest && pnpm i --frozen-lockfile --force`~~
> - ~~`pnpm exec playwright test --config=e2e/playwright.config.ts --update-snapshots`~~ > ~~Il faudra ensuite relancer la dernière commande pour récupérer les snapshots darwin (macos) directement depuis le répertoire local.~~
>
> Lancer la commande suivante depuis un poste MacOs: `pnpm exec playwright test --config=e2e/playwright.config.ts --update-snapshots`
>
> Normalement les snapshots devraient être mis à jour directement dans le répertoire local [e2e/src/page.spec.ts-snapshots](./e2e/src/page.spec.ts-snapshots)

## 🔍 Fonctionnalités à venir

Il est prévu de rajouter à l'application plusieurs fonctionnalités :

- [x] Responsive et adapaté aux petits écrans
- [x] Adapter le style lorsque l'on veut imprimer la page (sur chrome seulement)
- [x] Mise en place de tests end-to-end avec [Playwright](https://playwright.dev/)
- [x] Ajout d'un **darkmode** qui s'appuie sur les préférences utilisateur en premier lieu
- [x] Possibilité de changer la langue entre le français et l'anglais
- [x] Gestion d'un state via NgRx avec signals (theme, language, missions, skills)
- [x] Migration de Nx vers CLI Angular standard pour simplifier l'outillage
