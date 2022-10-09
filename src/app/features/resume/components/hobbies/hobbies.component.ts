import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'portfolio-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  standalone: true,
  imports: [PanelModule, SharedModule, TagModule],
})
export class HobbiesComponent {}
