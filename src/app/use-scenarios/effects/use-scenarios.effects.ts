import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { uuid } from 'uuidv4';
import { UseScenarioActions } from '../actions';
import { UseScenario } from '../models';
import { fromUseScenarios } from '../reducers';

// todo: this and the promise has to be removed as soon as 
// the task scenarios are received from the backend
const useScenarios: UseScenario[] = [
  {
    id: uuid(),
    title: 'Use Scenario 1',
    description:
      'Lorem ipsum dolor sit amet, ' +
      'consetetur sadipscing elitr, sed diam nonumy ' +
      'eirmod tempor invidunt ut labore et dolore ' +
      'magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea ' +
      'rebum. Stet clita kasd gubergren, no sea takimata ' +
      'sanctus est Lorem ipsum dolor sit amet. Lorem ' +
      'ipsum dolor sit amet, consetetur sadipscing elitr, ' +
      'sed diam nonumy eirmod tempor invidunt ut labore et ' +
      'dolore magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea rebum. ' +
      'Stet clita kasd gubergren, no sea takimata sanctus est ' +
      'Lorem ipsum dolor sit amet.',
  },
];

const useScenariosPromise = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(useScenarios);
    }, 2000),
  );

@Injectable()
export class UseScenariosEffects {

  @Effect({ dispatch: false })
  storeUseScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(UseScenarioActions.addUseScenario),
      withLatestFrom(this.store.pipe(select(fromUseScenarios.selectUseScenarioEntitiesState))),
      switchMap(([latestAction, scenarios]) => {
        return this.http
          .put(
            'https://angular-course-370fd.firebaseio.com/useScenarios.json',
            scenarios
          )
      }),
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromUseScenarios.State>
  ) { }
}
