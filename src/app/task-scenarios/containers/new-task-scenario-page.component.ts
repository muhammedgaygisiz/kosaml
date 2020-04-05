import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromApp } from 'src/app/store';
import { TaskScenarioActions } from '../actions';
import { TaskScenario } from '../models';

@Component({
  selector: 'kosaml-edit-task-scenario-page',
  template: `
  <kosaml-page size="S">
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-scenario
      (saveScenario)="onSaveScenario($event)"
    ></kosaml-scenario>
    </kosaml-page>
  `,
  styles: [],
})
export class NewTaskScenarioPageComponent {

  constructor(
    private store: Store<fromApp.State>,
    private router: Router
  ) { }

  onSaveScenario(scenario: TaskScenario) {
    this.store.dispatch(TaskScenarioActions.addTaskScenario({ taskScenario: scenario }));

    this.router.navigate(['./project']);
  }
}
