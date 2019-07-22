import { Injectable } from "@angular/core";
import { Worker } from "../../models/workers/worker.model"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WorkersManagerService {
    workers: Worker[] = [
        { id: 1, userId: 2, firstName: "אחמד", lastName: "בן סעיד", nickName: "מכנים אותי שמואל", imgUrl: "images111.jpg", phone: "057-6543212" },
        { id: 2, userId: 3, firstName: "אבו עלא", lastName: "בן סעיד", nickName: "מכנים אותי דוד", imgUrl: "imgs222.jpg", phone: "057-6543212" },
        { id: 3, userId: 4, firstName: "נאסר", lastName: "בן סעיד", nickName: "מכנים אותי ישראל", imgUrl: "imgs333.jpg", phone: "057-6543212" },
        // { id: 4, userId: 5, firstName: "מחמוד", lastName: "בן סעיד", nickName: "מכנים אותי יעקב", imgUrl: "images111.jpg", phone: "057-6543212" },
        // { id: 5, userId: 6, firstName: "אחמד", lastName: "בן סעיד", nickName: "מכנים אותי שמואל", imgUrl: "imgs222.jpg", phone: "057-6543212" },
        // { id: 6, userId: 7, firstName: "אבו עלא", lastName: "בן סעיד", nickName: "מכנים אותי דוד", imgUrl: "imgs333.jpg", phone: "057-6543212" },
        // { id: 7, userId: 8, firstName: "נאסר", lastName: "בן סעיד", nickName: "מכנים אותי ישראל", imgUrl: "images111.jpg", phone: "057-6543212" },
        // { id: 8, userId: 9, firstName: "מחמוד", lastName: "בן סעיד", nickName: "מכנים אותי יעקב", imgUrl: "imgs222.jpg", phone: "057-6543212" },
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

    updateWorker(worker: Worker) {
        let index;
        let workerToUpdate = this.workers.find((x, i) => { index = i; return x.id == worker.id });
        if (workerToUpdate) {
            //workerToUpdate = worker;
            this.workers[index] = {...workerToUpdate, ...worker};
        }
    }

    addWorker(worker: Worker) {
        this.workers.push(worker);
    }
}