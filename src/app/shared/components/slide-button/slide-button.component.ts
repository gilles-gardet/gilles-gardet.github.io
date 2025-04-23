import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonModule, CommonModule, TranslocoDirective],
  selector: 'cv-slide-button',
  styleUrl: './slide-button.component.scss',
  templateUrl: './slide-button.component.html',
})
export class SlideButtonComponent {}
