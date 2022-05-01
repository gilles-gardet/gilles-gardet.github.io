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
});
