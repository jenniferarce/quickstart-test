import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GitHubService {
    private _urlUsers = "https://api.github.com/users/";

    constructor(private _http: Http) {

    }

    getUsers(user) {
        return this._http.get(this._urlUsers + user)
            .map(res => res.json());
    }
    getFollowers(user) {
        return this._http.get(this._urlUsers + user + "/followers")
            .map(res => res.json());
    }

}


//Users:
//https://api.github.com/users/octocat
//Followers:
//https://api.github.com/users/octocat/followers