import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject, zip } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { map, takeUntil } from 'rxjs/operators';
import missions from '@assets/resume/missions.json';
import skills from '@assets/resume/skills.json';
import { Mission } from '@core/models/mission.model';
import { Skill } from '@core/models/skill.model';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, OnDestroy {
  private _unsubscribe$ = new Subject();
  selectedMission: Mission = {} as Mission;
  missions: Mission[] = [];
  skills: Skill[] = [];
  clones: Skill[] = [];
  displayDialog = false;
  loading = true;
  innerFullMission: string = '';
  innerLightMission: string = '';

  /**
   * Constructor
   */
  constructor(private markdownService: MarkdownService) {}

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
            description: this.missionFromDate(mission.startDate, 'light'),
          };
        });
        this.skills = result.skills;
        this.clones = result.skills;
        this.skills = result.skills.map((skill) => ({ name: skill.name, rate: 0 }));
      });
  }

  /**
   * Listen for the page scroll in order to display a reading indicator
   */
  @HostListener('window:scroll', ['$event'])
  onPageScroll(): void {
    const scrollTracker: any = document.getElementById('scroll-tracker');
    let scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    let progressWidth = (scrollDistance / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
    scrollTracker!.style.width = progressWidth + '%';
  }

  /**
   * Retrieve the mission from the passed date
   *
   * @param startingDate the starting date of the mission
   * @param type the type of mardown file to fetch
   * @return description the mission description we want to display
   */
  missionFromDate(startingDate: string, type: string): string {
    const date = new Date(startingDate);
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    return `/assets/resume/missions/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
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
        end
      )})`;
    return `${this.formatDate(new Date(start))} - en cours (${this.missionDuration(start, end)})`;
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
    let endDate = new Date(Date.now());
    if (end) {
      const endTimestamp = Date.parse(end);
      endDate = new Date(endTimestamp);
    }
    if (this.monthBetweenDates(startDate, endDate) > 12 && this.monthBetweenDates(startDate, endDate) % 12 > 0) {
      const years = Math.trunc(this.monthBetweenDates(startDate, endDate) / 12);
      const months = this.monthBetweenDates(startDate, endDate) % 12;
      return `${years} an${years > 1 ? 's' : ''} et ${months} mois`;
    }
    return `${this.monthBetweenDates(startDate, endDate)} mois`;
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
   * Open the details dialog
   */
  openDialog(mission: Mission): void {
    this.displayDialog = true;
    this.selectedMission = mission;
  }

  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding(): void {
    this.loading = true;
  }

  /**
   * Parse the markdown contained in the selected mission file
   */
  onMissionLoading(): void {
    const fullMission: Observable<string> = this.markdownService.getSource(
      this.missionFromDate(this.selectedMission?.startDate, 'full')
    );
    const lightMission: Observable<string> = this.markdownService.getSource(
      this.missionFromDate(this.selectedMission?.startDate, 'light')
    );
    forkJoin({ lightMission, fullMission })
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((value) => {
        this.innerLightMission = this.markdownService.compile(value.lightMission);
        this.innerFullMission = this.markdownService.compile(value.fullMission);
        setTimeout(() => {
          this.loading = false;
          document
            .querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')
            ?.classList.add('p-dialog-content-scroll');
        }, 600);
      });
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
