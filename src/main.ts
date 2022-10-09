import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from '@environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '@shared/shared.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(CoreModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(MarkdownModule.forRoot()),
    importProvidersFrom(SharedModule),
  ],
}).catch((err) => console.error(err));
