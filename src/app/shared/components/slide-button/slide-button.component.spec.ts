import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@features/sidebar/components/sidebar/sidebar.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '@core/services/config.service';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';

describe('SlideButtonComponent', () => {
  let component: SlideButtonComponent;
  let fixture: ComponentFixture<SlideButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SlideButtonComponent],
        imports: [ButtonModule, CommonModule],
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
