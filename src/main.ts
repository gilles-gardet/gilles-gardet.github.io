import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco, TranslocoOptions } from '@jsverse/transloco';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { appEffects, appStore } from '@state/state';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const translocoOptions: TranslocoOptions = {
  config: {
    availableLangs: ['fr', 'en'],
    defaultLang: 'fr',
    reRenderOnLangChange: true,
    prodMode: true,
  },
  loader: TranslocoHttpLoader,
};


enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideEffects(appEffects),
    provideHttpClient(withInterceptorsFromDi()),
    provideMarkdown(),
    provideRouter(routes),
    provideStore(appStore),
    provideTransloco(translocoOptions),
  ],
}).catch((err): void => console.error(err));
