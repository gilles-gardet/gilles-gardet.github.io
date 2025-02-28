import { inject } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MissionService } from '@core/services/mission.service';
import { Mission } from '@core/models/mission.model';
import { MissionsActions } from '@state/missions/missions.actions';

export const loadMissions = createEffect(
  (actions$ = inject(Actions), missionService = inject(MissionService)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT, MissionsActions.loadMissions),
      exhaustMap(() => missionService.fetchMissions$()),
      map((missions: Mission[]) => MissionsActions.loadMissionsSuccess({ missions })),
      catchError((error) => of(MissionsActions.loadMissionsFailure({ error: error.message }))),
    );
  },
  { functional: true },
);
