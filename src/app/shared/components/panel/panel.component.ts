import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  selector: 'cv-panel',
  standalone: true,
  styleUrl: './panel.component.scss',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  @Input({ required: true }) header: string | undefined;
}
