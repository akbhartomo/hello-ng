import { Component }      from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Http }           from '@angular/http';

import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import { BehaviorSubject } from 'rxjs';

@Component({
  template: `
    <h2>contact {{(contact | async).name}}</h2>
    <img [src]="(contact | async).image" alt="">
  `
})

export class ContactComponent {

  private api:     string               = 'http://localhost:3000/';
  private contact: BehaviorSubject<any> = new BehaviorSubject({ name: 'Loading....', image: '' });

  constructor( private route: ActivatedRoute, private http: Http ) {
    route.params
      .map(( p: any ) => p.id)
      .switchMap(
        id => http.get(this.api + 'people/' + id)
          .map(res => res.json())
          .map(contact => Object.assign({}, contact, { image: this.api + contact.image }))
      )
      .subscribe(this.contact)

  }
}
