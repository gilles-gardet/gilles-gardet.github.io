import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'cv-progress-bar',
  styleUrl: './progress-bar.component.scss',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
  @Input({ transform: numberAttribute, required: true }) value: number | undefined;
}
