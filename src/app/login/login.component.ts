import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { LoginUser } from 'src/app/model/login';
import { catchError, filter, find, map, tap } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // TODO　サービス、あるいはstoreに移管予定
  hide = true;
  show = false;
  users: LoginUser[] = [];
  //　ここまで

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  //TODO エラーサービスに移管
  getErrorMessage(msg: string) {
    if (this.email.hasError('required') || this.password.hasError('required')) {
      console.log('required');
      return msg;
    } else if (this.email.hasError('email')) {
      return this.loginForm.hasError('email') ? msg : '';
    } else {
      return '';
    }
  }
  //サービスに移管

  login() {
    this.loginService
      .chkLoginUser()
      .pipe(
        map((_) => _.filter((_) => _.email === this.email.value)),
        map((_) => _.filter((_) => _.password === this.password.value)),
        map((_) => _.length === 0)
      )
      .subscribe((_) => {
        if (_) {
          this.show = false;
          console.log('warn');
        } else {
          this.router.navigate(['/top']);
        }
      });
  }
}
