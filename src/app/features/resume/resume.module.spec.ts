import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ResumeModule } from '@features/resume/resume.module';

describe('ResumeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResumeModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(ResumeModule);
    expect(module).toBeTruthy();
  });
});
