import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @ViewChild("sidenav", { static: false, read: ElementRef })
  matSideNav: ElementRef;

  startingXPosition: number;
  isResizing: boolean = false;
  mouseLastSeen: number = -1;

  constructor() { }

  onLogout() {
    this.logout.emit()
  }
}
