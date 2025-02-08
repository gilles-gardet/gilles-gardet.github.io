import { ConfigService } from '@core/services/config.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('ConfigService', (): void => {
  let service: ConfigService;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [ConfigService],
    });
    service = TestBed.inject(ConfigService);
  }));

  it('should create', async (): Promise<void> => {
    expect(service).toBeTruthy();
  });

  it('should get the configured theme', async (): Promise<void> => {
    service.theme$.subscribe((value: string) => expect(value).toEqual('light'));
  });

  it('should configure a theme', async (): Promise<void> => {
    service.setTheme$('dark');
    service.theme$.subscribe((value: string) => expect(value).toEqual('dark'));
  });

  it('should set the theme from the local storage if setted', async (): Promise<void> => {
    localStorage.setItem('theme', 'dark');
    service.theme$.subscribe((value: string) => expect(value).toEqual('dark'));
  });
});
