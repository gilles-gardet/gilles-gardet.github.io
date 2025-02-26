import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { getTranslocoModule } from 'src/__mock__/transloco-testing.module';
import { PanelComponent } from '@shared/components/panel/panel.component';

describe('HobbiesComponent', (): void => {
  let hobbiesComponent: HobbiesComponent;
  let componentFixture: ComponentFixture<HobbiesComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent, TagModule, getTranslocoModule()],
    }).compileComponents();
    componentFixture = TestBed.createComponent(HobbiesComponent);
    hobbiesComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(hobbiesComponent).toBeTruthy();
  });
});
