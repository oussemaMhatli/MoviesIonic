import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesManagmentPage } from './movies-managment.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesManagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesManagmentPageRoutingModule {}
