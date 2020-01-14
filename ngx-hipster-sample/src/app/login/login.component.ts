import { Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthenticationService } from '../security/authentication.service';
import { User } from '../security/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  loginError: boolean;
  private componentDestroyed$ = new Subject();

  constructor(
    formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = formBuilder.group({
      username: formBuilder.control('admin', [Validators.required]),
      password: formBuilder.control('admin', [Validators.required])
    });
    this.loginError = false;
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  login() {
    this.loginError = false;
    this.authenticationService
      .login(this.username.value, this.password.value)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (user: User) => {
          this.router.navigate(['/']);
          this.loginForm.reset();
          this.snackBar.open(
            `Welcome ${user.firstName ? user.login : user.firstName}`
          );
        },
        error: (err: any) => {
          this.loginError = true;
        }
      });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
