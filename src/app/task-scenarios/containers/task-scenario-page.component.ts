import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { fromSite } from 'src/app/site/reducers';
import { fromApp } from 'src/app/store';
import { TaskScenarioActions, TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Component({
  selector: 'kosaml-task-scenario-page',
  template: `
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-scenario
      *ngIf="(isLoading$ | async) === false"
      [model]="selectedTaskScenario$ | async"
      (saveScenario)="onSaveScenario($event)"
    ></kosaml-scenario>
  `,
  styles: [],
})
export class TaskScenarioPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsLoading),
    shareReplay()
  );

  selectedTaskScenario$: Observable<TaskScenario> = this.store.pipe(
    select(fromTaskScenarios.selectSelectedTaskScenario));

  constructor(
    private store: Store<fromApp.State>,
    private route: ActivatedRoute
  ) {
    this.actionsSubscription = this.route.params
      .pipe(map(params => +params.id
        ? TaskScenarioPageActions.selectTaskScenario({ id: +params.id })
        : TaskScenarioPageActions.newTaskScenario()
      ))
      .subscribe(action => store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSaveScenario(scenario: TaskScenario) {
    this.store.dispatch(TaskScenarioActions.addTaskScenario({ taskScenario: scenario }))
  }
}
