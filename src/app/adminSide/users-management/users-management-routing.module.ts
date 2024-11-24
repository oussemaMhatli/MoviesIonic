import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersManagementPage } from './users-management.page';

const routes: Routes = [
  {
    path: '',
    component: UsersManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersManagementPageRoutingModule {}
