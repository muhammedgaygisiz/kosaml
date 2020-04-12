import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { fromApp } from '../../store';
import { AuthActions } from '../actions';
import { Credentials } from '../models';
import { fromAuth } from '../reducers';

@Component({
  selector: 'kosaml-auth-page',
  template: `
  <kosaml-page size="S">
    <kosaml-auth
      (loginSubmitted)="onSubmitLogin($event)"
      (registrationSubmitted)="onSubmitRegistration($event)"
      [isAuthError]="isAuthError$ | async"
    >
    </kosaml-auth>
    </kosaml-page>
  `,
})
export class AuthPageComponent {
  isAuthError$: Observable<boolean> = this.store.pipe(
    select(fromAuth.selectAuthError),
    map(authError => !!authError),
    tap(console.log),
    shareReplay(),
  );

  constructor(private store: Store<fromApp.State>) { }

  onSubmitLogin(credentials: Credentials) {
    this.store.dispatch(AuthActions.startLogin(credentials));
  }

  onSubmitRegistration(credentials: Credentials) {
    this.store.dispatch(AuthActions.startSignUp(credentials));
  }
}
