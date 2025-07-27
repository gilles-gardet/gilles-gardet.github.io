import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/models/menu-item.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  selector: 'cv-menu',
  styleUrl: './menu.component.scss',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() model: MenuItem[] = [];
  @Input() popup = false;
  @Input() autoZIndex = true;
  @Input() appendTo = 'body';

  @ViewChild('menuContainer') menuContainer: ElementRef | undefined;

  visible = false;
  private targetElement: HTMLElement | null = null;

  /**
   * Handle click outside menu to close it
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.visible && this.menuContainer && this.targetElement) {
      const target = event.target as HTMLElement;
      const menuElement = this.menuContainer.nativeElement;
      if (!menuElement.contains(target) && !this.targetElement.contains(target)) {
        this.hide();
      }
    }
  }

  /**
   * Watch for "escape key" and "window resize" events to close the menu.
   */
  @HostListener('document:keydown.escape')
  @HostListener('window:resize')
  onEvent(): void {
    if (this.visible) {
      this.hide();
    }
  }

  /**
   * Toggle menu visibility.
   */
  toggle(event: Event): void {
    this.targetElement = event.target as HTMLElement;
    if (this.visible) {
      this.hide();
      return;
    }
    this.show(event);
  }

  /**
   * Show menu at target position
   */
  show(event: Event): void {
    this.visible = true;
    this.targetElement = event.target as HTMLElement;
    setTimeout((): void => this.positionMenu(), 0);
  }

  /**
   * Hide menu
   */
  hide(): void {
    this.visible = false;
    this.targetElement = null;
  }

  /**
   * Position menu relative to target element
   */
  private positionMenu(): void {
    if (!this.menuContainer || !this.targetElement) {
      return;
    }
    const menuElement = this.menuContainer.nativeElement;
    const targetRect = this.targetElement.getBoundingClientRect();
    const menuRect = menuElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    // calculate position
    let left: number = targetRect.left;
    let top: number = targetRect.bottom + 4;
    // adjust if menu would overflow viewport
    if (left + menuRect.width > viewportWidth) {
      left = targetRect.right - menuRect.width;
    }
    if (top + menuRect.height > viewportHeight) {
      top = targetRect.top - menuRect.height - 4;
    }
    menuElement.style.left = `${left}px`;
    menuElement.style.top = `${top}px`;
  }

  /**
   * Handle menu item click
   */
  onItemClick(item: MenuItem): void {
    if (item.disabled) return;
    if (item.command) {
      item.command();
    }
    this.hide();
  }

  /**
   * Track function for menu items
   */
  trackByIndex(index: number): number {
    return index;
  }
}
