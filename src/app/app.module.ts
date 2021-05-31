import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeComponent } from './resume/resume.component';
import {CardModule} from "primeng/card";
import {TimelineModule} from "primeng/timeline";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ResumeComponent
  ],
  imports: [
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CardModule,
    TimelineModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // empty
}
