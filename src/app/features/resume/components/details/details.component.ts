import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { EMPTY, forkJoin, Observable, Subject } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil, tap } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { EMPTY_STRING } from '@core/utils/string.utils';
import { TranslateService } from '@ngx-translate/core';
import { MissionService } from '@core/services/mission.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DialogModule, ProgressSpinnerModule],
  selector: 'cv-details',
  standalone: true,
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnDestroy {
  @Input() selectedMission: Mission = {} as Mission;
  @Input() displayDialog = false;
  @Output() detailsChange = new EventEmitter<boolean>();
  unsubscribe$ = new Subject();
  markdownService = inject(MarkdownService);
  changeDetectorRef = inject(ChangeDetectorRef);
  translateService = inject(TranslateService);
  missionService = inject(MissionService);
  loading = true;
  innerFullMission: string = EMPTY_STRING;
  innerLightMission: string = EMPTY_STRING;

  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding(): void {
    this.loading = true;
    this.detailsChange.next(true);
  }

  /**
   * Parse the markdown contained in the selected mission file
   */
  onMissionLoading(): void {
    const fullMission$: Observable<string> = this.markdownService.getSource(
      this.missionService.missionFromDate(this.selectedMission?.startDate, 'full')
    );
    const lightMission$: Observable<string> = this.markdownService.getSource(
      this.missionService.missionFromDate(this.selectedMission?.startDate, 'light')
    );
    forkJoin([lightMission$, fullMission$])
      .pipe(
        tap((values: string[]) => {
          this.innerLightMission = this.markdownService.parse(values[0]);
          this.innerFullMission = this.markdownService.parse(values[1]);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        setTimeout(() => {
          this.loading = false;
          this.changeDetectorRef.markForCheck();
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
    this.unsubscribe$.next(EMPTY);
    this.unsubscribe$.unsubscribe();
  }
}
