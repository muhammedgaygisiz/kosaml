import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthActions } from 'src/app/auth/actions';
import { UseScenarioActions } from '../actions';
import { UseScenario } from '../models';
import { fromUseScenarios } from '../reducers';

@Injectable()
export class UseScenariosEffects {

  storeUseScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(UseScenarioActions.addUseScenario),
      withLatestFrom(this.store.pipe(select(fromUseScenarios.selectAllUseScenarios))),
      switchMap(([_, scenarios]) => {
        return this.http$
          .put(
            'https://angular-course-370fd.firebaseio.com/useScenarios.json',
            scenarios
          )
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
    private store: Store<fromUseScenarios.State>
  ) { }
}
