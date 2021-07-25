import {PrimeIcons} from "primeng/api";

export const environment = {
  production: true,

  missions: [
    {
      client: "Orange",
      description: `Réalisation de deux projets fullstack (frontend et backend) en autonome.
        Pour le compte d'une équipe gérant la Big Data au sein du Service des Ressources Humaines d'Orange dans un premier temps (projet O2H).
        Et pour le compte d'une équipe sécurité elle même appartenant à l'entité Ressources Humaines d'Air France (projet SPDP)`,
      date: "15/10/2020 - 15/10/2020",
      icon: PrimeIcons.BOOKMARK,
      color: "#607D8B",
      tools: [
        'Git',
        'Gitlab',
        'CSS',
        'Angular',
        'PrimeNG',
        'Rest',
        'Sass',
        'TypeScript',
        'NodeJS',
        'NestJS',
        'PCF',
        'TypeORM',
        'Sequelize'
      ]
    },
    {
      client: "MAIF",
      description: "Refonte d'une application permettant de gérer des avances de remboursement inter- assureur, s'appuyant sur des technologies vieillissantes (Lotus Notes).\n" +
        "L'application doit permettre des imports/exports de fichiers, et permettre de gérer les entités précédemment importées au travers d'une vue web designé comme une SPA (Single Page Application).",
      date: "15/10/2020 14:00",
      icon: PrimeIcons.BOOKMARK,
      color: "#607D8B"
    },
    {
      client: "Air France",
      description: "Refonte d'une application permettant de gérer des avances de remboursement inter- assureur, s'appuyant sur des technologies vieillissantes (Lotus Notes).\n" +
        "L'application doit permettre des imports/exports de fichiers, et permettre de gérer les entités précédemment importées au travers d'une vue web designé comme une SPA (Single Page Application).",
      date: "15/10/2020 16:15",
      icon: PrimeIcons.BOOKMARK,
      color: "#607D8B"
    },
    {
      client: "Air France",
      description: "Refonte d'une application permettant de gérer des avances de remboursement inter- assureur, s'appuyant sur des technologies vieillissantes (Lotus Notes).\n" +
        "L'application doit permettre des imports/exports de fichiers, et permettre de gérer les entités précédemment importées au travers d'une vue web designé comme une SPA (Single Page Application).",
      date: "16/10/2020 10:00",
      icon: PrimeIcons.BOOKMARK,
      color: "#607D8B"
    }
  ],

  tools: [
    {name: 'HTML', rate: 80},
    {name: 'Java', rate: 90},
    {name: 'Spring Boot', rate: 85},
    {name: 'Spring MVC', rate: 85},
    {name: 'Spring Data', rate: 75},
    {name: 'Spring Security', rate: 70},
    {name: 'CSS', rate: 75},
    {name: 'Sass', rate: 75},
    {name: 'Javascript', rate: 80},
    {name: 'SQL', rate: 70},
    {name: 'TypeScript', rate: 80},
    {name: 'Angular', rate: 85},
    {name: 'NestJS', rate: 70},
    {name: 'ReactJS', rate: 65},
    {name: 'Hibernate', rate: 80},
    {name: 'Typeorm', rate: 70},
    {name: 'Kotlin', rate: 80},
  ]
};
