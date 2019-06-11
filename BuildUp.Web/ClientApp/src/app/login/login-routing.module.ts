import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const LOGIN_ROUTES: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(LOGIN_ROUTES)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}