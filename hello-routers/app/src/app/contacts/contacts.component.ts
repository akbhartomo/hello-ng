import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  private contacts;

  constructor(private http: Http) {
    this.contacts = http.get("http://localhost:3000/people")
      .map(res => res.json() )
  }

  ngOnInit() {
  }

}
