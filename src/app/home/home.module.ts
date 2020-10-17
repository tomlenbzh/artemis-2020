import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { homeContainers } from './containers';
import { homeComponents } from './components';

@NgModule({
  declarations: [
    ...homeContainers,
    ...homeComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
