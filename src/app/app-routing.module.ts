import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPTY_STRING } from "@core/utils/string.utils";

const routes: Routes = [
  {
    path: EMPTY_STRING,
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
