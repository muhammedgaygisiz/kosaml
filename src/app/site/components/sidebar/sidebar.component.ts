import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileNode } from '../../models';

@Component({
  selector: 'kosaml-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  @Input()
  isProjectBarOpen: boolean;

  @Input()
  isToolBarOpen: boolean;

  @Input()
  project: FileNode[];

  @Input()
  marginTop: number = 40 + 36;

  @Input()
  width: number;

  @Output()
  logout = new EventEmitter();

  @Output()
  widthChange = new EventEmitter();

  @ViewChild("sidenav", { static: true, read: ElementRef })
  matSideNav: ElementRef;

  xOffset: number;
  startingWidth: number;
  isResizing: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.setNewWidth(this.width);
  }

  onLogout() {
    this.logout.emit()
  }

  onMouseDown(event) {
    this.isResizing = true;

    this.xOffset = event.pageX;
    this.startingWidth = this.matSideNav.nativeElement.clientWidth;

    this.setMouseCursorToResize();

    event.preventDefault();
  }

  onMouseUp() {
    if (this.isResizing) {
      this.isResizing = false;
      this.widthChange.next(this.getWidth());
      this.resetMouseCursor();
    }
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

  private setNewWidth(newWidth: number) {
    this.matSideNav.nativeElement.style.width =
      `${newWidth}px`;
  }

  private getWidth() {
    return this.matSideNav.nativeElement.style.width;
  }
}
