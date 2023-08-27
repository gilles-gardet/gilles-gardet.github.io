import { ChangeDetectionStrategy, Component, HostListener, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfigService, DARK_THEME, LANGUAGE_KEY, LIGHT_THEME, THEME_KEY } from '@core/services/config.service';
import { takeUntil, tap } from 'rxjs/operators';
import { EMPTY, forkJoin, Observable, Subject } from "rxjs";
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from '@shared/shared.module';
import { Menu, MenuModule } from 'primeng/menu';
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";

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
    TranslateModule,
  ],
  selector: 'cv-general',
  standalone: true,
  styleUrls: ['./general.component.scss'],
  templateUrl: './general.component.html',
})
export class GeneralComponent implements OnInit, OnDestroy {
  @ViewChild('menu') menu: Menu | undefined;
  configService: ConfigService = inject(ConfigService);
  translateService: TranslateService = inject(TranslateService);
  unsubscribe$: Subject<unknown> = new Subject();
  isDarkTheme: boolean | undefined;
  items: any[] = [];

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
    this._initMenuItems();
    const language$: Observable<LangChangeEvent> = this.translateService.onLangChange.pipe(
      tap(() => this._initMenuItems()),
      takeUntil(this.unsubscribe$),
    );
    const theme$: Observable<string> = this.configService.theme$.pipe(
      tap((theme: string) => this.onThemeChange(theme)),
      takeUntil(this.unsubscribe$),
    );
    forkJoin([language$, theme$]).subscribe();
  }

  /**
   * Initialize the contextual menu with the default items.
   */
  private _initMenuItems(): void {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: this.translateService.instant('cv.contact.menu.items.mode.label', {
              value: this.translateService.instant(this.isDarkTheme ? 'cv.mode.label.dark' : 'cv.mode.label.light'),
            }),
            icon: this.isDarkTheme ? 'pi pi-moon' : 'pi pi-sun',
            title: this.translateService.instant('cv.contact.menu.items.mode.title'),
            command: () => this.configService.setTheme$(!this.isDarkTheme ? DARK_THEME : LIGHT_THEME),
          },
          {
            label: this.translateService.instant('cv.contact.menu.items.language.label'),
            icon: 'pi pi-globe',
            title: this.translateService.instant('cv.contact.menu.items.language.title'),
            command: () => this.changeLanguage(this.translateService.currentLang === 'fr' ? 'en' : 'fr'),
          },
          {
            label: this.translateService.instant('cv.contact.menu.items.download.label'),
            icon: 'pi pi-download',
            title: this.translateService.instant('cv.contact.menu.items.download.title'),
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
    this.translateService.use(language);
    if (localStorage.getItem(LANGUAGE_KEY) !== language) {
      localStorage.setItem(LANGUAGE_KEY, language);
    }
  }

  /**
   * Listen for the changes on the theme mode selection and apply the CSS theme according to it.
   *
   * @param theme the selected theme (light or dark)
   */
  onThemeChange(theme: string): void {
    if (theme === DARK_THEME) {
      this._setDarkTheme();
      return;
    }
    this._setLightTheme();
  }

  /**
   * Set the light theme, chnage its corresponding menu item and store it as a local browser value.
   */
  private _setLightTheme(): void {
    this.isDarkTheme = false;
    document.documentElement.classList.remove(DARK_THEME);
    localStorage.setItem(THEME_KEY, LIGHT_THEME);
    this.items[0].items[0].label = this.translateService.instant('cv.contact.menu.items.mode.label', {
      value: this.translateService.instant('cv.mode.label.dark'),
    });
    this.items[0].items[0].icon = 'pi pi-moon';
  }

  /**
   * Set the dark theme, chnage its corresponding menu item and store it as a local browser value.
   */
  private _setDarkTheme(): void {
    this.isDarkTheme = true;
    document.documentElement.classList.add(DARK_THEME);
    localStorage.setItem(THEME_KEY, DARK_THEME);
    this.items[0].items[0].label = this.translateService.instant('cv.contact.menu.items.mode.label', {
      value: this.translateService.instant('cv.mode.label.light'),
    });
    this.items[0].items[0].icon = 'pi pi-sun';
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
    this.unsubscribe$.next(EMPTY);
    this.unsubscribe$.unsubscribe();
  }
}
