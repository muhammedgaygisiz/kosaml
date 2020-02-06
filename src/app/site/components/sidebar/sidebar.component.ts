import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'kosaml-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input()
  isProjectBarOpen: boolean;

  @Input()
  isToolBarOpen: boolean;

  @Output()
  logout = new EventEmitter();

  constructor(
  ) { }

  onLogout() {
    this.logout.emit();
  }

}
