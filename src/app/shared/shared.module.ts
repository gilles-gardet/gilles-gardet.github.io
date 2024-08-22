import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { ButtonModule } from 'primeng/button';
import { TranslocoDirective } from '@jsverse/transloco';

@NgModule({
  declarations: [SlideButtonComponent],
  imports: [ButtonModule, CommonModule, TranslocoDirective],
  exports: [CommonModule, SlideButtonComponent],
})
export class SharedModule {}
