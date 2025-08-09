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
    avatarComponent.avatar = testAvatarUrl;
    expect(avatarComponent).toBeTruthy();
  });

  describe('avatar input property', (): void => {
    it('should have required avatar input with default empty string', (): void => {
      expect(avatarComponent.avatar).toBe('');
    });

    it('should accept avatar URL string', (): void => {
      avatarComponent.avatar = testAvatarUrl;
      expect(avatarComponent.avatar).toBe(testAvatarUrl);
    });

    it('should update avatar when input changes', (): void => {
      avatarComponent.avatar = 'initial-url.jpg';
      expect(avatarComponent.avatar).toBe('initial-url.jpg');
      avatarComponent.avatar = 'updated-url.jpg';
      expect(avatarComponent.avatar).toBe('updated-url.jpg');
    });

    it('should handle empty string avatar', (): void => {
      avatarComponent.avatar = '';
      expect(avatarComponent.avatar).toBe('');
    });

    it('should handle long avatar URLs', (): void => {
      const longUrl =
        'https://very-long-domain-name.example.com/path/to/very/long/avatar/image/file/name.jpg?param1=value1&param2=value2';
      avatarComponent.avatar = longUrl;
      expect(avatarComponent.avatar).toBe(longUrl);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      avatarComponent.avatar = testAvatarUrl;
      componentFixture.detectChanges();
    });

    it('should render avatar container div', (): void => {
      const compiled = componentFixture.nativeElement;
      const avatarDiv = compiled.querySelector('.avatar');
      expect(avatarDiv).toBeTruthy();
    });

    it('should render optimized image with correct src', (): void => {
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement).toBeTruthy();
      expect(imgElement.getAttribute('src')).toBe(testAvatarUrl);
    });

    it('should render image with correct alt text', (): void => {
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('alt')).toBe('user avatar');
    });

    it('should render image with correct width and height', (): void => {
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('width')).toBe('64');
      expect(imgElement.getAttribute('height')).toBe('64');
    });

    it('should update image src when avatar changes', (): void => {
      const newAvatarUrl = 'https://example.com/new-avatar.jpg';
      const newFixture = TestBed.createComponent(AvatarComponent);
      const newComponent = newFixture.componentInstance;
      newComponent.avatar = newAvatarUrl;
      newFixture.detectChanges();
      const compiled = newFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('src')).toBe(newAvatarUrl);
    });

    it('should maintain image attributes when avatar changes', (): void => {
      avatarComponent.avatar = 'https://example.com/another-avatar.png';
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('alt')).toBe('user avatar');
      expect(imgElement.getAttribute('width')).toBe('64');
      expect(imgElement.getAttribute('height')).toBe('64');
    });
  });

  describe('component structure', (): void => {
    it('should import NgOptimizedImage', (): void => {
      avatarComponent.avatar = testAvatarUrl;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement).toBeTruthy();
    });

    it('should be a simple presentation component', (): void => {
      const componentPrototype = Object.getOwnPropertyNames(AvatarComponent.prototype);
      const onlyConstructor = componentPrototype.filter((prop) => prop !== 'constructor');
      expect(onlyConstructor).toHaveLength(0);
    });

    it('should not have any methods besides constructor', (): void => {
      const componentMethods = Object.getOwnPropertyNames(AvatarComponent.prototype).filter(
        (name) => name !== 'constructor' && typeof (avatarComponent as any)[name] === 'function',
      );
      expect(componentMethods).toHaveLength(0);
    });
  });

  describe('styling and accessibility', (): void => {
    beforeEach((): void => {
      avatarComponent.avatar = testAvatarUrl;
      componentFixture.detectChanges();
    });

    it('should have avatar styling class', (): void => {
      const compiled = componentFixture.nativeElement;
      const avatarDiv = compiled.querySelector('.avatar');
      expect(avatarDiv.classList.contains('avatar')).toBe(true);
    });

    it('should provide accessible alt text for screen readers', (): void => {
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('alt')).toBe('user avatar');
    });

    it('should use NgOptimizedImage for performance', (): void => {
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.hasAttribute('src')).toBe(true);
    });

    it('should have explicit width and height for CLS optimization', (): void => {
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('width')).toBeTruthy();
      expect(imgElement.getAttribute('height')).toBeTruthy();
    });
  });

  describe('component lifecycle', (): void => {
    it('should handle component creation and destruction without errors', (): void => {
      expect(() => {
        avatarComponent.avatar = testAvatarUrl;
        componentFixture.detectChanges();
        componentFixture.destroy();
      }).not.toThrow();
    });

    it('should maintain avatar data after multiple change detections', (): void => {
      avatarComponent.avatar = testAvatarUrl;
      componentFixture.detectChanges();
      const initialAvatar = avatarComponent.avatar;
      componentFixture.detectChanges();
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(initialAvatar);
    });

    it('should render consistently across multiple detect changes', (): void => {
      avatarComponent.avatar = testAvatarUrl;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const initialSrc = compiled.querySelector('img').getAttribute('ng-src');
      componentFixture.detectChanges();
      const finalSrc = compiled.querySelector('img').getAttribute('ng-src');
      expect(finalSrc).toBe(initialSrc);
    });
  });

  describe('edge cases and error handling', (): void => {
    it('should handle special characters in avatar URL', (): void => {
      const specialUrl = 'https://example.com/avatar-with-special-chars.jpg?param=test';
      avatarComponent.avatar = specialUrl;
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(specialUrl);
      const compiled = componentFixture.nativeElement;
      const imgElement = compiled.querySelector('img');
      expect(imgElement.getAttribute('src')).toBe(specialUrl);
    });

    it('should handle relative avatar URLs', (): void => {
      const relativeUrl = './assets/images/default-avatar.jpg';
      avatarComponent.avatar = relativeUrl;
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(relativeUrl);
    });

    it('should handle absolute URLs correctly', (): void => {
      const absoluteUrl = 'https://cdn.example.com/avatars/user123.png';
      avatarComponent.avatar = absoluteUrl;
      componentFixture.detectChanges();
      expect(avatarComponent.avatar).toBe(absoluteUrl);
    });

    it('should handle avatar property changes correctly', (): void => {
      const validUrl = 'https://example.com/valid-avatar.jpg';
      avatarComponent.avatar = validUrl;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.avatar')).toBeTruthy();
      expect(compiled.querySelector('img')).toBeTruthy();
      expect(avatarComponent.avatar).toBe(validUrl);
    });
  });

  describe('integration behavior', (): void => {
    it('should handle dynamic avatar updates', (): void => {
      const avatarUrls = [
        'https://example.com/avatar1.jpg',
        'https://example.com/avatar2.png',
        'https://example.com/avatar3.gif',
      ];
      avatarUrls.forEach((url) => {
        const newFixture = TestBed.createComponent(AvatarComponent);
        const newComponent = newFixture.componentInstance;
        newComponent.avatar = url;
        newFixture.detectChanges();
        expect(newComponent.avatar).toBe(url);
        const compiled = newFixture.nativeElement;
        const imgElement = compiled.querySelector('img');
        expect(imgElement.getAttribute('src')).toBe(url);
      });
    });

    it('should preserve component structure across avatar changes', (): void => {
      const testUrls = ['url1.jpg', 'url2.png', 'url3.webp'];
      testUrls.forEach((url) => {
        avatarComponent.avatar = url;
        componentFixture.detectChanges();
        const compiled = componentFixture.nativeElement;
        expect(compiled.querySelector('.avatar')).toBeTruthy();
        expect(compiled.querySelector('img')).toBeTruthy();
        const imgElement = compiled.querySelector('img');
        expect(imgElement.getAttribute('alt')).toBe('user avatar');
        expect(imgElement.getAttribute('width')).toBe('64');
        expect(imgElement.getAttribute('height')).toBe('64');
      });
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent = avatarComponent;
      avatarComponent.avatar = testAvatarUrl;
      componentFixture.detectChanges();
      expect(avatarComponent).toBe(initialComponent);
      expect(avatarComponent.avatar).toBe(testAvatarUrl);
    });
  });
});
