import { ConfigService } from '@core/services/config.service';
import { waitForAsync } from '@angular/core/testing';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(
    waitForAsync(() => {
      service = new ConfigService();
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
