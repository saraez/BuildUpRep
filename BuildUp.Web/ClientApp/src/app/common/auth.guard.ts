import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { LoginService } from '../modules/login/login.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    canLoad(route: Route): Promise<boolean> {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    async checkLogin(url: string) {
        if (this._loginService.isLoggedIn) {
            if (this._loginService.currentUser == null || this._loginService.currentUser == undefined) {
                await this._loginService.setCurrentUser();
            }
            return true;
        }

        // Store the attempted URL for redirecting
        this._loginService.redirectUrl = url;

        // Navigate to the login page with extras
        this._router.navigate(['/login']);
        return false;
    }

    constructor(private _loginService: LoginService, private _router: Router) {

    }
}