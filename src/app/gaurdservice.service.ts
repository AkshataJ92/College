import { Injectable } from '@angular/core';
import { collService } from './college/coll.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, Route, CanActivate, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GaurdserviceService implements CanActivate, CanLoad {

  constructor(private _userdata: collService, private _router: Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isUserLoggedIn(state.url);
}

canLoad( _route: Route) {
  return this.isUserLoggedIn(_route.path);
}

isUserLoggedIn(url: string): boolean {

  if (this._userdata.isLoggedIn) {
    return true;
  }
  this._userdata.redirectURL = url;
  this._router.navigate(['']);
  return false;
}

}
