import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',

  animations: [
    trigger('signal', [

      state('void', style({ 'transform': 'translateY(-100%)'})),
      state(  'go', style({ 'background-color': 'green', 'height': '100px'})),
      state('stop', style({ 'background-color': 'red',   'height': '30px' })),

      transition('void <=> *',  animate(3000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(.1)'}),
        style({'transform': 'scale(.5)'}),
        style({'transform': 'scale(.9)'}),
        style({'transform': 'scale(.95)'}),
        style({'transform': 'scale(1)'})
      ]))),
      transition('* => *',     animate('.5s .1s ease-out'))
    ])
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signal: string  = 'stop';
  isHere: boolean = false;

  onGoClick() {
    this.signal ='go';
  }

  onStopClick() {
    this.signal ='stop';
  }

  onToggleClick() {
    this.isHere = !this.isHere;
  }
}
