import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LanguageActions = createActionGroup({
  source: 'Language',
  events: {
    loadLanguage: emptyProps(),
    updateLanguage: props<{ language: string; loading: boolean }>(),
    updateLoader: props<{ loading: boolean }>(),
  },
});
