import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kosaml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'kosaml';

  constructor() { }

  ngOnInit() {
  }

}
