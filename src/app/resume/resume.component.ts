import {AfterViewInit, Component} from '@angular/core';
import {of} from "rxjs";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {
  missions: any[] = [];
  tools: any[] = [];
  experience: Date = new Date(2013, 4);
  birthday: Date = new Date(1986, 5);

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
   */
  ngOnInit(): void {
    of(environment?.missions).subscribe(response => this.missions = response);
    of(environment?.tools).subscribe(response => this.tools = response);
  }

  /**
   * A lifecycle hook that is called after Angular has fully initialized a component's view
   */
  ngAfterViewInit(): void {
    const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      // trigger the animation on the intersection according to the side of the timeline event
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
            .forEach((element: Element) => element.classList.add('mission__animation-right'));
          entry.target.querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
            .forEach((element: Element) => element.classList.add('mission__animation-left'));
        } else {
          entry.target.querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
            .forEach((element: Element) => element.classList.remove('mission__animation-right'));
          entry.target.querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
            .forEach((element: Element) => element.classList.remove('mission__animation-left'));
        }
      })
    }, {
      threshold: 0
    });
    const experienceElement = document.querySelector('p-panel[header="Expérience"] .p-component .p-timeline-alternate');
    if (experienceElement) intersectionObserver.observe(experienceElement);
  }

  /**
   * Calculate the number of years between a given date and the current date
   * @param {Date} date the date to substract to the current date
   */
  numberOfYearsFromDateToCurrentDate(date: Date): number {
    return new Date().getFullYear() - date.getFullYear();
  }
}
