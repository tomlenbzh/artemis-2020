import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { homeContainers } from './containers';
import { homeComponents } from './components';

import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

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
    TranslateModule.forChild()
  ]
})
export class HomeModule { }
