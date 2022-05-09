import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from '@core/core.module';

describe('CoreModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(CoreModule);
    expect(module).toBeTruthy();
  });
});
