import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Skill } from '@core/models/skill.model';

export const SkillsActions = createActionGroup({
  source: 'Skills',
  events: {
    loadSkills: emptyProps(),
    loadSkillsSuccess: props<{ skills: Skill[] }>(),
    loadSkillsFailure: props<{ error: string }>(),
  },
});
