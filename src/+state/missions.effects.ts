import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as MissionsActions from './missions.actions';
import * as MissionsFeature from './missions.reducer';

@Injectable()
export class MissionsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MissionsActions.initMissions),
      switchMap(() => of(MissionsActions.loadMissionsSuccess({ missions: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(MissionsActions.loadMissionsFailure({ error }));
      }),
    ),
  );
}
