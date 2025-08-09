import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';

describe('SkillsComponent', (): void => {
  let skillsComponent: SkillsComponent;
  let componentFixture: ComponentFixture<SkillsComponent>;
  const store = createMockStore();

  beforeEach(waitForAsync((): void => {
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
    componentFixture = TestBed.createComponent(SkillsComponent);
    skillsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(skillsComponent).toBeTruthy();
  });
});