import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'bld-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  signIn() {
    if(this._loginService.login())
      this._router.navigate(["/admin"]);
  }

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    // if(this._loginService.isLogin)
    //   this._router.navigate(["/admin"]);
  }

}
