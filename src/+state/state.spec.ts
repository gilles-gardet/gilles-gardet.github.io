import { appStore, appEffects, AppState, AppStore } from './state';
import { missionReducer } from './mission/mission.reducer';
import { skillReducer } from './skill/skill.reducer';
import { themeReducer } from './theme/theme.reducer';
import { languageReducer } from './language/language.reducer';
import { loadMissions } from './mission/mission.effects';
import { loadSkills } from './skill/skill.effects';
import { loadTheme, updateTheme } from './theme/theme.effects';
import { loadLanguage, updateLanguage, updateLoaderAfterLoad } from './language/language.effects';
import { MissionState } from './mission/mission.state';
import { SkillState } from './skill/skill.state';
import { ThemeState } from './theme/theme.state';
import { LanguageState } from './language/language.state';

describe('App State Configuration', (): void => {
  describe('AppState interface', (): void => {
    it('should have correct state structure', (): void => {
      const mockAppState: AppState = {
        missionState: {
          missions: [],
          selectedMission: null,
          isDialogDisplayed: false,
          loading: false,
          error: null,
        },
        skillState: {
          skills: [],
          loading: false,
          error: null,
        },
        themeState: {
          theme: 'light',
        },
        languageState: {
          language: 'en',
          loading: false,
        },
      };
      expect(mockAppState.missionState).toBeDefined();
      expect(mockAppState.skillState).toBeDefined();
      expect(mockAppState.themeState).toBeDefined();
      expect(mockAppState.languageState).toBeDefined();
    });

    it('should type check mission state correctly', (): void => {
      const missionState: MissionState = {
        missions: [],
        selectedMission: null,
        isDialogDisplayed: false,
        loading: false,
        error: null,
      };
      const appState: AppState = {
        missionState,
        skillState: { skills: [], loading: false, error: null },
        themeState: { theme: 'light' },
        languageState: { language: 'en', loading: false },
      };
      expect(appState.missionState).toEqual(missionState);
    });

    it('should type check skill state correctly', (): void => {
      const skillState: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      const appState: AppState = {
        missionState: { missions: [], selectedMission: null, isDialogDisplayed: false, loading: false, error: null },
        skillState,
        themeState: { theme: 'light' },
        languageState: { language: 'en', loading: false },
      };
      expect(appState.skillState).toEqual(skillState);
    });

    it('should type check theme state correctly', (): void => {
      const themeState: ThemeState = {
        theme: 'dark',
      };
      const appState: AppState = {
        missionState: { missions: [], selectedMission: null, isDialogDisplayed: false, loading: false, error: null },
        skillState: { skills: [], loading: false, error: null },
        themeState,
        languageState: { language: 'fr', loading: false },
      };
      expect(appState.themeState).toEqual(themeState);
    });

    it('should type check language state correctly', (): void => {
      const languageState: LanguageState = {
        language: 'fr',
        loading: true,
      };
      const appState: AppState = {
        missionState: { missions: [], selectedMission: null, isDialogDisplayed: false, loading: false, error: null },
        skillState: { skills: [], loading: false, error: null },
        themeState: { theme: 'light' },
        languageState,
      };
      expect(appState.languageState).toEqual(languageState);
    });
  });

  describe('AppStore interface', (): void => {
    it('should have correct reducer structure', (): void => {
      const mockAppStore: AppStore = {
        missionState: missionReducer,
        skillState: skillReducer,
        themeState: themeReducer,
        languageState: languageReducer,
      };
      expect(mockAppStore.missionState).toBeDefined();
      expect(mockAppStore.skillState).toBeDefined();
      expect(mockAppStore.themeState).toBeDefined();
      expect(mockAppStore.languageState).toBeDefined();
    });

    it('should have all reducers as functions', (): void => {
      const store: AppStore = {
        missionState: missionReducer,
        skillState: skillReducer,
        themeState: themeReducer,
        languageState: languageReducer,
      };
      expect(typeof store.missionState).toBe('function');
      expect(typeof store.skillState).toBe('function');
      expect(typeof store.themeState).toBe('function');
      expect(typeof store.languageState).toBe('function');
    });
  });

  describe('appStore configuration', (): void => {
    it('should have correct reducer assignments', (): void => {
      expect(appStore.missionState).toBe(missionReducer);
      expect(appStore.skillState).toBe(skillReducer);
      expect(appStore.themeState).toBe(themeReducer);
      expect(appStore.languageState).toBe(languageReducer);
    });

    it('should have all required reducers', (): void => {
      expect(appStore).toHaveProperty('missionState');
      expect(appStore).toHaveProperty('skillState');
      expect(appStore).toHaveProperty('themeState');
      expect(appStore).toHaveProperty('languageState');
    });

    it('should export a valid store object', (): void => {
      expect(appStore).toBeDefined();
      expect(typeof appStore).toBe('object');
      expect(Object.keys(appStore)).toHaveLength(4);
    });

    it('should have correct property names', (): void => {
      const expectedProperties = ['missionState', 'skillState', 'themeState', 'languageState'];
      const actualProperties = Object.keys(appStore);
      expect(actualProperties.sort()).toEqual(expectedProperties.sort());
    });
  });

  describe('appEffects configuration', (): void => {
    it('should have correct effect assignments', (): void => {
      expect(appEffects.loadMissions).toBe(loadMissions);
      expect(appEffects.loadSkills).toBe(loadSkills);
      expect(appEffects.loadTheme).toBe(loadTheme);
      expect(appEffects.updateTheme).toBe(updateTheme);
      expect(appEffects.loadLanguage).toBe(loadLanguage);
      expect(appEffects.updateLanguage).toBe(updateLanguage);
      expect(appEffects.updateLoaderAfterLoad).toBe(updateLoaderAfterLoad);
    });

    it('should have all required effects', (): void => {
      expect(appEffects).toHaveProperty('loadMissions');
      expect(appEffects).toHaveProperty('loadSkills');
      expect(appEffects).toHaveProperty('loadTheme');
      expect(appEffects).toHaveProperty('updateTheme');
      expect(appEffects).toHaveProperty('loadLanguage');
      expect(appEffects).toHaveProperty('updateLanguage');
      expect(appEffects).toHaveProperty('updateLoaderAfterLoad');
    });

    it('should export a valid effects object', (): void => {
      expect(appEffects).toBeDefined();
      expect(typeof appEffects).toBe('object');
      expect(Object.keys(appEffects)).toHaveLength(7);
    });

    it('should have all effects as functions', (): void => {
      expect(typeof appEffects.loadMissions).toBe('function');
      expect(typeof appEffects.loadSkills).toBe('function');
      expect(typeof appEffects.loadTheme).toBe('function');
      expect(typeof appEffects.updateTheme).toBe('function');
      expect(typeof appEffects.loadLanguage).toBe('function');
      expect(typeof appEffects.updateLanguage).toBe('function');
      expect(typeof appEffects.updateLoaderAfterLoad).toBe('function');
    });

    it('should have correct effect names', (): void => {
      const expectedEffects = [
        'loadMissions',
        'loadSkills',
        'loadTheme',
        'updateTheme',
        'loadLanguage',
        'updateLanguage',
        'updateLoaderAfterLoad',
      ];
      const actualEffects = Object.keys(appEffects);
      expect(actualEffects.sort()).toEqual(expectedEffects.sort());
    });

    it('should group mission effects correctly', (): void => {
      expect(appEffects.loadMissions).toBeDefined();
      expect(appEffects.loadMissions).toBe(loadMissions);
    });

    it('should group skill effects correctly', (): void => {
      expect(appEffects.loadSkills).toBeDefined();
      expect(appEffects.loadSkills).toBe(loadSkills);
    });

    it('should group theme effects correctly', (): void => {
      expect(appEffects.loadTheme).toBeDefined();
      expect(appEffects.updateTheme).toBeDefined();
      expect(appEffects.loadTheme).toBe(loadTheme);
      expect(appEffects.updateTheme).toBe(updateTheme);
    });

    it('should group language effects correctly', (): void => {
      expect(appEffects.loadLanguage).toBeDefined();
      expect(appEffects.updateLanguage).toBeDefined();
      expect(appEffects.updateLoaderAfterLoad).toBeDefined();
      expect(appEffects.loadLanguage).toBe(loadLanguage);
      expect(appEffects.updateLanguage).toBe(updateLanguage);
      expect(appEffects.updateLoaderAfterLoad).toBe(updateLoaderAfterLoad);
    });
  });

  describe('state immutability and structure', (): void => {
    it('should not modify appStore after import', (): void => {
      const originalAppStore = { ...appStore };
      expect(appStore).toEqual(originalAppStore);
    });

    it('should not modify appEffects after import', (): void => {
      const originalAppEffects = { ...appEffects };
      expect(appEffects).toEqual(originalAppEffects);
    });

    it('should maintain referential equality for reducers', (): void => {
      expect(appStore.missionState).toBe(missionReducer);
      expect(appStore.skillState).toBe(skillReducer);
      expect(appStore.themeState).toBe(themeReducer);
      expect(appStore.languageState).toBe(languageReducer);
    });

    it('should maintain referential equality for effects', (): void => {
      expect(appEffects.loadMissions).toBe(loadMissions);
      expect(appEffects.loadSkills).toBe(loadSkills);
      expect(appEffects.loadTheme).toBe(loadTheme);
      expect(appEffects.updateTheme).toBe(updateTheme);
      expect(appEffects.loadLanguage).toBe(loadLanguage);
      expect(appEffects.updateLanguage).toBe(updateLanguage);
      expect(appEffects.updateLoaderAfterLoad).toBe(updateLoaderAfterLoad);
    });
  });
});