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
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Mission } from '@core/models/mission.model';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
        HttpClientTestingModule,
        MarkdownModule.forRoot(),
        PanelModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        SharedModule,
        TagModule,
        TimelineModule,
        TranslateModule.forRoot(),
      ],
      providers: [MarkdownService, { provide: TranslateService, useValue: { currentLang: 'en' } }],
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
    detailsComponent.loading = false;
    expect(detailsComponent.loading).toBeFalsy();
    detailsComponent.onDialogHiding();
    expect(detailsComponent.loading).toBeTruthy();
  });

  it(`should fetch the mission's content during the mission's loading`, async (): Promise<void> => {
    const mission: Mission = {
      client: 'Test',
      endDate: undefined,
      startDate: '2022-01-01',
    } as Mission;
    detailsComponent.loading = true;
    detailsComponent.selectedMission = mission;
    jest.spyOn(markdownService, 'getSource').mockReturnValue(of('test'));
    jest.spyOn(markdownService, 'parse');
    expect(document.body.querySelector('.p-dialog-content-scroll')).toBeNull();
    detailsComponent.onMissionLoading();
    componentFixture.detectChanges();
    expect(markdownService.getSource).toHaveBeenCalledTimes(2);
    expect(markdownService.getSource).toHaveBeenCalledWith('/assets/resume/missions/en/202201/202201_full.md');
    expect(markdownService.getSource).toHaveBeenCalledWith('/assets/resume/missions/en/202201/202201_light.md');
    expect(detailsComponent.innerFullMission).toEqual('<p>test</p>&#10;');
    expect(detailsComponent.innerLightMission).toEqual('<p>test</p>&#10;');
    expect(markdownService.parse).toHaveBeenNthCalledWith(2, 'test');
    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(detailsComponent.loading).toBeFalsy();
    expect(document.body.getElementsByClassName('p-dialog-content-scroll')[0]).not.toBeNull();
  });

  afterEach((): void => {
    jest.useRealTimers();
  });
});
