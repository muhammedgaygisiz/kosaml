import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';


@Component({
  selector: 'kosaml-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  isOpen$: Observable<boolean> = this.store.select('site')
    .pipe(
      map(siteState => siteState.projectBarOpen),
      shareReplay()
    );

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {

  }

}
