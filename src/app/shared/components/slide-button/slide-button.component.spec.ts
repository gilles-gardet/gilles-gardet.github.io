import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';

describe('SlideButtonComponent', (): void => {
  let component: SlideButtonComponent;
  let fixture: ComponentFixture<SlideButtonComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SlideButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SlideButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(component).toBeTruthy();
  });
});
