import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SharedModule } from '@shared/shared.module';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ConfigService } from '@core/services/config.service';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { getTranslocoModule } from '@core/__mock/transloco-testing.module';
import { provideHttpClient } from '@angular/common/http';

window.IntersectionObserver = jest.fn().mockImplementation((): unknown => ({
  observe: (): unknown => null,
}));

describe('AppRoutingModule', (): void => {
  let router: Router;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CardModule,
        CommonModule,
        DialogModule,
        getTranslocoModule(),
        MarkdownModule.forRoot(),
        PanelModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        SharedModule,
        TagModule,
        TimelineModule,
        AppRoutingModule,
        RouterModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        ConfigService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
  });

  it('should create', (): void => {
    const module: AppRoutingModule = TestBed.inject(AppRoutingModule);
    expect(module).toBeTruthy();
  });

  it('should navigate to resume component on empty route', (): void => {
    router.navigate(['/']).then((): void => {
      expect(router.url).toEqual('/');
      const compiled = fixture.nativeElement;
      const resumeComponent = compiled.querySelector('cv-resume');
      expect(resumeComponent).toBeTruthy();
    });
  });

  it('should navigate to resume component on every route', (): void => {
    router.navigate(['/test']).then((): void => {
      expect(router.url).toEqual('/');
      const compiled = fixture.nativeElement;
      const resumeComponent = compiled.querySelector('cv-resume');
      expect(resumeComponent).toBeTruthy();
    });
  });
});
