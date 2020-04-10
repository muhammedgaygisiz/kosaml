import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromApp } from '../../store';
import { AuthActions } from '../actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store<fromApp.State>) { }
  private tokenExpirationTimer: any = null;

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
