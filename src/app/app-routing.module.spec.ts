import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardModule } from "primeng/card";
import { DialogModule } from "primeng/dialog";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MarkdownModule } from "ngx-markdown";
import { PanelModule } from "primeng/panel";
import { ProgressBarModule } from "primeng/progressbar";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { SharedModule } from "@shared/shared.module";
import { TagModule } from "primeng/tag";
import { TimelineModule } from "primeng/timeline";
import { TranslateModule } from "@ngx-translate/core";

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
}));

describe('AppRoutingModule', () => {
  let router: Router;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        CardModule,
        CommonModule,
        DialogModule,
        HttpClientTestingModule,
        MarkdownModule.forRoot(),
        PanelModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        SharedModule,
        TagModule,
        TimelineModule,
        TranslateModule.forRoot({
          defaultLanguage: 'fr',
        }), AppRoutingModule, RouterTestingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const module = TestBed.inject(AppRoutingModule);
    expect(module).toBeTruthy();
  });

  it('should navigate to resume component on empty route', () => {
    router.navigate(['/']).then(() => {
      expect(router.url).toEqual('/');
      const compiled = fixture.nativeElement;
      const resumeComponent = compiled.querySelector('cv-resume');
      expect(resumeComponent).toBeTruthy();
    });
  });

  it('should navigate to resume component on every route', () => {
    router.navigate(['/test']).then(() => {
      expect(router.url).toEqual('/');
      const compiled = fixture.nativeElement;
      const resumeComponent = compiled.querySelector('cv-resume');
      expect(resumeComponent).toBeTruthy();
    });
  });
});
