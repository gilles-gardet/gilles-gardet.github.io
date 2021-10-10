import { AfterViewInit, Component } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements AfterViewInit {
  missions: any[] = [];
  tools: any[] = [];
  selectedMission: any = null;
  experience: Date = new Date(2013, 4);
  displayDialog = false;
  loading = false;
  clones: any[] = [];

  /**
   * Constructor
   *
   * @param httpClient the HTTP client to be injected as a dependency
   * @param markdownService the markdown service to be injected as a dependency
   */
  constructor(private httpClient: HttpClient, private markdownService: MarkdownService) {
    // empty
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
   */
  ngOnInit(): void {
    of(environment?.missions).subscribe((response) => (this.missions = response));
    of(environment?.tools).subscribe((response) => {
      this.tools = response;
      this.clones = response;
      this.tools = this.tools.map((tool) => ({ name: tool.name, rate: 0 }));
    });
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
    return `/assets/missions/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
  }

  /**
   * A lifecycle hook that is called after Angular has fully initialized a component's view
   */
  ngAfterViewInit(): void {
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        // trigger the animation on the intersection according to the side of the timeline event
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
              .forEach((element: Element) => element.classList.add('mission__animation-right'));
            entry.target
              .querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
              .forEach((element: Element) => element.classList.add('mission__animation-left'));
          } else {
            entry.target
              .querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
              .forEach((element: Element) => element.classList.remove('mission__animation-right'));
            entry.target
              .querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
              .forEach((element: Element) => element.classList.remove('mission__animation-left'));
          }
        });
      },
      {
        threshold: 0,
      }
    );
    const experienceElement = document.querySelector('p-panel[header="Expérience"] .p-component .p-timeline-alternate');
    if (experienceElement) intersectionObserver.observe(experienceElement);
    const rateIntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            this.tools.forEach((tool) => (tool.rate = this.clones.find((clone) => clone.name === tool.name).rate));
          } else {
            this.tools = this.tools.map((tool) => ({ name: tool.name, rate: 0 }));
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
   * Event catched when the markdown service has finished to parsed the file
   */
  onLoad(): void {
    this.loading = false;
  }

  /**
   * Event catched when the markdown service has started to parsed the file
   */
  onReady(): void {
    this.loading = true;
  }
}
