import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const THEME_KEY = 'theme';
export const LANGUAGE_KEY = 'lang';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

/**
 * Define the color sheme to apply and store the result in a local variable through a IIFE (Immediately Invoked
 * Function Expression).
 */
const theme: string = ((): string => {
  const isOperatingSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isThemeStored = THEME_KEY in localStorage;
  if (!isThemeStored && isOperatingSystemDark) {
    return DARK_THEME
  }
  return localStorage.getItem(THEME_KEY) ?? LIGHT_THEME;
})();

@Injectable()
export class ConfigService {
  private _theme$ = new BehaviorSubject<string>(theme);

  /**
   *
   * @param theme the theme to be set
   */
  setTheme$(theme: string) {
    this._theme$.next(theme);
  }

  /**
   * Return the current theme
   */
  get theme$(): BehaviorSubject<string> {
    return this._theme$;
  }
}
