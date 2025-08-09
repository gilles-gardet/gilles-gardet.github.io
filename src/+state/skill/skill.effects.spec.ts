import { of, Subject, throwError } from 'rxjs';
import { SkillActions } from './skill.actions';
import { loadSkills } from './skill.effects';
import { Skill } from '@core/models/skill.model';

describe('Skill Effects', (): void => {
  let actions$: Subject<any>;
  let mockSkillService: any;

  const mockSkills: Skill[] = [
    { name: 'Angular', rate: 90 },
    { name: 'TypeScript', rate: 85 },
  ];

  beforeEach((): void => {
    actions$ = new Subject();
    mockSkillService = { fetchSkills$: vi.fn() };
  });

  afterEach((): void => {
    vi.clearAllMocks();
    actions$.complete();
  });

  describe('loadSkills', (): void => {
    it('should load skills successfully', async (): Promise<void> => {
      mockSkillService.fetchSkills$.mockReturnValue(of(mockSkills));
      const effect$ = loadSkills(actions$, mockSkillService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(SkillActions.loadSkillsSuccess({ skills: mockSkills }));
          resolve();
        });
      });

      actions$.next(SkillActions.loadSkills());
      await promise;
    });

    it('should handle failure', async (): Promise<void> => {
      const error = new Error('Test error');
      mockSkillService.fetchSkills$.mockReturnValue(throwError(() => error));
      const effect$ = loadSkills(actions$, mockSkillService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(SkillActions.loadSkillsFailure({ error: 'Test error' }));
          resolve();
        });
      });

      actions$.next(SkillActions.loadSkills());
      await promise;
    });
  });
});
