import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { select, Store } from '@ngrx/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { fromApp } from '../../store';
import { SiteActions } from '../actions';
import { FileNode } from '../models';
import { fromSite } from '../reducers';


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
      [isToolBarOpen]="isToolBarOpen$ | async"
      [project]="project$ | async"
    >
    </kosaml-body>
  `,
})
export class AppComponent implements OnDestroy {
  isAuthenticated$: Observable<User> = this.fireAuth.authState.pipe(
    tap(user => { if (user) this.store.dispatch(SiteActions.fetchProject()) }),
    shareReplay()
  );

  isProjectBarOpen$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsProjectBarOpen)
  );

  isToolBarOpen$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsToolBarOpen)
  );

  project$: Observable<FileNode[]> = this.store.pipe(
    select(fromSite.selectProjectStructure)
  );

  constructor(
    private store: Store<fromApp.State>,
    private fireAuth: AngularFireAuth
  ) { }

  ngOnDestroy() {
  }

  onToggleProjectBar() {
    this.store.dispatch(SiteActions.toggleProjectBar());
  }

  onToggleToolBar() {
    this.store.dispatch(SiteActions.toggleToolBar());
  }
}
