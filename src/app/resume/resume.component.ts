import {Component} from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  missions: any[] = [];
  tools: any[] = [];

  ngOnInit() {
    this.missions = [
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
        name: "MAIF",
        description: "Refonte d'une application permettant de gérer des avances de remboursement inter- assureur, s'appuyant sur des technologies vieillissantes (Lotus Notes).\n" +
          "L'application doit permettre des imports/exports de fichiers, et permettre de gérer les entités précédemment importées au travers d'une vue web designé comme une SPA (Single Page Application).",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.BOOKMARK,
        color: "#607D8B"
      },
      {
        name: "Air France",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.BOOKMARK,
        color: "#607D8B"
      },
      {
        name: "Air France",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.BOOKMARK,
        color: "#607D8B"
      }
    ];
    this.tools = [
      {name: 'HTML', rate: 60},
      {name: 'Java', rate: 60},
      {name: 'Spring Boot', rate: 60},
      {name: 'Spring MVC', rate: 60},
      {name: 'Spring Data', rate: 60},
      {name: 'Spring Security', rate: 60},
      {name: 'CSS', rate: 60},
      {name: 'Sass', rate: 60},
      {name: 'Javascript', rate: 60},
      {name: 'SQL', rate: 60},
      {name: 'TypeScript', rate: 60},
      {name: 'Angular', rate: 60},
      {name: 'NestJS', rate: 60},
      {name: 'ReactJS', rate: 60},
      {name: 'Hibernate', rate: 60},
      {name: 'Typeorm', rate: 60},
      {name: 'Kotlin', rate: 60},
    ];
  }

}
