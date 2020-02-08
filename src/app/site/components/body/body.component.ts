import { Component, Input } from '@angular/core';
import { FileNode } from '../../models';

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

  @Input()
  project: FileNode[];

  constructor() {
  }
}
