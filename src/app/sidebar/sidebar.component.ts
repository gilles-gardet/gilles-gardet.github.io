import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  /**
   * Open the default email client with default values
   */
  openEmailClient(): void {
    window.open('mailto:gilles.gardet@gmail.com');
  }

  /**
   * Download the curriculum vitae
   */
  downloadCurriculumVitae(): void {
    const anchor = document.createElement('a');
    anchor.href = 'assets/CV_GARDET_Gilles.pdf';
    anchor.download = 'gardet_gilles.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
