import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BldConfigService } from './bld-config.service';

@Injectable()
export class BldHttpInterceptor implements HttpInterceptor {
    constructor(private _csrfService: CSFRService, public configService: BldConfigService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes("http") || req.url.includes(this.configService.configuration.webApiAddress)) {
            const headerName = 'XSRF-TOKEN';
            let token = this._csrfService.token;
            if (token !== undefined && token !== null) {
                req = req.clone({ headers: req.headers.set(headerName, token) });
            }
        }
        return next.handle(req);
    }
}

@Injectable({
    providedIn: 'root'
})
export class CSFRService {
    constructor(private _http: HttpClient, public configService: BldConfigService) { }

    token: string;

    getToken(): Promise<any> {
        return new Promise(resolve => {
            if (this.configService.configuration.isCSRFActive) {
                this._http.get<any>(this.configService.configuration.webApiAddress + '/Security/GetAntiForgeryToken', { withCredentials: true }).subscribe(data => {
                    this.token = data.antiForgeryToken;
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
}