import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
       let url: string = state.url;
       return this.checkLogin(url);
       }
  checkLogin(url: string): any {
    let val: any = localStorage.getItem('isUserLoggedIn');

    if(val == "true"){
       if(url == "/login"){
         this.router.parseUrl('/user');
       }if (url == "/login") {
          this.router.parseUrl('/user/airlines');          
       }if (url == "/login") {
        this.router.parseUrl('/user/airlines/tail');          
     } else {
         return true;   
       }
    } else {
       return this.router.parseUrl('/login');
    }
 }
}
