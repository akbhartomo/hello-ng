import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Routers!';

  menus: any[] = [
    {url: '', content: 'home'},
    {url: 'widget', content: 'widget'},
    {url: 'contacts', content: 'Contacts'},
    {url: 'contacts/1', content: 'One'},
    {url: 'contacts/2', content: 'Two'},
    {url: 'contacts/3', content: 'Three'}
  ];
}
