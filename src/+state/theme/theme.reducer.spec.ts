import { themeReducer } from './theme.reducer';
import { ThemeActions } from './theme.actions';
import { Theme, ThemeState } from './theme.state';

describe('Theme Reducer', (): void => {
  const initialState: ThemeState = {
    theme: 'light',
  };

  it('should have the correct initial state', (): void => {
    const state = themeReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('updateTheme', (): void => {
    it('should update theme to dark', (): void => {
      const theme: Theme = 'dark';
      const action = ThemeActions.updateTheme({ theme });
      const state = themeReducer(initialState, action);
      expect(state).toEqual({
        theme: 'dark',
      });
    });

    it('should update theme to light', (): void => {
      const previousState: ThemeState = {
        theme: 'dark',
      };
      const theme: Theme = 'light';
      const action = ThemeActions.updateTheme({ theme });
      const state = themeReducer(previousState, action);
      expect(state).toEqual({
        theme: 'light',
      });
    });

    it('should handle same theme update', (): void => {
      const theme: Theme = 'light';
      const action = ThemeActions.updateTheme({ theme });
      const state = themeReducer(initialState, action);
      expect(state).toEqual({
        theme: 'light',
      });
    });

    it('should toggle theme from light to dark', (): void => {
      const lightState: ThemeState = { theme: 'light' };
      const action = ThemeActions.updateTheme({ theme: 'dark' });
      const state = themeReducer(lightState, action);
      expect(state.theme).toBe('dark');
    });

    it('should toggle theme from dark to light', (): void => {
      const darkState: ThemeState = { theme: 'dark' };
      const action = ThemeActions.updateTheme({ theme: 'light' });
      const state = themeReducer(darkState, action);
      expect(state.theme).toBe('light');
    });

    it('should preserve state structure when updating theme', (): void => {
      const action = ThemeActions.updateTheme({ theme: 'dark' });
      const state = themeReducer(initialState, action);
      expect(Object.keys(state)).toEqual(['theme']);
    });

    it('should not mutate the original state', (): void => {
      const action = ThemeActions.updateTheme({ theme: 'dark' });
      const state = themeReducer(initialState, action);
      expect(state).not.toBe(initialState);
      expect(initialState.theme).toBe('light');
    });
  });

  describe('unknown action', (): void => {
    it('should return the current state for unknown actions', (): void => {
      const currentState: ThemeState = {
        theme: 'dark',
      };
      const unknownAction = { type: 'UNKNOWN_ACTION' };
      const state = themeReducer(currentState, unknownAction);
      expect(state).toBe(currentState);
    });

    it('should return initial state for unknown actions when state is undefined', (): void => {
      const unknownAction = { type: 'UNKNOWN_ACTION' };
      const state = themeReducer(undefined, unknownAction);
      expect(state).toEqual(initialState);
    });
  });

  describe('state immutability', (): void => {
    it('should not mutate state on updateTheme', (): void => {
      const previousState: ThemeState = {
        theme: 'light',
      };
      const action = ThemeActions.updateTheme({ theme: 'dark' });
      const newState = themeReducer(previousState, action);
      expect(newState).not.toBe(previousState);
      expect(previousState.theme).toBe('light');
      expect(newState.theme).toBe('dark');
    });

    it('should create new state object for each action', (): void => {
      const state1 = themeReducer(initialState, ThemeActions.updateTheme({ theme: 'dark' }));
      const state2 = themeReducer(state1, ThemeActions.updateTheme({ theme: 'light' }));
      expect(state1).not.toBe(state2);
      expect(initialState).not.toBe(state1);
    });

    it('should use spread operator correctly', (): void => {
      const customState: ThemeState = {
        theme: 'dark',
      };
      const action = ThemeActions.updateTheme({ theme: 'light' });
      const state = themeReducer(customState, action);
      expect(state).toEqual({ theme: 'light' });
      expect(state).not.toBe(customState);
    });
  });

  describe('loadTheme action', (): void => {
    it('should not handle loadTheme action (no reducer case)', (): void => {
      const action = ThemeActions.loadTheme();
      const state = themeReducer(initialState, action);
      expect(state).toBe(initialState);
    });

    it('should preserve state when loadTheme is dispatched', (): void => {
      const darkState: ThemeState = { theme: 'dark' };
      const action = ThemeActions.loadTheme();
      const state = themeReducer(darkState, action);
      expect(state).toBe(darkState);
      expect(state.theme).toBe('dark');
    });
  });

  describe('theme type safety', (): void => {
    it('should only accept valid theme values', (): void => {
      const lightAction = ThemeActions.updateTheme({ theme: 'light' });
      const darkAction = ThemeActions.updateTheme({ theme: 'dark' });
      expect(themeReducer(initialState, lightAction).theme).toBe('light');
      expect(themeReducer(initialState, darkAction).theme).toBe('dark');
    });
  });
});
