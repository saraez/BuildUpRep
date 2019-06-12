import { Injectable } from "@angular/core";
import { Worker } from "../../shared/models/worker.model"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WorkersManagerService {
    workers: Worker[] = [
        { id: 1, firstName: "אחמד", lastName: "בן סעיד", nickName: "מכנים אותי שמואל", imgUrl: "images111.jpg", phone: "057-6543212" },
        { id: 1, firstName: "אבו עלא", lastName: "בן סעיד", nickName: "מכנים אותי דוד", imgUrl: "imgs222.jpg", phone: "057-6543212" },
        { id: 1, firstName: "נאסר", lastName: "בן סעיד", nickName: "מכנים אותי ישראל", imgUrl: "imgs333.jpg", phone: "057-6543212" },
        { id: 1, firstName: "מחמוד", lastName: "בן סעיד", nickName: "מכנים אותי יעקב", imgUrl: "images111.jpg", phone: "057-6543212" },
        { id: 1, firstName: "אחמד", lastName: "בן סעיד", nickName: "מכנים אותי שמואל", imgUrl: "imgs222.jpg", phone: "057-6543212" },
        { id: 1, firstName: "אבו עלא", lastName: "בן סעיד", nickName: "מכנים אותי דוד", imgUrl: "imgs333.jpg", phone: "057-6543212" },
        { id: 1, firstName: "נאסר", lastName: "בן סעיד", nickName: "מכנים אותי ישראל", imgUrl: "images111.jpg", phone: "057-6543212" },
        { id: 1, firstName: "מחמוד", lastName: "בן סעיד", nickName: "מכנים אותי יעקב", imgUrl: "imgs222.jpg", phone: "057-6543212" },
    ];

    getWorkers(term?: string): Observable<Worker[]> {
        return new Observable(observer => {
            if (term)
                observer.next(this.workers.filter(x => x.firstName.includes(term) || x.lastName.includes(term) ||
                    x.nickName.includes(term)));
            else
                observer.next(this.workers);
        })
    }
}