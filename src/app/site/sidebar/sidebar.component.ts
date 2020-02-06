import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as AuthActions from '../../auth/actions/auth.actions';
import * as fromApp from '../../store/app.reducer';


@Component({
  selector: 'kosaml-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isAuthenticated$: Observable<boolean> = this.store.select('auth').pipe(
    map(authState => !!authState.user)
  );

  isProjectBarOpen$: Observable<boolean> = combineLatest(
    this.isAuthenticated$,
    this.store.select('site', 'isProjectBarOpen'),
  ).pipe(
    map(([isAuthenticated, isProjectBarOpen]) => isAuthenticated && isProjectBarOpen),
    shareReplay()
  );

  isToolBarOpen$: Observable<boolean> = combineLatest(
    this.isAuthenticated$,
    this.store.select('site', 'isToolBarOpen'),
  ).pipe(
    map(([isAuthenticated, isToolBarOpen]) => isAuthenticated && isToolBarOpen),
    shareReplay(),
  );

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
