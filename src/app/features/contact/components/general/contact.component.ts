import { Component, inject, OnDestroy } from "@angular/core";
import { ConfigService } from '@core/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    CommonModule,
    FormsModule,
    InputSwitchModule,
    RippleModule,
    TooltipModule,
  ],
})
export class ContactComponent implements OnDestroy {
  private _unsubscribe$ = new Subject();
  configService = inject(ConfigService);
  themeChecked: boolean | undefined;

  /**
   * Constructor
   */
  constructor() {
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
