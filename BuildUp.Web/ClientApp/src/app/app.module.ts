import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BldTranslateLoader } from './shared/bld-translate-loader';
import { GlobalErrorHandler } from './shared/error-handling/global-error-hander';
import { BldConfigService } from './shared/bld-config.service';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { BldUtilsService } from './shared/bld-utils';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: "login" },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: "worker", loadChildren: () => import('./worker/worker.module').then(m => m.WorkerModule) }
      // { path: "**", redirectTo: "login" }
    ]),
    SharedModule,
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
    BldConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (utils: BldUtilsService) => () => utils.initialize(environment.configFile),
      deps: [BldUtilsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
