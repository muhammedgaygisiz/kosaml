import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { fromAuth } from 'src/app/auth/reducers';
import { AuthActions } from '../../auth/actions';
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
      [sidebarWidth]="sidebarWidth$ | async"
      (sidebarWidthChange)="onSidebarWidthChange($event)"
    >
    </kosaml-body>
  `,
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean> = this.store.pipe(
    select(fromAuth.selectUser),
    map(user => !!user),
    shareReplay(),
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

  sidebarWidth$: Observable<string> = this.store.pipe(
    select(fromSite.selectSidebarWidth)
  );

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() {
    this.store.dispatch(AuthActions.autoLogin());
  }

  onToggleProjectBar() {
    this.store.dispatch(SiteActions.toggleProjectBar());
  }

  onToggleToolBar() {
    this.store.dispatch(SiteActions.toggleToolBar());
  }

  onSidebarWidthChange(sidebarWidth) {
    this.store.dispatch(SiteActions.sidebarWidthChange({ width: sidebarWidth }))
  }
}
