import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers:[DatabaseService]
})
export class FormsComponent implements OnInit {

  public new_lastName;
  public new_firstName;
  public new_email;
  public new_comments;

  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  createPerson(lastName, firstName, email, comments) {

    let lastname  = { lastName : lastName };
    let firstname = { firstName: firstName };
    let Email     = { email    : email };
    let Comments  = { comments : comments };

    this.database.createPerson(lastname, firstname, Email, Comments).subscribe(
      data => {
       this.router.navigate(['/database']);
        return true;
      },
      error => {
        console.error("Error creating item");
        return Observable.throw(error);
      }
    );
  }
}
