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
import { forkJoin, Observable, Subject } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil, tap } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { EMPTY_STRING } from '@core/utils/string.utils';
import { TranslateService } from "@ngx-translate/core";

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
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  unsubscribe$ = new Subject();
  markdownService = inject(MarkdownService);
  changeDetectorRef = inject(ChangeDetectorRef);
  translateService = inject(TranslateService);
  loading = true;
  innerFullMission: string = EMPTY_STRING;
  innerLightMission: string = EMPTY_STRING;

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
    const language = this.translateService.currentLang;
    return `/assets/resume/missions/${language}/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
  }

  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding(): void {
    this.loading = true;
    this.close.next(true);
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
      .pipe(
        takeUntil(this.unsubscribe$),
        tap((value: any) => {
          this.innerLightMission = this.markdownService.parse(value.lightMission);
          this.innerFullMission = this.markdownService.parse(value.fullMission);
        })
      )
      .subscribe(() => {
        setTimeout(() => {
          this.loading = false;
          this.changeDetectorRef.detectChanges();
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
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
