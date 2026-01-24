import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'cv-email',
  styleUrl: './email.component.scss',
  templateUrl: './email.component.html',
})
export class EmailComponent {
  label = input<string>('');
}
