import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersManagementPageRoutingModule } from './users-management-routing.module';

import { UsersManagementPage } from './users-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersManagementPageRoutingModule
  ],
  declarations: [UsersManagementPage]
})
export class UsersManagementPageModule {}
