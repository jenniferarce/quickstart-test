import { Component } from '@angular/core';

import { NavBarComponent } from './nav-bar/navBar.component';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
  `

})

export class AppComponent {
 // constructor(private _router: Router) {

  //}

  //onClick() {
   // this._router.navigate(['photos', 2]);
  //}

}


//   <nav-bar></nav-bar>   

//import { AuthGuard } from './authGuard/auth-guard.service';

/*
<ul>
          <li><a routerLink="">Home</a></li>
          <li><a routerLink="messages">Messages</a></li>
          <li><a routerLink="photos">Photos</a></li>
          <li><a [routerLink]="['photos',1]">Photos Param</a></li>
        </ul>
        <button (click)="onClick()">Click me</button>
        <router-outlet></router-outlet>*/