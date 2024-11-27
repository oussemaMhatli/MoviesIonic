import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

    if (!isAuthenticated) {
      // If the user is not authenticated, navigate to the login page
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
