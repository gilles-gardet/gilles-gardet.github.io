import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Mission } from '@core/models/mission.model';
import { MarkdownModule } from 'ngx-markdown';
import { TranslocoDirective } from '@jsverse/transloco';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { selectMissions } from '@state/mission/mission.selector';
import { Store } from '@ngrx/store';
import { AppState } from '@state/state';
import { MissionActions } from '@state/mission/mission.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownModule, PanelComponent, SlideButtonComponent, TranslocoDirective],
  selector: 'cv-missions',
  styleUrl: './missions.component.scss',
  templateUrl: './missions.component.html',
})
export class MissionsComponent implements AfterViewInit, OnInit, OnDestroy {
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly store: Store<AppState> = inject(Store);
  private intersectionObserver?: IntersectionObserver;
  private markdownReadyCount = 0;
  private expectedMarkdownCount = 0;
  protected screenWidth = 0;
  protected missions?: Mission[];

  @Output() openDialog: EventEmitter<Mission> = new EventEmitter<Mission>();
  @ViewChildren('missionElement') missionElements?: QueryList<ElementRef<HTMLElement>>;

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
    this.store
      .select(selectMissions)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((missions: Mission[]): void => {
        this.missions = missions;
        this.expectedMarkdownCount = missions.length;
        this.markdownReadyCount = 0;
        this.changeDetectorRef.markForCheck();
      });
  }

  /**
   * Listen for the screen size changes and keep track of these sizes
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.screenWidth = window.innerWidth;
  }

  /**
   * Animate the mission cards when visible on screen.
   * Called when all markdown elements are ready (parsed and rendered).
   */
  protected onMarkdownReady(): void {
    this.markdownReadyCount++;
    if (this.markdownReadyCount === this.expectedMarkdownCount) {
      this._animateMissionsOnView();
    }
  }

  private _animateMissionsOnView(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    this.intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => this._manageAnimationOnElement(entry));
      },
      {
        threshold: 0,
      },
    );
    // use ViewChildren reference first, then fallback to document.querySelectorAll
    let experienceElements: (Element | HTMLElement)[];
    if (this.missionElements && this.missionElements.length > 0) {
      experienceElements = this.missionElements.toArray().map((el) => el.nativeElement);
    } else {
      experienceElements = Array.from(document.querySelectorAll('cv-panel#experience .timeline__event'));
    }
    experienceElements.forEach((experienceElement: Element | HTMLElement): void => {
      if (experienceElement) {
        this.intersectionObserver?.observe(experienceElement);
      }
    });
  }

  /**
   * Trigger the animation on the intersection according to the side of the timeline event.
   *
   * @param intersectionObserverEntry the intersection observer intersectionObserverEntry
   * @private
   */
  private _manageAnimationOnElement(intersectionObserverEntry: IntersectionObserverEntry): void {
    if (!intersectionObserverEntry.isIntersecting || !this.screenWidth) {
      return;
    }
    if (this.screenWidth > 960) {
      intersectionObserverEntry.target
        .querySelectorAll(':nth-child(2n + 1) > .timeline__event-content')
        .forEach((element: Element) => element.classList.add('mission__animation-right'));
      intersectionObserverEntry.target
        .querySelectorAll(':nth-child(2n) > .timeline__event-content')
        .forEach((element: Element) => element.classList.add('mission__animation-left'));
    } else {
      intersectionObserverEntry.target
        .querySelectorAll('.timeline__event-content')
        .forEach((element: Element) => element.classList.add('mission__animation-right'));
    }
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Open the details dialog
   */
  protected emitOpenMissionDialog(mission: Mission): void {
    this.store.dispatch(MissionActions.openMissionDialog({ mission }));
  }

  /**
   * Clean up intersection observer on component destruction
   */
  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
