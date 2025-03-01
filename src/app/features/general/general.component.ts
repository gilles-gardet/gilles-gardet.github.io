import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { ConfigService, DARK_THEME, LANGUAGE_KEY, LIGHT_THEME, THEME_KEY } from '@core/services/config.service';
import { tap } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { environment } from '@environments/environment';
import { MissionService } from '@core/services/mission.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { combineLatest } from 'rxjs';
import { Contact } from '@core/models/contact.model';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { EmailComponent } from '@features/general/components/email/email.component';
import { SkillService } from '@core/services/skill.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvatarComponent,
    ButtonModule,
    CardModule,
    EmailComponent,
    FormsModule,
    InputSwitchModule,
    MenuModule,
    RippleModule,
    TooltipModule,
    TranslocoDirective,
  ],
  selector: 'cv-general',
  standalone: true,
  styleUrls: ['./general.component.scss'],
  templateUrl: './general.component.html',
})
export class GeneralComponent implements OnInit {
  private readonly configService: ConfigService = inject(ConfigService);
  private readonly translocoService: TranslocoService = inject(TranslocoService);
  private readonly missionService: MissionService = inject(MissionService);
  private readonly skillService: SkillService = inject(SkillService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  protected isDarkTheme: boolean | undefined;
  protected menuItems: MenuItem[] = [];

  @ViewChild('menu') menu: Menu | undefined;

  /**
   * Listen for the scroll events to close the menu (workaround to avoid the menu to scroll with the content of the
   * page).
   */
  @HostListener('window:scroll') onScroll(): void {
    this.menu?.hide();
  }

  /**
   * @inheritDoc
   */
  ngOnInit() {
    const contactTranslatedObject$ = this.translocoService
      .selectTranslateObject('cv.contact')
      .pipe(tap((contactTranslatedObject) => this._setMenuItems(contactTranslatedObject)));
    combineLatest([contactTranslatedObject$, this.configService.theme$])
      .pipe(
        tap(([contactTranslatedObject, theme]) => this.onThemeChange(contactTranslatedObject, theme)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  /**
   * Initialize the contextual menu with the default items.
   *
   * @param contact the contact translated object
   */
  private _setMenuItems(contact: Contact): void {
    this.menuItems = [
      {
        label: 'Menu',
        items: [
          {
            label: this.isDarkTheme ? contact.menu.items.mode.dark : contact.menu.items.mode.light,
            icon: this.isDarkTheme ? 'pi pi-moon' : 'pi pi-sun',
            title: contact.menu.items.mode.title,
            command: () =>
              this.isDarkTheme ? this.configService.setTheme$(LIGHT_THEME) : this.configService.setTheme$(DARK_THEME),
          },
          {
            label: contact.menu.items.language.label,
            icon: 'pi pi-globe',
            title: contact.menu.items.language.title,
            command: () => this.changeLanguage(this.translocoService.getActiveLang() === 'fr' ? 'en' : 'fr'),
          },
          {
            label: contact.menu.items.download.label,
            icon: 'pi pi-download',
            title: contact.menu.items.download.title,
            command: () => this._downloadCurriculumVitae(),
          },
        ],
      },
    ];
  }

  /**
   * .Change the current language by the given one.
   *
   * @param language the new language to be set
   */
  changeLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    if (localStorage.getItem(LANGUAGE_KEY) !== language) {
      localStorage.setItem(LANGUAGE_KEY, language);
    }
    this.missionService.clearCache();
    this.skillService.clearCache();
  }

  /**
   * Listen for the changes on the theme mode selection and apply the CSS theme according to it.
   *
   * @param theme the selected theme (light or dark)
   * @param contact the contact translated object
   */
  onThemeChange(contact: Contact, theme: string): void {
    if (theme === DARK_THEME) {
      this._setDarkTheme(contact);
      return;
    }
    this._setLightTheme(contact);
  }

  /**
   * Set the light theme, chnage its corresponding menu item and store it as a local browser value.
   *
   * @param contact the contact translated object
   */
  private _setLightTheme(contact: Contact): void {
    this.isDarkTheme = false;
    document.documentElement.classList.remove(DARK_THEME);
    localStorage.setItem(THEME_KEY, LIGHT_THEME);
    const childMenuItem: MenuItem = this._extractModeMenuItem();
    childMenuItem.label = contact.menu.items.mode.dark;
    childMenuItem.icon = 'pi pi-moon';
  }

  /**
   * Extract the first child menu item (dark/light mode) from the menu items.
   *
   * @return the child menu item as a {@link MenuItem}
   */
  private _extractModeMenuItem(): MenuItem {
    if (!this.menuItems || this.menuItems.length === 0) {
      throw new Error('The menu items are not initialized');
    }
    const firstMenuItem: MenuItem = this.menuItems[0];
    if (!firstMenuItem?.items || firstMenuItem.items.length === 0) {
      throw new Error('The menu items are not properly initialized');
    }
    const childMenuItem: MenuItem = firstMenuItem.items[0];
    if (!childMenuItem) {
      throw new Error('Child menu item is not initialized');
    }
    return childMenuItem;
  }

  /**
   * Set the dark theme, chnage its corresponding menu item and store it as a local browser value.
   *
   * @param contact the contact translated object
   */
  private _setDarkTheme(contact: Contact): void {
    this.isDarkTheme = true;
    document.documentElement.classList.add(DARK_THEME);
    localStorage.setItem(THEME_KEY, DARK_THEME);
    const childMenuItem: MenuItem = this._extractModeMenuItem();
    childMenuItem.label = contact.menu.items.mode.light;
    childMenuItem.icon = 'pi pi-sun';
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
  private _downloadCurriculumVitae(): void {
    const anchor: HTMLAnchorElement = document.createElement('a');
    anchor.href = `${environment.cdnUrl}/src/assets/pdf/CV_GARDET_Gilles.pdf`;
    anchor.download = 'gardet_gilles.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
