import { Injectable, Inject } from '@angular/core';
import { loggingRequest } from './logging-request'
import { RequestOptions, RequestMethod, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { BldConfigService } from '../bld-config.service';

@Injectable({
    providedIn: "root"
})
export class LoggingService {
    constructor(private http: HttpClient, private configService:BldConfigService) {

    }

    log(loggingRequest: loggingRequest): void {
        if (this.configService.configuration.isWriteUIErrorsToLog) {
            let url = this.configService.configuration.webApiAddress + '/' + this.configService.configuration.logApiFunction;
            let response: any;
            let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            this.http.post(url, JSON.stringify(loggingRequest), { headers: headers, withCredentials: true })
                .subscribe(() => { console.log(response) });
        }
        // this.messageService.showMessage("Texts.error", "Texts.errorMessage", null, MessageType.Error).subscribe((result) => {

        // });
    }
}
