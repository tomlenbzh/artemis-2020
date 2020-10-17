import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { pageNotFoundContainers } from './containers';
import { pageNotFoundComponents } from './components';

@NgModule({
  declarations: [
    ...pageNotFoundContainers,
    ...pageNotFoundComponents
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
