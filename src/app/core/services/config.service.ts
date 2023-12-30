import { Injectable, signal, WritableSignal } from '@angular/core';

export const THEME_KEY = 'theme';
export const LANGUAGE_KEY = 'lang';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

@Injectable()
export class ConfigService {
  private _theme$: WritableSignal<string> = signal(this.computeTheme());
  private _loading$: WritableSignal<boolean> = signal(true);

  /**
   * Define the color sheme to apply and store the result in a local variable.
   */
  private computeTheme(): string {
    const isOperatingSystemDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isThemeStored: boolean = THEME_KEY in localStorage;
    if (!isThemeStored && isOperatingSystemDark) {
      return DARK_THEME;
    }
    return localStorage.getItem(THEME_KEY) ?? LIGHT_THEME;
  };

  /**
   * Set the theme
   *
   * @param theme the theme to be set
   */
  setTheme$(theme: string): void {
    this._theme$.set(theme);
  }

  /**
   * Return the current theme
   */
  get theme$(): WritableSignal<string> {
    return this._theme$;
  }

  /**
   * Set the loading flag
   *
   * @param loading the flag to be set
   */
  setLoading$(loading: boolean): void {
    this._loading$.set(loading);
  }

  /**
   * Return the current loading flag
   */
  get loading$(): WritableSignal<boolean> {
    return this._loading$;
  }
}
