import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { AuthActions } from 'src/app/auth/actions';
import { fromApp } from 'src/app/store';
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
            ofType(AuthActions.authenticationSucceeded),
            switchMap(() => this.http$
                .get<FileNode[]>(
                    'https://angular-course-370fd.firebaseio.com/project.json'
                )
            ),
            map((projectStructure) => SiteActions.fetchedProject({ projectStructure }))
        ),

    )

    constructor(
        private actions$: Actions,
        private http$: HttpClient,
        private store: Store<fromApp.State>
    ) { }
}