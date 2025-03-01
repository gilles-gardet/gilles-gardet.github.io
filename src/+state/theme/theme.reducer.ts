import { createReducer, on } from '@ngrx/store';
import { ThemeActions } from './theme.actions';
import { ThemeState } from './theme.state';

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = createReducer(
  initialState,
  on(ThemeActions.updateTheme, (state: ThemeState, { theme }) => ({
    ...state,
    theme,
  })),
);
