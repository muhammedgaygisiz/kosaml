import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/store/auth.actions';
import * as fromApp from '../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private tokenExpirationTimer: any = null;

    constructor(
        private store: Store<fromApp.AppState>
    ) { }

    setLogoutTimer(expirtationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new AuthActions.Logout());
        }, expirtationDuration);
    }

    clearLogoutTimer() {
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }
}
