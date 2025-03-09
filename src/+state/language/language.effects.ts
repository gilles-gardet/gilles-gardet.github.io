import { inject } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { bufferCount, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { exhaustMap, Observable } from 'rxjs';
import { LanguageService } from '@core/services/language.service';
import { LanguageActions } from '@state/language/language.actions';
import { TranslocoService } from '@jsverse/transloco';
import { MissionActions } from '@state/mission/mission.actions';
import { SkillActions } from '@state/skill/skill.actions';

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
      switchMap(({ language }) =>
        languageService.setLanguage$(language).pipe(
          tap(() => translocoService.setActiveLang(language)),
          concatMap(() => [MissionActions.loadMissions(), SkillActions.loadSkills()]),
        ),
      ),
    );
  },
  { functional: true },
);

export const updateLoaderAfterLoad = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(
        MissionActions.loadMissionsSuccess,
        MissionActions.loadMissionsFailure,
        SkillActions.loadSkillsSuccess,
        SkillActions.loadSkillsFailure,
      ),
      bufferCount(2), // wait for both resources to complete loading
      map(() => LanguageActions.updateLoader({ loading: false })),
    );
  },
  { functional: true },
);
