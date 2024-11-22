import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage, children: [
      {
        path: 'mv',
        loadChildren: () => import('../movies/movies.module').then( m => m.MoviesPageModule)
      },

      {
        path: 'pf',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'pl',
        loadChildren: () => import('../playlist/playlist.module').then( m => m.PlaylistPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
