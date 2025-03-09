import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Mission } from '@core/models/mission.model';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { ThemeService } from '@core/services/theme.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DetailsComponent, HobbiesComponent, MissionsComponent, SkillsComponent, SummaryComponent],
  selector: 'cv-resume',
  standalone: true,
  styleUrls: ['./resume.component.scss'],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {
  private readonly themeService: ThemeService = inject(ThemeService);
  protected selectedMission: Mission = {} as Mission;
  protected displayDialog = false;

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.themeService.setLoading$(true);
  }
}
