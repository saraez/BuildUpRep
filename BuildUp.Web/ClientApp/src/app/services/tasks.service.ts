import { Injectable } from "@angular/core";
import { Task } from "../models/tasks/task.model";


@Injectable({
    providedIn: 'root'
})
export class TasksService { 
    tasks: Task[] = [
        {id: 1, userId: 1, name: "task1" },
        {id: 2, userId: 1, name: "task2" },
        {id: 3, userId: 1, name: "task3" },
    ];
}