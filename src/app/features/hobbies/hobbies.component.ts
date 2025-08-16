import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { PanelComponent } from '@shared/components/panel/panel.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PanelComponent, TranslocoDirective],
  selector: 'cv-hobbies',
  styleUrl: './hobbies.component.scss',
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent {
  protected readonly tags: string[] = [
    'cv.hobbies.content.dev',
    'cv.hobbies.content.homelab',
    'cv.hobbies.content.movie',
    'cv.hobbies.content.basket',
    'cv.hobbies.content.running',
  ];
}
