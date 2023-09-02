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
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { Mission } from '@core/models/mission.model';
import { TranslateModule } from '@ngx-translate/core';

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
      providers: [MarkdownService],
    }).compileComponents();
    componentFixture = TestBed.createComponent(MissionsComponent);
    missionsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(missionsComponent).toBeTruthy();
  });

  it('should set screen size on init', async (): Promise<void> => {
    expect(missionsComponent.screenWidth).toBe(1024);
  });

  it('should change the variable used to store the width when resizing the screen', async (): Promise<void> => {
    (window as any).innerWidth = 2048;
    window.dispatchEvent(new Event('resize'));
    componentFixture.detectChanges();
    expect(missionsComponent.screenWidth).toBe(2048);
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
