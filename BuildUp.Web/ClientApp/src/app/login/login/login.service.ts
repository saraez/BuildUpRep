import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../shared/models/user.model";
import { MemberType } from "../../shared/models/member-type.enum";


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLogin: boolean = false;

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


    getUser(userName: string, password: string): Observable<User> {
        return new Observable(observer => {
            var user = this.users.filter(x => x.userName == userName && x.password == password);
            if (user.length > 0) {
                observer.next(user[0])
                observer.complete();
            }
            observer.error("user not found");
        });
    }

    currentUser: User;

    login(userName: string, password: string): Promise<boolean> {
        return new Promise((res, rej) => {
            this.getUser(userName, password).subscribe(user => {
                this.currentUser = user;
                this.isLogin = true;
                res(true);
            },
            err => {
                res(false);
            })
        })
    }
}