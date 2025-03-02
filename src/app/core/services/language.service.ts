import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * Define the navigation session language.
   */
  public getLanguage$(): Observable<string> {
    const languageValue: string = localStorage.getItem('lang') ?? 'en';
    if (/en|fr/.exec(languageValue)) {
      return of(languageValue);
    }
    const browserLang: string = navigator.language;
    const sessionLanguage = /en|fr/.exec(browserLang) ? browserLang : 'en';
    return of(sessionLanguage);
  }

  /**
   * .Change the current language by the given one.
   *
   * @param language the new language to be set
   */
  public setLanguage$(language: string): Observable<string> {
    if (localStorage.getItem('lang') !== language) {
      localStorage.setItem('lang', language);
    }
    return of(language);
  }
}
