import {Component} from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Navigate with a smooth scroll to the element given as parameter
   *
   * @param element the event throwed on the click of the navigate button
   */
  scrollToPortfolio(element: any): void {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
