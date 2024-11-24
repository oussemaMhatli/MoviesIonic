import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesManagmentPageRoutingModule } from './movies-managment-routing.module';

import { MoviesManagmentPage } from './movies-managment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesManagmentPageRoutingModule
  ],
  declarations: [MoviesManagmentPage]
})
export class MoviesManagmentPageModule {}
