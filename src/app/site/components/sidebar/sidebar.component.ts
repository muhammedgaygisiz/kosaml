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

  xOffset: number;
  startingWidth: number;
  isResizing: boolean = false;

  constructor() { }

  onLogout() {
    this.logout.emit()
  }

  onMouseDown(event) {
    this.isResizing = true;

    // Setup
    this.xOffset = event.pageX;
    this.startingWidth = this.matSideNav.nativeElement.clientWidth;

    this.setMouseCursorToResize();

    event.preventDefault();
  }

  onMouseUp() {
    this.isResizing = false;
    this.resetMouseCursor();
  }

  onMouseMove(event) {
    event.preventDefault();

    if (this.isResizing) {
      this.setNewWidth(
        event.pageX - this.xOffset + this.startingWidth
      )
    }
  }

  private resetMouseCursor() {
    document.documentElement.style.cursor = "default"
  }

  private setMouseCursorToResize() {
    document.documentElement.style.cursor = "col-resize";
  }

  private calculateNewWidth(event) {
    return this.matSideNav.nativeElement.scrollWidth
      + (event.screenX - this.xOffset)
  }

  private setNewWidth(newWidth: number) {
    this.matSideNav.nativeElement.style.width =
      `${newWidth}px`;
  }
}
