import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { ChangeDetectorRef } from '@angular/core';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { mockedInstance } from '@core/jest/mocked-instance.helper';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import mockSkills from '@assets/resume/skills.json';

window.IntersectionObserver = jest.fn().mockImplementation((): unknown => ({
  observe: (): unknown => null,
}));

describe('SkillsComponent', (): void => {
  let skillsComponent: SkillsComponent;
  let componentFixture: ComponentFixture<SkillsComponent>;
  const store = mockedInstance(Store);

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent, ProgressBarComponent],
      providers: [
        { provide: ChangeDetectorRef, useValue: {} },
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    jest.mocked(store.select).mockReturnValue(of(mockSkills));
    componentFixture = TestBed.createComponent(SkillsComponent);
    skillsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(skillsComponent).toBeTruthy();
  });
});
