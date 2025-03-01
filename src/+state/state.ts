import { MissionState } from './mission/mission.state';
import { SkillState } from '@state/skill/skill.state';
import { ThemeState } from '@state/theme/theme.state';
import { Action, ActionReducer } from '@ngrx/store';
import { missionReducer } from '@state/mission/mission.reducer';
import { skillReducer } from '@state/skill/skill.reducer';
import { themeReducer } from '@state/theme/theme.reducer';
import { loadMissions } from '@state/mission/mission.effects';
import { loadSkills } from '@state/skill/skill.effects';
import { loadTheme, updateTheme } from '@state/theme/theme.effects';

/**
 * Feature properties of the application state.
 */
export interface AppState {
  missionState: MissionState;
  skillState: SkillState;
  themeState: ThemeState;
}

/**
 * Definition of the application reducer types.
 */
export interface AppStore {
  missionState: ActionReducer<MissionState, Action<string>>;
  skillState: ActionReducer<SkillState, Action<string>>;
  themeState: ActionReducer<ThemeState, Action<string>>;
}

/**
 * Configure the store module.
 */
export const appStore: AppStore = {
  missionState: missionReducer,
  skillState: skillReducer,
  themeState: themeReducer,
};

/**
 * Configure the effects for the application.
 */
export const appEffects = { loadMissions, loadSkills, loadTheme, updateTheme };
