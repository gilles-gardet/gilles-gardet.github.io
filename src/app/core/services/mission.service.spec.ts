import { TestBed, waitForAsync } from '@angular/core/testing';

import { MissionService } from './mission.service';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientProxy } from '@core/core.module';

describe('MissionService', () => {
  let service: MissionService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslateModule.forRoot({
          defaultLanguage: 'fr',
        }),
      ],
      providers: [MissionService],
    });
    service = TestBed.inject(MissionService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should get the path of the full mardown file related to a mission's date`, async () => {
    const path = service.missionFromDate('2019-01-01', 'full');
    expect(path).toContain('/201901/201901_full.md');
  });

  it(`should get the path of the light mardown file related to a mission's date`, async () => {
    const path = service.missionFromDate('2019-01-01', 'light');
    expect(path).toContain('/201901/201901_light.md');
  });

  it(`should get the path of the full mardown file related to a mission's date`, async () => {
    const path = service.missionFromDate('2019-01-01', 'full');
    expect(path).toEqual('/assets/resume/missions/undefined/201901/201901_full.md');
  });

  it(`should get the path of the light mardown file related to a mission's date`, async () => {
    const path = service.missionFromDate('2019-01-01', 'light');
    expect(path).toEqual('/assets/resume/missions/undefined/201901/201901_light.md');
  });
});
