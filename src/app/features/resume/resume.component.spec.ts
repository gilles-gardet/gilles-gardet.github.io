import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ResumeComponent } from '@features/resume/resume.component';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { MarkdownModule } from 'ngx-markdown';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ResumeComponent', (): void => {
  let resumeComponent: ResumeComponent;
  let componentFixture: ComponentFixture<ResumeComponent>;
  let store: any;

  beforeEach(waitForAsync((): void => {
    store = createMockStore();
    vi.mocked(store.select).mockReturnValue(of([]));
    TestBed.configureTestingModule({
      imports: [CommonModule, MarkdownModule.forRoot()],
      providers: [
        ...getTranslocoTestProviders(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: Store,
          useValue: store,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    componentFixture = TestBed.createComponent(ResumeComponent);
    resumeComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(resumeComponent).toBeTruthy();
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should render scroll wrapper with tracker', (): void => {
      const compiled = componentFixture.nativeElement;
      const scrollWrapper = compiled.querySelector('.scroll-wrapper');
      const scrollTracker = compiled.querySelector('#scroll-tracker');
      expect(scrollWrapper).toBeTruthy();
      expect(scrollTracker).toBeTruthy();
    });

    it('should render summary component', (): void => {
      const compiled = componentFixture.nativeElement;
      const summaryElement = compiled.querySelector('cv-summary');
      expect(summaryElement).toBeTruthy();
    });

    it('should render skills component', (): void => {
      const compiled = componentFixture.nativeElement;
      const skillsElement = compiled.querySelector('cv-skills');
      expect(skillsElement).toBeTruthy();
    });

    it('should render missions component', (): void => {
      const compiled = componentFixture.nativeElement;
      const missionsElement = compiled.querySelector('cv-missions');
      expect(missionsElement).toBeTruthy();
    });

    it('should render hobbies component', (): void => {
      const compiled = componentFixture.nativeElement;
      const hobbiesElement = compiled.querySelector('cv-hobbies');
      expect(hobbiesElement).toBeTruthy();
    });

    it('should render details component', (): void => {
      const compiled = componentFixture.nativeElement;
      const detailsElement = compiled.querySelector('cv-details');
      expect(detailsElement).toBeTruthy();
    });

    it('should render components in correct order', (): void => {
      const compiled = componentFixture.nativeElement;
      const expectedSelectors = ['cv-summary', 'cv-skills', 'cv-missions', 'cv-hobbies', 'cv-details'];
      const children = Array.from(compiled.children as HTMLCollection).slice(1) as Element[];
      expectedSelectors.forEach((selector, index) => {
        expect(children[index].tagName.toLowerCase()).toBe(selector);
      });
    });
  });

  describe('component structure', (): void => {
    it('should import all required child components', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('cv-summary')).toBeTruthy();
      expect(compiled.querySelector('cv-skills')).toBeTruthy();
      expect(compiled.querySelector('cv-missions')).toBeTruthy();
      expect(compiled.querySelector('cv-hobbies')).toBeTruthy();
      expect(compiled.querySelector('cv-details')).toBeTruthy();
    });

    it('should not have any component logic or methods', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(ResumeComponent.prototype);
      componentPrototype.forEach((prop) => {
        if (prop !== 'constructor') {
          expect(typeof (resumeComponent as any)[prop]).not.toBe('function');
        }
      });
      expect(componentPrototype.filter((prop) => prop !== 'constructor')).toHaveLength(0);
    });
  });

  describe('DOM structure validation', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should have scroll-wrapper as first element', (): void => {
      const compiled = componentFixture.nativeElement;
      const firstChild = compiled.firstElementChild as Element;
      expect(firstChild.classList.contains('scroll-wrapper')).toBe(true);
    });

    it('should have scroll-tracker inside scroll-wrapper', (): void => {
      const compiled = componentFixture.nativeElement;
      const scrollWrapper = compiled.querySelector('.scroll-wrapper');
      const scrollTracker = scrollWrapper?.querySelector('#scroll-tracker');
      expect(scrollTracker).toBeTruthy();
      expect(scrollTracker?.id).toBe('scroll-tracker');
    });

    it('should have all components as direct children after scroll-wrapper', (): void => {
      const compiled = componentFixture.nativeElement;
      const children = Array.from(compiled.children as HTMLCollection) as Element[];
      expect(children[0].classList.contains('scroll-wrapper')).toBe(true);
      expect(children[1].tagName.toLowerCase()).toBe('cv-summary');
      expect(children[2].tagName.toLowerCase()).toBe('cv-skills');
      expect(children[3].tagName.toLowerCase()).toBe('cv-missions');
      expect(children[4].tagName.toLowerCase()).toBe('cv-hobbies');
      expect(children[5].tagName.toLowerCase()).toBe('cv-details');
    });

    it('should maintain component hierarchy', (): void => {
      const compiled = componentFixture.nativeElement;
      const components = ['cv-summary', 'cv-skills', 'cv-missions', 'cv-hobbies', 'cv-details'];
      components.forEach((selector) => {
        const element = compiled.querySelector(selector);
        expect(element).toBeTruthy();
        expect(element.parentElement).toBe(compiled);
      });
    });
  });

  describe('integration behavior', (): void => {
    it('should not interfere with child component initialization', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const childComponents = compiled.querySelectorAll('cv-summary, cv-skills, cv-missions, cv-hobbies, cv-details');
      expect(childComponents).toHaveLength(5);
    });

    it('should allow child components to render independently', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const expectedComponents = ['cv-summary', 'cv-skills', 'cv-missions', 'cv-hobbies', 'cv-details'];
      expectedComponents.forEach((selector) => {
        const element = compiled.querySelector(selector);
        expect(element).toBeTruthy();
      });
    });

    it('should handle component lifecycle correctly', (): void => {
      expect(() => {
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain proper component isolation', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const components = ['cv-summary', 'cv-skills', 'cv-missions', 'cv-hobbies', 'cv-details'];
      components.forEach((selector) => {
        const elements = compiled.querySelectorAll(selector);
        expect(elements.length).toBe(1);
      });
    });
  });
});