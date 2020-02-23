import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { UseScenarioActions, UseScenarioPageActions } from '../actions';
import { UseScenario } from '../models';

const useScenarios: UseScenario[] = [
  {
    id: 1,
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
  @Effect()
  loadUseScenatios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UseScenarioPageActions.fetchUseScenarios),
      switchMap(() => {
        return useScenariosPromise().then((receivedUseScenarios: UseScenario[]) =>
          UseScenarioActions.loadUseScenarios({ useScenarios: receivedUseScenarios }),
        );
      }),
    ),
  );

  constructor(private actions$: Actions) { }
}
