import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { TaskScenarioActions, TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Injectable()
export class TaskScenariosEffects {
  // storeTaskScenario$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(TaskScenarioActions.addTaskScenario),
  //     withLatestFrom(this.store.pipe(select(fromTaskScenarios.selectAllTaskScenarios))),
  //     switchMap(([latestAction, scenarios]) => {
  //       return this.http$
  //         .put(
  //           'https://angular-course-370fd.firebaseio.com/taskScenarios.json',
  //           scenarios
  //         )
  //         .pipe(
  //           map(() => latestAction.taskScenario)
  //         );
  //     }),
  //     map((taskScenario: TaskScenario) =>
  //       UseScenarioActions.addUseScenario({ useScenario: taskScenario })
  //     )
  //   ),
  // )

  // fetchTaskScenarios$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(AuthActions.authenticationSucceeded),
  //     switchMap(() => this.http$
  //       .get<TaskScenario[]>(
  //         'https://angular-course-370fd.firebaseio.com/taskScenarios.json'
  //       )
  //     ),
  //     map(
  //       taskScenarios => TaskScenarioActions.upsertTaskScenarios({ taskScenarios })
  //     )
  //   )
  // )

  fetchSelectedTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioPageActions.selectTaskScenario),
      mergeMap(action => {
        return this.fetchTaskScenarios<TaskScenario[]>(
          'https://angular-course-370fd.firebaseio.com/taskScenarios.json'
        ).pipe(
          tap(console.log),
          map(scenarios => scenarios.filter(scenario => scenario.id !== action.id))
        )
      }),
      map((taskScenarios: TaskScenario[]) => taskScenarios[0]),
      map(
        (taskScenario: TaskScenario) => {
          if (taskScenario) {
            return TaskScenarioActions.addTaskScenario({ taskScenario })
          }

          return { type: 'DUMMY' }
        }
      )
    )
  );

  fetchTaskScenarios<T>(url: string): Observable<T> {
    return this.http$
      .get<T>(url);
  }

  constructor(
    private actions$: Actions,
    private http$: HttpClient,
    private store: Store<fromTaskScenarios.State>
  ) { }
}
