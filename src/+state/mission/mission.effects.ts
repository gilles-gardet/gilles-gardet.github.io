import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MissionService } from '@core/services/mission.service';
import { Mission } from '@core/models/mission.model';
import { MissionActions } from '@state/mission/mission.actions';

export const loadMissions = createEffect(
  (actions$ = inject(Actions), missionService = inject(MissionService)) => {
    return actions$.pipe(
      ofType(MissionActions.loadMissions),
      exhaustMap(() => missionService.fetchMissions$()),
      map((missions: Mission[]) => MissionActions.loadMissionsSuccess({ missions })),
      catchError((error) => of(MissionActions.loadMissionsFailure({ error: error.message }))),
    );
  },
  { functional: true },
);
