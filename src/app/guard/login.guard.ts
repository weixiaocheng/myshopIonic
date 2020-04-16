import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserInfoService} from '../serve/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private  router: Router, private userinfo: UserInfoService) {

  }
  // @ts-ignore
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('*******' );
    if (this.userinfo.getToken() == undefined || this.userinfo.getToken() == null) {
      console.log('12212');
      this.router.navigateByUrl('login');
      return false;
    }

    return true;
  }



}
