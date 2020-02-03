import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as AuthActions from '../auth/store/auth.actions';
import * as fromApp from '../store/app.reducer';
import { AuthErrorMatcher } from './AuthErrorMatcher';

@Component({
  selector: 'kosaml-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;
  matcher = new AuthErrorMatcher();
  emailFormControl: FormControl
    = new FormControl(null, [Validators.required, Validators.email]);
  passwordFormControl: FormControl
    = new FormControl(null, [Validators.required, Validators.minLength(6)]);

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  isLoading$: Observable<boolean> = this.store.select('auth', 'loading').pipe(
    shareReplay()
  );

  isAuthError$: Observable<boolean> = this.store.select('auth', 'authError').pipe(
    map(authError => !!authError),
    shareReplay()
  );

  ngOnInit() {
    this.authForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.value) {
      return;
    }

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    if (this.isLoginMode) {
      this.store.dispatch(new AuthActions.LoginStart(
        { email, password }
      ));
    } else {
      this.store.dispatch(new AuthActions.SignupStart(
        { email, password }
      ));
    }

    this.authForm.reset();
  }

  get controls() {
    return this.authForm.controls;
  }
}
