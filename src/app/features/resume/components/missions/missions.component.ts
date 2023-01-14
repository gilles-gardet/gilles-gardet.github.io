import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Mission } from '@core/models/mission.model';
import { PanelModule } from 'primeng/panel';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { SharedModule } from '@shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, MarkdownModule, PanelModule, SharedModule, TimelineModule, TranslateModule],
  selector: 'cv-missions',
  standalone: true,
  styleUrls: ['./missions.component.scss'],
  templateUrl: './missions.component.html',
})
export class MissionsComponent implements OnInit, AfterViewInit {
  @Input() missions: Mission[] = [];
  @Output() openDialog = new EventEmitter<Mission>();

  screenWidth: number | undefined;

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  /**
   * @inheritDoc
   */
  ngAfterViewInit(): void {
    this._animateMissionsOnView();
  }

  /**
   * Listen for the screen size changes and keep track of these sizes
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.screenWidth = window.innerWidth;
  }

  /**
   * Animate the missions cards when visible on screen
   */
  private _animateMissionsOnView(): void {
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        // trigger the animation on the intersection according to the side of the timeline event
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (!entry.isIntersecting) {
            return;
          }
          if (!this.screenWidth) {
            return;
          }
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
        });
      },
      {
        threshold: 0,
      }
    );
    const experienceElements = document.querySelectorAll(
      'p-panel#experience .p-component .p-timeline-alternate .p-timeline-event'
    );
    experienceElements.forEach((experienceElement) => {
      intersectionObserver.observe(experienceElement);
    });
  }

  /**
   * Open the details dialog
   */
  emitOpenMissionDialog(mission: Mission): void {
    this.openDialog.emit(mission);
  }
}
