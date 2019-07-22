import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkerHomeComponent } from "./worker-home/worker-home.component";
import { WorkerTasksListComponent } from "./worker-tasks-list/worker-tasks-list.component";


const WORKER_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: "home" },
    { path: 'home', component: WorkerHomeComponent },
    { path: 'tasks', component: WorkerTasksListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(WORKER_ROUTES)],
    exports: [RouterModule]
})
export class WorkerRoutingModule {

}