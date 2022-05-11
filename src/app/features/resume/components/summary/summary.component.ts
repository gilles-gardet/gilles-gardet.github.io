import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  experience: Date = new Date(2013, 4);

  /**
   * Calculate the number of years between a given date and the current date
   * @param {Date} date the date to substract to the current date
   */
  numberOfYearsFromDateToCurrentDate(date: Date): number {
    return new Date().getFullYear() - date.getFullYear();
  }
}
