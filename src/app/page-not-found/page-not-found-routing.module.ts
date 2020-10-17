import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundContainerComponent } from './containers/page-not-found/page-not-found-container.component';

const routes: Routes = [{ path: '', component: PageNotFoundContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
