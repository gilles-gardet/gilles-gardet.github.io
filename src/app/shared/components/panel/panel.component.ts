import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  selector: 'cv-panel',
  styleUrl: './panel.component.scss',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  @Input({ required: true }) header: string | undefined;
}
