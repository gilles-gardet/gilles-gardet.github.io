import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output
} from "@angular/core";
import { forkJoin, Observable, Subject } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

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
  private _unsubscribe$ = new Subject();
  markdownService = inject(MarkdownService);
  changeDetectorRef = inject(ChangeDetectorRef);
  loading = true;
  innerFullMission: string = '';
  innerLightMission: string = '';

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
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((value) => {
        this.innerLightMission = this.markdownService.parse(value.lightMission);
        this.innerFullMission = this.markdownService.parse(value.fullMission);
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
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
