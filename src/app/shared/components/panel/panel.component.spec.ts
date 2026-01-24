import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [PanelComponent, TestHostComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(PanelComponent);
    panelComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    componentFixture.componentRef.setInput('header', 'Test');
    componentFixture.detectChanges();
    expect(panelComponent).toBeTruthy();
  });

  describe('header input property', (): void => {
    it('should have required header input with default undefined', (): void => {
      expect(panelComponent.header).toBeUndefined();
    });

    it('should accept header string', (): void => {
      componentFixture.componentRef.setInput('header', 'Test Header');
      expect(panelComponent.header).toBe('Test Header');
    });

    it('should update header when input changes', (): void => {
      componentFixture.componentRef.setInput('header', 'Initial Header');
      expect(panelComponent.header).toBe('Initial Header');
      componentFixture.componentRef.setInput('header', 'Updated Header');
      expect(panelComponent.header).toBe('Updated Header');
    });

    it('should handle empty string header', (): void => {
      componentFixture.componentRef.setInput('header', '');
      expect(panelComponent.header).toBe('');
    });

    it('should handle undefined header', (): void => {
      componentFixture.componentRef.setInput('header', undefined);
      expect(panelComponent.header).toBeUndefined();
    });

    it('should handle long header text', (): void => {
      const longHeader: string =
        'This is a very long header text that might wrap or overflow depending on the styling and container width';
      componentFixture.componentRef.setInput('header', longHeader);
      expect(panelComponent.header).toBe(longHeader);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.componentRef.setInput('header', 'Test Panel Header');
      componentFixture.detectChanges();
    });

    it('should render panel container', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const panelDiv: HTMLElement | null = compiled.querySelector('.panel');
      expect(panelDiv).toBeTruthy();
    });

    it('should render panel header section', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const headerDiv: HTMLElement | null = compiled.querySelector('.panel__header');
      expect(headerDiv).toBeTruthy();
    });

    it('should render header title with correct text', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan).toBeTruthy();
      expect(titleSpan?.textContent?.trim()).toBe('Test Panel Header');
    });

    it('should render panel content section', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const contentDiv: HTMLElement | null = compiled.querySelector('.panel__content');
      expect(contentDiv).toBeTruthy();
    });

    it('should render ng-content projection area', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const contentDiv: HTMLElement | null = compiled.querySelector('.panel__content');
      expect(contentDiv).toBeTruthy();
    });

    it('should update header text when header changes', (): void => {
      const newFixture: ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
      const newHeader = 'Updated Panel Header';
      newFixture.componentRef.setInput('header', newHeader);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan?.textContent?.trim()).toBe(newHeader);
    });

    it('should handle empty header text', (): void => {
      const newFixture: ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
      newFixture.componentRef.setInput('header', '');
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan?.textContent?.trim()).toBe('');
    });

    it('should handle undefined header text', (): void => {
      const newFixture: ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
      newFixture.componentRef.setInput('header', undefined);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan?.textContent?.trim()).toBe('');
    });
  });

  describe('content projection', (): void => {
    it('should project content into panel content area', (): void => {
      const hostFixture: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
      hostFixture.detectChanges();
      const compiled: HTMLElement = hostFixture.nativeElement;
      const testContent: HTMLElement | null = compiled.querySelector('.test-content');
      expect(testContent).toBeTruthy();
      expect(testContent?.textContent?.trim()).toBe('Test projected content');
    });

    it('should render projected content inside panel content div', (): void => {
      const hostFixture: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
      hostFixture.detectChanges();
      const compiled: HTMLElement = hostFixture.nativeElement;
      const panelContent: HTMLElement | null = compiled.querySelector('.panel__content');
      const testContent: HTMLElement | null = panelContent?.querySelector('.test-content') ?? null;
      expect(testContent).toBeTruthy();
    });

    it('should display header from host component', (): void => {
      const hostFixture: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
      hostFixture.detectChanges();
      const compiled: HTMLElement = hostFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan?.textContent?.trim()).toBe('Test Header');
    });

    it('should update header when host component changes', (): void => {
      const hostFixture: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
      const hostComponent: TestHostComponent = hostFixture.componentInstance;
      hostComponent.headerText = 'New Header Text';
      hostFixture.detectChanges();
      const compiled: HTMLElement = hostFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan?.textContent?.trim()).toBe('New Header Text');
    });
  });

  describe('component structure', (): void => {
    it('should be a simple presentation component', (): void => {
      const componentPrototype: string[] = Object.getOwnPropertyNames(PanelComponent.prototype);
      const onlyConstructor: string[] = componentPrototype.filter((prop: string) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods: string[] = Object.getOwnPropertyNames(PanelComponent.prototype).filter(
        (name: string) => name !== 'constructor' && typeof (panelComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });
  });

  describe('styling and layout', (): void => {
    beforeEach((): void => {
      componentFixture.componentRef.setInput('header', 'Styled Panel');
      componentFixture.detectChanges();
    });

    it('should have panel styling class', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const panelDiv: HTMLElement | null = compiled.querySelector('.panel');
      expect(panelDiv?.classList.contains('panel')).toBe(true);
    });

    it('should have header styling classes', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const headerDiv: HTMLElement | null = compiled.querySelector('.panel__header');
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(headerDiv?.classList.contains('panel__header')).toBe(true);
      expect(titleSpan?.classList.contains('panel__header__title')).toBe(true);
    });

    it('should have content styling class', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const contentDiv: HTMLElement | null = compiled.querySelector('.panel__content');
      expect(contentDiv?.classList.contains('panel__content')).toBe(true);
    });

    it('should maintain consistent structure across renders', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      expect(compiled.querySelector('.panel')).toBeTruthy();
      expect(compiled.querySelector('.panel__header')).toBeTruthy();
      expect(compiled.querySelector('.panel__header__title')).toBeTruthy();
      expect(compiled.querySelector('.panel__content')).toBeTruthy();
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        componentFixture.componentRef.setInput('header', 'Lifecycle Test');
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain header data after multiple change detections', (): void => {
      componentFixture.componentRef.setInput('header', 'Persistent Header');
      componentFixture.detectChanges();
      const initialHeader: string | undefined = panelComponent.header;
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(initialHeader);
    });

    it('should render consistently across multiple detect changes', (): void => {
      componentFixture.componentRef.setInput('header', 'Consistent Header');
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const initialText: string = compiled.querySelector('.panel__header__title')?.textContent?.trim() ?? '';
      componentFixture.detectChanges();
      const finalText: string = compiled.querySelector('.panel__header__title')?.textContent?.trim() ?? '';
      expect(finalText).toBe(initialText);
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle special characters in header', (): void => {
      const specialHeader = 'Header with special chars: éàç & <>"';
      componentFixture.componentRef.setInput('header', specialHeader);
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(specialHeader);
      const compiled: HTMLElement = componentFixture.nativeElement;
      const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
      expect(titleSpan?.textContent?.trim()).toBe(specialHeader);
    });

    it('should handle HTML entities in header', (): void => {
      const htmlHeader = 'Header & Title > Content';
      componentFixture.componentRef.setInput('header', htmlHeader);
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(htmlHeader);
    });

    it('should handle numeric header values', (): void => {
      const numericHeader = '12345';
      componentFixture.componentRef.setInput('header', numericHeader);
      componentFixture.detectChanges();
      expect(panelComponent.header).toBe(numericHeader);
    });

    it('should maintain structure with all header value types', (): void => {
      const testValues: (string | undefined)[] = ['', undefined, 'normal text', '123', 'special & chars'];
      testValues.forEach((value: string | undefined) => {
        const newFixture: ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
        newFixture.componentRef.setInput('header', value);
        newFixture.detectChanges();
        const compiled: HTMLElement = newFixture.nativeElement;
        expect(compiled.querySelector('.panel')).toBeTruthy();
        expect(compiled.querySelector('.panel__header')).toBeTruthy();
        expect(compiled.querySelector('.panel__content')).toBeTruthy();
      });
    });
  });

  describe('integration behavior', (): void => {
    it('should handle dynamic header updates', (): void => {
      const headerTexts: string[] = ['Header 1', 'Header 2', 'Header 3'];
      headerTexts.forEach((text: string) => {
        const newFixture: ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
        newFixture.componentRef.setInput('header', text);
        newFixture.detectChanges();
        expect(newFixture.componentInstance.header).toBe(text);
        const compiled: HTMLElement = newFixture.nativeElement;
        const titleSpan: HTMLElement | null = compiled.querySelector('.panel__header__title');
        expect(titleSpan?.textContent?.trim()).toBe(text);
      });
    });

    it('should preserve component structure across header changes', (): void => {
      const testHeaders: string[] = ['First', 'Second', 'Third'];
      testHeaders.forEach((header: string) => {
        const newFixture: ComponentFixture<PanelComponent> = TestBed.createComponent(PanelComponent);
        newFixture.componentRef.setInput('header', header);
        newFixture.detectChanges();
        const compiled: HTMLElement = newFixture.nativeElement;
        expect(compiled.querySelector('.panel')).toBeTruthy();
        expect(compiled.querySelector('.panel__header')).toBeTruthy();
        expect(compiled.querySelector('.panel__header__title')).toBeTruthy();
        expect(compiled.querySelector('.panel__content')).toBeTruthy();
      });
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent: PanelComponent = panelComponent;
      componentFixture.componentRef.setInput('header', 'Reference Test');
      componentFixture.detectChanges();
      expect(panelComponent).toBe(initialComponent);
      expect(panelComponent.header).toBe('Reference Test');
    });

    it('should work correctly in host component context', (): void => {
      const hostFixture: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
      const hostComponent: TestHostComponent = hostFixture.componentInstance;
      hostComponent.headerText = 'Integration Test';
      hostFixture.detectChanges();
      const compiled: HTMLElement = hostFixture.nativeElement;
      const panel: HTMLElement | null = compiled.querySelector('cv-panel');
      const header: HTMLElement | null = compiled.querySelector('.panel__header__title');
      const content: HTMLElement | null = compiled.querySelector('.test-content');
      expect(panel).toBeTruthy();
      expect(header?.textContent?.trim()).toBe('Integration Test');
      expect(content?.textContent?.trim()).toBe('Test projected content');
    });
  });
});
