import { createReducer, on } from '@ngrx/store';
import { MissionsActions } from './missions.actions';
import { MissionsState } from './missions.state';

const initialState: MissionsState = {
  missions: [],
  selectedMission: null,
  loading: false,
  error: null,
};

export const missionsReducer = createReducer(
  initialState,
  on(MissionsActions.loadMissions, (state) => ({
    ...state,
    loading: true,
  })),
  on(MissionsActions.loadMissionsSuccess, (state, { missions }) => ({
    ...state,
    missions,
    loading: false,
  })),
  on(MissionsActions.loadMissionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(MissionsActions.selectMission, (state, { mission }) => ({
    ...state,
    selectedMission: mission,
  }))
);