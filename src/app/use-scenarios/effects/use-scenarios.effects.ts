import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthActions } from 'src/app/auth/actions';
import { UseScenarioActions } from '../actions';
import { UseScenario } from '../models';

@Injectable()
export class UseScenariosEffects {

  storeUseScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(UseScenarioActions.addUseScenario),
      map(payload => payload.useScenario),
      switchMap((useScenario: UseScenario) => {
        const newTsRef = this.fireDatabase.database.ref('useScenarios').push();
        return from(newTsRef.set(useScenario)).pipe(
          map(() => useScenario)
        );
      }),
    ),
    { dispatch: false }
  );

  fetchUseScenarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.authenticationSucceeded),
      switchMap(() => this.http$
        .get<UseScenario[]>(
          'https://angular-course-370fd.firebaseio.com/useScenarios.json'
        )
      ),
      map(
        useScenarios => UseScenarioActions.upsertUseScenarios({ useScenarios })
      )
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private http$: HttpClient,
    private fireDatabase: AngularFireDatabase,
  ) { }
}
