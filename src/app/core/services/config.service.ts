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
  const isOperatingSystemDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isThemeStored: boolean = THEME_KEY in localStorage;
  if (!isThemeStored && isOperatingSystemDark) {
    return DARK_THEME;
  }
  return localStorage.getItem(THEME_KEY) ?? LIGHT_THEME;
})();

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly _theme$: BehaviorSubject<string> = new BehaviorSubject<string>(theme);
  private readonly _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  /**
   * Set the theme
   *
   * @param theme the theme to be set
   */
  setTheme$(theme: string): void {
    this._theme$.next(theme);
  }

  /**
   * Return the current theme
   */
  get theme$(): BehaviorSubject<string> {
    return this._theme$;
  }

  /**
   * Set the loading flag
   *
   * @param loading the flag to be set
   */
  setLoading$(loading: boolean): void {
    this._loading$.next(loading);
  }

  /**
   * Return the current loading flag
   */
  get loading$(): BehaviorSubject<boolean> {
    return this._loading$;
  }
}
