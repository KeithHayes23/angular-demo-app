import { Component, OnInit, Input } from '@angular/core';
import { DynamoDBListComponent } from './index';

@Component({
  selector: 'app-dynamodb',
  templateUrl: './dynamodb.component.html',
  styleUrls: ['./dynamodb.component.css']
})
export class DynamoDBComponent implements OnInit {

  navLinks: Object[] = [
    {label: 'List Table', link: 'dynamodb'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
