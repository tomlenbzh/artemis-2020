import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/layout/containers/main-layout/main-layout.component';

const mainChildren: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  }, {
    path: '404',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

const routes: Routes = [
  {
    path: '', redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '',
    component: MainLayoutComponent,
    children: mainChildren
  }, {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
