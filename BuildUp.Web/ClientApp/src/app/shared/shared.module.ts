import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";

import { LoggingService } from "./error-handling/logging.service";
import { BldConfigService } from "./bld-config.service";
import { BldHttpInterceptor, CSFRService } from './bld-http-interceptor';
import { BldUtilsService } from './bld-utils';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    { provide: HTTP_INTERCEPTORS, useClass: BldHttpInterceptor, deps: [CSFRService, BldConfigService], multi: true }
  ]
})
export class SharedModule { }
