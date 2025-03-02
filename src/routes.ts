import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@features/resume/resume.component').then((module) => module.ResumeComponent),
  },
  {
    path: '**',
    loadComponent: () => import('@features/resume/resume.component').then((module) => module.ResumeComponent),
  },
];
