import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BldConfigModel } from "../models/bld-config";

@Injectable()
export class BldConfigService {
  private config: BldConfigModel;
  constructor(private http: HttpClient) {
    
  }

  load(url: string):Promise<any> {
    return new Promise(resolve => {
      this.http.get(url).subscribe((config: BldConfigModel) => {
        this.config = config;
        resolve();
      });
    });
  }

  get configuration(): BldConfigModel {
    return this.config;
  }
}
