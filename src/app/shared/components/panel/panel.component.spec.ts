import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <cv-panel [header]="headerText">
      <div class="test-content">Test projected content</div>
    </cv-panel>
  `,
  imports: [PanelComponent],
})
class TestHostComponent {
  headerText = 'Test Header';
}

describe('PanelComponent', (): void => {
  let panelComponent: PanelComponent;
  let componentFixture: ComponentFixture<PanelComponent>;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, PanelComponent, TestHostComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(PanelComponent);
    panelComponent = componentFixture.componentInstance;
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    panelComponent.header = 'Test';
    expect(panelComponent).toBeTruthy();
  });

  describe('header input property', (): void => {
    it('should have required header input with default undefined', (): void => {
      expect(panelComponent.header).toBeUndefined();
    });

    it('should accept header string', (): void => {
      panelComponent.header = 'Test Header';
      expect(panelComponent.header).toBe('Test Header');
    });

    it('should update header when input changes', (): void => {
      panelComponent.header = 'Initial Header';
      expect(panelComponent.header).toBe('Initial Header');
      panelComponent.header = 'Updated Header';
      expect(panelComponent.header).toBe('Updated Header');
    });

    it('should handle empty string header', (): void => {
      panelComponent.header = '';
      expect(panelComponent.header).toBe('');
    });

    it('should handle undefined header', (): void => {
      panelComponent.header = undefined;
      expect(panelComponent.header).toBeUndefined();
    });

    it('should handle long header text', (): void => {
      const longHeader =
        'This is a very long header text that might wrap or overflow depending on the styling and container width';
      panelComponent.header = longHeader;
      expect(panelComponent.header).toBe(longHeader);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      panelComponent.header = 'Test Panel Header';
      componentFixture.detectChanges();
    });

    it('should render panel container', (): void => {
      const compiled = componentFixture.nativeElement;
      const panelDiv = compiled.querySelector('.panel');
      expect(panelDiv).toBeTruthy();
    });

    it('should render panel header section', (): void => {
      const compiled = componentFixture.nativeElement;
      const headerDiv = compiled.querySelector('.panel__header');
      expect(headerDiv).toBeTruthy();
    });

    it('should render header title with correct text', (): void => {
      const compiled = componentFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan).toBeTruthy();
      expect(titleSpan.textContent.trim()).toBe('Test Panel Header');
    });

    it('should render panel content section', (): void => {
      const compiled = componentFixture.nativeElement;
      const contentDiv = compiled.querySelector('.panel__content');
      expect(contentDiv).toBeTruthy();
    });

    it('should render ng-content projection area', (): void => {
      const compiled = componentFixture.nativeElement;
      const contentDiv = compiled.querySelector('.panel__content');
      expect(contentDiv).toBeTruthy();
    });

    it('should update header text when header changes', (): void => {
      const newFixture = TestBed.createComponent(PanelComponent);
      const newComponent = newFixture.componentInstance;
      const newHeader = 'Updated Panel Header';
      newComponent.header = newHeader;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan.textContent.trim()).toBe(newHeader);
    });

    it('should handle empty header text', (): void => {
      const newFixture = TestBed.createComponent(PanelComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.header = '';
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan.textContent.trim()).toBe('');
    });

    it('should handle undefined header text', (): void => {
      const newFixture = TestBed.createComponent(PanelComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.header = undefined;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan.textContent.trim()).toBe('');
    });
  });

  describe('content projection', (): void => {
    beforeEach((): void => {
      hostFixture.detectChanges();
    });

    it('should project content into panel content area', (): void => {
      const compiled = hostFixture.nativeElement;
      const testContent = compiled.querySelector('.test-content');
      expect(testContent).toBeTruthy();
      expect(testContent.textContent.trim()).toBe('Test projected content');
    });

    it('should render projected content inside panel content div', (): void => {
      const compiled = hostFixture.nativeElement;
      const panelContent = compiled.querySelector('.panel__content');
      const testContent = panelContent.querySelector('.test-content');
      expect(testContent).toBeTruthy();
    });

    it('should update projected content when host changes', (): void => {
      const compiled = hostFixture.nativeElement;
      const testContent = compiled.querySelector('.test-content');
      testContent.textContent = 'Updated projected content';
      expect(testContent.textContent).toBe('Updated projected content');
    });

    it('should display header from host component', (): void => {
      const compiled = hostFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan.textContent.trim()).toBe('Test Header');
    });

    it('should update header when host component changes', (): void => {
      hostComponent.headerText = 'New Header Text';
      hostFixture.detectChanges();
      const compiled = hostFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan.textContent.trim()).toBe('New Header Text');
    });
  });

  describe('component structure', (): void => {
    it('should be a simple presentation component', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(PanelComponent.prototype);
      const onlyConstructor = componentPrototype.filter((prop) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods = Object.getOwnPropertyNames(PanelComponent.prototype).filter(
        (name) => name !== 'constructor' && typeof (panelComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });
  });

  describe('styling and layout', (): void => {
    beforeEach((): void => {
      panelComponent.header = 'Styled Panel';
      componentFixture.detectChanges();
    });

    it('should have panel styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const panelDiv = compiled.querySelector('.panel');
      expect(panelDiv.classList.contains('panel')).toBe(true);
    });

    it('should have header styling classes', (): void => {
      const compiled = componentFixture.nativeElement;
      const headerDiv = compiled.querySelector('.panel__header');
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(headerDiv.classList.contains('panel__header')).toBe(true);
      expect(titleSpan.classList.contains('panel__header__title')).toBe(true);
    });

    it('should have content styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const contentDiv = compiled.querySelector('.panel__content');
      expect(contentDiv.classList.contains('panel__content')).toBe(true);
    });

    it('should maintain consistent structure across renders', (): void => {
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.panel')).toBeTruthy();
      expect(compiled.querySelector('.panel__header')).toBeTruthy();
      expect(compiled.querySelector('.panel__header__title')).toBeTruthy();
      expect(compiled.querySelector('.panel__content')).toBeTruthy();
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        panelComponent.header = 'Lifecycle Test';
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain header data after multiple change detections', (): void => {
      panelComponent.header = 'Persistent Header';
      componentFixture.detectChanges();
      const initialHeader = panelComponent.header;
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(initialHeader);
    });

    it('should render consistently across multiple detect changes', (): void => {
      panelComponent.header = 'Consistent Header';
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const initialText = compiled.querySelector('.panel__header__title').textContent.trim();
      componentFixture.detectChanges();
      const finalText = compiled.querySelector('.panel__header__title').textContent.trim();
      expect(finalText).toBe(initialText);
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle special characters in header', (): void => {
      const specialHeader = 'Header with special chars: éàç & <>"';
      panelComponent.header = specialHeader;
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(specialHeader);
      const compiled = componentFixture.nativeElement;
      const titleSpan = compiled.querySelector('.panel__header__title');
      expect(titleSpan.textContent.trim()).toBe(specialHeader);
    });

    it('should handle HTML entities in header', (): void => {
      const htmlHeader = 'Header & Title > Content';
      panelComponent.header = htmlHeader;
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(htmlHeader);
    });

    it('should handle numeric header values', (): void => {
      const numericHeader = '12345';
      panelComponent.header = numericHeader;
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(numericHeader);
    });

    it('should maintain structure with all header value types', (): void => {
      const testValues = ['', undefined, 'normal text', '123', 'special & chars'];
      testValues.forEach((value) => {
        panelComponent.header = value;
        componentFixture.detectChanges();
        const compiled = componentFixture.nativeElement;
        expect(compiled.querySelector('.panel')).toBeTruthy();
        expect(compiled.querySelector('.panel__header')).toBeTruthy();
        expect(compiled.querySelector('.panel__content')).toBeTruthy();
      });
    });
  });

  describe('integration behavior', (): void => {
    it('should handle dynamic header updates', (): void => {
      const headerTexts = ['Header 1', 'Header 2', 'Header 3'];
      headerTexts.forEach((text) => {
        const newFixture = TestBed.createComponent(PanelComponent);
        const newComponent = newFixture.componentInstance;
        newComponent.header = text;
        newFixture.detectChanges();
        expect(newComponent.header).toBe(text);
        const compiled = newFixture.nativeElement;
        const titleSpan = compiled.querySelector('.panel__header__title');
        expect(titleSpan.textContent.trim()).toBe(text);
      });
    });

    it('should preserve component structure across header changes', (): void => {
      const testHeaders = ['First', 'Second', 'Third'];
      testHeaders.forEach((header) => {
        panelComponent.header = header;
        componentFixture.detectChanges();
        const compiled = componentFixture.nativeElement;
        expect(compiled.querySelector('.panel')).toBeTruthy();
        expect(compiled.querySelector('.panel__header')).toBeTruthy();
        expect(compiled.querySelector('.panel__header__title')).toBeTruthy();
        expect(compiled.querySelector('.panel__content')).toBeTruthy();
      });
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent = panelComponent;
      panelComponent.header = 'Reference Test';
      componentFixture.detectChanges();
      expect(panelComponent).toBe(initialComponent);
      expect(panelComponent.header).toBe('Reference Test');
    });

    it('should work correctly in host component context', (): void => {
      hostComponent.headerText = 'Integration Test';
      hostFixture.detectChanges();
      const compiled = hostFixture.nativeElement;
      const panel = compiled.querySelector('cv-panel');
      const header = compiled.querySelector('.panel__header__title');
      const content = compiled.querySelector('.test-content');
      expect(panel).toBeTruthy();
      expect(header.textContent.trim()).toBe('Integration Test');
      expect(content.textContent.trim()).toBe('Test projected content');
    });
  });
});
