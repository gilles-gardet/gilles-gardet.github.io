import { ThemeService } from '@core/services/theme.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('ThemeService', (): void => {
  let service: ThemeService;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);
  }));

  it('should create', async (): Promise<void> => {
    expect(service).toBeTruthy();
  });

  it('should get the configured theme', async (): Promise<void> => {
    service.getTheme$().subscribe((value: string) => expect(value).toEqual('light'));
  });

  it('should configure a theme', async (): Promise<void> => {
    service.setTheme$('dark');
    service.getTheme$().subscribe((value: string) => expect(value).toEqual('dark'));
  });

  it('should set the theme from the local storage if setted', async (): Promise<void> => {
    localStorage.setItem('theme', 'dark');
    service.getTheme$().subscribe((value: string) => expect(value).toEqual('dark'));
  });
});
