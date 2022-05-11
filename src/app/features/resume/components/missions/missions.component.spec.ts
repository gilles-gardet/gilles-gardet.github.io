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

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
}));

describe('MissionsComponent', () => {
  let missionsComponent: MissionsComponent;
  let componentFixture: ComponentFixture<MissionsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MissionsComponent],
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
        ],
        providers: [MarkdownService],
      }).compileComponents();
      componentFixture = TestBed.createComponent(MissionsComponent);
      componentFixture.detectChanges();
    })
  );

  it('should create', async () => {
    expect(missionsComponent).toBeTruthy();
  });

  it('should set screen size on init', async () => {
    expect(missionsComponent.screenWidth).toBe(1024);
  });

  it('should change the variable used to store the width when resizing the screen', async () => {
    (window as any).innerWidth = 2048;
    window.dispatchEvent(new Event('resize'));
    componentFixture.detectChanges();
    expect(missionsComponent.screenWidth).toBe(2048);
  });
});
