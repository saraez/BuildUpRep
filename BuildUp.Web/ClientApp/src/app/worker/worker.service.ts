import { Injectable } from "@angular/core";
import { WorkState } from "../models/workers/work-state.enum";
import { Observable } from "rxjs";

@Injectable()
export class WorkerService {
    workState: WorkState = WorkState.NotInWork;

    startTheDay(): Observable<boolean> {
        //find location of the worker
        //send to db: time start
        //save flag of work state
        return new Observable(observer => {
            this.workState = WorkState.InWork;
            observer.next(true);
            observer.complete();
        })
    }

    constructor() {
        //get worker data from db
        //set the state by calculating
    }
}