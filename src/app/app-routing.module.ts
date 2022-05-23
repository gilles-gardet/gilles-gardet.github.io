import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@pages/resume/resume-page.module').then((module) => module.ResumePageModule),
  },
  {
    path: '**',
    loadChildren: () => import('@pages/resume/resume-page.module').then((module) => module.ResumePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
