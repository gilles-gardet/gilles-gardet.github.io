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
import { ResumeModule } from '@features/resume/resume.module';
import { ContactComponent } from '@features/contact/components/general/contact.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ContactComponent,
    CoreModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ResumeModule,
    ScrollTopModule,
    SharedModule,
  ],
})
export class AppModule {}
