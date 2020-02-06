import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kosaml-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input()
  isAuthenticated: boolean;

  @Input()
  isProjectBarOpen: boolean;

  @Input()
  isToolBarOpen: boolean;

  @Output()
  logout = new EventEmitter();

  constructor() {
  }

  onLogout() {
    // Does not work from here!!
    console.log('First');
    this.logout.emit();
  }
}
