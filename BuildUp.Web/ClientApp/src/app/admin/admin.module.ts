import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const ADMIN_ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "workers-manager"},
  { path: "workers-manager", loadChildren : () => import('./workers-manager/workers-manager.module').then(m => m.WorkersManagerModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(ADMIN_ROUTES)
  ]
})
export class AdminModule { }
