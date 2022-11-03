import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { GeneralComponent } from '@features/general/components/general/general.component';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NgClass, NgIf } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EMPTY_STRING, isBlank } from '@core/utils/string.utils';
import { LANGUAGE_KEY } from '@core/services/config.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [GeneralComponent, NgClass, ProgressSpinnerModule, ResumeComponent, ScrollTopModule, NgIf, BlockUIModule],
  selector: 'cv-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  translateService = inject(TranslateService);
  changeDetectorRef = inject(ChangeDetectorRef);
  unsubscribe$ = new Subject();
  language = EMPTY_STRING;
  isLoading = false;

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
  ngOnInit() {
    const language$ = this.translateService.onLangChange.pipe(
      takeUntil(this.unsubscribe$),
      tap(() => (this.isLoading = true)),
      switchMap(() => timer(600)),
      tap(() => (this.isLoading = false))
    );
    language$.subscribe(() => this.changeDetectorRef.detectChanges());
  }

  /**
   * Listen for the page scroll in order to display a reading indicator.
   */
  @HostListener('window:scroll', ['$event'])
  onPageScroll(): void {
    const scrollTracker: any = document.getElementById('scroll-tracker');
    let scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    let progressWidth = (scrollDistance / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
    scrollTracker!.style.width = progressWidth + '%';
  }

  /**
   * Define the navigation session language.
   */
  private _initLanguagePreference(): void {
    let sessionLanguage: string;
    if (isBlank(localStorage.getItem(LANGUAGE_KEY)!) || !localStorage.getItem(LANGUAGE_KEY)!.match(/en|fr/)) {
      const browserLang: string = this.translateService.getBrowserLang()!;
      sessionLanguage = browserLang.match(/en|fr/) ? browserLang : 'fr';
    } else {
      sessionLanguage = localStorage.getItem(LANGUAGE_KEY)!;
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
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
