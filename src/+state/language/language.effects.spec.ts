import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { of, Subject, throwError } from 'rxjs';
import { TranslocoService } from '@jsverse/transloco';
import { LanguageService } from '@core/services/language.service';
import { LanguageActions } from './language.actions';
import { MissionActions } from '@state/mission/mission.actions';
import { SkillActions } from '@state/skill/skill.actions';
import { loadLanguage, updateLanguage, updateLoaderAfterLoad } from './language.effects';

describe('Language Effects', (): void => {
  let actions$: Subject<any>;
  let mockLanguageService: any;
  let mockTranslocoService: any;

  beforeEach((): void => {
    actions$ = new Subject();
    mockLanguageService = {
      getLanguage$: vi.fn(),
      setLanguage$: vi.fn(),
    };
    mockTranslocoService = {
      setActiveLang: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Actions, useValue: actions$ },
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: TranslocoService, useValue: mockTranslocoService },
      ],
    });
  });

  afterEach((): void => {
    vi.clearAllMocks();
    actions$.complete();
  });

  describe('loadLanguage', (): void => {
    it('should load language on loadLanguage action', async (): Promise<void> => {
      const language = 'en';
      mockLanguageService.getLanguage$.mockReturnValue(of(language));
      const effect$ = loadLanguage(actions$, mockLanguageService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(LanguageActions.updateLanguage({ language, loading: true }));
          expect(mockLanguageService.getLanguage$).toHaveBeenCalled();
          resolve();
        });
      });

      actions$.next(LanguageActions.loadLanguage());
      await promise;
    });

    it('should call getLanguage$ service method', (): void => {
      const language = 'fr';
      mockLanguageService.getLanguage$.mockReturnValue(of(language));
      const effect$ = loadLanguage(actions$, mockLanguageService);
      effect$.subscribe();
      actions$.next(LanguageActions.loadLanguage());
      expect(mockLanguageService.getLanguage$).toHaveBeenCalled();
    });
  });

  describe('updateLanguage', (): void => {
    it('should update language and trigger mission and skill loading', async (): Promise<void> => {
      const language = 'fr';
      const action = LanguageActions.updateLanguage({ language, loading: true });
      const results: any[] = [];
      mockLanguageService.setLanguage$.mockReturnValue(of(language));
      const effect$ = updateLanguage(actions$, mockLanguageService, mockTranslocoService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((result) => {
          results.push(result);
          if (results.length === 2) {
            expect(results).toContainEqual(MissionActions.loadMissions());
            expect(results).toContainEqual(SkillActions.loadSkills());
            expect(mockTranslocoService.setActiveLang).toHaveBeenCalledWith(language);
            resolve();
          }
        });
      });

      actions$.next(action);
      await promise;
    });

    it('should handle setLanguage$ error', async (): Promise<void> => {
      const language = 'fr';
      const action = LanguageActions.updateLanguage({ language, loading: true });
      const error = new Error('Language service error');
      mockLanguageService.setLanguage$.mockReturnValue(throwError(() => error));
      const effect$ = updateLanguage(actions$, mockLanguageService, mockTranslocoService);

      await expect(
        new Promise((_, reject) => {
          effect$.subscribe({
            error: (err) => {
              expect(err).toBe(error);
              reject(err);
            },
          });
          actions$.next(action);
        }),
      ).rejects.toBe(error);
    });

    it('should call setActiveLang with correct language', async (): Promise<void> => {
      const language = 'es';
      const action = LanguageActions.updateLanguage({ language, loading: true });
      mockLanguageService.setLanguage$.mockReturnValue(of(language));
      const effect$ = updateLanguage(actions$, mockLanguageService, mockTranslocoService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe(() => {
          expect(mockTranslocoService.setActiveLang).toHaveBeenCalledWith(language);
          resolve();
        });
      });

      actions$.next(action);
      await promise;
    });
  });

  describe('updateLoaderAfterLoad', (): void => {
    it('should update loader to false after both mission and skill success', async (): Promise<void> => {
      const effect$ = updateLoaderAfterLoad(actions$);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(LanguageActions.updateLoader({ loading: false }));
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissionsSuccess({ missions: [] }));
      actions$.next(SkillActions.loadSkillsSuccess({ skills: [] }));
      await promise;
    });

    it('should update loader to false after mission success and skill failure', async (): Promise<void> => {
      const effect$ = updateLoaderAfterLoad(actions$);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(LanguageActions.updateLoader({ loading: false }));
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissionsSuccess({ missions: [] }));
      actions$.next(SkillActions.loadSkillsFailure({ error: 'Error' }));
      await promise;
    });

    it('should update loader to false after mission failure and skill success', async (): Promise<void> => {
      const effect$ = updateLoaderAfterLoad(actions$);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(LanguageActions.updateLoader({ loading: false }));
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissionsFailure({ error: 'Error' }));
      actions$.next(SkillActions.loadSkillsSuccess({ skills: [] }));
      await promise;
    });

    it('should update loader to false after both mission and skill failure', async (): Promise<void> => {
      const effect$ = updateLoaderAfterLoad(actions$);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(LanguageActions.updateLoader({ loading: false }));
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissionsFailure({ error: 'Mission error' }));
      actions$.next(SkillActions.loadSkillsFailure({ error: 'Skill error' }));
      await promise;
    });

    it('should handle mixed order of mission and skill actions', async (): Promise<void> => {
      const effect$ = updateLoaderAfterLoad(actions$);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(LanguageActions.updateLoader({ loading: false }));
          resolve();
        });
      });

      actions$.next(SkillActions.loadSkillsSuccess({ skills: [] }));
      actions$.next(MissionActions.loadMissionsFailure({ error: 'Error' }));
      await promise;
    });
  });
});
