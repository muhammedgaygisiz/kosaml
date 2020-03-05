import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { TaskScenarioActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

const taskScenarios: TaskScenario[] = [
  {
    title: 'Task Scenario 1',
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

const taskScenariosPromise = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(taskScenarios);
    }, 2000),
  );

@Injectable()
export class TaskScenariosEffects {

  @Effect({ dispatch: false })
  storeTaskScenario = this.actions$.pipe(
    ofType(TaskScenarioActions.addTaskScenario),
    withLatestFrom(this.store.pipe(select(fromTaskScenarios.selectTaskScenarioEntitiesState))),
    switchMap(([latestAction, scenarios]) => {
      return this.http
        .put(
          'https://angular-course-370fd.firebaseio.com/taskScenarios.json',
          scenarios
        )
    }),
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromTaskScenarios.State>
  ) { }
}
