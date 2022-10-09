import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'portfolio-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [PanelModule, SharedModule],
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
