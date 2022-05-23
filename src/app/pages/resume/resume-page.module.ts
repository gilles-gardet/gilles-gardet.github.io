import { NgModule } from '@angular/core';
import { ResumePageRoutingModule } from '@pages/resume/resume-page-routing.module';
import { ResumeModule } from '@features/resume/resume.module';

@NgModule({
  imports: [ResumeModule, ResumePageRoutingModule],
})
export class ResumePageModule {}
