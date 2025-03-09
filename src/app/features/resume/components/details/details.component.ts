import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, Signal } from '@angular/core';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { filter, switchMap, tap } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { MissionService } from '@core/services/mission.service';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { MissionActions } from '@state/mission/mission.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@state/state';
import { selectIsDialogDisplayed, selectMission } from '@state/mission/mission.selector';
import { Observable, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DialogModule, MarkdownModule, SpinnerComponent],
  selector: 'cv-details',
  standalone: true,
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  private readonly store: Store<AppState> = inject(Store);
  private readonly markdownService: MarkdownService = inject(MarkdownService);
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly missionService: MissionService = inject(MissionService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  protected isDialogDisplayed: Signal<boolean>;
  public isLoading = false;
  public clientMission = '';
  public timelapseMission = '';
  public innerFullMission = '';
  public innerLightMission = '';

  /**
   * @constructor
   */
  constructor() {
    this.isDialogDisplayed = this.store.selectSignal(selectIsDialogDisplayed);
    this.store
      .select(selectMission)
      .pipe(
        filter((mission: Mission | null): mission is Mission => !!mission),
        tap((mission: Mission): void => {
          this.isLoading = true;
          this.clientMission = mission.client ?? '';
          this.timelapseMission = mission.timelapse ?? '';
          this.innerLightMission = mission.description ?? '';
        }),
        switchMap(
          (mission: Mission): Observable<string> => of(this.missionService.missionFromDate(mission?.startDate, 'full')),
        ),
        switchMap((url: string): Observable<string> => this.markdownService.getSource(url)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((missionContent: string): void => this.onMissionLoading(missionContent));
  }

  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding(): void {
    this.store.dispatch(MissionActions.closeMissionDialog());
  }

  /**
   * Parse the markdown contained in the selected mission file
   */
  onMissionLoading(missionContent: string): void {
    this.innerFullMission = missionContent;
    this.isLoading = false;
    this.changeDetectorRef.markForCheck();
    document
      .querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')
      ?.classList.add('p-dialog-content-scroll');
  }

  /**
   * Handle the dialog visibility change.
   *
   * @param $event the dialog visibility change event
   */
  onDialogVisibilityChange($event: boolean): void {
    if (!$event) {
      this.store.dispatch(MissionActions.closeMissionDialog());
    }
  }
}
