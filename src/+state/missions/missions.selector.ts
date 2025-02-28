import { createSelector } from '@ngrx/store';
import { AppState } from '@state/state';
import { MissionsState } from '@state/missions/missions.state';

export const selectMissions = createSelector(
  (appState: AppState) => appState.missionsState,
  (missionsState: MissionsState) => missionsState.missions,
);