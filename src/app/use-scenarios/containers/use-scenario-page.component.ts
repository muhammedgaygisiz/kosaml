import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { fromSite } from 'src/app/site/reducers';
import { fromApp } from 'src/app/store';
import { UseScenarioActions, UseScenarioPageActions } from '../actions';
import { UseScenario } from '../models';
import { fromUseScenarios } from '../reducers';

@Component({
  selector: 'kosaml-use-scenario-page',
  template: `
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-scenario
      *ngIf="(isLoading$ | async) === false"
      [model]="selectedUseScenario$ | async"
      (saveScenario)="onSaveScenario($event)"
    ></kosaml-scenario>
  `,
  styles: [],
})
export class UseScenarioPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsLoading),
    shareReplay()
  );

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
