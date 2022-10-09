import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@features/resume/components/resume/resume.component').then((module) => module.ResumeComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@features/resume/components/resume/resume.component').then((module) => module.ResumeComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
