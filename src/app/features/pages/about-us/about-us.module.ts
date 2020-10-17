import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { aboutUsContainers } from './containers';
import { aboutUsComponents } from './components';

@NgModule({
  declarations: [
    ...aboutUsContainers,
    ...aboutUsComponents
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
