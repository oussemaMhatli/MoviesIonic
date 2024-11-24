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
    loadChildren: () => import('./auth/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
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
  },  {
    path: 'home-admin',
    loadChildren: () => import('./adminSide/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'movies-managment',
    loadChildren: () => import('./adminSide/movies-managment/movies-managment.module').then( m => m.MoviesManagmentPageModule)
  },
  {
    path: 'users-management',
    loadChildren: () => import('./adminSide/users-management/users-management.module').then( m => m.UsersManagementPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
