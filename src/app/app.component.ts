import { Component } from '@angular/core';
import { ContactComponent } from '@features/contact/components/general/contact.component';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ContactComponent, ResumeComponent, ScrollTopModule],
})
export class AppComponent {}
