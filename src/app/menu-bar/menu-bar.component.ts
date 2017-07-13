import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

 navLinks: Object[] = [
   {label: 'HOME', link: 'home'},
   {label: 'DynamoDB', link: 'dynamodb'},
   {label: 'NEW', link: 'forms'}
   ];


  constructor() { }

  ngOnInit() {
  }

}
