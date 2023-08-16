import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'cv-slide-button',
  styleUrls: ['./slide-button.component.scss'],
  templateUrl: './slide-button.component.html',
})
export class SlideButtonComponent {}
