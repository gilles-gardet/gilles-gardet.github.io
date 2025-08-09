import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';

describe('EmailComponent', (): void => {
  let emailComponent: EmailComponent;
  let componentFixture: ComponentFixture<EmailComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, EmailComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(EmailComponent);
    emailComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(emailComponent).toBeTruthy();
  });

  describe('label input signal', (): void => {
    it('should have default empty string label', (): void => {
      expect(emailComponent.label()).toBe('');
    });

    it('should accept string label input', (): void => {
      componentFixture.componentRef.setInput('label', 'test@example.com');
      expect(emailComponent.label()).toBe('test@example.com');
    });

    it('should update label when input changes', (): void => {
      componentFixture.componentRef.setInput('label', 'initial@test.com');
      expect(emailComponent.label()).toBe('initial@test.com');
      componentFixture.componentRef.setInput('label', 'updated@test.com');
      expect(emailComponent.label()).toBe('updated@test.com');
    });

    it('should handle empty string input', (): void => {
      componentFixture.componentRef.setInput('label', '');
      expect(emailComponent.label()).toBe('');
    });

    it('should handle undefined input gracefully', (): void => {
      componentFixture.componentRef.setInput('label', undefined);
      expect(emailComponent.label()).toBeUndefined();
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should render chip container', (): void => {
      const compiled = componentFixture.nativeElement;
      const chipElement = compiled.querySelector('.chip');
      expect(chipElement).toBeTruthy();
    });

    it('should render email icon svg', (): void => {
      const compiled = componentFixture.nativeElement;
      const iconElement = compiled.querySelector('.chip__icon');
      expect(iconElement).toBeTruthy();
      expect(iconElement.tagName.toLowerCase()).toBe('svg');
    });

    it('should render svg with correct viewBox', (): void => {
      const compiled = componentFixture.nativeElement;
      const svgElement = compiled.querySelector('svg');
      expect(svgElement.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('should render envelope path inside svg', (): void => {
      const compiled = componentFixture.nativeElement;
      const pathElement = compiled.querySelector('g#envelope path');
      expect(pathElement).toBeTruthy();
    });

    it('should render label element', (): void => {
      const compiled = componentFixture.nativeElement;
      const labelElement = compiled.querySelector('.chip__label');
      expect(labelElement).toBeTruthy();
    });

    it('should display default empty label', (): void => {
      const compiled = componentFixture.nativeElement;
      const labelElement = compiled.querySelector('.chip__label');
      expect(labelElement.textContent.trim()).toBe('');
    });

    it('should display provided label text', (): void => {
      componentFixture.componentRef.setInput('label', 'contact@example.com');
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const labelElement = compiled.querySelector('.chip__label');
      expect(labelElement.textContent.trim()).toBe('contact@example.com');
    });

    it('should update label text when input changes', (): void => {
      componentFixture.componentRef.setInput('label', 'initial@test.com');
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const labelElement = compiled.querySelector('.chip__label');
      expect(labelElement.textContent.trim()).toBe('initial@test.com');
      componentFixture.componentRef.setInput('label', 'updated@test.com');
      componentFixture.detectChanges();
      expect(labelElement.textContent.trim()).toBe('updated@test.com');
    });
  });

  describe('component structure', (): void => {
    it('should be a simple presentation component', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(EmailComponent.prototype);
      const onlyConstructor = componentPrototype.filter((prop) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods = Object.getOwnPropertyNames(EmailComponent.prototype).filter(
        (name) => name !== 'constructor' && typeof (emailComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });
  });

  describe('styling and accessibility', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should have chip styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const chipElement = compiled.querySelector('.chip');
      expect(chipElement.classList.contains('chip')).toBe(true);
    });

    it('should have icon styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const iconElement = compiled.querySelector('.chip__icon');
      expect(iconElement.classList.contains('chip__icon')).toBe(true);
    });

    it('should have label styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const labelElement = compiled.querySelector('.chip__label');
      expect(labelElement.classList.contains('chip__label')).toBe(true);
    });

    it('should use currentColor for svg fill', (): void => {
      const compiled = componentFixture.nativeElement;
      const svgElement = compiled.querySelector('svg');
      expect(svgElement.getAttribute('fill')).toBe('currentColor');
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain label data after multiple change detections', (): void => {
      componentFixture.componentRef.setInput('label', 'persistent@test.com');
      componentFixture.detectChanges();
      const initialLabel = emailComponent.label();
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(emailComponent.label()).toBe(initialLabel);
    });

    it('should render consistently across multiple detect changes', (): void => {
      componentFixture.componentRef.setInput('label', 'test@example.com');
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const initialText = compiled.querySelector('.chip__label').textContent.trim();
      componentFixture.detectChanges();
      const finalText = compiled.querySelector('.chip__label').textContent.trim();
      expect(finalText).toBe(initialText);
    });
  });

  describe('integration behavior', (): void => {
    it('should work as standalone component', (): void => {
      const componentDef = (EmailComponent as any).ɵcmp;
      expect(componentDef.standalone).toBe(true);
    });

    it('should handle dynamic label updates', (): void => {
      const testLabels = ['email1@test.com', 'email2@test.com', 'email3@test.com'];
      testLabels.forEach((label) => {
        componentFixture.componentRef.setInput('label', label);
        componentFixture.detectChanges();
        expect(emailComponent.label()).toBe(label);
        const compiled = componentFixture.nativeElement;
        const labelElement = compiled.querySelector('.chip__label');
        expect(labelElement.textContent.trim()).toBe(label);
      });
    });

    it('should maintain structure integrity with different label values', (): void => {
      const testValues = ['', 'short', 'very.long.email.address@domain.example.com', '123@456.789'];
      testValues.forEach((value) => {
        componentFixture.componentRef.setInput('label', value);
        componentFixture.detectChanges();
        const compiled = componentFixture.nativeElement;
        expect(compiled.querySelector('.chip')).toBeTruthy();
        expect(compiled.querySelector('.chip__icon')).toBeTruthy();
        expect(compiled.querySelector('.chip__label')).toBeTruthy();
        expect(compiled.querySelector('svg')).toBeTruthy();
      });
    });

    it('should preserve component reference integrity', (): void => {
      const initialComponent = emailComponent;
      componentFixture.componentRef.setInput('label', 'test@example.com');
      componentFixture.detectChanges();
      expect(emailComponent).toBe(initialComponent);
      expect(emailComponent.label()).toBe('test@example.com');
    });
  });
});
