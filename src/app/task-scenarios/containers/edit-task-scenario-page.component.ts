import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { fromApp } from 'src/app/store';
import { TaskScenarioPageActions } from '../actions';
import { TaskScenario } from '../models';
import { fromTaskScenarios } from '../reducers';

@Component({
  selector: 'kosaml-edit-task-scenario-page',
  template: `
  <kosaml-page size="S">
    <h1 class="mat-display-1">Edit Task Scenario</h1>
    <kosaml-scenario
      [model]="selectedTaskScenario$ | async"
      (saveScenario)="onSaveScenario($event)"
    ></kosaml-scenario>
    </kosaml-page>
  `,
  styles: [],
})
export class EditTaskScenarioPageComponent implements OnInit, OnDestroy {
  selectSubscription: Subscription;

  selectedTaskScenario$: Observable<TaskScenario> = this.store.pipe(
    select(fromTaskScenarios.selectSelectedTaskScenario),
  );

  constructor(
    private store: Store<fromApp.State>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.selectSubscription = this.route.params.pipe(
      map(params => params.id),
      tap(id => this.store.dispatch(TaskScenarioPageActions.selectTaskScenario({ id })))
    ).subscribe();
  }

  ngOnDestroy() {
    this.selectSubscription.unsubscribe();
  }

  onSaveScenario(scenario: TaskScenario) {
    // this.store.dispatch(TaskScenarioActions.addTaskScenario({ taskScenario: scenario }));

    this.router.navigate(['./project']);
  }
}
