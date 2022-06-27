import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  val: any;
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): any {
    this.val = localStorage.getItem('isUserLoggedIn');
    console.log("value", this.val);
    if (this.val == "true") {
      if (url == "/login") {
        this.router.parseUrl('/user');
        this.router.parseUrl('/airlines');
        this.router.parseUrl('/tail');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
