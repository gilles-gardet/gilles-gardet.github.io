import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'cv-scroll-top',
  styleUrl: './scroll-top.component.scss',
  templateUrl: './scroll-top.component.html',
})
export class ScrollTopComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly window: Window | null;
  protected visible = false;
  protected documentScrollListener?: VoidFunction;

  /**
   * @constructor
   */
  constructor() {
    this.window = this.document.defaultView;
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    this.bindDocumentScrollListener();
  }

  /**
   * Smoothly scroll to the top of the page.
   */
  protected onClick(): void {
    this.window?.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Return a flag when the visibility of the scroll top button should be toggled.
   *
   * @param scrollY the current scroll position
   */
  private checkVisibility(scrollY: number): void {
    this.visible = scrollY > 400;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Bind the document scroll listener to check the visibility of the scroll top button.
   */
  private bindDocumentScrollListener(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.documentScrollListener = this.renderer.listen(this.window, 'scroll', (): void => {
      const windowScrollTop: number = this.getWindowScrollTop();
      this.checkVisibility(windowScrollTop);
    });
  }

  /**
   * Return the current scroll position.
   */
  private getWindowScrollTop(): number {
    const element: Element = document.documentElement;
    return (window.scrollY || element.scrollTop) - (element.clientTop || 0);
  }

  /**
   * Unbind the document scroll listener.
   */
  private unbindDocumentScrollListener(): void {
    if (!this.documentScrollListener) {
      return;
    }
    this.documentScrollListener();
    this.documentScrollListener = undefined;
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this.unbindDocumentScrollListener();
  }
}
