import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { fromSite } from 'src/app/site/reducers';
import { fromApp } from '../../store';
import { AuthActions } from '../actions';
import { Credentials } from '../models';
import { fromAuth } from '../reducers';

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
  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsLoading),
    shareReplay()
  );

  isAuthError$: Observable<boolean> = this.store.pipe(
    select(fromAuth.selectAuthError),
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
