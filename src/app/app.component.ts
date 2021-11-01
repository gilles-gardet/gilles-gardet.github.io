import { Component, OnDestroy } from '@angular/core';
import { Config } from './domains/config.interface';
import { ConfigService } from './services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  subscription: Subscription | undefined;
  config: Config | undefined;
  theme: string = 'light';

  /**
   * Constructor
   *
   * @param configService the config service to be injected as a dependency
   */
  constructor(private configService: ConfigService) {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
      this.config = config;
      localStorage.setItem('theme', this.config?.theme!);
    });
    let appTheme;
    const queryString = window.location.search;
    if (queryString) appTheme = new URLSearchParams(queryString.substring(1)).get('theme');
    else appTheme = localStorage.getItem('theme');
    if (appTheme) this.changeTheme(appTheme);
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  /**
   * Chnge the theme
   *
   * @param event the event containing the heme options
   */
  changeTheme(event: any): void {
    let themeElement = document.getElementById('theme');
    themeElement?.setAttribute('href', themeElement?.getAttribute('href')?.replace(this.theme!, event?.theme)!);
    this.theme = event.theme;
    this.config!.theme = this.theme;
    this.configService.updateConfig(this.config!);
  }
}
