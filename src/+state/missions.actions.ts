import { createAction, props } from '@ngrx/store';
import { MissionsEntity } from './missions.models';

export const initMissions = createAction('[Missions Page] Init');

export const loadMissionsSuccess = createAction(
  '[Missions/API] Load Missions Success',
  props<{ missions: MissionsEntity[] }>(),
);

export const loadMissionsFailure = createAction('[Missions/API] Load Missions Failure', props<{ error: any }>());
