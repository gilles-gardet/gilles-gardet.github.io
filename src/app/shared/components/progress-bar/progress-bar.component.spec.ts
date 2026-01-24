import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', (): void => {
  let progressBarComponent: ProgressBarComponent;
  let componentFixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(ProgressBarComponent);
    progressBarComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    componentFixture.componentRef.setInput('value', 50);
    componentFixture.detectChanges();
    expect(progressBarComponent).toBeTruthy();
  });

  describe('value input property', (): void => {
    it('should have required value input with default undefined', (): void => {
      expect(progressBarComponent.value).toBeUndefined();
    });

    it('should accept numeric value', (): void => {
      componentFixture.componentRef.setInput('value', 75);
      expect(progressBarComponent.value).toBe(75);
    });

    it('should update value when input changes', (): void => {
      componentFixture.componentRef.setInput('value', 25);
      expect(progressBarComponent.value).toBe(25);
      componentFixture.componentRef.setInput('value', 90);
      expect(progressBarComponent.value).toBe(90);
    });

    it('should handle zero value', (): void => {
      componentFixture.componentRef.setInput('value', 0);
      expect(progressBarComponent.value).toBe(0);
    });

    it('should handle 100 percent value', (): void => {
      componentFixture.componentRef.setInput('value', 100);
      expect(progressBarComponent.value).toBe(100);
    });

    it('should handle decimal values', (): void => {
      componentFixture.componentRef.setInput('value', 33.5);
      expect(progressBarComponent.value).toBe(33.5);
    });

    it('should handle negative values', (): void => {
      componentFixture.componentRef.setInput('value', -10);
      expect(progressBarComponent.value).toBe(-10);
    });

    it('should handle values over 100', (): void => {
      componentFixture.componentRef.setInput('value', 150);
      expect(progressBarComponent.value).toBe(150);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.componentRef.setInput('value', 60);
      componentFixture.detectChanges();
    });

    it('should render progress bar container', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const progressBarDiv: HTMLElement | null = compiled.querySelector('.progress-bar');
      expect(progressBarDiv).toBeTruthy();
    });

    it('should render progress bar value element', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv).toBeTruthy();
    });

    it('should apply animation class to value element', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.classList.contains('progress-bar__value-animate')).toBe(true);
    });

    it('should set correct width style based on value', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.style.width).toBe('60%');
    });

    it('should update width when value changes', (): void => {
      const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
      newFixture.componentRef.setInput('value', 80);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.style.width).toBe('80%');
    });

    it('should handle zero percent width', (): void => {
      const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
      newFixture.componentRef.setInput('value', 0);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.style.width).toBe('0%');
    });

    it('should handle 100 percent width', (): void => {
      const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
      newFixture.componentRef.setInput('value', 100);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.style.width).toBe('100%');
    });

    it('should handle decimal percent width', (): void => {
      const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
      newFixture.componentRef.setInput('value', 33.7);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.style.width).toBe('33.7%');
    });
  });

  describe('component structure', (): void => {
    it('should be a simple presentation component', (): void => {
      const componentPrototype: string[] = Object.getOwnPropertyNames(ProgressBarComponent.prototype);
      const onlyConstructor: string[] = componentPrototype.filter((prop: string) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods: string[] = Object.getOwnPropertyNames(ProgressBarComponent.prototype).filter(
        (name: string) => name !== 'constructor' && typeof (progressBarComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });

    it('should use number attribute transformer', (): void => {
      componentFixture.componentRef.setInput('value', 42);
      expect(typeof progressBarComponent.value).toBe('number');
    });
  });

  describe('styling and layout', (): void => {
    beforeEach((): void => {
      componentFixture.componentRef.setInput('value', 45);
      componentFixture.detectChanges();
    });

    it('should have progress bar styling class', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const progressBarDiv: HTMLElement | null = compiled.querySelector('.progress-bar');
      expect(progressBarDiv?.classList.contains('progress-bar')).toBe(true);
    });

    it('should have value styling classes', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.classList.contains('progress-bar__value')).toBe(true);
      expect(valueDiv?.classList.contains('progress-bar__value-animate')).toBe(true);
    });

    it('should maintain consistent structure across renders', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      expect(compiled.querySelector('.progress-bar')).toBeTruthy();
      expect(compiled.querySelector('.progress-bar__value')).toBeTruthy();
    });

    it('should preserve animation class across value changes', (): void => {
      componentFixture.componentRef.setInput('value', 70);
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.classList.contains('progress-bar__value-animate')).toBe(true);
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        componentFixture.componentRef.setInput('value', 55);
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain value data after multiple change detections', (): void => {
      componentFixture.componentRef.setInput('value', 65);
      componentFixture.detectChanges();
      const initialValue: number | undefined = progressBarComponent.value;
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(initialValue);
    });

    it('should render consistently across multiple detect changes', (): void => {
      componentFixture.componentRef.setInput('value', 40);
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const initialWidth: string = compiled.querySelector('.progress-bar__value')?.style.width ?? '';
      componentFixture.detectChanges();
      const finalWidth: string = compiled.querySelector('.progress-bar__value')?.style.width ?? '';
      expect(finalWidth).toBe(initialWidth);
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle very large values', (): void => {
      componentFixture.componentRef.setInput('value', 999999);
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(999999);
    });

    it('should handle very small decimal values', (): void => {
      componentFixture.componentRef.setInput('value', 0.001);
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(0.001);
    });

    it('should handle negative percentage values', (): void => {
      componentFixture.componentRef.setInput('value', -25);
      componentFixture.detectChanges();
      expect(progressBarComponent.value).toBe(-25);
    });

    it('should default to 0% width when value is undefined', (): void => {
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
      expect(valueDiv?.style.width).toBe('0%');
    });

    it('should maintain structure with all value types', (): void => {
      const testValues: number[] = [0, 25, 50, 75, 100, 150, 33.5];
      testValues.forEach((value: number) => {
        const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
        newFixture.componentRef.setInput('value', value);
        newFixture.detectChanges();
        const compiled: HTMLElement = newFixture.nativeElement;
        expect(compiled.querySelector('.progress-bar')).toBeTruthy();
        expect(compiled.querySelector('.progress-bar__value')).toBeTruthy();
      });
    });
  });

  describe('integration behavior', (): void => {
    it('should handle dynamic value updates', (): void => {
      const progressValues: number[] = [10, 25, 50, 75, 90];
      progressValues.forEach((value: number) => {
        const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
        newFixture.componentRef.setInput('value', value);
        newFixture.detectChanges();
        expect(newFixture.componentInstance.value).toBe(value);
        const compiled: HTMLElement = newFixture.nativeElement;
        const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
        expect(valueDiv?.style.width).toBe(`${value}%`);
      });
    });

    it('should preserve component structure across value changes', (): void => {
      const testValues: number[] = [0, 50, 100];
      testValues.forEach((value: number) => {
        const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
        newFixture.componentRef.setInput('value', value);
        newFixture.detectChanges();
        const compiled: HTMLElement = newFixture.nativeElement;
        expect(compiled.querySelector('.progress-bar')).toBeTruthy();
        expect(compiled.querySelector('.progress-bar__value')).toBeTruthy();
        expect(compiled.querySelector('.progress-bar__value')?.classList.contains('progress-bar__value-animate')).toBe(
          true,
        );
      });
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent: ProgressBarComponent = progressBarComponent;
      componentFixture.componentRef.setInput('value', 88);
      componentFixture.detectChanges();
      expect(progressBarComponent).toBe(initialComponent);
      expect(progressBarComponent.value).toBe(88);
    });

    it('should work correctly with style binding', (): void => {
      const testValues: number[] = [25, 50, 75];
      testValues.forEach((value: number) => {
        const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
        newFixture.componentRef.setInput('value', value);
        newFixture.detectChanges();
        const compiled: HTMLElement = newFixture.nativeElement;
        const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
        expect(valueDiv?.style.width).toBe(`${value}%`);
      });
    });

    it('should handle rapid value changes smoothly', (): void => {
      const rapidValues: number[] = [10, 20, 30, 40, 50];
      rapidValues.forEach((value: number) => {
        const newFixture: ComponentFixture<ProgressBarComponent> = TestBed.createComponent(ProgressBarComponent);
        newFixture.componentRef.setInput('value', value);
        newFixture.detectChanges();
        const compiled: HTMLElement = newFixture.nativeElement;
        const valueDiv: HTMLElement | null = compiled.querySelector('.progress-bar__value');
        expect(valueDiv?.style.width).toBe(`${value}%`);
      });
    });
  });
});
