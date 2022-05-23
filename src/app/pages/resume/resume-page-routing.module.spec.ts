import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ResumePageRoutingModule } from '@pages/resume/resume-page-routing.module';

describe('ResumePageRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResumePageRoutingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(ResumePageRoutingModule);
    expect(module).toBeTruthy();
  });
});
