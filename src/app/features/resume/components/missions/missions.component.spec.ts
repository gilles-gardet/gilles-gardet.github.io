import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogModule } from 'primeng/dialog';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TimelineModule } from 'primeng/timeline';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { Mission } from '@core/models/mission.model';
import { getTranslocoModule } from 'src/__mock__/transloco-testing.module';
import { provideHttpClient } from '@angular/common/http';
import { PanelComponent } from '@shared/components/panel/panel.component';

window.IntersectionObserver = jest.fn().mockImplementation((): unknown => ({
  observe: (): unknown => null,
}));

describe('MissionsComponent', () => {
  let missionsComponent: MissionsComponent;
  let componentFixture: ComponentFixture<MissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        DialogModule,
        MarkdownModule.forRoot(),
        PanelComponent,
        ProgressBarModule,
        ProgressSpinnerModule,
        TimelineModule,
        getTranslocoModule(),
      ],
      providers: [MarkdownService, provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    componentFixture = TestBed.createComponent(MissionsComponent);
    missionsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(missionsComponent).toBeTruthy();
  });

  it('should set screen size on init', async (): Promise<void> => {
    expect((missionsComponent as any).screenWidth).toBe(1024);
  });

  it('should change the variable used to store the width when resizing the screen', async (): Promise<void> => {
    (window as any).innerWidth = 2048;
    window.dispatchEvent(new Event('resize'));
    componentFixture.detectChanges();
    expect((missionsComponent as any).screenWidth).toBe(2048);
  });

  it('should emit the selected mission', async (): Promise<void> => {
    const mission: Mission = {
      client: 'Test',
      endDate: undefined,
      startDate: '2022-01-01',
    } as Mission;
    const emitSpy: unknown = jest.spyOn(missionsComponent.openDialog, 'emit');
    missionsComponent.emitOpenMissionDialog(mission);
    expect(emitSpy).toHaveBeenNthCalledWith(1, mission);
  });
});
