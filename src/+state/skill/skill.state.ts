import { Skill } from '@core/models/skill.model';

/**
 * Interface for the 'Skills' data
 */
export interface SkillState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}
