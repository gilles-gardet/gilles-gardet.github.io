import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SkillsActions } from '@state/skills/skills.actions';
import { Skill } from '@core/models/skill.model';
import { SkillService } from '@core/services/skill.service';

export const loadSkills = createEffect(
  (actions$ = inject(Actions), skillService: SkillService = inject(SkillService)) => {
    return actions$.pipe(
      ofType(SkillsActions.loadSkills),
      exhaustMap(() => skillService.fetchSkills$()),
      map((skills: Skill[]) => SkillsActions.loadSkillsSuccess({ skills })),
      catchError((error) => of(SkillsActions.loadSkillsFailure({ error: error.message }))),
    );
  },
  { functional: true },
);
