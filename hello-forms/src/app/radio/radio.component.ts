import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: [ './radio.component.css' ]
})
export class RadioComponent implements OnInit {

  locations: string[] = [ 'Home', 'Away', '10Blvd', 'Somewhere' ];

  constructor() {
  }

  ngOnInit() {
  }

}
