import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { TranslateModule } from '@ngx-translate/core';

describe('HobbiesComponent', (): void => {
  let hobbiesComponent: HobbiesComponent;
  let componentFixture: ComponentFixture<HobbiesComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelModule, TagModule, TranslateModule.forRoot()],
    }).compileComponents();
    componentFixture = TestBed.createComponent(HobbiesComponent);
    hobbiesComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(hobbiesComponent).toBeTruthy();
  });
});
