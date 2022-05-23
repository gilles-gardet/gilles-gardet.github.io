import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumePageRoutingModule {}
