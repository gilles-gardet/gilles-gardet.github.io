import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '@features/contact/components/general/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    CommonModule,
    FormsModule,
    InputSwitchModule,
    RippleModule,
    TooltipModule,
  ],
  exports: [ContactComponent],
})
export class ContactModule {}
