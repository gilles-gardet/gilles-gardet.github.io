import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from '@core/core.module';

describe('CoreModule', (): void => {
  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', (): void => {
    const module: CoreModule = TestBed.inject(CoreModule);
    expect(module).toBeTruthy();
  });
});
