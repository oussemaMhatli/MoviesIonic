import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdminPage } from './home-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminPage,children: [
      { path: ' Admin',loadChildren: () => import('../home-admin/home-admin.module').then( m => m.HomeAdminPageModule) },
      { path: 'moviesAdmin',loadChildren: () => import('../movies-managment/movies-managment.module').then( m => m.MoviesManagmentPageModule) },
      { path: 'users',loadChildren: () => import('../users-management/users-management.module').then( m => m.UsersManagementPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdminPageRoutingModule {}
