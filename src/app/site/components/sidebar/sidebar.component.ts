import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FileNode } from '../../models/FileNode';


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

  @Input()
  project: FileNode[];

  constructor(
    private authService: AuthService
  ) { }

  onLogout() {
    this.authService.logout();
  }

}
