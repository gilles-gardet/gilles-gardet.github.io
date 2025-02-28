import { createReducer, on } from '@ngrx/store';
import { SkillsActions } from './skills.actions';
import { SkillsState } from './skills.state';

const initialState: SkillsState = {
  skills: [],
  loading: false,
  error: null,
};

export const skillsReducer = createReducer(
  initialState,
  on(SkillsActions.loadSkills, (state) => ({
    ...state,
    loading: true,
  })),
  on(SkillsActions.loadSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills,
    loading: false,
  })),
  on(SkillsActions.loadSkillsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);
