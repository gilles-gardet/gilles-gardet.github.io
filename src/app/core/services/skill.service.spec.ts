import { TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { Skill } from '@core/models/skill.model';
import { provideHttpClient } from '@angular/common/http';
import { SkillService } from '@core/services/skill.service';

describe('SkillService', (): void => {
  let service: SkillService;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [SkillService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SkillService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it(`should fetch the list of skills`, async (): Promise<void> => {
    const skills: Skill[] = [
      { name: 'HTML', rate: 80 },
      { name: 'Java', rate: 90 },
    ];
    service.fetchSkills$().subscribe((response: Skill[]) => expect(response).toEqual(skills));
    const testRequest: TestRequest = httpTestingController.expectOne(
      'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/main/src/assets/resume/skills.json',
    );
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(skills);
    httpTestingController.verify();
  });
});
