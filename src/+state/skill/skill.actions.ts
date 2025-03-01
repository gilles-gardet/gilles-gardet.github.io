import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Skill } from '@core/models/skill.model';

export const SkillActions = createActionGroup({
  source: 'Skill',
  events: {
    loadSkills: emptyProps(),
    loadSkillsSuccess: props<{ skills: Skill[] }>(),
    loadSkillsFailure: props<{ error: string }>(),
  },
});
