import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, TranslocoDirective],
  selector: 'cv-dialog',
  styleUrl: './dialog.component.scss',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnChanges {
  @Input() visible = false;
  @Input() header = '';
  @Input() modal = true;
  @Input() style: Record<string, string> = {};
  @Input() closeOnEscape = true;
  @Input() dismissableMask = true;
  @Input() blockScroll = true;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() hide = new EventEmitter<void>();

  @ContentChild('header') headerTemplate: TemplateRef<unknown> | undefined;
  @ContentChild('content') contentTemplate: TemplateRef<unknown> | undefined;

  private originalBodyOverflow = '';

  /**
   * @inheritDoc
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.blockScroll) {
      if (changes['visible'].currentValue) {
        this.enableScrollBlock();
      } else {
        this.disableScrollBlock();
      }
    }
  }

  /**
   * Handle escape key press to close dialog
   */
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.visible && this.closeOnEscape) {
      this.hideDialog();
      event.preventDefault();
    }
  }

  /**
   * Handle mask click to close dialog
   */
  onMaskClick(): void {
    if (this.dismissableMask) {
      this.hideDialog();
    }
  }

  /**
   * Close dialog and emit events
   */
  hideDialog(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.hide.emit();
    
    if (this.blockScroll) {
      this.disableScrollBlock();
    }
  }

  /**
   * Get dialog container styles
   */
  getDialogStyles(): Record<string, string> {
    return this.style || {};
  }

  /**
   * Enable scroll blocking on body element
   */
  private enableScrollBlock(): void {
    if (typeof document !== 'undefined') {
      this.originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Disable scroll blocking on body element
   */
  private disableScrollBlock(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.originalBodyOverflow;
    }
  }
}