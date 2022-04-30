import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { SidebarModule } from '@features/sidebar/sidebar.module';
import { ResumeModule } from '@features/resume/resume.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ResumeModule,
    ScrollTopModule,
    SharedModule,
    SidebarModule,
  ],
})
export class AppModule {}
