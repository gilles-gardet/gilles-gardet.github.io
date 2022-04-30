import { Component } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'portfolio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private _unsubscribe$ = new Subject();
  themeChecked: boolean | undefined;

  /**
   * Constructor
   *
   * @param configService the config service to be injected as a dependency
   */
  constructor(private configService: ConfigService) {
    this.configService.theme$.pipe(takeUntil(this._unsubscribe$)).subscribe((theme: string) => {
      this.themeChecked = theme === 'light';
      document.body.classList.toggle('dark', !this.themeChecked!);
    });
  }

  /**
   * Change theme from dark to light and vise-versa
   */
  switchTheme(): void {
    this.themeChecked = !this.themeChecked!;
    const theme = this.themeChecked! ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    this.configService.setTheme$(theme);
  }

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
    anchor.href = 'assets/pdf/CV_GARDET_Gilles.pdf';
    anchor.download = 'gardet_gilles.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
