import { createSelector } from '@ngrx/store';
import { AppState } from '@state/state';
import { SkillsState } from '@state/skills/skills.state';

export const selectSkills = createSelector(
  (appState: AppState) => appState.skillsState,
  (skillsState: SkillsState) => skillsState.skills,
);
