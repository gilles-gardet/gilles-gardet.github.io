import { TestBed, waitForAsync } from '@angular/core/testing';

import { MissionService } from './mission.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Skill } from '@core/models/skill.model';
import { Mission } from '@core/models/mission.model';
import { HttpClient } from '@angular/common/http';

describe('MissionService', (): void => {
  let service: MissionService;
  let httpClient: HttpClient;
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
    httpClient = TestBed.inject(HttpClient);
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
      },
    ];
    service.fetchMissions$().subscribe((response: Mission[]) => expect(response).toEqual(missions));
    const testRequest: TestRequest = httpTestingController.expectOne(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master/src/assets/resume/missions.json',
    );
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(missions);
    httpTestingController.verify();
  });
});
