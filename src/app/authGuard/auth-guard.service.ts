import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    
    constructor(private _authService: AuthService,
        private _router: Router) {
    }

    canActivate() {
        //return true;
        if (this._authService.isLoggedIn) {
            return true;
        } 

        this._router.navigate(['login']); //if it's false

        return false;
    }

}