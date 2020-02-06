import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'kosaml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'kosaml';

  @Input()
  isAuthenticated: boolean;

  @Output()
  toggleProjectBar = new EventEmitter();

  @Output()
  toggleToolBar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleProjectBar() {
    this.toggleProjectBar.emit();
  }

  onToggleToolBar() {
    this.toggleToolBar.emit();
  }
}
