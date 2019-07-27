import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";
import { MemberType } from "../../models/member-type.enum";
import { bldTokenKey } from "../../common/bld-constans";


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    get isLoggedIn(): boolean {
        return this.token != null;
    };

    redirectUrl: string;

    users: User[] = [
        { id: 1, userName: "1", email: "1", password: "1", memberType: MemberType.Admin },
        { id: 2, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 3, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 4, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 5, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 6, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 7, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 8, userName: "2", email: "2", password: "2", memberType: MemberType.Worker },
        { id: 9, userName: "2", email: "2", password: "2", memberType: MemberType.Worker }
    ]


    getUser(userName: string, password: string): Promise<User> {
        return new Promise((res, rej) => {
            //todo get user from http db
            var user = this.users.filter(x => x.userName == userName && x.password == password);
            if (user.length > 0) {
                res(user[0])
            }
            else rej("user not found");
        });
    }

    setCurrentUser(): Promise<User> {
        return new Promise((res, rej) => {
            //todo get user by token from http db
            var user = this.users.filter(x => x.userName == this.token);
            if (user.length > 0) {
                this.currentUser = user[0];
                res();
            }
            else rej("user not found");
        });
    }

    currentUser: User;

    private _token: string;
    get token(): string | null {
        if (this._token == null || this._token == undefined) {
            this._token = sessionStorage.getItem(bldTokenKey);
        }
        return this._token;
    }
    set token(value: string) {
        this._token = value;
        sessionStorage.setItem(bldTokenKey, value);
    }

    async login(userName: string, password: string): Promise<boolean> {
        console.log("login");
        this.currentUser = await this.getUser(userName, password);
        return await this.getToken();
    }

    getToken(): Promise<any> {
        console.log("get token");
        return new Promise(resolve => {
            this.token = this.currentUser.userName;
            resolve();
            //get new token from server
            //server will save this token to user
            // this._http.get<any>(this.configService.configuration.webApiAddress + '/Security/GetAntiForgeryToken', { withCredentials: true }).subscribe(data => {
            //     this.token = data.antiForgeryToken;
            //     resolve();
            // });
        });
    }

    logout(): void {
        this.token = null;
        sessionStorage.removeItem(bldTokenKey);
    }
}