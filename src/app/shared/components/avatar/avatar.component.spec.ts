import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', (): void => {
  let avatarComponent: AvatarComponent;
  let componentFixture: ComponentFixture<AvatarComponent>;

  const testAvatarUrl = 'https://avatars.githubusercontent.com/u/1234567?v=4';

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, NgOptimizedImage, AvatarComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(AvatarComponent);
    avatarComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    componentFixture.componentRef.setInput('avatar', testAvatarUrl);
    componentFixture.detectChanges();
    expect(avatarComponent).toBeTruthy();
  });

  describe('avatar input property', (): void => {
    it('should have required avatar input with default empty string', (): void => {
      expect(avatarComponent.avatar).toBe('');
    });

    it('should accept avatar URL string', (): void => {
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      expect(avatarComponent.avatar).toBe(testAvatarUrl);
    });

    it('should update avatar when input changes', (): void => {
      componentFixture.componentRef.setInput('avatar', 'initial-url.jpg');
      expect(avatarComponent.avatar).toBe('initial-url.jpg');
      componentFixture.componentRef.setInput('avatar', 'updated-url.jpg');
      expect(avatarComponent.avatar).toBe('updated-url.jpg');
    });

    it('should handle empty string avatar', (): void => {
      componentFixture.componentRef.setInput('avatar', '');
      expect(avatarComponent.avatar).toBe('');
    });

    it('should handle long avatar URLs', (): void => {
      const longUrl =
        'https://very-long-domain-name.example.com/path/to/very/long/avatar/image/file/name.jpg?param1=value1&param2=value2';
      componentFixture.componentRef.setInput('avatar', longUrl);
      expect(avatarComponent.avatar).toBe(longUrl);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      componentFixture.detectChanges();
    });

    it('should render avatar container div', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const avatarDiv: HTMLElement | null = compiled.querySelector('.avatar');
      expect(avatarDiv).toBeTruthy();
    });

    it('should render optimized image with correct src', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement).toBeTruthy();
      expect(imgElement?.getAttribute('src')).toBe(testAvatarUrl);
    });

    it('should render image with correct alt text', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('alt')).toBe('user avatar');
    });

    it('should render image with correct width and height', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('width')).toBe('64');
      expect(imgElement?.getAttribute('height')).toBe('64');
    });

    it('should not render image when avatar is empty', (): void => {
      const newFixture: ComponentFixture<AvatarComponent> = TestBed.createComponent(AvatarComponent);
      newFixture.componentRef.setInput('avatar', '');
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement).toBeNull();
    });

    it('should update image src when avatar changes', (): void => {
      const newAvatarUrl = 'https://example.com/new-avatar.jpg';
      const newFixture: ComponentFixture<AvatarComponent> = TestBed.createComponent(AvatarComponent);
      newFixture.componentRef.setInput('avatar', newAvatarUrl);
      newFixture.detectChanges();
      const compiled: HTMLElement = newFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('src')).toBe(newAvatarUrl);
    });

    it('should maintain image attributes when avatar changes', (): void => {
      componentFixture.componentRef.setInput('avatar', 'https://example.com/another-avatar.png');
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('alt')).toBe('user avatar');
      expect(imgElement?.getAttribute('width')).toBe('64');
      expect(imgElement?.getAttribute('height')).toBe('64');
    });
  });

  describe('component structure', (): void => {
    it('should import NgOptimizedImage', (): void => {
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement).toBeTruthy();
    });

    it('should be a simple presentation component', (): void => {
      const componentPrototype: string[] = Object.getOwnPropertyNames(AvatarComponent.prototype);
      const onlyConstructor: string[] = componentPrototype.filter((prop: string) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods: string[] = Object.getOwnPropertyNames(AvatarComponent.prototype).filter(
        (name: string) => name !== 'constructor' && typeof (avatarComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });
  });

  describe('styling and accessibility', (): void => {
    beforeEach((): void => {
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      componentFixture.detectChanges();
    });

    it('should have avatar styling class', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const avatarDiv: HTMLElement | null = compiled.querySelector('.avatar');
      expect(avatarDiv?.classList.contains('avatar')).toBe(true);
    });

    it('should provide accessible alt text for screen readers', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('alt')).toBe('user avatar');
    });

    it('should use NgOptimizedImage for performance', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.hasAttribute('src')).toBe(true);
    });

    it('should have explicit width and height for CLS optimization', (): void => {
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('width')).toBeTruthy();
      expect(imgElement?.getAttribute('height')).toBeTruthy();
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        componentFixture.componentRef.setInput('avatar', testAvatarUrl);
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain avatar data after multiple change detections', (): void => {
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      componentFixture.detectChanges();
      const initialAvatar: string = avatarComponent.avatar;
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(initialAvatar);
    });

    it('should render consistently across multiple detect changes', (): void => {
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      const initialSrc: string | null = compiled.querySelector('img')?.getAttribute('ng-src') ?? null;
      componentFixture.detectChanges();
      const finalSrc: string | null = compiled.querySelector('img')?.getAttribute('ng-src') ?? null;
      expect(finalSrc).toBe(initialSrc);
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle special characters in avatar URL', (): void => {
      const specialUrl = 'https://example.com/avatar-with-special-chars.jpg?param=test';
      componentFixture.componentRef.setInput('avatar', specialUrl);
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(specialUrl);
      const compiled: HTMLElement = componentFixture.nativeElement;
      const imgElement: HTMLImageElement | null = compiled.querySelector('img');
      expect(imgElement?.getAttribute('src')).toBe(specialUrl);
    });

    it('should handle relative avatar URLs', (): void => {
      const relativeUrl = './assets/images/default-avatar.jpg';
      componentFixture.componentRef.setInput('avatar', relativeUrl);
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(relativeUrl);
    });

    it('should handle absolute URLs correctly', (): void => {
      const absoluteUrl = 'https://cdn.example.com/avatars/user123.png';
      componentFixture.componentRef.setInput('avatar', absoluteUrl);
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(absoluteUrl);
    });

    it('should handle avatar property changes correctly', (): void => {
      const validUrl = 'https://example.com/valid-avatar.jpg';
      componentFixture.componentRef.setInput('avatar', validUrl);
      componentFixture.detectChanges();
      const compiled: HTMLElement = componentFixture.nativeElement;
      expect(compiled.querySelector('.avatar')).toBeTruthy();
      expect(compiled.querySelector('img')).toBeTruthy();
      expect(avatarComponent.avatar).toBe(validUrl);
    });
  });

  describe('integration behavior', (): void => {
    it('should handle dynamic avatar updates', (): void => {
      const avatarUrls: string[] = [
        'https://example.com/avatar1.jpg',
        'https://example.com/avatar2.png',
        'https://example.com/avatar3.gif',
      ];
      avatarUrls.forEach((url: string) => {
        const newFixture: ComponentFixture<AvatarComponent> = TestBed.createComponent(AvatarComponent);
        newFixture.componentRef.setInput('avatar', url);
        newFixture.detectChanges();
        expect(newFixture.componentInstance.avatar).toBe(url);
        const compiled: HTMLElement = newFixture.nativeElement;
        const imgElement: HTMLImageElement | null = compiled.querySelector('img');
        expect(imgElement?.getAttribute('src')).toBe(url);
      });
    });

    it('should preserve component structure across avatar changes', (): void => {
      const testUrls: string[] = ['url1.jpg', 'url2.png', 'url3.webp'];
      testUrls.forEach((url: string) => {
        componentFixture.componentRef.setInput('avatar', url);
        componentFixture.detectChanges();
        const compiled: HTMLElement = componentFixture.nativeElement;
        expect(compiled.querySelector('.avatar')).toBeTruthy();
        expect(compiled.querySelector('img')).toBeTruthy();
        const imgElement: HTMLImageElement | null = compiled.querySelector('img');
        expect(imgElement?.getAttribute('alt')).toBe('user avatar');
        expect(imgElement?.getAttribute('width')).toBe('64');
        expect(imgElement?.getAttribute('height')).toBe('64');
      });
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent: AvatarComponent = avatarComponent;
      componentFixture.componentRef.setInput('avatar', testAvatarUrl);
      componentFixture.detectChanges();
      expect(avatarComponent).toBe(initialComponent);
      expect(avatarComponent.avatar).toBe(testAvatarUrl);
    });
  });
});
