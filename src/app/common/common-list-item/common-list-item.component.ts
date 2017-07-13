import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-list-item',
  templateUrl: './common-list-item.component.html',
  styleUrls: ['./common-list-item.component.css']
})
export class CommonListItemComponent {

  constructor() {

  }
  @Input() mdname: string;
  @Input() name: string;
  @Input() description: string;
  @Input() sourceImage: string;
  @Input() routerLink: string;
}
