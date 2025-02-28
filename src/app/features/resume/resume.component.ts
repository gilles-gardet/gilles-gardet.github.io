import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Mission } from '@core/models/mission.model';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { ConfigService } from '@core/services/config.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DetailsComponent, HobbiesComponent, MissionsComponent, SkillsComponent, SummaryComponent],
  selector: 'cv-resume',
  standalone: true,
  styleUrls: ['./resume.component.scss'],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {
  private readonly configService: ConfigService = inject(ConfigService);
  protected selectedMission: Mission = {} as Mission;
  protected displayDialog = false;

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.configService.setLoading$(true);
  }

  /**
   * Change the close dialog flag when the details' dialog component was closed from itself.
   */
  onDetailsClose(): void {
    this.displayDialog = false;
  }

  /**
   * Open the details dialog
   */
  openDialog(mission: Mission): void {
    this.displayDialog = true;
    this.selectedMission = mission;
  }
}
