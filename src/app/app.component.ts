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
import { GeneralComponent } from '@features/general/general.component';
import { ResumeComponent } from '@features/resume/resume.component';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollTopComponent } from '@shared/components/scroll-top/scroll-top.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { AppState } from '@state/state';
import { Store } from '@ngrx/store';
import { selectLanguage, selectLoader } from '@state/language/language.selector';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, GeneralComponent, ResumeComponent, ScrollTopComponent, SpinnerComponent],
  selector: 'cv-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly store: Store<AppState> = inject(Store);
  protected readonly isLoading: Signal<boolean>;

  /**
   * @constructor
   */
  constructor() {
    this.isLoading = this.store.selectSignal(selectLoader);
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.store
      .select(selectLanguage)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => this.changeDetectorRef.markForCheck());
  }

  /**
   * Listen for the page scroll in order to display a reading indicator.s
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
}
