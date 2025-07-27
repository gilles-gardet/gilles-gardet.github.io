import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResumeComponent } from '@features/resume/resume.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mission } from '@core/models/mission.model';
import { MissionService } from '@core/services/mission.service';
import { of } from 'rxjs';
import { Skill } from '@core/models/skill.model';
import mockMissions from '@assets/resume/missions.json';
import mockSkills from '@assets/resume/skills.json';
import { ThemeService } from '@core/services/theme.service';
import { provideHttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { mockedInstance } from '@core/jest/mocked-instance.helper';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

window.IntersectionObserver = jest.fn().mockImplementation((): unknown => ({
  observe: (): unknown => null,
  disconnect: (): unknown => null,
}));

describe('ResumeComponent', (): void => {
  let resumeComponent: ResumeComponent;
  let componentFixture: ComponentFixture<ResumeComponent>;
  const store = mockedInstance(Store);

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, MarkdownModule.forRoot(), ResumeComponent],
      providers: [
        ThemeService,
        MarkdownService,
        {
          provide: MissionService,
          useValue: {
            fetchMissions$: jest.fn().mockReturnValue(of(mockMissions as Mission[])),
            fetchSkills$: jest.fn().mockReturnValue(of(mockSkills as Skill[])),
            missionFromDate: jest.fn().mockReturnValue(''),
          },
        },
        {
          provide: Store,
          useValue: store,
        },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    jest.mocked(store.select).mockReturnValue(of(mockSkills));
    componentFixture = TestBed.createComponent(ResumeComponent);
    resumeComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(resumeComponent).toBeTruthy();
  });

  it('should contains the 5 child components', () => {
    const debugElement: DebugElement = componentFixture.debugElement;
    const summaryComponent = debugElement.query(By.css('cv-summary')).componentInstance;
    const skillsComponent = debugElement.query(By.css('cv-skills')).componentInstance;
    const missionsComponent = debugElement.query(By.css('cv-missions')).componentInstance;
    const hobbiesComponent = debugElement.query(By.css('cv-hobbies')).componentInstance;
    const detailsComponent = debugElement.query(By.css('cv-details')).componentInstance;
    expect(summaryComponent).toBeTruthy();
    expect(skillsComponent).toBeTruthy();
    expect(missionsComponent).toBeTruthy();
    expect(hobbiesComponent).toBeTruthy();
    expect(detailsComponent).toBeTruthy();
  });
});
