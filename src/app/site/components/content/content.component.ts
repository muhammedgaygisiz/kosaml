import { Component } from '@angular/core';
import { LoadingService } from '../../services';

@Component({
  selector: 'kosaml-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(
    private loadingService: LoadingService
  ) { }
}
