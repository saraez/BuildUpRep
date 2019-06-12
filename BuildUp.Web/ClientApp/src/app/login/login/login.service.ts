import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLogin: boolean = false;

    login(): boolean {
        this.isLogin = true;
        return this.isLogin;
    }
}