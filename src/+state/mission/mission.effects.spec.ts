import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { of, Subject, throwError } from 'rxjs';
import { MissionService } from '@core/services/mission.service';
import { MissionActions } from './mission.actions';
import { loadMissions } from './mission.effects';
import { Mission } from '@core/models/mission.model';

describe('Mission Effects', (): void => {
  let actions$: Subject<any>;
  let mockMissionService: any;

  const mockMissions: Mission[] = [
    {
      client: 'Company 1',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      timelapse: '12 months',
      description: 'Developer role',
    },
    {
      client: 'Company 2',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      timelapse: '12 months',
      description: 'Senior Developer role',
    },
  ];

  beforeEach((): void => {
    actions$ = new Subject();
    mockMissionService = {
      fetchMissions$: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Actions, useValue: actions$ },
        { provide: MissionService, useValue: mockMissionService },
      ],
    });
  });

  afterEach((): void => {
    vi.clearAllMocks();
    actions$.complete();
  });

  describe('loadMissions', (): void => {
    it('should load missions successfully', async (): Promise<void> => {
      mockMissionService.fetchMissions$.mockReturnValue(of(mockMissions));
      const effect$ = loadMissions(actions$, mockMissionService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(MissionActions.loadMissionsSuccess({ missions: mockMissions }));
          expect(mockMissionService.fetchMissions$).toHaveBeenCalled();
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissions());
      await promise;
    });

    it('should handle mission loading failure', async (): Promise<void> => {
      const error = new Error('Network error');
      mockMissionService.fetchMissions$.mockReturnValue(throwError(() => error));
      const effect$ = loadMissions(actions$, mockMissionService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(MissionActions.loadMissionsFailure({ error: 'Network error' }));
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissions());
      await promise;
    });

    it('should handle empty missions array', async (): Promise<void> => {
      const emptyMissions: Mission[] = [];
      mockMissionService.fetchMissions$.mockReturnValue(of(emptyMissions));
      const effect$ = loadMissions(actions$, mockMissionService);

      const promise = new Promise<void>((resolve) => {
        effect$.subscribe((action) => {
          expect(action).toEqual(MissionActions.loadMissionsSuccess({ missions: emptyMissions }));
          resolve();
        });
      });

      actions$.next(MissionActions.loadMissions());
      await promise;
    });

    it('should call fetchMissions$ service method', (): void => {
      mockMissionService.fetchMissions$.mockReturnValue(of(mockMissions));
      const effect$ = loadMissions(actions$, mockMissionService);
      effect$.subscribe();
      actions$.next(MissionActions.loadMissions());
      expect(mockMissionService.fetchMissions$).toHaveBeenCalledTimes(1);
    });
  });
});
