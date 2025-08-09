import { languageReducer } from './language.reducer';
import { LanguageActions } from './language.actions';
import { LanguageState } from './language.state';

describe('Language Reducer', (): void => {
  const initialState: LanguageState = {
    language: 'en',
    loading: false,
  };

  it('should have the correct initial state', (): void => {
    const state = languageReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('updateLanguage', (): void => {
    it('should update language and loading state', (): void => {
      const action = LanguageActions.updateLanguage({ language: 'fr', loading: true });
      const state = languageReducer(initialState, action);
      expect(state).toEqual({
        language: 'fr',
        loading: true,
      });
    });

    it('should update language to spanish and set loading to false', (): void => {
      const previousState: LanguageState = {
        language: 'en',
        loading: true,
      };
      const action = LanguageActions.updateLanguage({ language: 'es', loading: false });
      const state = languageReducer(previousState, action);
      expect(state).toEqual({
        language: 'es',
        loading: false,
      });
    });

    it('should preserve other state properties when updating', (): void => {
      const action = LanguageActions.updateLanguage({ language: 'de', loading: true });
      const state = languageReducer(initialState, action);
      expect(state).not.toBe(initialState);
      expect(state.language).toBe('de');
      expect(state.loading).toBe(true);
    });

    it('should handle same language update', (): void => {
      const action = LanguageActions.updateLanguage({ language: 'en', loading: true });
      const state = languageReducer(initialState, action);
      expect(state).toEqual({
        language: 'en',
        loading: true,
      });
    });
  });

  describe('updateLoader', (): void => {
    it('should update loading state to true', (): void => {
      const action = LanguageActions.updateLoader({ loading: true });
      const state = languageReducer(initialState, action);
      expect(state).toEqual({
        language: 'en',
        loading: true,
      });
    });

    it('should update loading state to false', (): void => {
      const previousState: LanguageState = {
        language: 'fr',
        loading: true,
      };
      const action = LanguageActions.updateLoader({ loading: false });
      const state = languageReducer(previousState, action);
      expect(state).toEqual({
        language: 'fr',
        loading: false,
      });
    });

    it('should preserve language when updating loader', (): void => {
      const previousState: LanguageState = {
        language: 'es',
        loading: false,
      };
      const action = LanguageActions.updateLoader({ loading: true });
      const state = languageReducer(previousState, action);
      expect(state).toEqual({
        language: 'es',
        loading: true,
      });
    });

    it('should not mutate the original state', (): void => {
      const action = LanguageActions.updateLoader({ loading: true });
      const state = languageReducer(initialState, action);
      expect(state).not.toBe(initialState);
      expect(initialState.loading).toBe(false);
    });
  });

  describe('unknown action', (): void => {
    it('should return the current state for unknown actions', (): void => {
      const currentState: LanguageState = {
        language: 'fr',
        loading: true,
      };
      const unknownAction = { type: 'UNKNOWN_ACTION' };
      const state = languageReducer(currentState, unknownAction);
      expect(state).toBe(currentState);
    });
  });

  describe('state immutability', (): void => {
    it('should not mutate state on updateLanguage', (): void => {
      const previousState: LanguageState = {
        language: 'en',
        loading: false,
      };
      const action = LanguageActions.updateLanguage({ language: 'fr', loading: true });
      const newState = languageReducer(previousState, action);
      expect(newState).not.toBe(previousState);
      expect(previousState.language).toBe('en');
      expect(previousState.loading).toBe(false);
    });

    it('should not mutate state on updateLoader', (): void => {
      const previousState: LanguageState = {
        language: 'fr',
        loading: false,
      };
      const action = LanguageActions.updateLoader({ loading: true });
      const newState = languageReducer(previousState, action);
      expect(newState).not.toBe(previousState);
      expect(previousState.loading).toBe(false);
    });
  });
});