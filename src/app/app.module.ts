import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeComponent } from './resume/resume.component';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent, ResumeComponent, SidebarComponent],
  imports: [
    AppRoutingModule,
    AvatarModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    ChipModule,
    DividerModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    PanelModule,
    ProgressBarModule,
    TagModule,
    TimelineModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // empty
}
