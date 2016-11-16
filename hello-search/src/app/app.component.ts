import { Component, OnInit } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit {

  items: Array<string>;
  term$ = new Subject<string>();


  constructor( private service: WikipediaSearchService ) {
  }

  ngOnInit() {
    this.service
      .search(this.term$)
      .subscribe(results => {
        console.table(results);
        this.items = results[1]
      });
  }

}
