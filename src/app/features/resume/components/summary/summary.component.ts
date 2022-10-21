import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PanelModule, SharedModule],
  selector: 'portfolio-summary',
  standalone: true,
  styleUrls: ['./summary.component.scss'],
  templateUrl: './summary.component.html',
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
