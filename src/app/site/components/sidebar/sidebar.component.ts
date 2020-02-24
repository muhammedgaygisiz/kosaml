import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileNode } from '../../models';

@Component({
  selector: 'kosaml-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input()
  isProjectBarOpen: boolean;

  @Input()
  isToolBarOpen: boolean;

  @Input()
  project: FileNode[];

  @Input()
  marginTop: number = 56;

  @Output()
  logout = new EventEmitter();

  constructor() { }

  onLogout() {
    this.logout.emit()
  }
}
