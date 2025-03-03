import { inject } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ThemeService } from '@core/services/theme.service';
import { ThemeActions } from '@state/theme/theme.actions';
import { Theme } from '@state/theme/theme.state';
import { exhaustMap, Observable } from 'rxjs';

export const loadTheme = createEffect(
  (actions$ = inject(Actions), themeService: ThemeService = inject(ThemeService)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT, ThemeActions.loadTheme),
      exhaustMap((): Observable<Theme> => themeService.getTheme$()),
      map((theme: Theme) => ThemeActions.updateTheme({ theme })),
    );
  },
  { functional: true },
);

export const updateTheme = createEffect(
  (actions$ = inject(Actions), themeService: ThemeService = inject(ThemeService)) => {
    return actions$.pipe(
      ofType(ThemeActions.updateTheme),
      exhaustMap(({ theme }) => themeService.setTheme$(theme)),
    );
  },
  { functional: true, dispatch: false },
);
