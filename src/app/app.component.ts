import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostListener,
  inject,
  OnInit,
  Signal,
  ViewEncapsulation,
} from '@angular/core';
import { GeneralComponent } from '@features/general/components/general/general.component';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY_STRING, isBlank } from '@core/utils/string.utils';
import { ConfigService, LANGUAGE_KEY } from '@core/services/config.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    BlockUIModule,
    CommonModule,
    GeneralComponent,
    NgClass,
    NgIf,
    ProgressSpinnerModule,
    ResumeComponent,
    ScrollTopModule,
  ],
  selector: 'cv-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly translateService: TranslateService = inject(TranslateService);
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly configService: ConfigService = inject(ConfigService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  protected language: string = EMPTY_STRING;
  protected isLoading$: Signal<boolean> = this.configService.loading$;

  /**
   * @constructor
   */
  constructor() {
    this.translateService.addLangs(['fr', 'en']);
    this._initLanguagePreference();
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    const language$: Observable<unknown> = this.translateService.onLangChange.pipe(
      tap((): void => this.configService.setLoading$(true)),
      switchMap(() => timer(600)),
      tap((): void => this.configService.setLoading$(false)),
      takeUntilDestroyed(this.destroyRef),
    );
    language$.subscribe(() => this.changeDetectorRef.markForCheck());
  }

  /**
   * Listen for the page scroll in order to display a reading indicator.
   */
  @HostListener('window:scroll', ['$event'])
  onPageScroll(): void {
    const scrollTracker: HTMLElement | null = document.getElementById('scroll-tracker');
    const scrollDistance: number = document.documentElement.scrollTop || document.body.scrollTop;
    const progressWidth: number =
      (scrollDistance / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
    if (scrollTracker?.style) {
      scrollTracker.style.width = progressWidth + '%';
    }
  }

  /**
   * Define the navigation session language.
   */
  private _initLanguagePreference(): void {
    const languageKey: string = localStorage.getItem(LANGUAGE_KEY) ?? 'en';
    let sessionLanguage: string;
    if (isBlank(languageKey) || !/en|fr/.exec(languageKey)) {
      const browserLang: string = this.translateService.getBrowserLang() ?? 'en';
      sessionLanguage = /en|fr/.exec(browserLang) ? browserLang : 'en';
    } else {
      sessionLanguage = languageKey;
    }
    this._changeLanguage(sessionLanguage);
  }

  /**
   * .Change the current language by the given one.
   *
   * @param language the new language to be set
   */
  private _changeLanguage(language: string): void {
    this.translateService.use(language);
    this.language = language;
    if (localStorage.getItem(LANGUAGE_KEY) !== language) {
      localStorage.setItem(LANGUAGE_KEY, this.language);
    }
  }
}
