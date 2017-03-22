import { AuthGuard } from './../authGuard/auth-guard.service';
import { AuthService } from './../authGuard/auth.service';
import { Component } from '@angular/core';

@Component({
  template: `<h1>Home Page</h1>
  `//,
 // providers: [AuthService, AuthGuard]
})
export class HomeComponent {

    constructor(private authService : AuthService){
      authService.login("username","password");
    }
}