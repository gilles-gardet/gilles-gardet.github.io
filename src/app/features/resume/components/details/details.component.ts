import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { tap } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { EMPTY_STRING } from '@core/utils/string.utils';
import { MissionService } from '@core/services/mission.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DialogModule, ProgressSpinnerModule],
  selector: 'cv-details',
  standalone: true,
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  private readonly markdownService: MarkdownService = inject(MarkdownService);
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly missionService: MissionService = inject(MissionService);
  protected _displayDialog = false;
  protected _selectedMission: Mission = {} as Mission;
  protected loading = true;
  protected innerFullMission: string = EMPTY_STRING;
  protected innerLightMission: string = EMPTY_STRING;

  @Input()
  public get selectedMission(): Mission {
    return this._selectedMission;
  }
  public set selectedMission(value: Mission) {
    this._selectedMission = value;
  }
  @Input()
  public get displayDialog(): boolean {
    return this._displayDialog;
  }
  public set displayDialog(value: boolean) {
    this._displayDialog = value;
  }

  @Output() detailsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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
      this.missionService.missionFromDate(this._selectedMission?.startDate, 'full'),
    );
    const lightMission$: Observable<string> = this.markdownService.getSource(
      this.missionService.missionFromDate(this._selectedMission?.startDate, 'light'),
    );
    forkJoin([lightMission$, fullMission$])
      .pipe(
        tap((values: string[]): void => {
          this.innerLightMission = this.markdownService.parse(values[0]);
          this.innerFullMission = this.markdownService.parse(values[1]);
        }),
      )
      .subscribe((): void => {
        setTimeout((): void => {
          this.loading = false;
          this.changeDetectorRef.markForCheck();
          document
            .querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')
            ?.classList.add('p-dialog-content-scroll');
        }, 600);
      });
  }
}
