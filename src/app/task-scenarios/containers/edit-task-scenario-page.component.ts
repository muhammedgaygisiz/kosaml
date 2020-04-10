import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { fromSite } from 'src/app/site/reducers';
import { fromApp } from 'src/app/store';
import { TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Component({
  selector: 'kosaml-edit-task-scenario-page',
  template: `
  <kosaml-page size="S">
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-scenario
      *ngIf="(isLoading$ | async) === false"
      [model]="selectedTaskScenario$ | async"
      (saveScenario)="onSaveScenario($event)"
    ></kosaml-scenario>
    </kosaml-page>
  `,
  styles: [],
})
export class EditTaskScenarioPageComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;

  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsLoading),
    shareReplay()
  );

  selectedTaskScenario$: Observable<TaskScenario> = this.store.pipe(
    select(fromTaskScenarios.selectSelectedTaskScenario),
  );

  constructor(
    private store: Store<fromApp.State>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actionsSubscription = this.route.params
      .pipe(
        map(params => TaskScenarioPageActions.selectTaskScenario({ id: params.id }))
      )
      .subscribe(action => this.store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSaveScenario(scenario: TaskScenario) {
    // this.store.dispatch(TaskScenarioActions.addTaskScenario({ taskScenario: scenario }));

    this.router.navigate(['./project']);
  }
}
