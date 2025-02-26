import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { PanelComponent } from '@shared/components/panel/panel.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PanelComponent, TranslocoDirective],
  selector: 'cv-summary',
  standalone: true,
  styleUrls: ['./summary.component.scss'],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  protected yearsOfExperience = 0;

  /**
   * @constructor
   */
  constructor() {
    const startingDate: Date = new Date(2013, 4);
    this.yearsOfExperience = this.numberOfYearsFromDateToCurrentDate(startingDate);
  }

  /**
   * Calculate the number of years between a given date and the current date
   * @param {Date} date the date to substract to the current date
   */
  numberOfYearsFromDateToCurrentDate(date: Date): number {
    return new Date().getFullYear() - date.getFullYear();
  }
}
