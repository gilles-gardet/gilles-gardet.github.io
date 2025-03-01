import { createSelector } from '@ngrx/store';
import { AppState } from '@state/state';
import { SkillState } from '@state/skill/skill.state';

export const selectSkills = createSelector(
  (appState: AppState) => appState.skillState,
  (skillsState: SkillState) => skillsState.skills,
);
