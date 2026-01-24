import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'cv-progress-bar',
  styleUrl: './progress-bar.component.scss',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
  @Input({ transform: numberAttribute, required: true }) value: number | undefined;
}
