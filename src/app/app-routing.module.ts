import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./customerside/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
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
    loadChildren: () => import('./customerside/movies/movies.module').then( m => m.MoviesPageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
  },
  {
    path: 'profile',
    loadChildren: () => import('./customerside/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
  },
  {
    path: 'playlist',
    loadChildren: () => import('./customerside/playlist/playlist.module').then( m => m.PlaylistPageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./adminSide/home-admin/home-admin.module').then( m => m.HomeAdminPageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
  },
  {
    path: 'movies-managment',
    loadChildren: () => import('./adminSide/movies-managment/movies-managment.module').then( m => m.MoviesManagmentPageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
  },
  {
    path: 'users-management',
    loadChildren: () => import('./adminSide/users-management/users-management.module').then( m => m.UsersManagementPageModule),
    canActivate: [AuthGuard],  // Apply the guard to protect this route
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
