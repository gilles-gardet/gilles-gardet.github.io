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
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { missionsReducer } from '@state/missions/missions.reducer';
import { loadMissions } from '@state/missions/missions.effects';

enableProdMode();
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, MarkdownModule.forRoot()),
    provideEffects({ loadMissions }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideStore({ missionsState: missionsReducer }),
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
