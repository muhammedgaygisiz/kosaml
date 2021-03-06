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
    <h1 class="mat-display-1">New Task Scenario</h1>
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
