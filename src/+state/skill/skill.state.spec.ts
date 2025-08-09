import { SkillState } from './skill.state';
import { Skill } from '@core/models/skill.model';

describe('SkillState', (): void => {
  const mockSkill: Skill = {
    name: 'Angular',
    rate: 90,
  };

  describe('interface structure', (): void => {
    it('should have correct properties', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      expect(state).toHaveProperty('skills');
      expect(state).toHaveProperty('loading');
      expect(state).toHaveProperty('error');
    });

    it('should accept empty skills array', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      expect(state.skills).toEqual([]);
    });

    it('should accept skills array with data', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: null,
      };
      expect(state.skills).toHaveLength(1);
      expect(state.skills[0]).toEqual(mockSkill);
    });

    it('should accept multiple skills', (): void => {
      const skill2: Skill = {
        name: 'TypeScript',
        rate: 85,
      };
      const state: SkillState = {
        skills: [mockSkill, skill2],
        loading: false,
        error: null,
      };
      expect(state.skills).toHaveLength(2);
      expect(state.skills[0]).toEqual(mockSkill);
      expect(state.skills[1]).toEqual(skill2);
    });

    it('should accept loading as true', (): void => {
      const state: SkillState = {
        skills: [],
        loading: true,
        error: null,
      };
      expect(state.loading).toBe(true);
    });

    it('should accept loading as false', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: null,
      };
      expect(state.loading).toBe(false);
    });

    it('should accept null error', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      expect(state.error).toBeNull();
    });

    it('should accept string error', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: 'Failed to load skills',
      };
      expect(state.error).toBe('Failed to load skills');
    });
  });

  describe('state serialization', (): void => {
    it('should be serializable', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: null,
      };
      const serialized = JSON.stringify(state);
      const deserialized = JSON.parse(serialized);
      expect(deserialized.skills).toHaveLength(1);
      expect(deserialized.skills[0].name).toBe('Angular');
      expect(deserialized.loading).toBe(false);
      expect(deserialized.error).toBeNull();
    });

    it('should handle number values in skills', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: null,
      };
      const serialized = JSON.stringify(state);
      expect(serialized).toContain('"rate":90');
    });

    it('should serialize empty state correctly', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      const serialized = JSON.stringify(state);
      const deserialized = JSON.parse(serialized);
      expect(deserialized).toEqual(state);
    });
  });

  describe('state immutability', (): void => {
    it('should maintain immutability when updating skills', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      const newState: SkillState = {
        ...state,
        skills: [mockSkill],
      };
      expect(state.skills).toHaveLength(0);
      expect(newState.skills).toHaveLength(1);
      expect(newState).not.toBe(state);
    });

    it('should maintain immutability when updating loading state', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: null,
      };
      const newState: SkillState = {
        ...state,
        loading: true,
      };
      expect(state.loading).toBe(false);
      expect(newState.loading).toBe(true);
      expect(newState.skills).toEqual(state.skills);
    });

    it('should maintain immutability when updating error state', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      const newState: SkillState = {
        ...state,
        error: 'Network error',
      };
      expect(state.error).toBeNull();
      expect(newState.error).toBe('Network error');
      expect(newState.skills).toEqual(state.skills);
    });

    it('should not mutate skills array', (): void => {
      const originalSkills = [mockSkill];
      const state: SkillState = {
        skills: originalSkills,
        loading: false,
        error: null,
      };
      const newSkill: Skill = {
        name: 'React',
        rate: 80,
      };
      const newState: SkillState = {
        ...state,
        skills: [...state.skills, newSkill],
      };
      expect(originalSkills).toHaveLength(1);
      expect(newState.skills).toHaveLength(2);
      expect(state.skills).toBe(originalSkills);
    });
  });

  describe('complex state scenarios', (): void => {
    it('should handle loading state with existing skills', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: true,
        error: null,
      };
      expect(state.skills).toHaveLength(1);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should handle error state with skills loaded', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: 'Failed to refresh skills',
      };
      expect(state.skills).toHaveLength(1);
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Failed to refresh skills');
    });

    it('should handle loading error without skills', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: 'Initial load failed',
      };
      expect(state.skills).toHaveLength(0);
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Initial load failed');
    });

    it('should handle large skills dataset', (): void => {
      const largeSkillSet: Skill[] = Array.from({ length: 50 }, (_, index) => ({
        name: `Skill ${index}`,
        rate: Math.floor(Math.random() * 100),
      }));
      const state: SkillState = {
        skills: largeSkillSet,
        loading: false,
        error: null,
      };
      expect(state.skills).toHaveLength(50);
      expect(state.loading).toBe(false);
      expect(state.error).toBeNull();
    });

    it('should handle skills with different rates', (): void => {
      const skills: Skill[] = [
        { name: 'Angular', rate: 90 },
        { name: 'Node.js', rate: 85 },
        { name: 'TypeScript', rate: 95 },
        { name: 'Docker', rate: 70 },
      ];
      const state: SkillState = {
        skills,
        loading: false,
        error: null,
      };
      expect(state.skills).toHaveLength(4);
      expect(state.skills.map(s => s.rate)).toEqual([90, 85, 95, 70]);
    });
  });

  describe('type safety', (): void => {
    it('should enforce correct types', (): void => {
      const state: SkillState = {
        skills: [],
        loading: false,
        error: null,
      };
      expect(Array.isArray(state.skills)).toBe(true);
      expect(typeof state.loading).toBe('boolean');
      expect(state.error === null || typeof state.error === 'string').toBe(true);
    });

    it('should validate skill object structure', (): void => {
      const state: SkillState = {
        skills: [mockSkill],
        loading: false,
        error: null,
      };
      const skill = state.skills[0];
      expect(typeof skill.name).toBe('string');
      expect(typeof skill.rate).toBe('number');
    });
  });
});