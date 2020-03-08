import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { UseScenarioActions } from 'src/app/use-scenarios/actions';
import { TaskScenarioActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Injectable()
export class TaskScenariosEffects {

  @Effect()
  storeTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioActions.addTaskScenario),
      withLatestFrom(this.store.pipe(select(fromTaskScenarios.selectTaskScenarioEntitiesState))),
      switchMap(([latestAction, scenarios]) => {
        return this.http$
          .put(
            'https://angular-course-370fd.firebaseio.com/taskScenarios.json',
            scenarios
          )
          .pipe(
            map(resData => {
              return latestAction.taskScenario
            })
          );
      }),
      map((taskScenario: TaskScenario) => {
        console.log(taskScenario);
        return UseScenarioActions.addUseScenario({ useScenario: taskScenario })
      })
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private http$: HttpClient,
    private store: Store<fromTaskScenarios.State>
  ) { }
}
