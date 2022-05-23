import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ResumePageModule } from '@pages/resume/resume-page.module';

describe('ResumePageModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResumePageModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(ResumePageModule);
    expect(module).toBeTruthy();
  });
});
