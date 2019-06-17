import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const ADMIN_ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: AdminHomeComponent },
  { path: "projects", loadChildren: () => import('./projects-manager/projects-manager.module').then(m => m.ProjectsManagerModule) },
  { path: "workers-manager", loadChildren: () => import('./workers-manager/workers-manager.module').then(m => m.WorkersManagerModule) }
]

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(ADMIN_ROUTES)
  ]
})
export class AdminModule { }
