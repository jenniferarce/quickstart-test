import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
    template: `<h4>Users</h4>
    <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
    <div>
        <button class="btn btn-primary" type="submit" [routerLink]="['newUser']">Add User</button>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody *ngFor="let user of users">
                <tr>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td><i class="glyphicon glyphicon-edit"></i></td>
                    <td><i class="glyphicon glyphicon-remove"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
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