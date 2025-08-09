import { missionReducer } from './mission.reducer';
import { MissionActions } from './mission.actions';
import { MissionState } from './mission.state';
import { Mission } from '@core/models/mission.model';

describe('Mission Reducer', (): void => {
  const initialState: MissionState = {
    missions: [],
    selectedMission: null,
    isDialogDisplayed: false,
    loading: false,
    error: null,
  };

  const mockMission: Mission = {
    client: 'Test Company',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    timelapse: '12 months',
    description: 'Test description',
  };

  const mockMissions: Mission[] = [
    mockMission,
    {
      client: 'Another Company',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      timelapse: '12 months',
      description: 'Another description',
    },
  ];

  it('should have the correct initial state', (): void => {
    const state = missionReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('loadMissions', (): void => {
    it('should set loading to true', (): void => {
      const action = MissionActions.loadMissions();
      const state = missionReducer(initialState, action);
      expect(state).toEqual({
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: true,
        error: null,
      });
    });

    it('should preserve other state when setting loading', (): void => {
      const previousState: MissionState = {
        missions: mockMissions,
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: false,
        error: 'Previous error',
      };
      const action = MissionActions.loadMissions();
      const state = missionReducer(previousState, action);
      expect(state).toEqual({
        missions: mockMissions,
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: true,
        error: 'Previous error',
      });
    });
  });

  describe('loadMissionsSuccess', (): void => {
    it('should set missions and clear loading', (): void => {
      const loadingState: MissionState = {
        ...initialState,
        loading: true,
      };
      const action = MissionActions.loadMissionsSuccess({ missions: mockMissions });
      const state = missionReducer(loadingState, action);
      expect(state).toEqual({
        missions: mockMissions,
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      });
    });

    it('should replace existing missions', (): void => {
      const previousState: MissionState = {
        missions: [mockMission],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: true,
        error: null,
      };
      const newMissions = mockMissions.slice(1);
      const action = MissionActions.loadMissionsSuccess({ missions: newMissions });
      const state = missionReducer(previousState, action);
      expect(state.missions).toEqual(newMissions);
      expect(state.loading).toBe(false);
    });

    it('should handle empty missions array', (): void => {
      const action = MissionActions.loadMissionsSuccess({ missions: [] });
      const state = missionReducer(initialState, action);
      expect(state.missions).toEqual([]);
      expect(state.loading).toBe(false);
    });
  });

  describe('loadMissionsFailure', (): void => {
    it('should set error and clear loading', (): void => {
      const loadingState: MissionState = {
        ...initialState,
        loading: true,
      };
      const errorMessage = 'Failed to load missions';
      const action = MissionActions.loadMissionsFailure({ error: errorMessage });
      const state = missionReducer(loadingState, action);
      expect(state).toEqual({
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: errorMessage,
      });
    });

    it('should preserve existing missions on error', (): void => {
      const previousState: MissionState = {
        missions: mockMissions,
        selectedMission: null,
        isDialogDisplayed: false,
        loading: true,
        error: null,
      };
      const errorMessage = 'Network error';
      const action = MissionActions.loadMissionsFailure({ error: errorMessage });
      const state = missionReducer(previousState, action);
      expect(state.missions).toEqual(mockMissions);
      expect(state.error).toBe(errorMessage);
      expect(state.loading).toBe(false);
    });
  });

  describe('openMissionDialog', (): void => {
    it('should set selected mission and show dialog', (): void => {
      const action = MissionActions.openMissionDialog({ mission: mockMission });
      const state = missionReducer(initialState, action);
      expect(state).toEqual({
        missions: [],
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: false,
        error: null,
      });
    });

    it('should replace previous selected mission', (): void => {
      const previousState: MissionState = {
        missions: mockMissions,
        selectedMission: mockMissions[0],
        isDialogDisplayed: true,
        loading: false,
        error: null,
      };
      const newMission = mockMissions[1];
      const action = MissionActions.openMissionDialog({ mission: newMission });
      const state = missionReducer(previousState, action);
      expect(state.selectedMission).toBe(newMission);
      expect(state.isDialogDisplayed).toBe(true);
    });

    it('should preserve other state when opening dialog', (): void => {
      const previousState: MissionState = {
        missions: mockMissions,
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: 'Some error',
      };
      const action = MissionActions.openMissionDialog({ mission: mockMission });
      const state = missionReducer(previousState, action);
      expect(state.missions).toEqual(mockMissions);
      expect(state.error).toBe('Some error');
      expect(state.loading).toBe(false);
    });
  });

  describe('closeMissionDialog', (): void => {
    it('should clear selected mission and hide dialog', (): void => {
      const previousState: MissionState = {
        missions: mockMissions,
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: false,
        error: null,
      };
      const action = MissionActions.closeMissionDialog();
      const state = missionReducer(previousState, action);
      expect(state).toEqual({
        missions: mockMissions,
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      });
    });

    it('should work when dialog is already closed', (): void => {
      const action = MissionActions.closeMissionDialog();
      const state = missionReducer(initialState, action);
      expect(state.selectedMission).toBeNull();
      expect(state.isDialogDisplayed).toBe(false);
    });

    it('should preserve other state when closing dialog', (): void => {
      const previousState: MissionState = {
        missions: mockMissions,
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: true,
        error: 'Some error',
      };
      const action = MissionActions.closeMissionDialog();
      const state = missionReducer(previousState, action);
      expect(state.missions).toEqual(mockMissions);
      expect(state.loading).toBe(true);
      expect(state.error).toBe('Some error');
    });
  });

  describe('unknown action', (): void => {
    it('should return the current state for unknown actions', (): void => {
      const currentState: MissionState = {
        missions: mockMissions,
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: true,
        error: 'Error',
      };
      const unknownAction = { type: 'UNKNOWN_ACTION' };
      const state = missionReducer(currentState, unknownAction);
      expect(state).toBe(currentState);
    });
  });

  describe('state immutability', (): void => {
    it('should not mutate state on loadMissions', (): void => {
      const action = MissionActions.loadMissions();
      const newState = missionReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(initialState.loading).toBe(false);
    });

    it('should not mutate state on loadMissionsSuccess', (): void => {
      const action = MissionActions.loadMissionsSuccess({ missions: mockMissions });
      const newState = missionReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(initialState.missions).toEqual([]);
    });

    it('should not mutate state on openMissionDialog', (): void => {
      const action = MissionActions.openMissionDialog({ mission: mockMission });
      const newState = missionReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(initialState.selectedMission).toBeNull();
    });
  });
});
