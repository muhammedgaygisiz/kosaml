import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthActions } from '../actions';
import { User } from '../models';
import { AuthService } from '../services';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const handleAuthentication = (expiresIn: number, email: string, userId: string, token: string) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000).toJSON();

  return AuthActions.authenticationSucceeded({
    user: {
      email,
      token,
      id: userId,
      tokenExpirationDate: expirationDate,
    },
    redirect: true,
  });
};

const handleError = errorRes => {
  let errorMessage = 'An unknown error occured!';

  if (!errorRes.error || !errorRes.error.error) {
    return of(AuthActions.authenticationFailed({ error: errorMessage }));
  }

  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already!';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'Could not log in.';
      break;
  }

  return of(AuthActions.authenticationFailed({ error: errorMessage }));
};

const isTokenExpired = (user: User): boolean => {
  if (!user.tokenExpirationDate || new Date() > new Date(user.tokenExpirationDate)) {
    return true;
  }

  return false;
};

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) { }

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.startLogin),
    switchMap(authData => {
      return this.http
        .post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          },
        )
        .pipe(
          tap(resDate => {
            this.authService.setLogoutTimer(+resDate.expiresIn * 1000);
          }),
          map(resData => {
            return handleAuthentication(
              +resData.expiresIn,
              resData.email,
              resData.localId,
              resData.idToken,
            );
          }),
          catchError(errorRes => {
            return handleError(errorRes);
          }),
        );
    }),
  );

  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.startSignUp),
    switchMap(signupAction => {
      return this.http
        .post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
          {
            email: signupAction.email,
            password: signupAction.password,
            returnSecureToken: true,
          },
        )
        .pipe(
          tap(resDate => {
            this.authService.setLogoutTimer(+resDate.expiresIn * 1000);
          }),
          map(resData => {
            return handleAuthentication(
              +resData.expiresIn,
              resData.email,
              resData.localId,
              resData.idToken,
            );
          }),
          catchError(errorRes => {
            return handleError(errorRes);
          }),
        );
    }),
  );

  @Effect({ dispatch: false })
  authRedirect = this.actions$.pipe(
    ofType(AuthActions.authenticationSucceeded),
    tap(authSuccessAction => {
      if (authSuccessAction.redirect) {
        localStorage.setItem('userData', JSON.stringify(authSuccessAction.user));
        this.router.navigate(['/']);
      }
    }),
  );

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AuthActions.autoLogin),
    map(() => {
      const userData: User = JSON.parse(localStorage.getItem('userData'));

      if (!userData) {
        return { type: 'DUMMY' };
      }

      const loadedUser: User = {
        email: userData.email,
        id: userData.id,
        token: userData.token,
        tokenExpirationDate: userData.tokenExpirationDate,
      };

      if (!userData) {
        return { type: 'DUMMY' };
      }

      if (!isTokenExpired(loadedUser)) {
        const expirationDuration =
          new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
        this.authService.setLogoutTimer(expirationDuration);
        return AuthActions.authenticationSucceeded({
          user: loadedUser,
          redirect: false,
        });
      }

      return { type: 'DUMMY' };
    }),
  );

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      this.authService.clearLogoutTimer();
      localStorage.removeItem('userData');
      this.router.navigate(['/auth']);
    }),
  );
}
