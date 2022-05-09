import { ConfigService } from '@core/services/config.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
        providers: [ConfigService],
      });
      service = TestBed.inject(ConfigService);
    })
  );

  it('should create', async () => {
    expect(service).toBeTruthy();
  });

  it('should get the configured theme', async () => {
    service.theme$.subscribe((value) => expect(value).toEqual('light'));
  });

  it('should configure a theme', async () => {
    service.setTheme$('dark');
    service.theme$.subscribe((value) => expect(value).toEqual('dark'));
  });

  it('should set the theme from the local storage if setted', async () => {
    localStorage.setItem('theme', 'dark');
    service.theme$.subscribe((value) => expect(value).toEqual('dark'));
  });
});
