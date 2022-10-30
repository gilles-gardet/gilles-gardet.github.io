import { ChangeDetectionStrategy, Component, HostListener, inject, OnDestroy, ViewChild } from "@angular/core";
import { ConfigService, DARK_THEME, LIGHT_THEME, THEME_KEY } from '@core/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from '@shared/shared.module';
import { Menu, MenuModule } from "primeng/menu";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    FormsModule,
    InputSwitchModule,
    MenuModule,
    RippleModule,
    SharedModule,
    TooltipModule,
  ],
  selector: 'cv-contact',
  standalone: true,
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnDestroy {
  @ViewChild('menu') menu: Menu | undefined;
  configService = inject(ConfigService);
  unsubscribe$ = new Subject();
  isDarkTheme: boolean | undefined;
  items: any[] = [];

  /**
   * @constructor
   */
  constructor() {
    this.initMenuItems();
    this.configService.theme$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((theme: string) => this.onThemeChange(theme));
  }

  /**
   * Listen for the scroll events to close the menu (workaround to avoid the menu to scroll with the content of the
   * page).
   */
  @HostListener('window:scroll') onScroll(): void {
    this.menu?.hide();
  }

  /**
   * Initialize the contextual menu with the default items.
   */
  initMenuItems(): void {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: this.isDarkTheme ? 'Dark Mode' : 'Light Mode',
            icon: this.isDarkTheme ? 'pi pi-moon' : 'pi pi-sun',
            title: 'Changer le mode',
            command: () => this.configService.setTheme$(!this.isDarkTheme ? DARK_THEME : LIGHT_THEME),
          },
          {
            label: 'English',
            icon: 'pi pi-globe',
            title: 'Changer le language',
            disabled: true,
            command: () => {
              console.log('Changer le language');
            },
          },
          {
            label: 'Télécharger',
            icon: 'pi pi-download',
            title: 'Télécharger le CV au format PDF',
            command: () => this.downloadCurriculumVitae(),
          },
        ],
      },
    ];
  }

  /**
   * Listen for the changes on the theme mode selection and apply the CSS theme according to it.
   *
   * @param theme the selected theme (light or dark)
   */
  onThemeChange(theme: string): void {
    if (theme === DARK_THEME) {
      this.isDarkTheme = true;
      document.documentElement.classList.add(DARK_THEME);
      localStorage.setItem(THEME_KEY, DARK_THEME);
      this.items[0].items[0].label = 'Light Mode';
      this.items[0].items[0].icon = 'pi pi-sun';
      return;
    }
    this.isDarkTheme = false;
    document.documentElement.classList.remove(DARK_THEME);
    localStorage.setItem(THEME_KEY, LIGHT_THEME);
    this.items[0].items[0].label = 'Dark Mode';
    this.items[0].items[0].icon = 'pi pi-moon';
  }

  /**
   * Change theme from dark to light and vise-versa
   */
  switchTheme(): void {
    this.isDarkTheme = !this.isDarkTheme!;
    const theme = this.isDarkTheme! ? LIGHT_THEME : DARK_THEME;
    localStorage.setItem(THEME_KEY, theme);
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
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
