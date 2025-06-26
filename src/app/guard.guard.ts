import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate():boolean {
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }
  
}
