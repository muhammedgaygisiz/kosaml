import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../models';
import { AuthErrorMatcher } from './AuthErrorMatcher';

@Component({
  selector: 'kosaml-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;

  emailFormControl: FormControl
    = new FormControl(null, [Validators.required, Validators.email]);
  passwordFormControl: FormControl
    = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  matcher = new AuthErrorMatcher();

  @Input()
  isAuthError: boolean;

  @Output()
  loginSubmitted = new EventEmitter<Credentials>();

  @Output()
  registrationSubmitted = new EventEmitter<Credentials>();

  constructor(
  ) { }

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
      this.loginSubmitted.emit({ email, password });
    } else {
      this.registrationSubmitted.emit({ email, password });
    }

    this.authForm.reset();
  }

  get controls() {
    return this.authForm.controls;
  }
}
