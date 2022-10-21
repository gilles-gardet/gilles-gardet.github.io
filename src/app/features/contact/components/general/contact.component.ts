import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { ConfigService } from '@core/services/config.service';
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
import { MenuModule } from 'primeng/menu';

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
  selector: 'portfolio-contact',
  standalone: true,
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnDestroy {
  private _unsubscribe$ = new Subject();
  configService = inject(ConfigService);
  themeChecked: boolean | undefined;
  items: any[];

  /**
   * Constructor
   */
  constructor() {
    this.configService.theme$.pipe(takeUntil(this._unsubscribe$)).subscribe((theme: string) => {
      this.themeChecked = theme === 'light';
      document.body.classList.toggle('dark', !this.themeChecked!);
    });
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Dark Mode',
            icon: this.themeChecked ? 'pi pi-sun' : 'pi pi-moon',
            title: 'Changer le mode',
            disabled: true,
            command: () => {
              this.themeChecked = !this.themeChecked;
              this.items[0].items[0].icon = this.themeChecked ? 'pi pi-sun' : 'pi pi-moon';
            },
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
