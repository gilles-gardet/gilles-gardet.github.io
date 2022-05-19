import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SharedModule } from '@shared/shared.module';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { Mission } from '@core/models/mission.model';

const tools = [
  {
    name: 'HTML',
    rate: 80,
  },
  {
    name: 'Java',
    rate: 90,
  },
  {
    name: 'Spring Boot',
    rate: 85,
  },
  {
    name: 'Spring MVC',
    rate: 85,
  },
  {
    name: 'Spring Data',
    rate: 75,
  },
  {
    name: 'Spring Security',
    rate: 70,
  },
  {
    name: 'CSS',
    rate: 75,
  },
  {
    name: 'Sass',
    rate: 75,
  },
  {
    name: 'Javascript',
    rate: 80,
  },
  {
    name: 'SQL',
    rate: 70,
  },
  {
    name: 'TypeScript',
    rate: 80,
  },
  {
    name: 'Angular',
    rate: 85,
  },
  {
    name: 'NestJS',
    rate: 70,
  },
  {
    name: 'ReactJS',
    rate: 65,
  },
  {
    name: 'Hibernate',
    rate: 80,
  },
  {
    name: 'Typeorm',
    rate: 70,
  },
  {
    name: 'Kotlin',
    rate: 70,
  },
];
const emptyTools = [
  {
    name: 'HTML',
    rate: 0,
  },
  {
    name: 'Java',
    rate: 0,
  },
  {
    name: 'Spring Boot',
    rate: 0,
  },
  {
    name: 'Spring MVC',
    rate: 0,
  },
  {
    name: 'Spring Data',
    rate: 0,
  },
  {
    name: 'Spring Security',
    rate: 0,
  },
  {
    name: 'CSS',
    rate: 0,
  },
  {
    name: 'Sass',
    rate: 0,
  },
  {
    name: 'Javascript',
    rate: 0,
  },
  {
    name: 'SQL',
    rate: 0,
  },
  {
    name: 'TypeScript',
    rate: 0,
  },
  {
    name: 'Angular',
    rate: 0,
  },
  {
    name: 'NestJS',
    rate: 0,
  },
  {
    name: 'ReactJS',
    rate: 0,
  },
  {
    name: 'Hibernate',
    rate: 0,
  },
  {
    name: 'Typeorm',
    rate: 0,
  },
  {
    name: 'Kotlin',
    rate: 0,
  },
];
export const missions = [
  {
    client: 'Air France KLM (Inetum) - Dev Portal',
    endDate: null,
    startDate: '2019-01-01',
  },
  {
    client: 'Orange (Inetum) - SPDP & O2H',
    endDate: null,
    startDate: '2020-12-01',
  },
  {
    client: 'MAIF (Inetum) - IRSA',
    endDate: '2020-12-01',
    startDate: '2020-07-01',
  },
  {
    client: 'Air France KLM (Inetum) - CCAPI',
    endDate: '2019-01-01',
    startDate: '2016-07-01',
  },
  {
    client: 'Airbus (GFI) - GAS',
    endDate: '2016-07-01',
    startDate: '2016-01-01',
  },
  {
    client: 'GFI - Gimaweb',
    endDate: '2016-01-01',
    startDate: '2015-04-01',
  },
  {
    client: 'Mairie de Toulouse (GFI) - Portail interne',
    endDate: '2015-04-01',
    startDate: '2015-01-01',
  },
  {
    client: 'Airbus (GFI) - Flight Ops Document Manager',
    endDate: '2015-01-01',
    startDate: '2013-04-01',
  },
];

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
}));

