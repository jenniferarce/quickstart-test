import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Component({
    selector: 'github',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div class="media" *ngIf="userGit">
            <h3>@{{userGit.login}}</h3>
            <img class="avatar" src="{{userGit.avatar_url}}">

            <h3 class="media-heading">Followers</h3>
            <div class="media" *ngFor="let followers of followersGit">
                <div class="media-left">
                    <img class="media-object avatar" src="{{followers.avatar_url}}">
                </div>
                <div class="media-body">
                    <h4>{{followers.login}}</h4> 
                </div>
            </div>
        </div>
        `,
    styles: [`.avatar {
                        width: 100px;
                        height:100px;
                        border-radius:100%;
                    }
        `]
    ,
    providers: [GitHubService]
})

export class GitHubComponent implements OnInit {
    isLoading = true;
    userGit;
    followersGit;


    constructor(private _githubService: GitHubService) {

    }
    ngOnInit() {

      Observable.forkJoin(
            this._githubService.getUsers("octocat"),
            this._githubService.getFollowers("octocat"))
            .subscribe(res => { this.userGit = res[0]; this.followersGit = res[1] }, null,
            () => { this.isLoading = false; });


    }


}