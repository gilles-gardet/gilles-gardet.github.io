import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, of, Subject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPTY_STRING } from '@core/utils/string.utils';
import { Mission } from '@core/models/mission.model';
import { Skill } from '@core/models/skill.model';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { SharedModule } from '@shared/shared.module';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { TranslateService } from '@ngx-translate/core';
import { MissionService } from '@core/services/mission.service';
import missions from '@assets/resume/missions.json';
import skills from '@assets/resume/skills.json';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DetailsComponent, HobbiesComponent, MissionsComponent, SharedModule, SkillsComponent, SummaryComponent],
  selector: 'cv-resume',
  standalone: true,
  styleUrls: ['./resume.component.scss'],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit, OnDestroy {
  translateService = inject(TranslateService);
  missionService = inject(MissionService);
  unsubscribe$ = new Subject();
  selectedMission: Mission = {} as Mission;
  missions: Mission[] = [];
  skills: Skill[] = [];
  clones: Skill[] = [];
  displayDialog = false;

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    const missions$ = of(missions as Mission[]);
    const skills$ = of(skills as Skill[]);
    zip(missions$, skills$)
      .pipe(map(([missions, skills]: [Mission[], Skill[]]) => ({ missions, skills })))
      .subscribe((result: { missions: Mission[]; skills: Skill[] }) => {
        this.missions = result.missions.map((mission) => {
          return {
            ...mission,
            timelapse: this.missionTimelapse(mission.startDate, mission.endDate),
            description: this.missionService.missionFromDate(mission.startDate, 'light'),
          };
        });
        this.skills = result.skills;
        this.clones = result.skills;
        this.skills = result.skills.map((skill) => ({ name: skill.name, rate: 0 }));
      });
  }

  /**
   * Construct the date to timelapse to be displayed on a mission
   *
   * @param start the date (string) on which the mission started
   * @param end the date (string) on which the mission ended
   * @return the label representing the mission timelapse
   */
  missionTimelapse(start: string, end?: string): string {
    if (end)
      return `${this.formatDate(new Date(start))} - ${this.formatDate(new Date(end))} (${this.missionDuration(
        start,
        end,
      )})`;
    const onGoingLabel = this.translateService.currentLang === 'fr' ? 'en cours' : 'ongoing';
    return `${this.formatDate(new Date(start))} - ${onGoingLabel} (${this.missionDuration(start, end)})`;
  }

  /**
   * Format the given date and return it as a string
   *
   * @param date the date
   * @return the formated date
   */
  formatDate(date: Date): string {
    const addTwoDigits = (number: number): string => (number < 10 ? `0${number}` : `${number}`);
    return `${addTwoDigits(date.getDate())}/${addTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  /**
   * Calculate the mission duration
   *
   * @param {string} start the date on which the mission started
   * @param {string} end the date on which the mission ended
   * @return label representing the mission duration
   */
  missionDuration(start: string, end?: string): string {
    const startTimestamp = Date.parse(start);
    const startDate = new Date(startTimestamp);
    const { yearLabel, monthLabel, andLabel } = this.getTranslatedLabels();
    let endDate = new Date(Date.now());
    if (end) {
      const endTimestamp = Date.parse(end);
      endDate = new Date(endTimestamp);
    }
    let monthsBetweenDates: number = this.monthBetweenDates(startDate, endDate);
    if (monthsBetweenDates > 12 && monthsBetweenDates % 12 > 0) {
      const years = Math.trunc(monthsBetweenDates / 12);
      const months = monthsBetweenDates % 12;
      return `${years} ${yearLabel}${years > 1 ? 's' : EMPTY_STRING} ${andLabel} ${months} ${monthLabel}`;
    }
    if (monthsBetweenDates % 12 === 0) {
      const years = Math.trunc(monthsBetweenDates / 12);
      return `${years} ${yearLabel}${years > 1 ? 's' : EMPTY_STRING}`;
    }
    return `${monthsBetweenDates} ${monthLabel}`;
  }

  /**
   * Get the translated labels used on the mission's subheader to display the duration of this mission.
   *
   * @return the translated labels
   */
  private getTranslatedLabels(): { yearLabel: string; monthLabel: string; andLabel: string } {
    if (this.translateService.currentLang === 'fr') {
      return { yearLabel: 'an', monthLabel: 'mois', andLabel: 'et' };
    }
    return { yearLabel: 'year', monthLabel: 'months', andLabel: 'and' };
  }

  /**
   * Calculate the number of month between two dates
   *
   * @param {Date} start the starting date
   * @param {Date} end the ending date
   * @return number representing the number of months
   */
  monthBetweenDates(start: Date, end: Date): number {
    let months: number;
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    return months <= 0 ? 0 : months;
  }

  /**
   * Change the close dialog flag when the details' dialog component was closed from itself.
   */
  onDetailsClose() {
    this.displayDialog = false;
  }

  /**
   * Open the details dialog
   */
  openDialog(mission: Mission): void {
    this.displayDialog = true;
    this.selectedMission = mission;
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next(EMPTY);
    this.unsubscribe$.unsubscribe();
  }
}
