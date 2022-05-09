import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

describe('SharedModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });
});
