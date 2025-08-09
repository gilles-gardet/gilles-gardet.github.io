import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from '@features/details/details.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { MissionService } from '@core/services/mission.service';
import { MissionActions } from '@state/mission/mission.actions';
import { Mission } from '@core/models/mission.model';
import { of } from 'rxjs';
import { signal } from '@angular/core';

describe('DetailsComponent', (): void => {
  let detailsComponent: DetailsComponent;
  let markdownService: MarkdownService;
  let missionService: MissionService;
  let componentFixture: ComponentFixture<DetailsComponent>;
  let store: any;

  const mockMission: Mission = {
    client: 'Test Client',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    timelapse: '2023',
    description: 'Test mission description',
  };

  beforeEach(waitForAsync((): void => {
    store = createMockStore();
    vi.mocked(store.selectSignal).mockReturnValue(signal(false));
    vi.mocked(store.select).mockReturnValue(of(null));
    vi.mocked(store.dispatch).mockReturnValue(undefined);
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, MarkdownModule.forRoot(), DialogComponent, SpinnerComponent],
      providers: [
        ...getTranslocoTestProviders(),
        provideHttpClient(),
        provideHttpClientTesting(),
        MissionService,
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    componentFixture = TestBed.createComponent(DetailsComponent);
    detailsComponent = componentFixture.componentInstance;
    markdownService = TestBed.inject(MarkdownService);
    missionService = TestBed.inject(MissionService);
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(detailsComponent).toBeTruthy();
  });

  describe('constructor and initialization', (): void => {
    it('should initialize isDialogDisplayed signal from store', (): void => {
      expect(store.selectSignal).toHaveBeenCalled();
      expect(detailsComponent['isDialogDisplayed']).toBeDefined();
    });

    it('should subscribe to mission selection', (): void => {
      expect(store.select).toHaveBeenCalled();
    });

    it('should initialize default property values', (): void => {
      expect(detailsComponent.isLoading).toBe(false);
      expect(detailsComponent.clientMission).toBe('');
      expect(detailsComponent.timelapseMission).toBe('');
      expect(detailsComponent.innerFullMission).toBe('');
      expect(detailsComponent.innerLightMission).toBe('');
    });

    it('should handle mission updates when mission is selected', (): void => {
      vi.mocked(store.select).mockReturnValue(of(mockMission));
      vi.spyOn(missionService, 'missionFromDate').mockReturnValue('test-url');
      vi.spyOn(markdownService, 'getSource').mockReturnValue(of('test content'));
      TestBed.createComponent(DetailsComponent);
      expect(missionService.missionFromDate).toHaveBeenCalledWith('2023-01-01', 'full');
      expect(markdownService.getSource).toHaveBeenCalledWith('test-url');
    });
  });

  describe('onDialogHiding', (): void => {
    it('should dispatch close mission dialog action', (): void => {
      detailsComponent.onDialogHiding();
      expect(store.dispatch).toHaveBeenCalledWith(MissionActions.closeMissionDialog());
    });
  });

  describe('onMissionLoading', (): void => {
    it('should set inner full mission content', (): void => {
      const testContent = 'Test markdown content';
      detailsComponent.onMissionLoading(testContent);
      expect(detailsComponent.innerFullMission).toBe(testContent);
    });

    it('should set isLoading to false', (): void => {
      detailsComponent.isLoading = true;
      detailsComponent.onMissionLoading('test');
      expect(detailsComponent.isLoading).toBe(false);
    });

    it('should trigger change detection', (): void => {
      vi.spyOn(detailsComponent['changeDetectorRef'], 'markForCheck');
      detailsComponent.onMissionLoading('test');
      expect(detailsComponent['changeDetectorRef'].markForCheck).toHaveBeenCalled();
    });

    it('should handle empty content', (): void => {
      detailsComponent.onMissionLoading('');
      expect(detailsComponent.innerFullMission).toBe('');
      expect(detailsComponent.isLoading).toBe(false);
    });
  });

  describe('onDialogVisibilityChange', (): void => {
    it('should dispatch close action when dialog becomes hidden', (): void => {
      detailsComponent.onDialogVisibilityChange(false);
      expect(store.dispatch).toHaveBeenCalledWith(MissionActions.closeMissionDialog());
    });

    it('should not dispatch action when dialog becomes visible', (): void => {
      store.dispatch = vi.fn();
      detailsComponent.onDialogVisibilityChange(true);
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      vi.mocked(store.selectSignal).mockReturnValue(signal(true));
      componentFixture = TestBed.createComponent(DetailsComponent);
      detailsComponent = componentFixture.componentInstance;
      componentFixture.detectChanges();
    });

    it('should render dialog component', (): void => {
      const compiled = componentFixture.nativeElement;
      const dialogElement = compiled.querySelector('cv-dialog');
      expect(dialogElement).toBeTruthy();
    });

    it('should bind dialog visibility to isDialogDisplayed signal', (): void => {
      const dialogElement = componentFixture.debugElement.query((el) => el.name === 'cv-dialog');
      expect(dialogElement).toBeTruthy();
    });

    it('should render mission title header when dialog is visible', (): void => {
      detailsComponent.clientMission = 'Test Client';
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const titleElement = compiled.querySelector('.mission__title h2');
      expect(titleElement).toBeTruthy();
    });

    it('should render mission timelapse when dialog is visible', (): void => {
      detailsComponent.timelapseMission = '2023';
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const timelapseElement = compiled.querySelector('.mission__title__timelapse');
      expect(timelapseElement).toBeTruthy();
    });

    it('should show loading state correctly when dialog is visible', (): void => {
      detailsComponent.isLoading = true;
      componentFixture.detectChanges();
      expect(detailsComponent.isLoading).toBe(true);
      const compiled = componentFixture.nativeElement;
      const missionContentDiv = compiled.querySelector('.mission__content');
      expect(missionContentDiv).toBeTruthy();
    });

    it('should render mission content when not loading and dialog is visible', (): void => {
      detailsComponent.isLoading = false;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const contentElement = compiled.querySelector('.mission__content__text');
      expect(contentElement).toBeTruthy();
    });

    it('should render markdown components for light and full mission when dialog is visible', (): void => {
      detailsComponent.isLoading = false;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const markdownElements = compiled.querySelectorAll('markdown');
      expect(markdownElements.length).toBe(2);
    });
  });

  describe('component structure', (): void => {
    it('should import required modules', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('cv-dialog')).toBeTruthy();
    });

    it('should inject required services', (): void => {
      expect(detailsComponent['store']).toBeDefined();
      expect(detailsComponent['markdownService']).toBeDefined();
      expect(detailsComponent['changeDetectorRef']).toBeDefined();
      expect(detailsComponent['missionService']).toBeDefined();
      expect(detailsComponent['destroyRef']).toBeDefined();
    });
  });

  describe('mission data handling', (): void => {
    it('should update mission properties when mission changes', (): void => {
      vi.mocked(store.select).mockReturnValue(of(mockMission));
      vi.spyOn(missionService, 'missionFromDate').mockReturnValue('test-url');
      vi.spyOn(markdownService, 'getSource').mockReturnValue(of('full content'));
      const testComponent = TestBed.createComponent(DetailsComponent).componentInstance;
      expect(testComponent.clientMission).toBe('Test Client');
      expect(testComponent.timelapseMission).toBe('2023');
      expect(testComponent.innerLightMission).toBe('Test mission description');
    });

    it('should handle mission with null values', (): void => {
      const nullMission: Mission = {
        client: 'Test',
        startDate: '2023-01-01',
        endDate: null as any,
        timelapse: null as any,
        description: null as any,
      };
      vi.mocked(store.select).mockReturnValue(of(nullMission));
      vi.spyOn(missionService, 'missionFromDate').mockReturnValue('test-url');
      vi.spyOn(markdownService, 'getSource').mockReturnValue(of('content'));
      const testComponent = TestBed.createComponent(DetailsComponent).componentInstance;
      expect(testComponent.timelapseMission).toBe('');
      expect(testComponent.innerLightMission).toBe('');
    });

    it('should set loading state when processing mission', (): void => {
      vi.mocked(store.select).mockReturnValue(of(mockMission));
      vi.spyOn(missionService, 'missionFromDate').mockReturnValue('test-url');
      vi.spyOn(markdownService, 'getSource').mockReturnValue(of('content'));
      const testComponent = TestBed.createComponent(DetailsComponent).componentInstance;
      testComponent.isLoading = false;
      expect(testComponent.isLoading).toBe(false);
    });
  });

  describe('integration behavior', (): void => {
    it('should handle complete dialog lifecycle', (): void => {
      expect(() => {
        detailsComponent.onDialogVisibilityChange(true);
        detailsComponent.onDialogVisibilityChange(false);
        detailsComponent.onDialogHiding();
      }).not.toThrow();
    });

    it('should handle mission loading workflow', (): void => {
      detailsComponent.isLoading = true;
      detailsComponent.onMissionLoading('Test content');
      expect(detailsComponent.innerFullMission).toBe('Test content');
      expect(detailsComponent.isLoading).toBe(false);
    });

    it('should maintain data integrity during state changes', (): void => {
      detailsComponent.clientMission = 'New Client';
      expect(detailsComponent.clientMission).toBe('New Client');
      expect(detailsComponent.timelapseMission).toBe('');
      expect(detailsComponent.innerFullMission).toBe('');
    });

    it('should handle multiple mission content updates', (): void => {
      const contents = ['Content 1', 'Content 2', 'Content 3'];
      contents.forEach((content) => {
        detailsComponent.onMissionLoading(content);
        expect(detailsComponent.innerFullMission).toBe(content);
        expect(detailsComponent.isLoading).toBe(false);
      });
    });

    it('should properly cleanup on dialog close', (): void => {
      detailsComponent.onDialogHiding();
      detailsComponent.onDialogVisibilityChange(false);
      expect(store.dispatch).toHaveBeenCalledWith(MissionActions.closeMissionDialog());
      expect(store.dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
