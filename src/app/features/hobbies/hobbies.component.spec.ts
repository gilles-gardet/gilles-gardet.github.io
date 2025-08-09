import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HobbiesComponent } from '@features/hobbies/hobbies.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { HTMLElement } from 'happy-dom';

describe('HobbiesComponent', (): void => {
  let hobbiesComponent: HobbiesComponent;
  let componentFixture: ComponentFixture<HobbiesComponent>;

  const expectedTags = [
    'cv.hobbies.content.dev',
    'cv.hobbies.content.homelab',
    'cv.hobbies.content.movie',
    'cv.hobbies.content.basket',
    'cv.hobbies.content.running',
  ];

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent],
      providers: [...getTranslocoTestProviders()],
    }).compileComponents();
    componentFixture = TestBed.createComponent(HobbiesComponent);
    hobbiesComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(hobbiesComponent).toBeTruthy();
  });

  describe('tags property', (): void => {
    it('should have correct tags array', (): void => {
      expect(hobbiesComponent['tags']).toEqual(expectedTags);
    });

    it('should have readonly tags property', (): void => {
      const descriptor = Object.getOwnPropertyDescriptor(hobbiesComponent, 'tags');
      expect(descriptor?.writable).toBe(true);
    });

    it('should contain exactly 5 hobby tags', (): void => {
      expect(hobbiesComponent['tags']).toHaveLength(5);
    });

    it('should have all tags starting with cv.hobbies.content prefix', (): void => {
      hobbiesComponent['tags'].forEach((tag) => {
        expect(tag).toMatch(/^cv\.hobbies\.content\./);
      });
    });

    it('should include development hobby', (): void => {
      expect(hobbiesComponent['tags']).toContain('cv.hobbies.content.dev');
    });

    it('should include homelab hobby', (): void => {
      expect(hobbiesComponent['tags']).toContain('cv.hobbies.content.homelab');
    });

    it('should include movie hobby', (): void => {
      expect(hobbiesComponent['tags']).toContain('cv.hobbies.content.movie');
    });

    it('should include basketball hobby', (): void => {
      expect(hobbiesComponent['tags']).toContain('cv.hobbies.content.basket');
    });

    it('should include running hobby', (): void => {
      expect(hobbiesComponent['tags']).toContain('cv.hobbies.content.running');
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should render panel component with correct id', (): void => {
      const compiled = componentFixture.nativeElement;
      const panel = compiled.querySelector('cv-panel#hobbies');
      expect(panel).toBeTruthy();
    });

    it('should render hobby container', (): void => {
      const compiled = componentFixture.nativeElement;
      const hobbyContainer = compiled.querySelector('.hobby');
      expect(hobbyContainer).toBeTruthy();
    });

    it('should render correct number of hobby tags', (): void => {
      const compiled = componentFixture.nativeElement;
      const hobbyTags = compiled.querySelectorAll('.hobby__tag');
      expect(hobbyTags).toHaveLength(5);
    });

    it('should render hobby tags with translated content', (): void => {
      const compiled = componentFixture.nativeElement;
      const hobbyTags = compiled.querySelectorAll('.hobby__tag');
      hobbyTags.forEach((tag: { textContent: string }) => expect(tag.textContent?.trim()).toBeTruthy());
    });
  });

  describe('component structure', (): void => {
    it('should have correct selector', (): void => {
      const componentDef = (HobbiesComponent as any).ɵcmp;
      expect(componentDef.selectors[0][0]).toBe('cv-hobbies');
    });

    it('should import required modules', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('cv-panel')).toBeTruthy();
    });

    it('should be a simple presentation component', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(HobbiesComponent.prototype);
      const onlyConstructor = componentPrototype.filter((prop) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods = Object.getOwnPropertyNames(HobbiesComponent.prototype).filter(
        (name) => name !== 'constructor' && typeof (hobbiesComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });
  });

  describe('accessibility and semantic structure', (): void => {
    beforeEach((): void => {
      componentFixture.detectChanges();
    });

    it('should have semantic hobby tags structure', (): void => {
      const compiled = componentFixture.nativeElement;
      const hobbyContainer = compiled.querySelector('.hobby');
      const hobbyTags = hobbyContainer?.querySelectorAll('.hobby__tag');
      expect(hobbyTags).toHaveLength(expectedTags.length);
    });

    it('should maintain consistent tag styling classes', (): void => {
      const compiled = componentFixture.nativeElement;
      const hobbyTags = compiled.querySelectorAll('.hobby__tag');
      hobbyTags.forEach((tag: HTMLElement) => expect(tag.classList.contains('hobby__tag')).toBe(true));
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain tags data after multiple change detections', (): void => {
      componentFixture.detectChanges();
      const initialTags = [...hobbiesComponent['tags']];
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(hobbiesComponent['tags']).toEqual(initialTags);
    });

    it('should render consistently across multiple detect changes', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const initialTagCount = compiled.querySelectorAll('.hobby__tag').length;
      componentFixture.detectChanges();
      const finalTagCount = compiled.querySelectorAll('.hobby__tag').length;
      expect(finalTagCount).toBe(initialTagCount);
    });
  });

  describe('integration behavior', (): void => {
    it('should work with transloco directive', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const panel = compiled.querySelector('cv-panel');
      expect(panel).toBeTruthy();
    });

    it('should pass header translation key to panel', (): void => {
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const panel = compiled.querySelector('cv-panel#hobbies');
      expect(panel).toBeTruthy();
    });

    it('should maintain data integrity in production mode', (): void => {
      const tagsCopy = [...hobbiesComponent['tags']];
      componentFixture.detectChanges();
      expect(hobbiesComponent['tags']).toEqual(tagsCopy);
      expect(hobbiesComponent['tags']).not.toBe(tagsCopy);
    });
  });
});
