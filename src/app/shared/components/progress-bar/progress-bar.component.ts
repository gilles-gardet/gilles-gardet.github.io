import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input({ transform: numberAttribute, required: true }) value: number | undefined;
}
