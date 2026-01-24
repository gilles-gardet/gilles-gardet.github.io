import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorRef, ElementRef, QueryList } from '@angular/core';
import { MissionsComponent } from '@features/missions/missions.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { Mission } from '@core/models/mission.model';
import { MissionActions } from '@state/mission/mission.actions';
import { of } from 'rxjs';
import { provideMarkdown } from 'ngx-markdown';

describe('MissionsComponent', (): void => {
  let missionsComponent: MissionsComponent;
  let componentFixture: ComponentFixture<MissionsComponent>;
  let store: any;
  let changeDetectorRef: ChangeDetectorRef;

  const mockMissions: Mission[] = [
    {
      client: 'Client A',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      timelapse: '01/01/2023 - 01/06/2023 (6 months)',
      description: 'Description A',
    },
    {
      client: 'Client B',
      startDate: '2023-07-01',
      endDate: '2023-12-01',
      timelapse: '01/07/2023 - 01/12/2023 (5 months)',
      description: 'Description B',
    },
  ];

  beforeEach(waitForAsync((): void => {
    store = createMockStore();
    vi.mocked(store.select).mockReturnValue(of(mockMissions));
    vi.mocked(store.dispatch).mockReturnValue(undefined);
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent],
      providers: [
        ...getTranslocoTestProviders(),
        provideMarkdown(),
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    componentFixture = TestBed.createComponent(MissionsComponent);
    missionsComponent = componentFixture.componentInstance;
    changeDetectorRef = missionsComponent['changeDetectorRef'];
    vi.spyOn(changeDetectorRef, 'markForCheck');
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(missionsComponent).toBeTruthy();
  });

  it('should initialize screenWidth on ngOnInit', (): void => {
    Object.defineProperty(window, 'innerWidth', { value: 800, writable: true });
    missionsComponent.ngOnInit();
    expect(missionsComponent['screenWidth']).toBe(800);
  });

  it('should subscribe to missions from store on ngAfterViewInit', (): void => {
    missionsComponent.ngAfterViewInit();
    expect(store.select).toHaveBeenCalled();
    expect(missionsComponent['missions']).toEqual(mockMissions);
    expect(missionsComponent['expectedMarkdownCount']).toBe(2);
    expect(missionsComponent['markdownReadyCount']).toBe(0);
    expect(changeDetectorRef.markForCheck).toHaveBeenCalled();
  });

  describe('window resize handling', (): void => {
    it('should update screenWidth on window resize', (): void => {
      Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });
      missionsComponent.onWindowResize();
      expect(missionsComponent['screenWidth']).toBe(1024);
    });

    it('should handle multiple window resize events', (): void => {
      Object.defineProperty(window, 'innerWidth', { value: 768, writable: true });
      missionsComponent.onWindowResize();
      expect(missionsComponent['screenWidth']).toBe(768);
      Object.defineProperty(window, 'innerWidth', { value: 1440, writable: true });
      missionsComponent.onWindowResize();
      expect(missionsComponent['screenWidth']).toBe(1440);
    });
  });

  describe('markdown ready handling', (): void => {
    beforeEach((): void => {
      missionsComponent.ngAfterViewInit();
      vi.clearAllMocks();
    });

    it('should increment markdownReadyCount when onMarkdownReady is called', (): void => {
      const initialCount = missionsComponent['markdownReadyCount'];
      missionsComponent['onMarkdownReady']();
      expect(missionsComponent['markdownReadyCount']).toBe(initialCount + 1);
    });

    it('should call _animateMissionsOnView when all markdown is ready', (): void => {
      vi.spyOn(missionsComponent as any, '_animateMissionsOnView');
      missionsComponent['markdownReadyCount'] = 1;
      missionsComponent['expectedMarkdownCount'] = 2;
      missionsComponent['onMarkdownReady']();
      expect(missionsComponent['markdownReadyCount']).toBe(2);
      expect(missionsComponent['_animateMissionsOnView']).toHaveBeenCalled();
    });

    it('should not call _animateMissionsOnView when not all markdown is ready', (): void => {
      vi.spyOn(missionsComponent as any, '_animateMissionsOnView');
      missionsComponent['markdownReadyCount'] = 0;
      missionsComponent['expectedMarkdownCount'] = 2;
      missionsComponent['onMarkdownReady']();
      expect(missionsComponent['markdownReadyCount']).toBe(1);
      expect(missionsComponent['_animateMissionsOnView']).not.toHaveBeenCalled();
    });
  });

  describe('_animateMissionsOnView', (): void => {
    beforeEach((): void => {
      missionsComponent.ngAfterViewInit();
      vi.clearAllMocks();
    });

    it('should disconnect existing observer before creating new one', (): void => {
      const mockObserver = {
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
        root: null,
        rootMargin: '',
        thresholds: [],
        takeRecords: vi.fn().mockReturnValue([]),
      } as unknown as IntersectionObserver;
      missionsComponent['intersectionObserver'] = mockObserver;
      vi.spyOn(document, 'querySelectorAll').mockReturnValue([] as any);
      missionsComponent['_animateMissionsOnView']();
      expect(mockObserver.disconnect).toHaveBeenCalled();
    });

    it('should create intersection observer with correct threshold', (): void => {
      vi.spyOn(document, 'querySelectorAll').mockReturnValue([] as any);
      missionsComponent['_animateMissionsOnView']();
      expect(missionsComponent['intersectionObserver']).toBeDefined();
      expect(missionsComponent['intersectionObserver']).toBeInstanceOf(IntersectionObserver);
    });

    it('should use ViewChildren elements when available', (): void => {
      const mockElement1 = document.createElement('div');
      const mockElement2 = document.createElement('div');
      const mockElementRef1 = { nativeElement: mockElement1 } as ElementRef<HTMLElement>;
      const mockElementRef2 = { nativeElement: mockElement2 } as ElementRef<HTMLElement>;
      missionsComponent['missionElements'] = {
        length: 2,
        toArray: () => [mockElementRef1, mockElementRef2],
      } as QueryList<ElementRef<HTMLElement>>;
      missionsComponent['_animateMissionsOnView']();
      expect(missionsComponent['intersectionObserver']).toBeDefined();
    });

    it('should fallback to document.querySelectorAll when ViewChildren not available', (): void => {
      const mockElement = document.createElement('div');
      missionsComponent['missionElements'] = undefined;
      vi.spyOn(document, 'querySelectorAll').mockReturnValue([mockElement] as any);
      missionsComponent['_animateMissionsOnView']();
      expect(document.querySelectorAll).toHaveBeenCalledWith('cv-panel#experience .timeline__event');
      expect(missionsComponent['intersectionObserver']).toBeDefined();
    });
  });

  describe('_manageAnimationOnElement', (): void => {
    let mockEventContent: HTMLElement;
    let mockTimelineEvent: HTMLElement;
    let mockEntry: IntersectionObserverEntry;

    beforeEach((): void => {
      missionsComponent.ngAfterViewInit();
      mockEventContent = document.createElement('div');
      mockEventContent.className = 'timeline__event-content';
      mockTimelineEvent = document.createElement('div');
      mockTimelineEvent.appendChild(mockEventContent);
      mockEntry = {
        isIntersecting: true,
        target: mockTimelineEvent,
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 1,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: null,
        time: 0,
      } as IntersectionObserverEntry;
      missionsComponent['screenWidth'] = 1200;
      vi.clearAllMocks();
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0);
        return 0;
      });
      vi.spyOn(global, 'setTimeout').mockImplementation((callback) => {
        callback();
        return 0 as any;
      });
    });

    it('should return early when not intersecting', (): void => {
      const notIntersectingEntry = {
        ...mockEntry,
        isIntersecting: false,
      } as IntersectionObserverEntry;
      missionsComponent['_manageAnimationOnElement'](notIntersectingEntry);
      expect(mockEventContent.style.opacity).toBe('');
    });

    it('should return early when screenWidth is 0', (): void => {
      missionsComponent['screenWidth'] = 0;
      missionsComponent['_manageAnimationOnElement'](mockEntry);
      expect(mockEventContent.style.opacity).toBe('');
    });

    it('should return early when event content not found', (): void => {
      mockTimelineEvent.innerHTML = '';
      missionsComponent['_manageAnimationOnElement'](mockEntry);
      expect(changeDetectorRef.markForCheck).not.toHaveBeenCalled();
    });

    it('should animate right for even index on large screen', (): void => {
      const mockParent = document.createElement('div');
      mockParent.appendChild(mockTimelineEvent);
      missionsComponent['_manageAnimationOnElement'](mockEntry);
      expect(mockEventContent.style.opacity).toBe('0');
      expect(mockEventContent.style.transform).toBe('translateX(40px)');
      expect(mockEventContent.classList.contains('mission__animation-right')).toBe(true);
      expect(changeDetectorRef.markForCheck).toHaveBeenCalled();
    });

    it('should animate left for odd index on large screen', (): void => {
      const mockParent = document.createElement('div');
      const mockFirstEvent = document.createElement('div');
      mockParent.appendChild(mockFirstEvent);
      mockParent.appendChild(mockTimelineEvent);
      missionsComponent['_manageAnimationOnElement'](mockEntry);
      expect(mockEventContent.style.transform).toBe('translateX(-40px)');
      expect(mockEventContent.classList.contains('mission__animation-left')).toBe(true);
    });

    it('should always animate right on small screen', (): void => {
      missionsComponent['screenWidth'] = 800;
      const mockParent = document.createElement('div');
      const mockFirstEvent = document.createElement('div');
      mockParent.appendChild(mockFirstEvent);
      mockParent.appendChild(mockTimelineEvent);
      missionsComponent['_manageAnimationOnElement'](mockEntry);
      expect(mockEventContent.classList.contains('mission__animation-right')).toBe(true);
      expect(mockEventContent.classList.contains('mission__animation-left')).toBe(false);
    });

    it('should handle element without parent', (): void => {
      missionsComponent['_manageAnimationOnElement'](mockEntry);
      expect(mockEventContent.style.opacity).toBe('0');
      expect(mockEventContent.classList.contains('mission__animation-right')).toBe(true);
    });
  });

  describe('emitOpenMissionDialog', (): void => {
    it('should dispatch openMissionDialog action with mission', (): void => {
      const mission = mockMissions[0];
      missionsComponent['emitOpenMissionDialog'](mission);
      expect(store.dispatch).toHaveBeenCalledWith(MissionActions.openMissionDialog({ mission }));
    });

    it('should handle multiple mission dialog opens', (): void => {
      const mission1 = mockMissions[0];
      const mission2 = mockMissions[1];
      missionsComponent['emitOpenMissionDialog'](mission1);
      missionsComponent['emitOpenMissionDialog'](mission2);
      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch).toHaveBeenNthCalledWith(1, MissionActions.openMissionDialog({ mission: mission1 }));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, MissionActions.openMissionDialog({ mission: mission2 }));
    });
  });

  describe('ngOnDestroy', (): void => {
    it('should disconnect intersection observer on destroy', (): void => {
      const mockObserver = {
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
      } as unknown as IntersectionObserver;
      missionsComponent['intersectionObserver'] = mockObserver;
      missionsComponent.ngOnDestroy();
      expect(mockObserver.disconnect).toHaveBeenCalled();
    });

    it('should handle destroy when no intersection observer exists', (): void => {
      missionsComponent['intersectionObserver'] = undefined;
      expect(() => missionsComponent.ngOnDestroy()).not.toThrow();
    });
  });

  describe('component lifecycle integration', (): void => {
    it('should handle complete lifecycle without errors', (): void => {
      expect(() => {
        missionsComponent.ngOnInit();
        missionsComponent.ngAfterViewInit();
        missionsComponent['onMarkdownReady']();
        missionsComponent['onMarkdownReady']();
        missionsComponent.ngOnDestroy();
      }).not.toThrow();
    });

    it('should maintain correct state throughout lifecycle', (): void => {
      missionsComponent.ngOnInit();
      expect(missionsComponent['screenWidth']).toBeGreaterThan(0);
      missionsComponent.ngAfterViewInit();
      expect(missionsComponent['missions']).toEqual(mockMissions);
      expect(missionsComponent['expectedMarkdownCount']).toBe(2);
      missionsComponent['onMarkdownReady']();
      expect(missionsComponent['markdownReadyCount']).toBe(1);
    });
  });
});
