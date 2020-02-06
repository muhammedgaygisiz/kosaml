import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthActions } from '../../auth/actions';
import * as fromApp from '../../store/app.reducer';
import { SiteActions } from '../actions';

@Component({
  selector: 'kosaml-root',
  template: `
    <kosaml-header
      [isAuthenticated]="isAuthenticated$ | async"
      (toggleProjectBar)="onToggleProjectBar()"
      (toggleToolBar)="onToggleToolBar()"
      ></kosaml-header>
    <kosaml-body
      [isAuthenticated]="isAuthenticated$ | async"
      [isProjectBarOpen]="isProjectBarOpen$ | async"
      [isToolBarOpen]="isToolBarOpen$ | async">
    </kosaml-body>
  `,
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean> = this.store
    .select('auth').pipe(
      map(authState => !!authState.user),
      shareReplay()
    );

  isProjectBarOpen$: Observable<boolean> = this.store
    .select('site', 'isProjectBarOpen');

  isToolBarOpen$: Observable<boolean> = this.store
    .select('site', 'isToolBarOpen');

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }

  onToggleProjectBar() {
    this.store.dispatch(new SiteActions.ToggleProjectBar());
  }

  onToggleToolBar() {
    this.store.dispatch(new SiteActions.ToggleToolBar());
  }
}
