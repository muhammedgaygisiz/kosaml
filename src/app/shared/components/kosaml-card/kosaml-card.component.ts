import { Component, Input } from '@angular/core';

@Component({
  selector: 'kosaml-card',
  templateUrl: './kosaml-card.component.html',
  styleUrls: ['./kosaml-card.component.scss'],
})
export class KosamlCardComponent {
  @Input()
  showSaveButton: boolean;
}
