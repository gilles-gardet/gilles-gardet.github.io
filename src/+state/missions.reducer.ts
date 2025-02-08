import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MissionsActions from './missions.actions';
import { MissionsEntity } from './missions.models';

export const MISSIONS_FEATURE_KEY = 'missions';

export interface MissionsState extends EntityState<MissionsEntity> {
  selectedId?: string | number; // which Missions record has been selected
  loaded: boolean; // has the Missions list been loaded
  error?: string | null; // last known error (if any)
}

export interface MissionsPartialState {
  readonly [MISSIONS_FEATURE_KEY]: MissionsState;
}

export const missionsAdapter: EntityAdapter<MissionsEntity> = createEntityAdapter<MissionsEntity>();

export const initialMissionsState: MissionsState = missionsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialMissionsState,
  on(MissionsActions.initMissions, (state) => ({ ...state, loaded: false, error: null })),
  on(MissionsActions.loadMissionsSuccess, (state, { missions }) =>
    missionsAdapter.setAll(missions, { ...state, loaded: true }),
  ),
  on(MissionsActions.loadMissionsFailure, (state, { error }) => ({ ...state, error })),
);

export function missionsReducer(state: MissionsState | undefined, action: Action) {
  return reducer(state, action);
}
