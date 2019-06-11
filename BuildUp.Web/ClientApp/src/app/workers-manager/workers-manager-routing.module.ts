import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerSearchComponent } from './worker-search/worker-search.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "search"},
  {path: "search", component: WorkerSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersManagerRoutingModule { }
