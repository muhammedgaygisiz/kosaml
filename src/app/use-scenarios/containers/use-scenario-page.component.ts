import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromApp } from 'src/app/store';
import { UseScenarioActions, UseScenarioPageActions } from '../actions';
import { UseScenario } from '../models';
import { fromUseScenarios } from '../reducers';

@Component({
  selector: 'kosaml-use-scenario-page',
  template: `
  <kosaml-page size="S">
    <kosaml-scenario
      [model]="selectedUseScenario$ | async"
      (saveScenario)="onSaveScenario($event)"
    ></kosaml-scenario>
    </kosaml-page>
  `,
  styles: [],
})
export class UseScenarioPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  selectedUseScenario$: Observable<UseScenario> = this.store.pipe(
    select(fromUseScenarios.selectSelectedUseScenario),
  );

  constructor(
    private store: Store<fromApp.State>,
    private route: ActivatedRoute
  ) {
    this.actionsSubscription = this.route.params
      .pipe(map(params => params.id !== "new"
        ? UseScenarioPageActions.selectUseScenario({ id: params.id })
        : UseScenarioPageActions.newUseScenario()
      ))
      .subscribe(action => store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSaveScenario(scenario: UseScenario) {
    this.store.dispatch(UseScenarioActions.addUseScenario({ useScenario: scenario }))
  }
}
