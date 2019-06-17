import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSearchComponent } from './project-search/project-search.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "search" },
  { path: "search", component: ProjectSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsManagerRoutingModule { }
