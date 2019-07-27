import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./common/auth.guard";


const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: "login" },
    { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
    { path: "admin", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard] },
    { path: "worker", loadChildren: () => import('./modules/worker/worker.module').then(m => m.WorkerModule), canLoad: [AuthGuard] }
    // { path: "**", redirectTo: "login" }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}