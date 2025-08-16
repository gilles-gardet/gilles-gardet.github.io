import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HobbiesComponent } from '@features/hobbies/hobbies.component';
import { MissionsComponent } from '@features/missions/missions.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { SummaryComponent } from '@features/summary/summary.component';
import { DetailsComponent } from '@features/details/details.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DetailsComponent, HobbiesComponent, MissionsComponent, SkillsComponent, SummaryComponent],
  selector: 'cv-resume',
  styleUrl: './resume.component.scss',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {}
