import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { featuresContainers } from './containers';
import { featuresComponents } from './components';

@NgModule({
  declarations: [
    ...featuresContainers,
    ...featuresComponents
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
