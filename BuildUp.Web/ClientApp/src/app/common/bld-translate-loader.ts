import { Injectable, Optional } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
declare var require: any;

// @Injectable()
export class BldTranslateLoader implements TranslateLoader {
  moreTranslations: any[];

  getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      this.http.get("./assets/i18n/" + lang + ".json").subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }

  constructor(private http: HttpClient,@Optional() moreTranslations?: Object[]) {
    this.moreTranslations = moreTranslations;
  }

  isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }

  mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return this.mergeDeep(target, ...sources);
  }
}
