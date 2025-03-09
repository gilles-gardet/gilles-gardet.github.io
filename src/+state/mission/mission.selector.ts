import { createSelector } from '@ngrx/store';
import { AppState } from '@state/state';
import { MissionState } from '@state/mission/mission.state';

export const selectMissions = createSelector(
  (appState: AppState) => appState.missionState,
  (missionsState: MissionState) => missionsState.missions,
);

export const selectMission = createSelector(
  (appState: AppState) => appState.missionState,
  (missionsState: MissionState) => missionsState.selectedMission,
);

export const selectIsDialogDisplayed = createSelector(
  (appState: AppState) => appState.missionState,
  (missionState: MissionState) => missionState.isDialogDisplayed,
);