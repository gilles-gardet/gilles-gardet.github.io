import { ThemeService } from '@core/services/theme.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('ThemeService', (): void => {
  let service: ThemeService;
  let localStorageMock: any;

  beforeEach(waitForAsync((): void => {
    // Setup localStorage mock for each test
    localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };
    Object.defineProperty(window, 'localStorage', { 
      value: localStorageMock,
      writable: true 
    });

    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', async (): Promise<void> => {
    expect(service).toBeTruthy();
  });

  it('should get the configured theme', async (): Promise<void> => {
    // Mock that no theme is stored and OS prefers light
    localStorageMock.getItem.mockReturnValue(null);
    
    service.getTheme$().subscribe((value: string) => expect(value).toEqual('light'));
  });

  it('should configure a theme', async (): Promise<void> => {
    service.setTheme$('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    
    // Mock the stored theme
    localStorageMock.getItem.mockReturnValue('dark');
    service.getTheme$().subscribe((value: string) => expect(value).toEqual('dark'));
  });

  it('should set the theme from the local storage if setted', async (): Promise<void> => {
    // Mock that theme is stored as 'dark'
    localStorageMock.getItem.mockReturnValue('dark');
    
    service.getTheme$().subscribe((value: string) => expect(value).toEqual('dark'));
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
  });
});
