import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject, zip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';
import { map, takeUntil } from 'rxjs/operators';
import missions from '@assets/resume/missions.json';
import tools from '@assets/resume/tools.json';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, AfterViewInit, OnDestroy {
  private _unsubscribe$ = new Subject();
  screenWidth: any;
  selectedMission: any = null;
  missions: any[] = [];
  tools: any[] = [];
  clones: any[] = [];
  displayDialog = false;
  loading = true;
  innerFullMission: string = '';
  innerLightMission: string = '';
  experience: Date = new Date(2013, 4);

  /**
   * Constructor
   *
   * @param httpClient the HTTP client to be injected as a dependency
   * @param markdownService the markdown service to be injected as a dependency
   */
  constructor(private httpClient: HttpClient, private markdownService: MarkdownService) {
    // of(tools).subscribe((result) => (this.tools = result.map((tool) => ({ name: tool.name, rate: 0 }))));
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    const missions$ = of(missions);
    const tools$ = of(tools);
    zip(missions$, tools$)
      .pipe(map(([missions, tools]: [any, any]) => ({ missions, tools })))
      .subscribe((result: { missions: any[]; tools: any[] }) => {
        this.missions = result.missions;
        this.tools = result.tools;
        this.clones = result.tools;
        this.tools = result.tools.map((tool) => ({ name: tool.name, rate: 0 }));
      });
    this.screenWidth = window.innerWidth;
  }

  /**
   * Listen for the screen size changes and keep track of these sizes
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.screenWidth = window.innerWidth;
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
   * A lifecycle hook that is called after Angular has fully initialized a component's view
   */
  ngAfterViewInit(): void {
    this._animateSkillsOnView();
    this._animateMissionsOnView();
  }

  /**
   * Animate the skills bar when visible on screen
   */
  private _animateSkillsOnView(): void {
    const rateIntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            this.tools.forEach((tool) => (tool.rate = this.clones.find((clone) => clone.name === tool.name).rate));
          }
        });
      },
      {
        threshold: 0,
      }
    );
    const rateElement = document.querySelector('p-panel[header="Langages et outils"] .p-component');
    if (rateElement) rateIntersectionObserver.observe(rateElement);
  }

  /**
   * Animate the missions cards when visible on screen
   */
  private _animateMissionsOnView(): void {
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        // trigger the animation on the intersection according to the side of the timeline event
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            if (this.screenWidth > 960) {
              entry.target
                .querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
                .forEach((element: Element) => element.classList.add('mission__animation-right'));
              entry.target
                .querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
                .forEach((element: Element) => element.classList.add('mission__animation-left'));
            } else {
              entry.target
                .querySelectorAll('.p-timeline-event-content')
                .forEach((element: Element) => element.classList.add('mission__animation-right'));
            }
          }
        });
      },
      {
        threshold: 0,
      }
    );
    const experienceElements = document.querySelectorAll(
      'p-panel[header="Expérience"] .p-component .p-timeline-alternate .p-timeline-event'
    );
    experienceElements.forEach((experienceElement) => {
      intersectionObserver.observe(experienceElement);
    });
  }

  /**
   * Calculate the number of years between a given date and the current date
   * @param {Date} date the date to substract to the current date
   */
  numberOfYearsFromDateToCurrentDate(date: Date): number {
    return new Date().getFullYear() - date.getFullYear();
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
    const addTwoDigits = (number: number): string => {
      if (number < 10) {
        return `0${number}`;
      }
      return `${number}`;
    };
    return `${addTwoDigits(date.getDay() + 1)}/${addTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  /**
   * Calculate the mission duration
   *
   * @param {string} start the date (string) on which the mission started
   * @param {string} end the date (string) on which the mission ended
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
  openDialog(mission: any): void {
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
