import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthActions } from '../actions';


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

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

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
  ) { }

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.startLogin),
      switchMap(authData => from(this.firebaseAuth.auth.signInWithEmailAndPassword(
        authData.email,
        authData.password,
      ))),
      map(() => AuthActions.authenticationSucceeded({ redirect: true })),
    );
  });

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
          }),

          catchError(errorRes => {
            return handleError(errorRes);
          }),
        );
    }),
  );

  redirectAfterLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authenticationSucceeded),
      tap((authSuccessAction) => {
        if (authSuccessAction.redirect) {
          this.router.navigate(['/'])
        }
      })
    )
  }, { dispatch: false });

  authLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => of(this.firebaseAuth.auth.signOut())),
      tap((result) => {
        this.router.navigate(['/auth']);
      })
    )
  }, { dispatch: false });
}
