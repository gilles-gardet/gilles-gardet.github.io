import {Component} from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  missions: any[] = [];

  ngOnInit() {
    this.missions = [
      {
        client: "Orange",
        description: "Réalisation de deux projets fullstack (frontend et backend) en autonome. " +
          "Pour le compte d'une équipe gérant la Big Data au sein du Service des Ressources Humaines d'Orange dans un premier temps (projet O2H). " +
          "Et pour le compte d'une équipe sécurité elle même appartenant à l'entité Ressources Humaines d'Air France (projet SPDP)",
        date: "15/10/2020 - 15/10/2020",
        icon: PrimeIcons.CHECK,
        color: "#9C27B0"
      },
      {
        name: "Processing",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.CHECK,
        color: "#673AB7"
      },
      {
        name: "Shipped",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.CHECK,
        color: "#FF9800"
      },
      {
        name: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      }
    ];
  }

}
