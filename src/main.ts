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
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import Material from '@primeng/themes/material';

const translocoOptions: TranslocoOptions = {
  config: {
    availableLangs: ['fr', 'en'],
    defaultLang: 'fr',
    reRenderOnLangChange: true,
    prodMode: true,
  },
  loader: TranslocoHttpLoader,
};

const Preset = definePreset(Material, {
  semantic: {
    primary: {
      0: '#ffffff',
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}',
    },
  },
});

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
    providePrimeNG({
      theme: {
        preset: Preset,
      },
    }),
  ],
}).catch((err): void => console.error(err));
