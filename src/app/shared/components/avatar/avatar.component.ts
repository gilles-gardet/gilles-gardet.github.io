import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
  selector: 'cv-avatar',
  styleUrl: './avatar.component.scss',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  @Input({ required: true }) avatar = '';
}
