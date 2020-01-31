import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/store/auth.actions';
import * as fromApp from '../store/app.reducer';



@Component({
  selector: 'kosaml-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.value) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.store.dispatch(new AuthActions.LoginStart(
        { email, password }
      ));
    } else {
      this.store.dispatch(new AuthActions.SignupStart(
        { email, password }
      ));
    }

    form.reset();
  }



}
