import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthActions } from 'src/app/auth/actions';
import { UseScenarioActions } from 'src/app/use-scenarios/actions';
import { TaskScenarioActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Injectable()
export class TaskScenariosEffects {

  storeTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioActions.addTaskScenario),
      withLatestFrom(this.store.pipe(select(fromTaskScenarios.selectAllTaskScenarios))),
      switchMap(([latestAction, scenarios]) => {
        return this.http$
          .put(
            'https://angular-course-370fd.firebaseio.com/taskScenarios.json',
            scenarios
          )
          .pipe(
            map(() => latestAction.taskScenario)
          );
      }),
      map((taskScenario: TaskScenario) =>
        UseScenarioActions.addUseScenario({ useScenario: taskScenario })
      )
    ),
  )

  fetchTaskScenarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.authenticationSucceeded),
      switchMap(() => this.http$
        .get<TaskScenario[]>(
          'https://angular-course-370fd.firebaseio.com/taskScenarios.json'
        )
      ),
      map(
        taskScenarios => TaskScenarioActions.upsertTaskScenarios({ taskScenarios })
      )
    )
  )

  constructor(
    private actions$: Actions,
    private http$: HttpClient,
    private store: Store<fromTaskScenarios.State>
  ) { }
}
