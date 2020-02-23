import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { fromApp } from '../../store';
import { AuthActions } from '../actions';
import { Credentials } from '../models';

@Component({
  selector: 'kosaml-auth-page',
  template: `
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-auth
      *ngIf="(isLoading$ | async) === false"
      (loginSubmitted)="onSubmitLogin($event)"
      (registrationSubmitted)="onSubmitRegistration($event)"
      [isAuthError]="isAuthError$ | async"
    >
    </kosaml-auth>
  `,
})
export class AuthPageComponent {
  isLoading$: Observable<boolean> = this.store.select('site', 'loading').pipe(shareReplay());

  isAuthError$: Observable<boolean> = this.store.select('auth', 'authError').pipe(
    map(authError => !!authError),
    shareReplay(),
  );

  constructor(private store: Store<fromApp.State>) {}

  onSubmitLogin(credentials: Credentials) {
    this.store.dispatch(AuthActions.startLogin(credentials));
  }

  onSubmitRegistration(credentials: Credentials) {
    this.store.dispatch(AuthActions.startSignUp(credentials));
  }
}
