import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { fromApp } from 'src/app/store';
import { fromSite } from '../../reducers';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSite.selectIsLoading),
    shareReplay()
  );

  constructor(private store: Store<fromApp.State>) { }
}