import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MemberType } from '../../models/member-type.enum';

@Component({
  selector: 'bld-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  isLoginFaild: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  signIn() {
    this.isLoginFaild = false;
    if (this.loginForm.valid) {
      const userName = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      this._loginService.login(userName, password).then(isLogin => {
        if (isLogin) {
          if (this._loginService.currentUser.memberType == MemberType.Admin)
            this._router.navigate(["/admin"]);
          if (this._loginService.currentUser.memberType == MemberType.Worker)
            this._router.navigate(["/worker"]);
        }
        else
          this.isLoginFaild = true;
      })
    }
  }

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    // if(this._loginService.isLogin)
    //   this._router.navigate(["/admin"]);
  }

}
