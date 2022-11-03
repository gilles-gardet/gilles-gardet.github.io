import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PanelModule, SharedModule, TagModule, TranslateModule],
  selector: 'cv-hobbies',
  standalone: true,
  styleUrls: ['./hobbies.component.scss'],
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent {}
