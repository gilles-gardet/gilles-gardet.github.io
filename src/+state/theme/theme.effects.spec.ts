import { of, Subject } from 'rxjs';
import { ThemeActions } from './theme.actions';
import { loadTheme, updateTheme } from './theme.effects';
import { Theme } from './theme.state';

describe('Theme Effects', (): void => {
  let actions$: Subject<any>;
  let mockThemeService: any;

  beforeEach((): void => {
    actions$ = new Subject();
    mockThemeService = {
      getTheme$: vi.fn(),
      setTheme$: vi.fn(),
    };
  });

  afterEach((): void => {
    vi.clearAllMocks();
    actions$.complete();
  });

  describe('loadTheme', (): void => {
    it('should load theme on loadTheme action', async (): Promise<void> => {
      const theme: Theme = 'light';
      mockThemeService.getTheme$.mockReturnValue(of(theme));
      const effect$ = loadTheme(actions$, mockThemeService);

      const promise = new Promise((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(ThemeActions.updateTheme({ theme }));
          resolve(action);
        });
      });

      actions$.next(ThemeActions.loadTheme());
      await promise;
    });
  });

  describe('updateTheme', (): void => {
    it('should update theme', async (): Promise<void> => {
      const theme: Theme = 'dark';
      mockThemeService.setTheme$.mockReturnValue(of(theme));
      const effect$ = updateTheme(actions$, mockThemeService);

      const promise = new Promise((resolve) => {
        effect$.subscribe((result) => {
          expect(result).toBe(theme);
          expect(mockThemeService.setTheme$).toHaveBeenCalledWith(theme);
          resolve(result);
        });
      });

      actions$.next(ThemeActions.updateTheme({ theme }));
      await promise;
    });
  });
});
