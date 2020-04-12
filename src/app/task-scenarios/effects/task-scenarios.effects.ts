import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/site/services';
import { UseScenarioActions } from 'src/app/use-scenarios/actions';
import { TaskScenarioActions, TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';

@Injectable()
export class TaskScenariosEffects {
  storeTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioActions.addTaskScenario),
      map(payload => payload.taskScenario),
      switchMap((taskScenario: TaskScenario) => {
        const newTsRef = this.fireDatabase.database.ref('taskScenarios').push();
        return from(newTsRef.set(taskScenario)).pipe(
          map(() => taskScenario)
        );
      }),
      map((taskScenario: TaskScenario) =>
        UseScenarioActions.addUseScenario({ useScenario: taskScenario })
      )
    ),
  )

  fetchSelectedTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioPageActions.selectTaskScenario),
      switchMap(({ id }) =>
        from(
          this.fireDatabase.database.ref('taskScenarios').orderByChild('id').equalTo(id).once('value')
        )
      ),
      map(dataSnapshot => dataSnapshot.val()),
      map(result => {
        return TaskScenarioActions.addFetchedTaskScenario({
          taskScenario: (Object.values(result) as TaskScenario[])[0]
        });
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private fireDatabase: AngularFireDatabase,
    private loadingService: LoadingService
  ) { }
}
