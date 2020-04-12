import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/site/services';
import { AuthActions } from '../actions';


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private loadingService: LoadingService
  ) { }

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.startLogin),
      tap(() => this.loadingService.startLoading()),
      switchMap(authData => from(this.firebaseAuth.auth.signInWithEmailAndPassword(
        authData.email,
        authData.password,
      ))),
      map(() => AuthActions.authenticationSucceeded({ redirect: true })),
    );
  });

  authSignup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.startSignUp),
      tap(() => this.loadingService.startLoading()),
      switchMap(authData => from(this.firebaseAuth.auth.createUserWithEmailAndPassword(
        authData.email,
        authData.password,
      ))),
      map(() => AuthActions.authenticationSucceeded({ redirect: true })),
    );
  });

  redirectAfterLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authenticationSucceeded),
      tap((authSuccessAction) => {
        if (authSuccessAction.redirect) {
          this.router.navigate(['/'])
        }
      }),
      tap(() => this.loadingService.stopLoading())
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
