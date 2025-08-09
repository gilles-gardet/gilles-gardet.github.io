import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';

describe('SlideButtonComponent', (): void => {
  let component: SlideButtonComponent;
  let fixture: ComponentFixture<SlideButtonComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SlideButtonComponent],
      providers: [
        ...getTranslocoTestProviders(),
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SlideButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(component).toBeTruthy();
  });
});
