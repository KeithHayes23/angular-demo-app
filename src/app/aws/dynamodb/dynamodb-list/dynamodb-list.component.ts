import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-dynamodb-list',
  templateUrl: './dynamodb-list.component.html',
  styleUrls: ['./dynamodb-list.component.css'],
  providers:[DatabaseService]
})

export class DynamoDBListComponent implements OnInit {

  public  people = [];
  constructor(private database: DatabaseService) {

  }

  ngOnInit() {
    this.database.getInfo("").subscribe(data => this.people = data);
  }

  refresh(){
    this.database.getInfo("").subscribe(data => this.people = data);
  }

}
