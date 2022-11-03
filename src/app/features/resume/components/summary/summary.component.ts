import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PanelModule, SharedModule, TranslateModule],
  selector: 'cv-summary',
  standalone: true,
  styleUrls: ['./summary.component.scss'],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  yearsOfExperience = 0;

  constructor() {
    const startingDate = new Date(2013, 4);
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
