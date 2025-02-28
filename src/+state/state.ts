import { MissionsState } from './missions/missions.state';
import { SkillsState } from '@state/skills/skills.state';
import { Action, ActionReducer } from '@ngrx/store';
import { missionsReducer } from '@state/missions/missions.reducer';
import { loadMissions } from '@state/missions/missions.effects';
import { loadSkills } from '@state/skills/skills.effects';
import { skillsReducer } from '@state/skills/skills.reducer';

/**
 * Feature properties of the application state.
 */
export interface AppState {
  missionsState: MissionsState;
  skillsState: SkillsState;
}

/**
 * Definition of the application reducer types.
 */
export interface AppStore {
  missionsState: ActionReducer<MissionsState, Action<string>>;
  skillsState: ActionReducer<SkillsState, Action<string>>;
}

/**
 * Configure the store module.
 */
export const appStore: AppStore = {
  missionsState: missionsReducer,
  skillsState: skillsReducer,
};

/**
 * Configure the effects for the application.
 */
export const appEffects = { loadMissions, loadSkills };
