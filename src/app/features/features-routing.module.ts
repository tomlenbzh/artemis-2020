import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesContainerComponent } from './containers/features/features-container.component';

const featuresChildren: Routes = [
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  }, {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about-us',
    pathMatch: 'full'
  }, {
    path: '',
    component: FeaturesContainerComponent,
    children: featuresChildren
  }, {
    path: '**',
    redirectTo: 'about-us'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
