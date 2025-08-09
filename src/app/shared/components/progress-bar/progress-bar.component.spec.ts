import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', (): void => {
  let progressBarComponent: ProgressBarComponent;
  let componentFixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, ProgressBarComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(ProgressBarComponent);
    progressBarComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    progressBarComponent.value = 50;
    expect(progressBarComponent).toBeTruthy();
  });

  describe('value input property', (): void => {
    it('should have required value input with default undefined', (): void => {
      expect(progressBarComponent.value).toBeUndefined();
    });

    it('should accept numeric value', (): void => {
      progressBarComponent.value = 75;
      expect(progressBarComponent.value).toBe(75);
    });

    it('should update value when input changes', (): void => {
      progressBarComponent.value = 25;
      expect(progressBarComponent.value).toBe(25);
      progressBarComponent.value = 90;
      expect(progressBarComponent.value).toBe(90);
    });

    it('should handle zero value', (): void => {
      progressBarComponent.value = 0;
      expect(progressBarComponent.value).toBe(0);
    });

    it('should handle 100 percent value', (): void => {
      progressBarComponent.value = 100;
      expect(progressBarComponent.value).toBe(100);
    });

    it('should handle decimal values', (): void => {
      progressBarComponent.value = 33.5;
      expect(progressBarComponent.value).toBe(33.5);
    });

    it('should handle negative values', (): void => {
      progressBarComponent.value = -10;
      expect(progressBarComponent.value).toBe(-10);
    });

    it('should handle values over 100', (): void => {
      progressBarComponent.value = 150;
      expect(progressBarComponent.value).toBe(150);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      progressBarComponent.value = 60;
      componentFixture.detectChanges();
    });

    it('should render progress bar container', (): void => {
      const compiled = componentFixture.nativeElement;
      const progressBarDiv = compiled.querySelector('.progress-bar');
      expect(progressBarDiv).toBeTruthy();
    });

    it('should render progress bar value element', (): void => {
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv).toBeTruthy();
    });

    it('should apply animation class to value element', (): void => {
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.classList.contains('progress-bar__value-animate')).toBe(true);
    });

    it('should set correct width style based on value', (): void => {
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('60%');
    });

    it('should update width when value changes', (): void => {
      const newFixture = TestBed.createComponent(ProgressBarComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.value = 80;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('80%');
    });

    it('should handle zero percent width', (): void => {
      const newFixture = TestBed.createComponent(ProgressBarComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.value = 0;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('0%');
    });

    it('should handle 100 percent width', (): void => {
      const newFixture = TestBed.createComponent(ProgressBarComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.value = 100;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('100%');
    });

    it('should handle decimal percent width', (): void => {
      const newFixture = TestBed.createComponent(ProgressBarComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.value = 33.7;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('33.7%');
    });
  });

  describe('component structure', (): void => {
    it('should be a simple presentation component', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(ProgressBarComponent.prototype);
      const onlyConstructor = componentPrototype.filter((prop) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods = Object.getOwnPropertyNames(ProgressBarComponent.prototype).filter(
        (name) => name !== 'constructor' && typeof (progressBarComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });

    it('should use number attribute transformer', (): void => {
      progressBarComponent.value = 42;
      expect(typeof progressBarComponent.value).toBe('number');
    });
  });

  describe('styling and layout', (): void => {
    beforeEach((): void => {
      progressBarComponent.value = 45;
      componentFixture.detectChanges();
    });

    it('should have progress bar styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const progressBarDiv = compiled.querySelector('.progress-bar');
      expect(progressBarDiv.classList.contains('progress-bar')).toBe(true);
    });

    it('should have value styling classes', (): void => {
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.classList.contains('progress-bar__value')).toBe(true);
      expect(valueDiv.classList.contains('progress-bar__value-animate')).toBe(true);
    });

    it('should maintain consistent structure across renders', (): void => {
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.progress-bar')).toBeTruthy();
      expect(compiled.querySelector('.progress-bar__value')).toBeTruthy();
    });

    it('should preserve animation class across value changes', (): void => {
      progressBarComponent.value = 70;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.classList.contains('progress-bar__value-animate')).toBe(true);
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        progressBarComponent.value = 55;
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain value data after multiple change detections', (): void => {
      progressBarComponent.value = 65;
      componentFixture.detectChanges();
      const initialValue = progressBarComponent.value;
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(initialValue);
    });

    it('should render consistently across multiple detect changes', (): void => {
      progressBarComponent.value = 40;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const initialWidth = compiled.querySelector('.progress-bar__value').style.width;
      componentFixture.detectChanges();
      const finalWidth = compiled.querySelector('.progress-bar__value').style.width;
      expect(finalWidth).toBe(initialWidth);
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle very large values', (): void => {
      progressBarComponent.value = 999999;
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(999999);
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('999999%');
    });

    it('should handle very small decimal values', (): void => {
      progressBarComponent.value = 0.001;
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(0.001);
    });

    it('should handle negative percentage values', (): void => {
      progressBarComponent.value = -25;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const valueDiv = compiled.querySelector('.progress-bar__value');
      expect(valueDiv.style.width).toBe('-25%');
    });

    it('should maintain structure with all value types', (): void => {
      const testValues = [0, 25, 50, 75, 100, 150, -10, 33.5, undefined];
      testValues.forEach((value) => {
        progressBarComponent.value = value;
        componentFixture.detectChanges();
        const compiled = componentFixture.nativeElement;
        expect(compiled.querySelector('.progress-bar')).toBeTruthy();
        expect(compiled.querySelector('.progress-bar__value')).toBeTruthy();
      });
    });
  });

  describe('integration behavior', (): void => {
    it('should handle dynamic value updates', (): void => {
      const progressValues = [10, 25, 50, 75, 90];
      progressValues.forEach((value) => {
        const newFixture = TestBed.createComponent(ProgressBarComponent);
        const newComponent = newFixture.componentInstance;
        newComponent.value = value;
        newFixture.detectChanges();
        expect(newComponent.value).toBe(value);
        const compiled = newFixture.nativeElement;
        const valueDiv = compiled.querySelector('.progress-bar__value');
        expect(valueDiv.style.width).toBe(`${value}%`);
      });
    });

    it('should preserve component structure across value changes', (): void => {
      const testValues = [0, 50, 100];
      testValues.forEach((value) => {
        progressBarComponent.value = value;
        componentFixture.detectChanges();
        const compiled = componentFixture.nativeElement;
        expect(compiled.querySelector('.progress-bar')).toBeTruthy();
        expect(compiled.querySelector('.progress-bar__value')).toBeTruthy();
        expect(compiled.querySelector('.progress-bar__value').classList.contains('progress-bar__value-animate')).toBe(
          true,
        );
      });
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent = progressBarComponent;
      progressBarComponent.value = 88;
      componentFixture.detectChanges();
      expect(progressBarComponent).toBe(initialComponent);
      expect(progressBarComponent.value).toBe(88);
    });

    it('should work correctly with ngStyle binding', (): void => {
      const testValues = [25, 50, 75];
      testValues.forEach((value) => {
        const newFixture = TestBed.createComponent(ProgressBarComponent);
        const newComponent = newFixture.componentInstance;
        newComponent.value = value;
        newFixture.detectChanges();
        const compiled = newFixture.nativeElement;
        const valueDiv = compiled.querySelector('.progress-bar__value');
        expect(valueDiv.style.width).toBe(`${value}%`);
      });
    });

    it('should handle rapid value changes smoothly', (): void => {
      const rapidValues = [10, 20, 30, 40, 50];
      rapidValues.forEach((value) => {
        const newFixture = TestBed.createComponent(ProgressBarComponent);
        const newComponent = newFixture.componentInstance;
        newComponent.value = value;
        newFixture.detectChanges();
        const compiled = newFixture.nativeElement;
        const valueDiv = compiled.querySelector('.progress-bar__value');
        expect(valueDiv.style.width).toBe(`${value}%`);
      });
    });
  });
});
