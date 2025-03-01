import { createReducer, on } from '@ngrx/store';
import { SkillActions } from './skill.actions';
import { SkillState } from './skill.state';

const initialState: SkillState = {
  skills: [],
  loading: false,
  error: null,
};

export const skillReducer = createReducer(
  initialState,
  on(SkillActions.loadSkills, (state) => ({
    ...state,
    loading: true,
  })),
  on(SkillActions.loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills,
    loading: false,
  })),
  on(SkillActions.loadSkillsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);
