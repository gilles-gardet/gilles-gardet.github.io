import { Route } from '@angular/router';
import { EMPTY_STRING } from '@core/utils/string.utils';

export const routes: Route[] = [
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
