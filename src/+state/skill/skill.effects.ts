import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SkillActions } from '@state/skill/skill.actions';
import { Skill } from '@core/models/skill.model';
import { SkillService } from '@core/services/skill.service';

export const loadSkills = createEffect(
  (actions$ = inject(Actions), skillService: SkillService = inject(SkillService)) => {
    return actions$.pipe(
      ofType(SkillActions.loadSkills),
      exhaustMap(() => skillService.fetchSkills$()),
      map((skills: Skill[]) => SkillActions.loadSkillsSuccess({ skills })),
      catchError((error) => of(SkillActions.loadSkillsFailure({ error: error.message }))),
    );
  },
  { functional: true },
);
