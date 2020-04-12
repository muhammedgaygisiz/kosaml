import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SiteActions } from 'src/app/site/actions';
import { fromSite } from 'src/app/site/reducers';

@Component({
  selector: 'kosaml-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss'],
})
export class EmptyPageComponent {
  constructor(private store: Store<fromSite.State>) { }

  ngOnInit(): void {
    this.store.dispatch(SiteActions.stopLoading());
  }
}
