import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'portfolio-slide-button',
  styleUrls: ['./slide-button.component.scss'],
  templateUrl: './slide-button.component.html',
})
export class SlideButtonComponent {}
