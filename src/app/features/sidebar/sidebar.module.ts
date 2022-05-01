import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@features/sidebar/components/sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent],
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
  exports: [SidebarComponent],
})
export class SidebarModule {}
