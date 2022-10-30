import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ContactComponent } from '@features/contact/components/general/contact.component';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [ContactComponent, ResumeComponent, ScrollTopModule, NgClass],
  selector: 'cv-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {}
