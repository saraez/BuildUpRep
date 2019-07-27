import { TranslateService } from '@ngx-translate/core';
import { Injector, Injectable } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { BldConfigService } from './bld-config.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { CSFRService } from './bld-http-interceptor';
import { BldLanguage } from '../models/bld-language';

// import { environment } from "environments/environment";

@Injectable({ providedIn: 'root' })
export class BldUtilsService {
  constructor(
    private translate: TranslateService,
    private injector: Injector,
    private config: BldConfigService,
    private mojCSRF: CSFRService
  ) {}

  public configurationReady: Subject<any> = new Subject<any>();

  public getElementName(element: any /*ElementBase<any>*/): string {
    return element.labelTextKey ? element.labelTextKey : 'Texts.' + element.identifier;
  }

  async initialize(configFile: string): Promise<any> {
    await this.config.load(configFile).then(() => {
        this.configurationReady.next(true);
      });
    return Promise.all([
      this.loadTranslations()
      //this.mojCSRF.getToken()
    ]);
  }

  currentLang: BldLanguage = new BldLanguage();

  changeLang(lang: BldLanguage) {
    sessionStorage.setItem('mojLang', JSON.stringify(lang));
    window.location.reload();
  }

  public loadTranslations(langToSet?: BldLanguage): Promise<any> {
    let lang: BldLanguage;
    if (langToSet) {
      lang = langToSet;
      sessionStorage.setItem('mojLang', JSON.stringify(langToSet));
    } else {
      let storedLang = JSON.parse(sessionStorage.getItem('mojLang')) || new BldLanguage();
      lang = storedLang;
    }
    this.currentLang = lang;
    const locationInitialized = this.injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    return new Promise(resolve => {
      locationInitialized.then(() => {
        this.translate.setDefaultLang(this.currentLang.code);
        this.translate.use(this.currentLang.code).subscribe(
          () => {
            console.info(`Successfully initialized '${this.currentLang.code}' language.`);
          },
          err => {
            console.error(`Problem with '${this.currentLang.code}' language initialization.'`);
          },
          () => {
            resolve(null);
          }
        );
      });
    });
  }

  stringFormat(str: string, args: any[]) {
    var theString = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var regEx = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
      theString = theString.replace(regEx, arguments[i]);
    }
    return theString;
  }

  htmlEscape(str) {
    return str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace('null', '');
  }

  getStringFromObjectArray(fieldName, objectArray): string {
    if (!objectArray) {
      return '';
    }

    let stringValue: string = '';

    for (let i = 0; i < objectArray.length; i++) {
      let value = '';
      if (fieldName && objectArray[i].hasOwnProperty(fieldName)) {
        value = objectArray[i][fieldName];
      } else if (!fieldName && typeof (objectArray[i] == 'string')) {
        //array of strings
        value = objectArray[i];
      }
      if (value) {
        if (stringValue.length > 0) {
          stringValue = stringValue + ', ';
        }
        stringValue = stringValue + value;
      }
    }
    return stringValue;
  }
}
