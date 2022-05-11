import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '@shared/shared.module';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';

@NgModule({
  declarations: [HobbiesComponent, MissionsComponent, ResumeComponent, SkillsComponent, SummaryComponent],
  imports: [
    CardModule,
    CommonModule,
    DialogModule,
    MarkdownModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SharedModule,
    TagModule,
    TimelineModule,
  ],
  exports: [ResumeComponent],
})
export class ResumeModule {}
