import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SiteActions } from '../actions';
import { FileNode } from '../models';

@Injectable()
export class SiteEffects {

    // storeProject$ = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(
    //             TaskScenarioActions.addTaskScenario,
    //             UseScenarioActions.addUseScenario
    //         ),
    //         withLatestFrom(this.store.pipe(select(fromSite.selectProjectStructure))),
    //         map(([_, projectStructure]) => projectStructure),
    //         switchMap(projectStructure => {
    //             return this.http$
    //                 .put(
    //                     'https://angular-course-370fd.firebaseio.com/project.json',
    //                     projectStructure
    //                 )
    //         })
    //     ),
    //     { dispatch: false }
    // )


    fetchProject$ = createEffect(
        () => this.actions$.pipe(
            ofType(SiteActions.fetchProject),
            switchMap(() =>
                from(this.fireDatabase.database.ref('project').once('value'))
            ),
            map(dataSnapshot => dataSnapshot.val()),
            map((projectStructure: FileNode[]) => SiteActions.fetchedProject({ projectStructure })),
        ),
    )

    constructor(
        private actions$: Actions,
        private fireDatabase: AngularFireDatabase,
    ) { }
}