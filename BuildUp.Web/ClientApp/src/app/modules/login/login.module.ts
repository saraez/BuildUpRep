import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MemberPanelComponent } from './member-panel/member-panel.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, MemberPanelComponent],
  imports: [
    CommonModule, MatInputModule, ReactiveFormsModule, LoginRoutingModule, TranslateModule
  ],
  exports: [LoginComponent, MemberPanelComponent]
})
export class LoginModule { }
