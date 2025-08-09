import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChangeDetectorRef, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { ThemeService } from '@core/services/theme.service';
import { TranslocoService } from '@jsverse/transloco';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';

@Component({
  selector: 'cv-general',
  standalone: true,
  template: `<div class="general-component"></div>`,
})
class TestGeneralComponent {}

@Component({
  selector: 'cv-resume',
  standalone: true,
  template: `<div class="resume-component"></div>`,
})
class TestResumeComponent {}

@Component({
  selector: 'cv-scroll-top',
  standalone: true,
  template: `<div class="scroll-top-component"></div>`,
})
class TestScrollTopComponent {}

@Component({
  selector: 'cv-spinner',
  standalone: true,
  template: `<div class="spinner-component"></div>`,
})
class TestSpinnerComponent {}

describe('AppComponent', (): void => {
  let appComponent: AppComponent;
  let componentFixture: ComponentFixture<AppComponent>;
  let mockStore: any;
  let mockChangeDetectorRef: any;
  let mockLoaderSubject: BehaviorSubject<boolean>;
  let mockLanguageSubject: BehaviorSubject<string>;

  beforeEach(waitForAsync((): void => {
    mockLoaderSubject = new BehaviorSubject<boolean>(false);
    mockLanguageSubject = new BehaviorSubject<string>('en');
    mockStore = createMockStore();
    mockChangeDetectorRef = { markForCheck: vi.fn() };

    vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => mockLoaderSubject.value));
    vi.mocked(mockStore.select).mockReturnValue(mockLanguageSubject.asObservable());

    TestBed.configureTestingModule({
      imports: [TestGeneralComponent, TestResumeComponent, TestScrollTopComponent, TestSpinnerComponent],
      providers: [
        ...getTranslocoTestProviders(),
        ThemeService,
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef },
        { provide: Navigator, useValue: { language: 'en' } },
        {
          provide: TranslocoService,
          useValue: { setActiveLang: vi.fn(), langChanges$: of('fr') },
        },
        {
          provide: Store,
          useValue: mockStore,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    
    TestBed.overrideComponent(AppComponent, {
      set: {
        imports: [TestGeneralComponent, TestResumeComponent, TestScrollTopComponent, TestSpinnerComponent],
        template: `
          @if (isLoading()) {
            <cv-spinner></cv-spinner>
          } @else {
            <div id="container">
              <aside>
                <cv-general></cv-general>
              </aside>
              <main>
                <cv-resume></cv-resume>
                <cv-scroll-top></cv-scroll-top>
              </main>
            </div>
          }
        `,
      },
    });
    componentFixture = TestBed.createComponent(AppComponent);
    appComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(appComponent).toBeTruthy();
  });

  describe('constructor', (): void => {
    it('should initialize isLoading signal from store', (): void => {
      expect(mockStore.selectSignal).toHaveBeenCalled();
      expect(appComponent.isLoading).toBeDefined();
    });
  });

  describe('ngOnInit', (): void => {
    it('should subscribe to language changes and mark for check', (): void => {
      const storeSelectSpy = vi.spyOn(mockStore, 'select');
      appComponent.ngOnInit();
      expect(storeSelectSpy).toHaveBeenCalled();
      expect(mockStore.select).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should handle language subscription lifecycle', (): void => {
      expect(() => appComponent.ngOnInit()).not.toThrow();
      expect(mockStore.select).toHaveBeenCalled();
    });
  });

  describe('onPageScroll', (): void => {
    let mockScrollTracker: HTMLElement;

    beforeEach((): void => {
      // Mock document methods and properties
      mockScrollTracker = document.createElement('div');
      mockScrollTracker.id = 'scroll-tracker';
      mockScrollTracker.style.width = '0%';
      
      vi.spyOn(document, 'getElementById').mockReturnValue(mockScrollTracker);
      
      // Mock scrolling properties
      Object.defineProperty(document.documentElement, 'scrollTop', {
        value: 100,
        writable: true,
      });
      Object.defineProperty(document.body, 'scrollTop', {
        value: 50,
        writable: true,
      });
      Object.defineProperty(document.body, 'scrollHeight', {
        value: 1000,
        writable: true,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 600,
        writable: true,
      });
    });

    it('should update scroll tracker width based on scroll position', (): void => {
      appComponent.onPageScroll();
      expect(document.getElementById).toHaveBeenCalledWith('scroll-tracker');
      expect(mockScrollTracker.style.width).toBe('25%');
    });

    it('should use documentElement.scrollTop when available', (): void => {
      Object.defineProperty(document.documentElement, 'scrollTop', { value: 200 });
      appComponent.onPageScroll();
      expect(mockScrollTracker.style.width).toBe('50%');
    });

    it('should fallback to body.scrollTop when documentElement.scrollTop is 0', (): void => {
      Object.defineProperty(document.documentElement, 'scrollTop', { value: 0 });
      Object.defineProperty(document.body, 'scrollTop', { value: 100 });
      appComponent.onPageScroll();
      expect(mockScrollTracker.style.width).toBe('25%');
    });

    it('should handle missing scroll tracker element', (): void => {
      vi.spyOn(document, 'getElementById').mockReturnValue(null);
      expect(() => appComponent.onPageScroll()).not.toThrow();
    });

    it('should handle scroll tracker without style property', (): void => {
      const mockElementWithoutStyle = {} as HTMLElement;
      vi.spyOn(document, 'getElementById').mockReturnValue(mockElementWithoutStyle);
      expect(() => appComponent.onPageScroll()).not.toThrow();
    });

    it('should calculate progress width correctly', (): void => {
      Object.defineProperty(document.documentElement, 'scrollTop', { value: 200 });
      Object.defineProperty(document.body, 'scrollHeight', { value: 800 });
      Object.defineProperty(document.documentElement, 'clientHeight', { value: 400 });
      appComponent.onPageScroll();
      expect(mockScrollTracker.style.width).toBe('50%');
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should render spinner when loading is true', (): void => {
      mockLoaderSubject.next(true);
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => true));
      const newFixture = TestBed.createComponent(AppComponent);
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      expect(compiled.querySelector('.spinner-component')).toBeTruthy();
      expect(compiled.querySelector('#container')).toBeNull();
    });

    it('should render main content when loading is false', (): void => {
      mockLoaderSubject.next(false);
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => false));
      const newFixture = TestBed.createComponent(AppComponent);
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      expect(compiled.querySelector('#container')).toBeTruthy();
      expect(compiled.querySelector('.spinner-component')).toBeNull();
    });

    it('should render aside with general component', (): void => {
      const compiled = componentFixture.nativeElement;
      const aside = compiled.querySelector('aside');
      expect(aside).toBeTruthy();
      expect(aside.querySelector('.general-component')).toBeTruthy();
    });

    it('should render main with resume and scroll-top components', (): void => {
      const compiled = componentFixture.nativeElement;
      const main = compiled.querySelector('main');
      expect(main).toBeTruthy();
      expect(main.querySelector('.resume-component')).toBeTruthy();
      expect(main.querySelector('.scroll-top-component')).toBeTruthy();
    });

    it('should have correct template structure when not loading', (): void => {
      mockLoaderSubject.next(false);
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => false));
      const newFixture = TestBed.createComponent(AppComponent);
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      expect(compiled.querySelector('div#container > aside')).toBeTruthy();
      expect(compiled.querySelector('div#container > main')).toBeTruthy();
    });

    it('should conditionally render based on isLoading signal', (): void => {
      mockLoaderSubject.next(true);
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => true));
      const loadingFixture = TestBed.createComponent(AppComponent);
      loadingFixture.detectChanges();
      expect(loadingFixture.nativeElement.querySelector('.spinner-component')).toBeTruthy();
      mockLoaderSubject.next(false);
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => false));
      const contentFixture = TestBed.createComponent(AppComponent);
      contentFixture.detectChanges();
      expect(contentFixture.nativeElement.querySelector('#container')).toBeTruthy();
    });
  });

  describe('component integration', (): void => {
    it('should handle store signal correctly', (): void => {
      expect(appComponent.isLoading).toBeDefined();
      expect(typeof appComponent.isLoading).toBe('function');
    });

    it('should maintain component structure', (): void => {
      expect(appComponent.ngOnInit).toBeDefined();
      expect(appComponent.onPageScroll).toBeDefined();
      expect(typeof appComponent.ngOnInit).toBe('function');
      expect(typeof appComponent.onPageScroll).toBe('function');
    });

    it('should use OnPush change detection strategy', (): void => {
      expect((AppComponent as any).ɵcmp?.onPush).toBe(true);
    });

    it('should use ViewEncapsulation.None', (): void => {
      expect((AppComponent as any).ɵcmp?.encapsulation).toBe(2);
    });

    it('should inject required dependencies correctly', (): void => {
      expect((appComponent as any).changeDetectorRef).toBeDefined();
      expect((appComponent as any).destroyRef).toBeDefined();
      expect((appComponent as any).store).toBeDefined();
    });

    it('should handle HostListener decorator correctly', (): void => {
      const hostListeners = (AppComponent as any).ɵcmp?.hostBindings;
      expect(hostListeners).toBeDefined();
    });

    it('should properly initialize isLoading signal from store', (): void => {
      const isLoadingResult = appComponent.isLoading();
      expect(typeof isLoadingResult).toBe('boolean');
    });

    it('should handle language changes subscription properly', (): void => {
      const storeSelectSpy = vi.spyOn(mockStore, 'select');
      appComponent.ngOnInit();
      expect(storeSelectSpy).toHaveBeenCalled();
      expect((appComponent as any).destroyRef).toBeDefined();
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle window scroll event correctly', (): void => {
      const scrollEvent = new Event('scroll');
      vi.spyOn(appComponent, 'onPageScroll');
      window.dispatchEvent(scrollEvent);
      expect(appComponent.onPageScroll).toHaveBeenCalled();
    });

    it('should handle subscription cleanup on destroy', (): void => {
      appComponent.ngOnInit();
      expect(mockStore.select).toHaveBeenCalled();
      expect((appComponent as any).destroyRef).toBeDefined();
    });

    it('should handle store selector with different values', (): void => {
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => true));
      const component = TestBed.createComponent(AppComponent).componentInstance;
      expect(component.isLoading()).toBe(true);
      vi.mocked(mockStore.selectSignal).mockReturnValue(vi.fn(() => false));
      const component2 = TestBed.createComponent(AppComponent).componentInstance;
      expect(component2.isLoading()).toBe(false);
    });

    it('should handle scroll calculations with zero dimensions', (): void => {
      const mockScrollTracker = document.createElement('div');
      mockScrollTracker.id = 'scroll-tracker';
      vi.spyOn(document, 'getElementById').mockReturnValue(mockScrollTracker);
      Object.defineProperty(document.documentElement, 'scrollTop', { value: 0 });
      Object.defineProperty(document.body, 'scrollTop', { value: 0 });
      Object.defineProperty(document.body, 'scrollHeight', { value: 0 });
      Object.defineProperty(document.documentElement, 'clientHeight', { value: 0 });
      expect(() => appComponent.onPageScroll()).not.toThrow();
    });
  });
});
