import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { tap } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { MissionService } from '@core/services/mission.service';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DialogModule, MarkdownModule, SpinnerComponent],
  selector: 'cv-details',
  standalone: true,
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  private readonly markdownService: MarkdownService = inject(MarkdownService);
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly missionService: MissionService = inject(MissionService);
  private _isDialogDisplayed = false;
  private _selectedMission: Mission = {} as Mission;
  public isLoading = true;
  public innerFullMission = '';
  public innerLightMission = '';

  @Input()
  public get selectedMission(): Mission {
    return this._selectedMission;
  }
  public set selectedMission(value: Mission) {
    this._selectedMission = value;
  }
  @Input()
  public get isDialogDisplayed(): boolean {
    return this._isDialogDisplayed;
  }
  public set isDialogDisplayed(value: boolean) {
    this._isDialogDisplayed = value;
  }

  @Output() detailsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding(): void {
    this.isLoading = true;
    this.detailsChange.next(true);
  }

  /**
   * Parse the markdown contained in the selected mission file
   */
  onMissionLoading(): void {
    const fullMissionDescriptionUrl: string = this.missionService.missionFromDate(
      this._selectedMission?.startDate,
      'full',
    );
    this.markdownService
      .getSource(fullMissionDescriptionUrl)
      .pipe(tap(() => (this.innerLightMission = this._selectedMission.description ?? '')))
      .subscribe((fullMission: string): void => {
        this.innerFullMission = fullMission;
        this.isLoading = false;
        this.changeDetectorRef.markForCheck();
        document
          .querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')
          ?.classList.add('p-dialog-content-scroll');
      });
  }
}
