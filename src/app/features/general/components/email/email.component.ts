import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'cv-email',
  styleUrl: './email.component.scss',
  templateUrl: './email.component.html',
})
export class EmailComponent {
  label = input<string>('');
}
