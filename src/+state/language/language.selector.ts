import { createSelector } from '@ngrx/store';
import { AppState } from '@state/state';
import { LanguageState } from '@state/language/language.state';

export const selectLanguage = createSelector(
  (appState: AppState) => appState.languageState,
  (configState: LanguageState) => configState.language,
);

export const selectLoader = createSelector(
  (appState: AppState) => appState.languageState,
  (configState: LanguageState) => configState.loading,
);
