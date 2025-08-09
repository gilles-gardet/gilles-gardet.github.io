import { MissionState } from './mission.state';
import { Mission } from '@core/models/mission.model';

describe('MissionState', (): void => {
  const mockMission: Mission = {
    client: 'Test Company',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    timelapse: '12 months',
    description: 'Test description',
  };

  describe('interface structure', (): void => {
    it('should have correct properties', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state).toHaveProperty('missions');
      expect(state).toHaveProperty('selectedMission');
      expect(state).toHaveProperty('isDialogDisplayed');
      expect(state).toHaveProperty('loading');
      expect(state).toHaveProperty('error');
    });

    it('should accept empty missions array', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state.missions).toEqual([]);
    });

    it('should accept missions array with data', (): void => {
      const state: MissionState = {
        missions: [mockMission],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state.missions).toHaveLength(1);
      expect(state.missions[0]).toEqual(mockMission);
    });

    it('should accept null selected mission', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state.selectedMission).toBeNull();
    });

    it('should accept mission as selected mission', (): void => {
      const state: MissionState = {
        missions: [mockMission],
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: false,
        error: null,
      };
      expect(state.selectedMission).toEqual(mockMission);
    });

    it('should accept dialog displayed as true', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: true,
        loading: false,
        error: null,
      };
      expect(state.isDialogDisplayed).toBe(true);
    });

    it('should accept dialog displayed as false', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state.isDialogDisplayed).toBe(false);
    });

    it('should accept loading as true', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: true,
        error: null,
      };
      expect(state.loading).toBe(true);
    });

    it('should accept loading as false', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state.loading).toBe(false);
    });

    it('should accept null error', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(state.error).toBeNull();
    });

    it('should accept string error', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: 'Network error',
      };
      expect(state.error).toBe('Network error');
    });
  });

  describe('state serialization', (): void => {
    it('should be serializable without selected mission', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const serialized = JSON.stringify(state);
      const deserialized = JSON.parse(serialized);
      expect(deserialized.missions).toEqual([]);
      expect(deserialized.selectedMission).toBeNull();
    });

    it('should handle date serialization in missions', (): void => {
      const state: MissionState = {
        missions: [mockMission],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const serialized = JSON.stringify(state);
      expect(serialized).toContain('2023-01-01');
      expect(serialized).toContain('2023-12-31');
    });
  });

  describe('state immutability', (): void => {
    it('should maintain immutability when updating missions', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const newState: MissionState = {
        ...state,
        missions: [mockMission],
      };
      expect(state.missions).toHaveLength(0);
      expect(newState.missions).toHaveLength(1);
      expect(newState).not.toBe(state);
    });

    it('should maintain immutability when updating selected mission', (): void => {
      const state: MissionState = {
        missions: [mockMission],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const newState: MissionState = {
        ...state,
        selectedMission: mockMission,
      };
      expect(state.selectedMission).toBeNull();
      expect(newState.selectedMission).toEqual(mockMission);
    });

    it('should maintain immutability when updating dialog state', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const newState: MissionState = {
        ...state,
        isDialogDisplayed: true,
      };
      expect(state.isDialogDisplayed).toBe(false);
      expect(newState.isDialogDisplayed).toBe(true);
    });

    it('should maintain immutability when updating loading state', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const newState: MissionState = {
        ...state,
        loading: true,
      };
      expect(state.loading).toBe(false);
      expect(newState.loading).toBe(true);
    });

    it('should maintain immutability when updating error state', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const newState: MissionState = {
        ...state,
        error: 'Error message',
      };
      expect(state.error).toBeNull();
      expect(newState.error).toBe('Error message');
    });
  });

  describe('complex state scenarios', (): void => {
    it('should handle loading state with dialog open', (): void => {
      const state: MissionState = {
        missions: [mockMission],
        selectedMission: mockMission,
        isDialogDisplayed: true,
        loading: true,
        error: null,
      };
      expect(state.loading).toBe(true);
      expect(state.isDialogDisplayed).toBe(true);
      expect(state.selectedMission).toEqual(mockMission);
    });

    it('should handle error state with missions loaded', (): void => {
      const state: MissionState = {
        missions: [mockMission],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: 'Failed to load additional missions',
      };
      expect(state.missions).toHaveLength(1);
      expect(state.error).toBe('Failed to load additional missions');
      expect(state.loading).toBe(false);
    });

    it('should handle multiple missions with one selected', (): void => {
      const mission2: Mission = {
        ...mockMission,
        client: 'Another Company',
      };
      const state: MissionState = {
        missions: [mockMission, mission2],
        selectedMission: mission2,
        isDialogDisplayed: true,
        loading: false,
        error: null,
      };
      expect(state.missions).toHaveLength(2);
      expect(state.selectedMission?.client).toBe('Another Company');
      expect(state.isDialogDisplayed).toBe(true);
    });
  });

  describe('type safety', (): void => {
    it('should enforce correct types', (): void => {
      const state: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      expect(Array.isArray(state.missions)).toBe(true);
      expect(typeof state.isDialogDisplayed).toBe('boolean');
      expect(typeof state.loading).toBe('boolean');
      expect(state.error === null || typeof state.error === 'string').toBe(true);
    });
  });
});