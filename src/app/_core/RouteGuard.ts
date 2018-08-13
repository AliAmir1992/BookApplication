import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const LoggedInUser = JSON.parse(sessionStorage.getItem('LoggedInUser'));
        if (LoggedInUser) {
            return true;
        } else {
            this.router.navigate(["/"]);
            return false;
        }
    }
}
