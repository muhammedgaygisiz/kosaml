import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { TaskScenario } from '../models';
import { TaskScenarioPageActions, TaskScenarioActions } from '../actions';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const taskScenarios: TaskScenario[] = [
    {
        id: 1,
        title: 'Some dummy title',
        description: 'Lorem ipsum dolor sit amet, '
            + 'consetetur sadipscing elitr, sed diam nonumy '
            + 'eirmod tempor invidunt ut labore et dolore '
            + 'magna aliquyam erat, sed diam voluptua. At '
            + 'vero eos et accusam et justo duo dolores et ea '
            + 'rebum. Stet clita kasd gubergren, no sea takimata '
            + 'sanctus est Lorem ipsum dolor sit amet. Lorem '
            + 'ipsum dolor sit amet, consetetur sadipscing elitr, '
            + 'sed diam nonumy eirmod tempor invidunt ut labore et '
            + 'dolore magna aliquyam erat, sed diam voluptua. At '
            + 'vero eos et accusam et justo duo dolores et ea rebum. '
            + 'Stet clita kasd gubergren, no sea takimata sanctus est '
            + 'Lorem ipsum dolor sit amet.'
    }
]

const taskScenariosPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(taskScenarios);
    }, 2000)
})

@Injectable()
export class TaskScenariosEffects {

    @Effect()
    loadTaskScenatios$ = createEffect(() => this.actions$.pipe(
        ofType(TaskScenarioPageActions.fetchTaskScenarios),
        switchMap(() => {
            return taskScenariosPromise()
                .then((taskScenarios: TaskScenario[]) => TaskScenarioActions.loadTaskScenarios({ taskScenarios }))
        })
    ));

    constructor(
        private actions$: Actions
    ) { }

}