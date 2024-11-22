import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./customerside/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
{
    path: 'movies',
    loadChildren: () => import('./customerside/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./customerside/profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'playlist',
    loadChildren: () => import('./customerside/playlist/playlist.module').then( m => m.PlaylistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
