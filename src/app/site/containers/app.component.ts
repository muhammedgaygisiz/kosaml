import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthActions } from '../../auth/actions';
import { fromApp } from '../../store';
import { SiteActions } from '../actions';
import { FileNode } from '../models';

@Component({
  selector: 'kosaml-root',
  template: `
    <kosaml-header
      [isAuthenticated]="isAuthenticated$ | async"
      (toggleProjectBar)="onToggleProjectBar()"
      (toggleToolBar)="onToggleToolBar()"
    ></kosaml-header>
    <kosaml-menu-bar></kosaml-menu-bar>
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
  isAuthenticated$: Observable<boolean> = this.store.select('auth').pipe(
    map(authState => !!authState.user),
    shareReplay(),
  );

  isProjectBarOpen$: Observable<boolean> = this.store.select('site', 'isProjectBarOpen');

  isToolBarOpen$: Observable<boolean> = this.store.select('site', 'isToolBarOpen');

  project$: Observable<FileNode[]> = this.store.select('site', 'projectStructure');

  sidebarWidth$: Observable<string> = this.store.select('site', 'sidebarWidth');

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
