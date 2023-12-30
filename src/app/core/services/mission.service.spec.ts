import { TestBed, waitForAsync } from '@angular/core/testing';

import { MissionService } from './mission.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Skill } from '@core/models/skill.model';
import { Mission } from '@core/models/mission.model';

describe('MissionService', (): void => {
  let service: MissionService;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          defaultLanguage: 'fr',
        }),
      ],
      providers: [MissionService],
    });
    service = TestBed.inject(MissionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it(`should get the path of the full mardown file related to a mission's date`, async (): Promise<void> => {
    const path: string = service.missionFromDate('2019-01-01', 'full');
    expect(path).toContain('/201901/201901_full.md');
  });

  it(`should get the path of the light mardown file related to a mission's date`, async (): Promise<void> => {
    const path: string = service.missionFromDate('2019-01-01', 'light');
    expect(path).toContain('/201901/201901_light.md');
  });

  it(`should get the path of the full mardown file related to a mission's date`, async (): Promise<void> => {
    const path: string = service.missionFromDate('2019-01-01', 'full');
    expect(path).toEqual(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master/src/assets/resume/missions/undefined/201901/201901_full.md',
    );
  });

  it(`should get the path of the light mardown file related to a mission's date`, async (): Promise<void> => {
    const path: string = service.missionFromDate('2019-01-01', 'light');
    expect(path).toEqual(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master/src/assets/resume/missions/undefined/201901/201901_light.md',
    );
  });

  it(`should fetch the list of skills`, async (): Promise<void> => {
    const skills: Skill[] = [
      { name: 'HTML', rate: 80 },
      { name: 'Java', rate: 90 },
    ];
    service.fetchSkills$().subscribe((response: Skill[]) => expect(response).toEqual(skills));
    const testRequest: TestRequest = httpTestingController.expectOne(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master/src/assets/resume/skills.json',
    );
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(skills);
    httpTestingController.verify();
  });

  it(`should fetch the list of missions`, async (): Promise<void> => {
    const missions: Mission[] = [
      {
        client: 'MAIF (Inetum) - IRSA',
        startDate: '2020-07-01',
        endDate: '2020-12-01',
        description: 'test',
        timelapse: '01/07/2020 - 01/12/2020 (5 months)',
      },
    ];
    const description = 'test';
    service.fetchMissions$().subscribe((response: Mission[]) => expect(response).toEqual(missions));
    const missionsRequest: TestRequest = httpTestingController.expectOne(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master/src/assets/resume/missions.json',
    );
    missionsRequest.flush(missions);
    expect(missionsRequest.request.method).toEqual('GET');
    const descriptionRequest: TestRequest = httpTestingController.expectOne(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master/src/assets/resume/missions/undefined/202007/202007_light.md',
    );
    descriptionRequest.flush(description);
    expect(descriptionRequest.request.method).toEqual('GET');
    httpTestingController.verify();
  });

  it(`should get the timelapse label of a mission`, async (): Promise<void> => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const timelapseDone: string = (service as any).missionTimelapse(start.toDateString(), end.toDateString());
    expect(timelapseDone).toEqual('02/10/2018 - 16/04/2022 (3 years and 6 months)');
    const timelapseCurrent: string = (service as any).missionTimelapse(start.toDateString());
    expect(timelapseCurrent).toMatch(/02\/10\/2018 - ongoing/);
  });

  it(`should format the given date to be human readable`, async (): Promise<void> => {
    const firstDate: Date = new Date('2018-10-02');
    const firstFormatedDate: string = (service as any).formatDate(firstDate);
    expect(firstFormatedDate).toEqual('02/10/2018');
    const secondDate: Date = new Date('2022-04-16');
    const secondFormatedDate: string = (service as any).formatDate(secondDate);
    expect(secondFormatedDate).toEqual('16/04/2022');
  });

  it(`should provide the mission duration label in months`, async (): Promise<void> => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const missionDuration: string = (service as any).missionDuration(start.toDateString());
    expect(missionDuration).toMatch(/^[\d] years/);
    const missionWithEndDuration: string = (service as any).missionDuration(start.toDateString(), end.toDateString());
    expect(missionWithEndDuration).toEqual('3 years and 6 months');
  });

  it(`should provide the mission duration number in months`, async (): Promise<void> => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const missionDuration: number = (service as any).monthBetweenDates(start, end);
    expect(missionDuration).toBe(42);
  });
});
