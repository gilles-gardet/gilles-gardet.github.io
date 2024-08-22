import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { getTranslocoModule } from '@core/__mock/transloco-testing.module';

describe('SlideButtonComponent', (): void => {
  let component: SlideButtonComponent;
  let fixture: ComponentFixture<SlideButtonComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      declarations: [SlideButtonComponent],
      imports: [ButtonModule, CommonModule, getTranslocoModule()],
    }).compileComponents();
    fixture = TestBed.createComponent(SlideButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(component).toBeTruthy();
  });
});
