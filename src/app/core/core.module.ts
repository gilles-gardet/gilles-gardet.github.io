import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '@core/services/config.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({ providedIn: 'root' })
class HttpClientProxy extends HttpClient {

  /**
   * @constructor
   * @param {HttpBackend} httpBackend
   */
  constructor(httpBackend: HttpBackend) {
    // override the HTTP client using HTTP backend in order to avoid being delayed by interceptor, which creates errors
    // while loading i18n files
    super(httpBackend);
  }
}

@NgModule({
  exports: [TranslateModule],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient, '/i18n/', '.json'),
        deps: [HttpClientProxy],
      },
    }),
  ],
  providers: [ConfigService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
}
