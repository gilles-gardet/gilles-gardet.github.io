import { provideTransloco, TranslocoService, TranslocoModule, TRANSLOCO_LOADER, TranslocoLoader } from '@jsverse/transloco';
import { isDevMode, Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class MockTranslocoLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<any> {
    // Common mock translations used in tests
    const mockTranslations = {
      test: 'test',
      hello: 'Hello',
      welcome: 'Welcome',
      general: {
        title: 'General',
        email: 'Email',
        about: 'About'
      },
      resume: {
        title: 'Resume',
        skills: 'Skills',
        experience: 'Experience',
        hobbies: 'Hobbies'
      },
      theme: {
        dark: 'Dark',
        light: 'Light'
      },
      cv: {
        summary: {
          panelTitle: 'Summary',
          content: 'Mock summary content'
        },
        skills: {
          panelTitle: 'Skills'
        },
        hobbies: {
          panelTitle: 'Hobbies',
          content: {
            dev: 'Development',
            homelab: 'Homelab',
            movie: 'Movies',
            basket: 'Basketball',
            running: 'Running'
          }
        },
        contact: {
          menu: {
            items: {
              mode: {
                dark: 'Dark Mode',
                light: 'Light Mode',
                title: 'Toggle theme'
              },
              language: {
                label: 'Language',
                title: 'Change language'
              },
              download: {
                label: 'Download CV',
                title: 'Download PDF'
              }
            }
          }
        }
      }
    };
    return of(mockTranslations);
  }
}

/**
 * Helper function to provide Transloco configuration for tests
 */
export function getTranslocoTestProviders() {
  return [
    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        prodMode: !isDevMode(),
      },
    }),
    {
      provide: TRANSLOCO_LOADER,
      useClass: MockTranslocoLoader,
    }
  ];
}

/**
 * Creates a mock TranslocoService for testing
 */
export function createMockTranslocoService() {
  const mockTranslations = {
    cv: {
      contact: {
        menu: {
          items: {
            mode: {
              dark: 'Dark Mode',
              light: 'Light Mode',
              title: 'Toggle theme'
            },
            language: {
              label: 'Language',
              title: 'Change language'
            },
            download: {
              label: 'Download CV',
              title: 'Download PDF'
            }
          }
        }
      }
    }
  };
  
  return {
    translate: vi.fn().mockImplementation((key: string) => key),
    selectTranslate: vi.fn().mockReturnValue(of((key: string) => key)),
    selectTranslateObject: vi.fn().mockImplementation((key: string) => {
      if (key === 'cv.contact') {
        return of(mockTranslations.cv.contact);
      }
      return of({});
    }),
    langChanges$: of('en'),
    setActiveLang: vi.fn(),
    getActiveLang: vi.fn().mockReturnValue('en'),
    getAvailableLangs: vi.fn().mockReturnValue(['en', 'fr']),
    load: vi.fn().mockResolvedValue({}),
    reRenderOnLangChange: true,
    config: {
      availableLangs: ['en', 'fr'],
      defaultLang: 'en',
      reRenderOnLangChange: true,
    },
    _loadDependencies: vi.fn().mockResolvedValue({}),
    _isLangLoaded: vi.fn().mockReturnValue(true),
    _resolvedLang: vi.fn().mockReturnValue('en'),
  };
}

// Re-export commonly used testing utilities
export { TranslocoModule } from '@jsverse/transloco';