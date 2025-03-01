import { createSelector } from '@ngrx/store';
import { AppState } from '@state/state';
import { ThemeState } from '@state/theme/theme.state';

export const selectTheme = createSelector(
  (appState: AppState) => appState.themeState,
  (configState: ThemeState) => configState.theme,
);
