import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HobbiesComponent } from '@features/hobbies/hobbies.component';
import { PanelComponent } from '@shared/components/panel/panel.component';

describe('HobbiesComponent', (): void => {
  let hobbiesComponent: HobbiesComponent;
  let componentFixture: ComponentFixture<HobbiesComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(HobbiesComponent);
    hobbiesComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(hobbiesComponent).toBeTruthy();
  });
});
