import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { WidgetComponent } from './widget.component';

import widgetRoutes from './widget.routes';

@NgModule({
  imports: [ CommonModule, widgetRoutes ],
  declarations: [ WidgetComponent ]
})

export default class WidgetModule {}
