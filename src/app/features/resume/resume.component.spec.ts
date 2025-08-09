import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from '@features/resume/resume.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { MarkdownModule } from 'ngx-markdown';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ResumeComponent', (): void => {
  let resumeComponent: ResumeComponent;
  let componentFixture: ComponentFixture<ResumeComponent>;
  const store = createMockStore();

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MarkdownModule.forRoot()],
      providers: [
        ...getTranslocoTestProviders(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    TestBed.overrideComponent(ResumeComponent, {
      add: {
        providers: [
          {
            provide: Store,
            useValue: store,
          },
        ],
        imports: [
          SummaryComponent,
          SkillsComponent,
          MissionsComponent,
          HobbiesComponent,
          DetailsComponent,
        ],
      },
      remove: {
        imports: [
          SummaryComponent,
          SkillsComponent,
          MissionsComponent,
          HobbiesComponent,
          DetailsComponent,
        ],
      },
    });
    componentFixture = TestBed.createComponent(ResumeComponent);
    resumeComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(resumeComponent).toBeTruthy();
  });
});