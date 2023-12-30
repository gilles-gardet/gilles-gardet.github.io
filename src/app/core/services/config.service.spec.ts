import { ConfigService, DARK_THEME, LIGHT_THEME } from '@core/services/config.service';
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

  it('should create', (): void => {
    expect(service).toBeTruthy();
  });

  it('should get the default configured theme', (): void => {
    expect(service.theme$()).toEqual(LIGHT_THEME);
  });

  it('should configure a theme', (): void => {
    service.setTheme$(DARK_THEME);
    expect(service.theme$()).toEqual('dark');
  });

  it('should get the default loader state', (): void => {
    expect(service.loading$()).toEqual(true);
  });

  it('should change the loader state', (): void => {
    service.setLoading$(false);
    expect(service.loading$()).toEqual(false);
  });
});
