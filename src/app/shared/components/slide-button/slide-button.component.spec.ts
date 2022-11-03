import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { TranslateModule } from "@ngx-translate/core";

describe('SlideButtonComponent', () => {
  let component: SlideButtonComponent;
  let fixture: ComponentFixture<SlideButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SlideButtonComponent],
        imports: [ButtonModule, CommonModule, TranslateModule.forRoot()],
      }).compileComponents();
      fixture = TestBed.createComponent(SlideButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
