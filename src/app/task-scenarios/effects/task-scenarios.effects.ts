import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/site/services';
import { UseScenarioActions } from 'src/app/use-scenarios/actions';
import { TaskScenarioActions, TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';
import { SiteActions } from '../../site/actions';

const TASK_SCENARIOS = 'taskScenarios';

const getFirebaseKey = (firebaseObject) => Object.keys(firebaseObject)[0];

@Injectable()
export class TaskScenariosEffects {
  storeTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioActions.addTaskScenario),
      map(payload => payload.taskScenario),
      switchMap((taskScenario: TaskScenario) => {
        const newTsRef = this.fireDatabase.database.ref(TASK_SCENARIOS).push();
        return from(newTsRef.set(taskScenario)).pipe(
          map(() => taskScenario),
        );
      }),
      map((taskScenario: TaskScenario) =>
        UseScenarioActions.addUseScenario({ useScenario: taskScenario }),
      ),
    ),
  );

  fetchSelectedTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioPageActions.selectTaskScenario),
      tap(() => this.loadingService.startLoading()),
      switchMap(({ id }) =>
        from(
          this.fireDatabase.database.ref(TASK_SCENARIOS)
            .orderByChild('id')
            .equalTo(id)
            .once('value'),
        ),
      ),
      map(dataSnapshot => dataSnapshot.val()),
      map(result => {
        if (!result) {
          return TaskScenarioActions.noTaskScenarioFound();
        }

        return TaskScenarioActions.addFetchedTaskScenario({
          taskScenario: (Object.values(result) as TaskScenario[])[0],
        });
      }),
      tap(() => this.loadingService.stopLoading()),
    ),
  );

  deleteSelectedTaskScenario$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioActions.deleteTaskScenario),
      switchMap(({ id }) => {
        return from(
          this.fireDatabase.database
            .ref(TASK_SCENARIOS)
            .orderByChild('id')
            .equalTo(id)
            .once('value'),
        ).pipe(
          map(dataSnapshot => dataSnapshot.val()),
          map(result => getFirebaseKey(result)),
          map(firebaseId => this.fireDatabase.list(TASK_SCENARIOS).remove(firebaseId)),
        );
      }),
      map(() =>
        SiteActions.storeProject(),
      ),
    ),
  );


  constructor(
    private actions$: Actions,
    private fireDatabase: AngularFireDatabase,
    private loadingService: LoadingService,
  ) {
  }
}
