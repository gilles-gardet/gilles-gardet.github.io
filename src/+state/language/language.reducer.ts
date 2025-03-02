import { createReducer, on } from '@ngrx/store';
import { LanguageActions } from './language.actions';
import { LanguageState } from './language.state';

const initialState: LanguageState = {
  language: 'en',
  loading: false,
};

export const languageReducer = createReducer(
  initialState,
  on(LanguageActions.updateLanguage, (state: LanguageState, { language, loading }) => ({
    ...state,
    language,
    loading,
  })),
  on(LanguageActions.updateLoader, (state: LanguageState, { loading }) => ({
    ...state,
    loading,
  })),
);
