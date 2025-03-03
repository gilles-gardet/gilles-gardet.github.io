import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ResumeComponent } from '@features/resume/resume.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
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

window.IntersectionObserver = jest.fn().mockImplementation((): unknown => ({
  observe: (): unknown => null,
}));

describe('ResumeComponent', (): void => {
  let resumeComponent: ResumeComponent;
  let componentFixture: ComponentFixture<ResumeComponent>;
  const store = mockedInstance(Store);

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CardModule,
        CommonModule,
        DialogModule,
        MarkdownModule.forRoot(),
        PanelModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        TagModule,
        TimelineModule,
      ],
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

  it(`should open the dialog with the selected mission`, async (): Promise<void> => {
    const mission: Mission = {
      client: 'Test',
      endDate: undefined,
      startDate: '2022-01-01',
    } as Mission;
    (resumeComponent as any).displayDialog = false;
    (resumeComponent as any).selectedMission = {} as Mission;
    expect((resumeComponent as any).displayDialog).toBeFalsy();
    expect((resumeComponent as any).selectedMission).toEqual({});
    resumeComponent.openDialog(mission);
    expect((resumeComponent as any).displayDialog).toBeTruthy();
    expect((resumeComponent as any).selectedMission).toEqual(mission);
  });

  afterEach((): void => {
    jest.useRealTimers();
  });
});
