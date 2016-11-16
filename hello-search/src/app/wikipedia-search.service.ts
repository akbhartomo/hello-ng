import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from'@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class WikipediaSearchService {

  constructor( private jsonp: Jsonp ) {
  }


  search( terms: Observable<string>, debounceMs: number = 300 ) {
    return terms
      .debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term))
  }

  rawsearch( term: string ) {

    let search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('format', 'json');
        search.set('search', term);

    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map(resp => resp.json());
  }

}
