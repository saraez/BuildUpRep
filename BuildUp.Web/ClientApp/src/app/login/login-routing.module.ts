import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";


const LOGIN_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: "login" },
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(LOGIN_ROUTES)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}