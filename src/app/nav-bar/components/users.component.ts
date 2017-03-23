import { Observable } from 'rxjs/Observable';

import { Component,OnInit} from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    template: `<h4>Users</h4>

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
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `,
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    users;
    isLoading=true;

    constructor(private _usersService :UsersService){

    }

    ngOnInit(){
        this._usersService.getUsers()
                                      .subscribe(user=>{this.users = user},
                                        ()=>{this.isLoading=false;} );

    console.log(this.users);
    }
}