import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { uuid } from 'uuidv4';
import { TaskScenarioActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Injectable({ providedIn: 'root' })
export class TaskScenariosResolverService implements Resolve<TaskScenario> {

    constructor(
        private store: Store<fromTaskScenarios.State>,
        private actions$: Actions
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : TaskScenario | Observable<TaskScenario> | Promise<TaskScenario> {

        if (+route.params.id) {
            this.store.dispatch(TaskScenarioActions.fetchTaskScenarioById(route.params.id));
        }

        // todo: wait till data is fetched
        return { id: uuid(), title: "", description: "" };
    }

}