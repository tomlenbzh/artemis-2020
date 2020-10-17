import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { contactContainers } from './containers';
import { contactComponents } from './components';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';

@NgModule({
  declarations: [
    ...contactContainers,
    ...contactComponents,
    ContactContainerComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
