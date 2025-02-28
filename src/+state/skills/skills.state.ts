import { Skill } from '@core/models/skill.model';

/**
 * Interface for the 'Missions' data
 */
export interface SkillsState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}
