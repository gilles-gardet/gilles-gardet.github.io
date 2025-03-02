import { inject } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { exhaustMap, Observable } from 'rxjs';
import { LanguageService } from '@core/services/language.service';
import { LanguageActions } from '@state/language/language.actions';
import { TranslocoService } from '@jsverse/transloco';
import { MissionActions } from '@state/mission/mission.actions';

export const loadLanguage = createEffect(
  (actions$ = inject(Actions), languageService: LanguageService = inject(LanguageService)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT, LanguageActions.loadLanguage),
      exhaustMap((): Observable<string> => languageService.getLanguage$()),
      map((language: string) => LanguageActions.updateLanguage({ language, loading: true })),
    );
  },
  { functional: true },
);

export const updateLanguage = createEffect(
  (
    actions$ = inject(Actions),
    languageService: LanguageService = inject(LanguageService),
    translocoService: TranslocoService = inject(TranslocoService),
  ) => {
    return actions$.pipe(
      ofType(LanguageActions.updateLanguage),
      tap(() => LanguageActions.updateLoader({ loading: true })),
      delay(500),
      switchMap(({ language }) =>
        languageService.setLanguage$(language).pipe(
          tap(() => translocoService.setActiveLang(language)),
          map(() => MissionActions.loadMissions()),
        ),
      ),
      map(() => LanguageActions.updateLoader({ loading: false })),
    );
  },
  { functional: true },
);
