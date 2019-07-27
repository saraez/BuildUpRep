import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BldTranslateLoader } from './common/bld-translate-loader';
import { GlobalErrorHandler } from './common/error-handling/global-error-hander';
import { BldConfigService } from './common/bld-config.service';
import { environment } from 'src/environments/environment';
import { BldUtilsService } from './common/bld-utils.service';
import { LoggingService } from './common/error-handling/logging.service';
import { BldHttpInterceptor, CSFRService } from './common/bld-http-interceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new BldTranslateLoader(http),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: APP_INITIALIZER,
      useFactory: (utils: BldUtilsService) => () => utils.initialize(environment.configFile),
      deps: [BldUtilsService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: BldHttpInterceptor, deps: [CSFRService, BldConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
