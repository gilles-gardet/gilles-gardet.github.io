import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SharedModule } from '@shared/shared.module';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Mission } from '@core/models/mission.model';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { MissionService } from '@core/services/mission.service';
import { getTranslocoModule } from "@core/__mock/transloco-testing.module";
import { TranslocoService } from "@jsverse/transloco";

describe('DetailsComponent', (): void => {
  let detailsComponent: DetailsComponent;
  let markdownService: MarkdownService;
  let componentFixture: ComponentFixture<DetailsComponent>;

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
        SharedModule,
        TagModule,
        TimelineModule,
        getTranslocoModule(),
      ],
      providers: [
        MarkdownService,
        {
          provide: MissionService,
          useValue: {
            missionFromDate: jest
              .fn()
              .mockReturnValueOnce('/assets/resume/missions/en/202201/202201_full.md')
              .mockReturnValueOnce('/assets/resume/missions/en/202201/202201_light.md')
              .mockReturnValue(''),
          },
        },
      ],
    }).compileComponents();
    componentFixture = TestBed.createComponent(DetailsComponent);
    markdownService = TestBed.inject(MarkdownService);
    detailsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(detailsComponent).toBeTruthy();
  });

  it(`should remove the loader on dialog hiding`, async (): Promise<void> => {
    detailsComponent.isLoading = false;
    expect(detailsComponent.isLoading).toBeFalsy();
    detailsComponent.onDialogHiding();
    expect(detailsComponent.isLoading).toBeTruthy();
  });

  it(`should fetch the mission's content during the mission's loading`, (): void => {
    const mission: Mission = {
      client: 'Test',
      endDate: undefined,
      startDate: '2022-01-01',
    } as Mission;
    detailsComponent.isLoading = true;
    detailsComponent.selectedMission = mission;
    jest.spyOn(markdownService, 'getSource').mockReturnValue(of('test'));
    jest.spyOn(markdownService, 'parse');
    expect(document.body.querySelector('.p-dialog-content-scroll')).toBeNull();
    detailsComponent.onMissionLoading();
    componentFixture.detectChanges();
    expect(markdownService.getSource).toHaveBeenCalledTimes(1);
    expect(markdownService.getSource).toHaveBeenCalledWith('/assets/resume/missions/en/202201/202201_full.md');
    expect(detailsComponent.innerFullMission).toEqual('test');
    expect(detailsComponent.isLoading).toBeFalsy();
    expect(document.body.getElementsByClassName('p-dialog-content-scroll')[0]).not.toBeNull();
  });

  afterEach((): void => {
    jest.useRealTimers();
  });
});
