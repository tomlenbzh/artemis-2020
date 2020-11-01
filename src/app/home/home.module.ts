import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { homeContainers } from './containers';
import { homeComponents } from './components';

@NgModule({
  declarations: [
    ...homeContainers,
    ...homeComponents,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    TranslateModule.forChild(),
    CarouselModule,
    WavesModule
  ]
})
export class HomeModule { }
