import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogModule } from 'primeng/dialog';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { MissionService } from '@core/services/mission.service';
import { Store } from '@ngrx/store';
import { mockedInstance } from '@core/jest/mocked-instance.helper';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { selectMission } from '@state/mission/mission.selector';
import { Mission } from '@core/models/mission.model';

const mission: Mission = {
  client: 'test',
  timelapse: 'test',
  description: 'test',
  startDate: '202201',
};

describe('DetailsComponent', (): void => {
  let detailsComponent: DetailsComponent;
  let markdownService: MarkdownService;
  let componentFixture: ComponentFixture<DetailsComponent>;
  const store = mockedInstance(Store);

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        DialogModule,
        HttpClientModule,
        MarkdownModule.forRoot({
          loader: HttpClient,
        }),
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
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    markdownService = TestBed.inject(MarkdownService);
    jest.spyOn(markdownService, 'getSource').mockReturnValue(of('test'));
    jest.mocked(store.select).mockReturnValue(of(mission));
    componentFixture = TestBed.createComponent(DetailsComponent);
    detailsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(detailsComponent).toBeTruthy();
  });

  it(`should fetch the mission's content during the mission's loading`, async (): Promise<void> => {
    detailsComponent.isLoading = true;
    expect(document.body.querySelector('.p-dialog-content-scroll')).toBeNull();
    componentFixture.detectChanges();
    expect(store.select).toHaveBeenCalledTimes(1);
    expect(store.select).toHaveBeenCalledWith(selectMission);
    expect(detailsComponent.innerFullMission).toEqual('test');
    expect(document.body.getElementsByClassName('p-dialog-content-scroll')[0]).not.toBeNull();
  });

  afterEach((): void => {
    jest.clearAllMocks();
  });
});
