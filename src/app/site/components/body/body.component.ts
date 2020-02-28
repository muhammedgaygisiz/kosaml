import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services';
import { FileNode } from '../../models';

@Component({
  selector: 'kosaml-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  @Input()
  isAuthenticated: boolean;

  @Input()
  isProjectBarOpen: boolean;

  @Input()
  isToolBarOpen: boolean;

  @Input()
  project: FileNode[];

  @Input()
  sidebarWidth: number;

  @Output()
  sidebarWidthChange = new EventEmitter()

  constructor(
    private authService: AuthService
  ) { }

  onLogout() {
    this.authService.logout();
  }

  widthChange(newWidth) {
    this.sidebarWidthChange.next(newWidth);
  }
}
