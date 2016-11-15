import { RouterModule } from '@angular/router';

import { WidgetComponent } from './widget.component';

const routes = [
  { path: '', component: WidgetComponent }
];

export default RouterModule.forChild(routes)
