import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { fromSite } from 'src/app/site/reducers';
import { fromApp } from 'src/app/store';
import { UseScenarioPageActions } from '../actions';
import { UseScenario } from '../models';
import { fromUseScenarios } from '../reducers';

@Component({
  selector: 'kosaml-use-scenario-page',
  template: `
    <kosaml-loading-spinner *ngIf="(isLoading$ | async) === true"></kosaml-loading-spinner>
    <kosaml-scenario
      *ngIf="(isLoading$ | async) === false"
      [model]="selectedUseScenario$ | async"
    ></kosaml-scenario>
  `,
  styles: [],
})
export class UseScenarioPageComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsLoading),
    shareReplay()
  );

  selectedUseScenario$: Observable<UseScenario> = this.store.pipe(
    select(fromUseScenarios.getUseScenarioEntityById(1)),
  );

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() {
    this.store.dispatch(UseScenarioPageActions.fetchUseScenarios());
  }
}
