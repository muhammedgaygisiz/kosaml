import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { fromApp } from 'src/app/store';
import { SiteActions } from '../actions';
import { fromSite } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class SidebarWidthService {

  private width: BehaviorSubject<number> = new BehaviorSubject<number>(320);

  public readonly width$: Observable<number> = this.width.asObservable();

  sidebarWidth$: Observable<string> = this.store.pipe(
    select(fromSite.selectSidebarWidth)
  );

  storeSidebarWidth(sidebarWidth) {
    this.store.dispatch(SiteActions.sidebarWidthChange({ width: sidebarWidth }))
  }

  constructor(private store: Store<fromApp.State>) { }

  next(newWidth: number) {
    this.width.next(newWidth);
  }
}
