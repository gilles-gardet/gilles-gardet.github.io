# 🗃 Curriculum Vitae - Gilles Gardet

Application réalisée à l'aide d'[Angular](https://angular.io/) et de la librairie de composant [PrimeNG](https://www.primefaces.org/primeng/).  
Le but étant de faire un Curriculum Vitae "intéractif", facilement maintenable et hébergé via [Github pages](https://pages.github.com/).

C'est aussi l'occasion de tester au moins partiellement [GitHub Actions](https://fr.github.com/features/actions).

![demo](./src/assets/pictures/demo.gif)

Le CV est directement accessible à l'adresse [gilles-gardet.gihub.io](https://gilles-gardet.github.io/).

> **Note**  
> L'application est toujours en cours de développement et ne réflète donc pas toujours mon actualité.

À noter que l'application est de plus autonome dans le sens où elle ne nécessite pas de *BFF* (Backend For Frontend) pour requêter le contenu à afficher, les descriptifs sont en effet embarqués dans les assets de l'application au format **Markdown** puis parsé avant d'être finalement affichés.

[![audit test & build](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/main.yml)
[![deployment](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=pages)](https://github.com/gilles-gardet/gilles-gardet.github.io/actions/workflows/pages/pages-build-deployment)
[![codecov](https://codecov.io/gh/gilles-gardet/gilles-gardet.github.io/branch/master/graph/badge.svg?token=MJD58OG7SA)](https://codecov.io/gh/gilles-gardet/gilles-gardet.github.io)
[![CodeFactor](https://www.codefactor.io/repository/github/gilles-gardet/gilles-gardet.github.io/badge)](https://www.codefactor.io/repository/github/gilles-gardet/gilles-gardet.github.io)

## 🚀 Environnement de développement

Cette application s'appuit sur [pnpm](https://pnpm.io/) pour gérer ses dépendances et sur [nvm](https://github.com/nvm-sh/nvm) pour faciliter la gestion de la version de **NodeJS** à utiliser.

En premier lieu, il faut exécuter la commande ```pnpm install``` depuis la racine du répertoire du projet pour installer les dépendances nécessaire au lancement du projet.

Cela devrait par la même occasion permettre l'installation d'un outil de gestion des commits (à savoir [husky](https://typicode.github.io/husky/#/)).  
Ce dernier s'occupe de : 
1. *"[linter](https://en.wikipedia.org/wiki/Lint_(software))"* le code en s'appuyant sur [eslint](https://eslint.org/) et formater le code via [prettier](https://prettier.io/) (avant le commit)
2. valider le message de commit via [commitlint](https://commitlint.js.org/#/) (au commit)
3. valider les tests unitaires [jest](https://jestjs.io/) (avant de pousser le commit sur la branche distante)

Les scripts principaux gérant notamment les cycles de vie de l'application sont les suivants :
- La commande `pnpm start` démarre l'application à l'adresse suivante par défaut `http://localhost:4200/`. L'application se recharge automatiquement en cas de changement des fichiers sources du projet.
- La commande `pnpm test` lance les tests unitaires en s'appuyant sur la bibliothèque [Jest](https://jestjs.io/).
- La commande `pnpm e2e` lance les tests *end-to-end* en s'appuyant sur la bibliothèque [Playwright](https://playwright.dev/).

## ⚙️ Intégration continue

L'application est déployée sur [Github pages](https://pages.github.com/) via l'utilisation d'un [plugin](https://github.com/marketplace/actions/deploy-to-github-pages) au niveau de la CI/CD.

L'ensemble des étapes de la *pipeline* sont centralisées dans le fichier [main.yml](./.github/workflows/main.yml).  
Ces étapes comprennent :
- **audit** des dépendances (en passant par yarn)
- **tests unitaires** sur les composants (avec récupération de la couverture de test et affichage sous forme de badge) 
- tests **end-to-end** sur l'ensemble de la *[SPA](https://developer.mozilla.org/fr/docs/Glossary/SPA)*
- **déploiement** sur l'environnement github pages (grace au [plugin](https://github.com/marketplace/actions/deploy-to-github-pages) précédemment évoqué)

> **Warning**  
> Il est nécessaires de créer des snapshots expressément pour le *job* de test e2e car ceux-ci sont liées au navigateur de l'OS (dans notre cas **Alpine**).
> 
> Pour mettre à jour les snapshots de playwright il faut passer par une image docker *pinned* (ex: 1.22.0-focal) sur un poste local :
>
> Lancer l'image via `docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.22.0-focal /bin/bash`  
> Puis en executant directement dans l'image le workflow suivant :
> - `npm i -g pnpm`
> - `pnpm install`
> - `npx playwright install`
> - `pnpm playwright test --config=e2e/playwright.config.ts --update-snapshots`
>
> Normalement les snapshots devraient être mis à jours directement dans le répertoire local [e2e/integration/page.spec.ts-snapshots](./e2e/integration/page.spec.ts-snapshots)

## 🔍 Fonctionnalités à venir

Il est prévu de rajouter à l'application plusieurs fonctionnalités :
- [x] Responsive et adapaté aux petits écrans
- [x] Adapter le style lorsque l'on veut imprimer la page (sur chrome seulement)
- [x] Mise en place de tests end-to-end avec [Playwright](https://playwright.dev/)
- [ ] Ajout d'un **darkmode** qui s'appuirait sur les préférences utilisateur en premier lieu
- [ ] Possibilité de changer la langue en français ou en anglais
