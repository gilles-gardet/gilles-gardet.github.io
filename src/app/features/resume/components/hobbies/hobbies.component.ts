import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { TranslocoDirective } from '@jsverse/transloco';
import { PanelComponent } from '@shared/components/panel/panel.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PanelComponent, TagModule, TranslocoDirective],
  selector: 'cv-hobbies',
  standalone: true,
  styleUrls: ['./hobbies.component.scss'],
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent {}
