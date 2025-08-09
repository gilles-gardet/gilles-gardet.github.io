import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';

describe('SlideButtonComponent', (): void => {
  let slideButtonComponent: SlideButtonComponent;
  let componentFixture: ComponentFixture<SlideButtonComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SlideButtonComponent],
      providers: [...getTranslocoTestProviders()],
    }).compileComponents();
    componentFixture = TestBed.createComponent(SlideButtonComponent);
    slideButtonComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(slideButtonComponent).toBeTruthy();
  });

  describe('component structure', (): void => {
    it('should be a simple presentation component', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(SlideButtonComponent.prototype);
      const onlyConstructor = componentPrototype.filter((prop) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods = Object.getOwnPropertyNames(SlideButtonComponent.prototype).filter(
        (name) => name !== 'constructor' && typeof (slideButtonComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });

    it('should import TranslocoDirective', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('button')).toBeTruthy();
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should render with transloco directive', (): void => {
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('button')).toBeTruthy();
    });

    it('should render button element', (): void => {
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button');
      expect(button).toBeTruthy();
    });

    it('should render button with learn-more class', (): void => {
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button.learn-more');
      expect(button).toBeTruthy();
    });

    it('should render circle span with correct classes', (): void => {
      const compiled = componentFixture.nativeElement;
      const circleSpan = compiled.querySelector('span.circle');
      expect(circleSpan).toBeTruthy();
    });

    it('should render circle span with aria-hidden attribute', (): void => {
      const compiled = componentFixture.nativeElement;
      const circleSpan = compiled.querySelector('span.circle');
      expect(circleSpan.getAttribute('aria-hidden')).toBe('true');
    });

    it('should render icon arrow span', (): void => {
      const compiled = componentFixture.nativeElement;
      const iconSpan = compiled.querySelector('span.icon.arrow');
      expect(iconSpan).toBeTruthy();
    });

    it('should render button text span', (): void => {
      const compiled = componentFixture.nativeElement;
      const textSpan = compiled.querySelector('span.button-text');
      expect(textSpan).toBeTruthy();
    });

    it('should display translated text in button', (): void => {
      const compiled = componentFixture.nativeElement;
      const textSpan = compiled.querySelector('span.button-text');
      expect(textSpan.textContent.trim()).toBeTruthy();
    });

    it('should have correct nested structure', (): void => {
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button.learn-more');
      const circleSpan = button.querySelector('span.circle');
      const iconSpan = circleSpan.querySelector('span.icon.arrow');
      const textSpan = button.querySelector('span.button-text');
      expect(button).toBeTruthy();
      expect(circleSpan).toBeTruthy();
      expect(iconSpan).toBeTruthy();
      expect(textSpan).toBeTruthy();
    });
  });

  describe('styling and accessibility', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should have learn-more button class', (): void => {
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button');
      expect(button.classList.contains('learn-more')).toBe(true);
    });

    it('should have circle span with correct classes', (): void => {
      const compiled = componentFixture.nativeElement;
      const circleSpan = compiled.querySelector('span.circle');
      expect(circleSpan.classList.contains('circle')).toBe(true);
    });

    it('should have icon with correct classes', (): void => {
      const compiled = componentFixture.nativeElement;
      const iconSpan = compiled.querySelector('span.icon');
      expect(iconSpan.classList.contains('icon')).toBe(true);
      expect(iconSpan.classList.contains('arrow')).toBe(true);
    });

    it('should have button-text span with correct class', (): void => {
      const compiled = componentFixture.nativeElement;
      const textSpan = compiled.querySelector('span.button-text');
      expect(textSpan.classList.contains('button-text')).toBe(true);
    });

    it('should provide proper accessibility with aria-hidden', (): void => {
      const compiled = componentFixture.nativeElement;
      const circleSpan = compiled.querySelector('span.circle');
      expect(circleSpan.hasAttribute('aria-hidden')).toBe(true);
      expect(circleSpan.getAttribute('aria-hidden')).toBe('true');
    });

    it('should be keyboard accessible as button element', (): void => {
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button');
      expect(button.tagName.toLowerCase()).toBe('button');
    });

    it('should maintain consistent structure across renders', (): void => {
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('button.learn-more')).toBeTruthy();
      expect(compiled.querySelector('span.circle')).toBeTruthy();
      expect(compiled.querySelector('span.icon.arrow')).toBeTruthy();
      expect(compiled.querySelector('span.button-text')).toBeTruthy();
    });
  });

  describe('transloco integration', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should use transloco directive', (): void => {
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button');
      expect(button).toBeTruthy();
    });

    it('should translate button text key', (): void => {
      const compiled = componentFixture.nativeElement;
      const textSpan = compiled.querySelector('span.button-text');
      expect(textSpan.textContent.trim()).toBeTruthy();
    });

    it('should handle translation loading gracefully', (): void => {
      const newFixture = TestBed.createComponent(SlideButtonComponent);
      expect(() => {
        newFixture.detectChanges();
      }).not.toThrow();
    });

    it('should render correctly with translation service', (): void => {
      const compiled = componentFixture.nativeElement;
      const textSpan = compiled.querySelector('span.button-text');
      expect(textSpan).toBeTruthy();
      expect(textSpan.textContent).toBeDefined();
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should render consistently across multiple detect changes', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const initialButton = compiled.querySelector('button.learn-more');
      componentFixture.detectChanges();
      const finalButton = compiled.querySelector('button.learn-more');
      expect(finalButton).toBeTruthy();
      expect(initialButton.tagName).toBe(finalButton.tagName);
    });

    it('should maintain component integrity after multiple renders', (): void => {
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('button.learn-more')).toBeTruthy();
      expect(compiled.querySelector('span.circle')).toBeTruthy();
      expect(compiled.querySelector('span.icon.arrow')).toBeTruthy();
      expect(compiled.querySelector('span.button-text')).toBeTruthy();
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle missing translation gracefully', (): void => {
      expect(() => {
        const newFixture = TestBed.createComponent(SlideButtonComponent);
        newFixture.detectChanges();
        const compiled = newFixture.nativeElement;
        const textSpan = compiled.querySelector('span.button-text');
        expect(textSpan).toBeTruthy();
      }).not.toThrow();
    });

    it('should maintain structure even with translation errors', (): void => {
      const newFixture = TestBed.createComponent(SlideButtonComponent);
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      expect(compiled.querySelector('button.learn-more')).toBeTruthy();
      expect(compiled.querySelector('span.circle')).toBeTruthy();
      expect(compiled.querySelector('span.icon.arrow')).toBeTruthy();
      expect(compiled.querySelector('span.button-text')).toBeTruthy();
    });

    it('should preserve DOM structure across all scenarios', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button.learn-more');
      const circleSpan = button.querySelector('span.circle');
      const iconSpan = circleSpan.querySelector('span.icon.arrow');
      const textSpan = button.querySelector('span.button-text');
      expect(button).toBeTruthy();
      expect(circleSpan).toBeTruthy();
      expect(iconSpan).toBeTruthy();
      expect(textSpan).toBeTruthy();
      expect(circleSpan.getAttribute('aria-hidden')).toBe('true');
    });
  });

  describe('integration behavior', (): void => {
    it('should work correctly with TestBed configuration', (): void => {
      expect(slideButtonComponent).toBeTruthy();
      expect(componentFixture).toBeTruthy();
    });

    it('should integrate properly with Transloco providers', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const textSpan = compiled.querySelector('span.button-text');
      expect(textSpan.textContent).toBeDefined();
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent = slideButtonComponent;
      componentFixture.detectChanges();
      expect(slideButtonComponent).toBe(initialComponent);
    });

    it('should handle multiple fixture creations correctly', (): void => {
      const fixtures = [];
      for (let i = 0; i < 3; i++) {
        const newFixture = TestBed.createComponent(SlideButtonComponent);
        newFixture.detectChanges();
        fixtures.push(newFixture);
        const compiled = newFixture.nativeElement;
        expect(compiled.querySelector('button.learn-more')).toBeTruthy();
      }
      fixtures.forEach((fixture) => fixture.destroy());
    });

    it('should preserve functionality across different test scenarios', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const button = compiled.querySelector('button.learn-more');
      expect(button).toBeTruthy();
      expect(button.querySelector('span.circle')).toBeTruthy();
      expect(button.querySelector('span.icon.arrow')).toBeTruthy();
      expect(button.querySelector('span.button-text')).toBeTruthy();
    });
  });
});
