import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
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
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { async, EMPTY, Observable, Subject, timer } from 'rxjs';

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
export class AppComponent implements OnInit, OnDestroy {
  private readonly translateService: TranslateService = inject(TranslateService);
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly configService: ConfigService = inject(ConfigService);
  protected unsubscribe$: Subject<unknown> = new Subject();
  protected language: string = EMPTY_STRING;
  protected isLoading$ = this.configService.loading$;

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
      takeUntil(this.unsubscribe$),
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
    if (isBlank(languageKey) || !languageKey.match(/en|fr/)) {
      const browserLang: string = this.translateService.getBrowserLang() ?? 'en';
      sessionLanguage = browserLang.match(/en|fr/) ? browserLang : 'en';
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

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next(EMPTY);
    this.unsubscribe$.unsubscribe();
  }

  protected readonly async = async;
}
