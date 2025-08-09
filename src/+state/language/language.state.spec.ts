import { LanguageState } from './language.state';

describe('LanguageState', (): void => {
  describe('interface structure', (): void => {
    it('should have correct properties', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: false,
      };
      expect(state).toHaveProperty('language');
      expect(state).toHaveProperty('loading');
    });

    it('should accept english language', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: false,
      };
      expect(state.language).toBe('en');
    });

    it('should accept french language', (): void => {
      const state: LanguageState = {
        language: 'fr',
        loading: true,
      };
      expect(state.language).toBe('fr');
    });

    it('should accept loading as true', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: true,
      };
      expect(state.loading).toBe(true);
    });

    it('should accept loading as false', (): void => {
      const state: LanguageState = {
        language: 'fr',
        loading: false,
      };
      expect(state.loading).toBe(false);
    });

    it('should support different language codes', (): void => {
      const states: LanguageState[] = [
        { language: 'en', loading: false },
        { language: 'fr', loading: false },
        { language: 'es', loading: false },
        { language: 'de', loading: false },
      ];
      states.forEach((state) => {
        expect(state.language).toBeDefined();
        expect(typeof state.language).toBe('string');
      });
    });

    it('should combine language and loading states correctly', (): void => {
      const combinations: LanguageState[] = [
        { language: 'en', loading: true },
        { language: 'en', loading: false },
        { language: 'fr', loading: true },
        { language: 'fr', loading: false },
      ];
      combinations.forEach((state) => {
        expect(state.language).toBeDefined();
        expect(typeof state.loading).toBe('boolean');
      });
    });

    it('should be serializable', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: true,
      };
      const serialized = JSON.stringify(state);
      const deserialized = JSON.parse(serialized);
      expect(deserialized).toEqual(state);
    });

    it('should maintain immutability', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: false,
      };
      const newState: LanguageState = {
        ...state,
        loading: true,
      };
      expect(state.loading).toBe(false);
      expect(newState.loading).toBe(true);
      expect(newState).not.toBe(state);
    });

    it('should support object spread syntax', (): void => {
      const initialState: LanguageState = {
        language: 'en',
        loading: false,
      };
      const updatedState: LanguageState = {
        ...initialState,
        language: 'fr',
      };
      expect(updatedState.language).toBe('fr');
      expect(updatedState.loading).toBe(false);
      expect(initialState.language).toBe('en');
    });

    it('should be type-safe', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: false,
      };
      expect(typeof state.language).toBe('string');
      expect(typeof state.loading).toBe('boolean');
    });
  });

  describe('state transitions', (): void => {
    it('should represent initial loading state', (): void => {
      const loadingState: LanguageState = {
        language: 'en',
        loading: true,
      };
      expect(loadingState.loading).toBe(true);
    });

    it('should represent loaded state', (): void => {
      const loadedState: LanguageState = {
        language: 'fr',
        loading: false,
      };
      expect(loadedState.loading).toBe(false);
    });

    it('should allow language change while loading', (): void => {
      const state: LanguageState = {
        language: 'en',
        loading: true,
      };
      const newState: LanguageState = {
        ...state,
        language: 'fr',
      };
      expect(newState.language).toBe('fr');
      expect(newState.loading).toBe(true);
    });

    it('should allow loading state change while keeping language', (): void => {
      const state: LanguageState = {
        language: 'fr',
        loading: true,
      };
      const newState: LanguageState = {
        ...state,
        loading: false,
      };
      expect(newState.language).toBe('fr');
      expect(newState.loading).toBe(false);
    });
  });
});