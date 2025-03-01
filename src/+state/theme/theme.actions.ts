import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Theme } from '@state/theme/theme.state';

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    loadTheme: emptyProps(),
    updateTheme: props<{ theme: Theme }>(),
  },
});
