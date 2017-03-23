import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
    templateUrl:'app/nav-bar/templates/users.template.html',
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    users;
    selectedUser;
    isLoading = true;

    constructor(private _usersService: UsersService, private _route: Router) {

    }

    ngOnInit() {
        this._usersService.getUsers().subscribe(
            user => {
            this.users = user;
                this.isLoading = false;
            });
    }

    /*setUser(user: User) {
        this.selectedUser = user;
    }
    getUser() {
        return this.selectedUser;
    }
    //(click)="setUser(user)
    */


}