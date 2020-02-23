import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { TaskScenarioActions, TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';

const taskScenarios: TaskScenario[] = [
  {
    id: 1,
    title: 'Some dummy title',
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
  @Effect()
  loadTaskScenatios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskScenarioPageActions.fetchTaskScenarios),
      switchMap(() => {
        return taskScenariosPromise().then((receivedTaskScenarios: TaskScenario[]) =>
          TaskScenarioActions.loadTaskScenarios({ taskScenarios: receivedTaskScenarios }),
        );
      }),
    ),
  );

  constructor(private actions$: Actions) {}
}
