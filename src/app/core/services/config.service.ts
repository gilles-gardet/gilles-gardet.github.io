import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// const osColorMode = window.matchMedia('(prefers-color-scheme: dark)');
const theme = localStorage.getItem('theme') ?? 'light';

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
