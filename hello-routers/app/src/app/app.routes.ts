import { RouterModule } from '@angular/router';

const routes = [
  { path: '',         loadChildren: './home/home.module' },
  { path: 'widget',   loadChildren: './widget/widget.module' },
  { path: 'contacts', loadChildren: './contacts/contacts.module' }
];

export default RouterModule.forRoot(routes);
