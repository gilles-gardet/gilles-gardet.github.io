import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { provideHttpClient } from '@angular/common/http';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { Store } from '@ngrx/store';
import { mockedInstance } from '@core/jest/mocked-instance.helper';
import { of } from 'rxjs';
import mockMissions from '@assets/resume/missions.json';

window.IntersectionObserver = jest.fn().mockImplementation((): unknown => ({
  observe: (): unknown => null,
  disconnect: (): unknown => null,
  unobserve: (): unknown => null,
}));

describe('MissionsComponent', () => {
  let missionsComponent: MissionsComponent;
  let componentFixture: ComponentFixture<MissionsComponent>;
  const store = mockedInstance(Store);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, MarkdownModule.forRoot(), MissionsComponent, PanelComponent],
      providers: [
        MarkdownService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    jest.mocked(store.select).mockReturnValue(of(mockMissions));
    componentFixture = TestBed.createComponent(MissionsComponent);
    missionsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(missionsComponent).toBeTruthy();
  }, 10000);

  it('should set screen size on init', async (): Promise<void> => {
    expect((missionsComponent as any).screenWidth).toBe(1024);
  });

  it('should change the variable used to store the width when resizing the screen', async (): Promise<void> => {
    (window as any).innerWidth = 2048;
    window.dispatchEvent(new Event('resize'));
    componentFixture.detectChanges();
    expect((missionsComponent as any).screenWidth).toBe(2048);
  });
});
