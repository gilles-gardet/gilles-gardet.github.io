import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Theme } from '@state/theme/theme.state';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Get the current theme from the local storage or the operating system.
   */
  public getTheme$(): Observable<Theme> {
    const isOperatingSystemDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isThemeStored: boolean = 'theme' in localStorage;
    if (!isThemeStored && isOperatingSystemDark) {
      return of('dark');
    }
    const theme: Theme = (localStorage.getItem('theme') as Theme) ?? 'light';
    return of(theme);
  }

  /**
   * Set the current theme into the local storage.
   *
   * @param theme the theme to be set
   */
  public setTheme$(theme: Theme): Observable<Theme> {
    localStorage.setItem('theme', theme);
    return of(theme);
  }
}
