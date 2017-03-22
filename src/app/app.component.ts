import { AuthGuard } from './authGuard/auth-guard.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
        <ul>
          <li><a routerLink="">Home</a></li>
          <li><a routerLink="messages">Messages</a></li>
          <li><a routerLink="photos">Photos</a></li>
          <li><a [routerLink]="['photos',1]">Photos Param</a></li>
        </ul>
        <button (click)="onClick()">Click me</button>
        <router-outlet></router-outlet>
  `
  //providers: [AuthGuard]

})

export class AppComponent {
  constructor(private _router: Router) {

  }

  onClick() {
    this._router.navigate(['photos', 2]);
  }

}
