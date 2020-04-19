import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { TaskScenarioActions } from 'src/app/task-scenarios/actions';
import { UseScenarioActions } from 'src/app/use-scenarios/actions';
import { SiteActions } from '../actions';
import { FileNode } from '../models';
import { fromSite } from '../reducers';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SiteEffects {

  storeProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        TaskScenarioActions.addTaskScenario,
        UseScenarioActions.addUseScenario,
        SiteActions.storeProject,
      ),
      withLatestFrom(this.store.pipe(select(fromSite.selectProjectStructure))),
      map(([_, projectStructure]) => projectStructure),
      switchMap(projectStructure =>
        from(this.fireDatabase.database.ref('project').set(projectStructure)),
      ),
    ),
    { dispatch: false },
  );

  fetchProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(SiteActions.fetchProject),
      switchMap(() =>
        from(this.fireDatabase.database.ref('project').once('value')),
      ),
      map(dataSnapshot => dataSnapshot.val()),
      map((projectStructure: FileNode[]) => SiteActions.fetchedProject({ projectStructure })),
    ),
  );

  noDataFound$ = createEffect(
    () => this.actions$.pipe(
      ofType(TaskScenarioActions.noTaskScenarioFound),
      tap(() => this.router.navigate(['..'], { relativeTo: this.route })),
    ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private fireDatabase: AngularFireDatabase,
    private store: Store<fromSite.State>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }
}
