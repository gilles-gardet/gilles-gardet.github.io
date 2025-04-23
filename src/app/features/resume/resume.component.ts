import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { DetailsComponent } from '@features/resume/components/details/details.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DetailsComponent, HobbiesComponent, MissionsComponent, SkillsComponent, SummaryComponent],
  selector: 'cv-resume',
  styleUrl: './resume.component.scss',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {}
