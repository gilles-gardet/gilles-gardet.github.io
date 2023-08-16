import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SlideButtonComponent],
  imports: [ButtonModule, CommonModule, TranslateModule],
  exports: [CommonModule, SlideButtonComponent],
})
export class SharedModule {}
