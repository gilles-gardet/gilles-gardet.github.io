import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';

describe('MissionsComponent', (): void => {
  let missionsComponent: MissionsComponent;
  let componentFixture: ComponentFixture<MissionsComponent>;
  const store = createMockStore();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent],
      providers: [
        ...getTranslocoTestProviders(),
        {
          provide: Store,
          useValue: store,
        },
      ]
    }).compileComponents();
    componentFixture = TestBed.createComponent(MissionsComponent);
    missionsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(missionsComponent).toBeTruthy();
  });
});