describe('ResumeComponent', () => {
  let resumeComponent: ResumeComponent;
  let markdownService: MarkdownService;
  let componentFixture: ComponentFixture<ResumeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HobbiesComponent, MissionsComponent, ResumeComponent, SkillsComponent, SummaryComponent],
        imports: [
          BrowserAnimationsModule,
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
        ],
        providers: [MarkdownService],
      }).compileComponents();
      componentFixture = TestBed.createComponent(ResumeComponent);
      markdownService = TestBed.inject(MarkdownService);
      resumeComponent = componentFixture.componentInstance;
      componentFixture.detectChanges();
    })
  );

  it('should create', async () => {
    expect(resumeComponent).toBeTruthy();
  });

  it('should set missions values on init', async () => {
    expect(resumeComponent.missions).toMatchObject(missions);
  });

  it('should set tools values on init', async () => {
    expect(resumeComponent.skills).toStrictEqual(emptyTools);
    expect(resumeComponent.clones).toStrictEqual(tools);
  });

  it(`should open the dialog with the selected mission`, async () => {
    const mission = {
      client: 'Test',
      endDate: undefined,
      startDate: '2022-01-01',
    } as Mission;
    resumeComponent.displayDialog = false;
    resumeComponent.selectedMission = {} as Mission;
    expect(resumeComponent.displayDialog).toBeFalsy();
    expect(resumeComponent.selectedMission).toEqual({});
    resumeComponent.openDialog(mission);
    expect(resumeComponent.displayDialog).toBeTruthy();
    expect(resumeComponent.selectedMission).toEqual(mission);
  });

  it(`should remove the loader on dialog hiding`, async () => {
    resumeComponent.loading = false;
    expect(resumeComponent.loading).toBeFalsy();
    resumeComponent.onDialogHiding();
    expect(resumeComponent.loading).toBeTruthy();
  });

  it(`should fetch the mission's content during the mission's loading`, async () => {
    const mission = {
      client: 'Test',
      endDate: undefined,
      startDate: '2022-01-01',
    } as Mission;
    resumeComponent.loading = true;
    resumeComponent.selectedMission = mission;
    jest.spyOn(markdownService, 'getSource').mockReturnValue(of('test'));
    jest.spyOn(markdownService, 'compile');
    expect(document.body.querySelector('.p-dialog-content-scroll')).toBeNull();
    resumeComponent.onMissionLoading();
    expect(markdownService.getSource).toHaveBeenCalledTimes(2);
    expect(markdownService.getSource).toHaveBeenCalledWith('/assets/resume/missions/202201/202201_full.md');
    expect(markdownService.getSource).toHaveBeenCalledWith('/assets/resume/missions/202201/202201_light.md');
    expect(resumeComponent.innerFullMission).toEqual('<p>test</p>&#10;');
    expect(resumeComponent.innerLightMission).toEqual('<p>test</p>&#10;');
    expect(markdownService.compile).toHaveBeenNthCalledWith(2, 'test');
    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(resumeComponent.loading).toBeFalsy();
    // expect(document.body.querySelector('.p-dialog-content-scroll')).not.toBeNull();
  });

  it(`should get the path of the full mardown file related to a mission's date`, async () => {
    const path = resumeComponent.missionFromDate('2019-01-01', 'full');
    expect(path).toEqual('/assets/resume/missions/201901/201901_full.md');
  });

  it(`should get the path of the light mardown file related to a mission's date`, async () => {
    const path = resumeComponent.missionFromDate('2019-01-01', 'light');
    expect(path).toEqual('/assets/resume/missions/201901/201901_light.md');
  });

  it(`should get the timelapse label of a mission`, async () => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const timelapseDone = resumeComponent.missionTimelapse(start.toDateString(), end.toDateString());
    expect(timelapseDone).toEqual('02/10/2018 - 16/04/2022 (3 ans et 6 mois)');
    const timelapseCurrent = resumeComponent.missionTimelapse(start.toDateString());
    expect(timelapseCurrent).toEqual('02/10/2018 - en cours (3 ans et 7 mois)');
  });

  it(`should format the given date to be human readable`, async () => {
    const firstDate: Date = new Date('2018-10-02');
    const firstFormatedDate = resumeComponent.formatDate(firstDate);
    expect(firstFormatedDate).toEqual('02/10/2018');
    const secondDate: Date = new Date('2022-04-16');
    const secondFormatedDate = resumeComponent.formatDate(secondDate);
    expect(secondFormatedDate).toEqual('16/04/2022');
  });

  it(`should provide the mission duration label in months`, async () => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const missionDuration = resumeComponent.missionDuration(start.toDateString());
    expect(missionDuration).toEqual('3 ans et 7 mois');
    const missionWithEndDuration = resumeComponent.missionDuration(start.toDateString(), end.toDateString());
    expect(missionWithEndDuration).toEqual('3 ans et 6 mois');
  });

  it(`should provide the mission duration number in months`, async () => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const missionDuration = resumeComponent.monthBetweenDates(start, end);
    expect(missionDuration).toBe(42);
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
