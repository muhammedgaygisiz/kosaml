import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { fromApp } from 'src/app/store';
import { TaskScenarioPageActions } from '../../actions';
import { TaskScenario } from '../../models';
import { fromTaskScenarios } from '../../reducers';

@Component({
  selector: 'kosaml-task-scenario-page',
  template: `
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-task-scenario
      *ngIf="(isLoading$ | async) === false"
      [model]="selectedTaskScenario$ | async"
    ></kosaml-task-scenario>
  `,
  styles: []
})
export class TaskScenarioPageComponent implements OnInit {

  isLoading$: Observable<boolean> = this.store.select('site', 'loading').pipe(
    shareReplay()
  );

  selectedTaskScenario$: Observable<TaskScenario> = this.store.pipe(
    select(fromTaskScenarios.getTaskScenarioEntityById(1)),
  );

  constructor(
    private store: Store<fromApp.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(
      TaskScenarioPageActions.fetchTaskScenarios()
    );
  }

}
