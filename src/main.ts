import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import * as fromMissions from './+state/missions.reducer';
import { MissionsEffects } from './+state/missions.effects';
import { provideRouter } from '@angular/router';

enableProdMode();
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, MarkdownModule.forRoot()),
    provideEffects(MissionsEffects),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideState(fromMissions.MISSIONS_FEATURE_KEY, fromMissions.missionsReducer),
    provideStore(),
    provideTransloco({
      config: {
        availableLangs: ['fr', 'en'],
        defaultLang: 'fr',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
}).catch((err) => console.error(err));
