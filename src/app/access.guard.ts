import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedin();
  }
  isUserLoggedin(){
  let userToken= localStorage.getItem("userAccessToken") ? true:false;
  // JSON.parse(localStorage.getItem("userAccessToken")!) : false;
  if(userToken){
   return true;
  }
  else{
    this.router.navigateByUrl('');
  return false;
  }
 } 
  
}
