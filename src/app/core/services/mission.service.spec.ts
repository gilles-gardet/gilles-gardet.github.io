import { TestBed, waitForAsync } from '@angular/core/testing';

import { MissionService } from './mission.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

describe('MissionService', (): void => {
  let service: MissionService;

  beforeEach(waitForAsync((): void => {
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
    expect(path).toEqual('/assets/resume/missions/undefined/201901/201901_full.md');
  });

  it(`should get the path of the light mardown file related to a mission's date`, async (): Promise<void> => {
    const path: string = service.missionFromDate('2019-01-01', 'light');
    expect(path).toEqual('/assets/resume/missions/undefined/201901/201901_light.md');
  });
});
