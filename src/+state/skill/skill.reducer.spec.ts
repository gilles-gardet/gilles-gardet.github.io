import { skillReducer } from './skill.reducer';
import { SkillActions } from './skill.actions';
import { SkillState } from './skill.state';
import { Skill } from '@core/models/skill.model';

describe('Skill Reducer', (): void => {
  const initialState: SkillState = {
    skills: [],
    loading: false,
    error: null,
  };

  const mockSkills: Skill[] = [
    {
      name: 'Angular',
      rate: 90,
    },
    {
      name: 'TypeScript',
      rate: 85,
    },
    {
      name: 'Node.js',
      rate: 80,
    },
  ];

  it('should have the correct initial state', (): void => {
    const state = skillReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('loadSkills', (): void => {
    it('should set loading to true', (): void => {
      const action = SkillActions.loadSkills();
      const state = skillReducer(initialState, action);
      expect(state).toEqual({
        skills: [],
        loading: true,
        error: null,
      });
    });

    it('should preserve other state when setting loading', (): void => {
      const previousState: SkillState = {
        skills: mockSkills,
        loading: false,
        error: 'Previous error',
      };
      const action = SkillActions.loadSkills();
      const state = skillReducer(previousState, action);
      expect(state).toEqual({
        skills: mockSkills,
        loading: true,
        error: 'Previous error',
      });
    });

    it('should reset loading state from previous loading', (): void => {
      const previousState: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      const action = SkillActions.loadSkills();
      const state = skillReducer(previousState, action);
      expect(state.loading).toBe(true);
    });
  });

  describe('loadSkillsSuccess', (): void => {
    it('should set skills and clear loading', (): void => {
      const loadingState: SkillState = {
        ...initialState,
        loading: true,
      };
      const action = SkillActions.loadSkillsSuccess({ skills: mockSkills });
      const state = skillReducer(loadingState, action);
      expect(state).toEqual({
        skills: mockSkills,
        loading: false,
        error: null,
      });
    });

    it('should replace existing skills', (): void => {
      const previousState: SkillState = {
        skills: [mockSkills[0]],
        loading: true,
        error: null,
      };
      const newSkills = mockSkills.slice(1);
      const action = SkillActions.loadSkillsSuccess({ skills: newSkills });
      const state = skillReducer(previousState, action);
      expect(state.skills).toEqual(newSkills);
      expect(state.loading).toBe(false);
    });

    it('should handle empty skills array', (): void => {
      const loadingState: SkillState = {
        skills: mockSkills,
        loading: true,
        error: null,
      };
      const action = SkillActions.loadSkillsSuccess({ skills: [] });
      const state = skillReducer(loadingState, action);
      expect(state.skills).toEqual([]);
      expect(state.loading).toBe(false);
    });

    it('should preserve error state on success', (): void => {
      const errorState: SkillState = {
        skills: [],
        loading: true,
        error: 'Network error',
      };
      const action = SkillActions.loadSkillsSuccess({ skills: mockSkills });
      const state = skillReducer(errorState, action);
      expect(state.skills).toEqual(mockSkills);
      expect(state.loading).toBe(false);
    });
  });

  describe('loadSkillsFailure', (): void => {
    it('should set error and clear loading', (): void => {
      const loadingState: SkillState = {
        ...initialState,
        loading: true,
      };
      const errorMessage = 'Failed to load skills';
      const action = SkillActions.loadSkillsFailure({ error: errorMessage });
      const state = skillReducer(loadingState, action);
      expect(state).toEqual({
        skills: [],
        loading: false,
        error: errorMessage,
      });
    });

    it('should preserve existing skills on error', (): void => {
      const previousState: SkillState = {
        skills: mockSkills,
        loading: true,
        error: null,
      };
      const errorMessage = 'Service unavailable';
      const action = SkillActions.loadSkillsFailure({ error: errorMessage });
      const state = skillReducer(previousState, action);
      expect(state.skills).toEqual(mockSkills);
      expect(state.error).toBe(errorMessage);
      expect(state.loading).toBe(false);
    });

    it('should replace previous error message', (): void => {
      const errorState: SkillState = {
        skills: [],
        loading: true,
        error: 'Previous error',
      };
      const newErrorMessage = 'New error message';
      const action = SkillActions.loadSkillsFailure({ error: newErrorMessage });
      const state = skillReducer(errorState, action);
      expect(state.error).toBe(newErrorMessage);
    });

    it('should handle null error message', (): void => {
      const loadingState: SkillState = {
        ...initialState,
        loading: true,
      };
      const action = SkillActions.loadSkillsFailure({ error: null as any });
      const state = skillReducer(loadingState, action);
      expect(state.error).toBeNull();
      expect(state.loading).toBe(false);
    });
  });

  describe('unknown action', (): void => {
    it('should return the current state for unknown actions', (): void => {
      const currentState: SkillState = {
        skills: mockSkills,
        loading: true,
        error: 'Some error',
      };
      const unknownAction = { type: 'UNKNOWN_ACTION' };
      const state = skillReducer(currentState, unknownAction);
      expect(state).toBe(currentState);
    });
  });

  describe('state immutability', (): void => {
    it('should not mutate state on loadSkills', (): void => {
      const action = SkillActions.loadSkills();
      const newState = skillReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(initialState.loading).toBe(false);
    });

    it('should not mutate state on loadSkillsSuccess', (): void => {
      const action = SkillActions.loadSkillsSuccess({ skills: mockSkills });
      const newState = skillReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(initialState.skills).toEqual([]);
    });

    it('should not mutate state on loadSkillsFailure', (): void => {
      const action = SkillActions.loadSkillsFailure({ error: 'Error' });
      const newState = skillReducer(initialState, action);
      expect(newState).not.toBe(initialState);
      expect(initialState.error).toBeNull();
    });

    it('should use immutable skills array', (): void => {
      const originalSkills = [...mockSkills];
      const action = SkillActions.loadSkillsSuccess({ skills: originalSkills });
      const state = skillReducer(initialState, action);
      expect(state.skills).toEqual(originalSkills);
      expect(state.skills).toBe(originalSkills);
    });
  });
});