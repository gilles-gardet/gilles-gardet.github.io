import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MissionService } from '@core/services/mission.service';
import { SkillsActions } from '@state/skills/skills.actions';
import { Skill } from '@core/models/skill.model';

export const loadSkills = createEffect(
  (actions$ = inject(Actions), missionService = inject(MissionService)) => {
    return actions$.pipe(
      ofType(SkillsActions.loadSkills),
      exhaustMap(() => missionService.fetchSkills$()),
      map((skills: Skill[]) => SkillsActions.loadSkillsSuccess({ skills })),
      catchError((error) => of(SkillsActions.loadSkillsFailure({ error: error.message }))),
    );
  },
  { functional: true },
);
