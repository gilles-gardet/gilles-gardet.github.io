import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const THEME_KEY = 'theme';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';
const theme = localStorage.getItem(THEME_KEY) ?? LIGHT_THEME;

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
