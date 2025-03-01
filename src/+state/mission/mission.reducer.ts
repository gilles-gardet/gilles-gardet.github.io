import { createReducer, on } from '@ngrx/store';
import { MissionActions } from './mission.actions';
import { MissionState } from './mission.state';

const initialState: MissionState = {
  missions: [],
  selectedMission: null,
  loading: false,
  error: null,
};

export const missionReducer = createReducer(
  initialState,
  on(MissionActions.loadMissions, (state) => ({
    ...state,
    loading: true,
  })),
  on(MissionActions.loadMissionsSuccess, (state, { missions }) => ({
    ...state,
    missions,
    loading: false,
  })),
  on(MissionActions.loadMissionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(MissionActions.selectMission, (state, { mission }) => ({
    ...state,
    selectedMission: mission,
  })),
);
