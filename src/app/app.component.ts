import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactComponent } from '@features/contact/components/general/contact.component';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactComponent, ResumeComponent, ScrollTopModule],
  selector: 'portfolio-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {}
