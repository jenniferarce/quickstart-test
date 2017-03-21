import { Component, OnInit} from '@angular/core';
import { GitHubService } from './github.service';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'github',
    template: `
    <div class="media" *ngIf="userGit">
        <div class="media-left">
        <h3 class="media-heading">@{{userGit.login}}</h3>
            <a href="#">
            <img class="media-object avatar" src="{{userGit.avatar_url}}" alt="...">
            </a>
        </div>
        <div class="media-body">
            
        </div>
    </div>
    <h3 class="media-heading">Followers</h3>
        <div class="media" *ngFor="let followers of followersGit">
        <div class="media-left">
            
            <a href="#">
            <img class="avatar" src="{{followers.avatar_url}}">
            </a>
        </div>
         <div class="media-body">
                <h4>{{followers.login}}</h4> 
        </div>
    </div>
        `,
    styles: [`.avatar {
                        width: 100px;
                        height:100px;
                    }
        `]
    ,
    providers: [GitHubService]
})

export class GitHubComponent implements OnInit{
    isLoading = true;
    userGit;
    followersGit;


    constructor(private _githubService: GitHubService) {

    }
    ngOnInit() {

        var observable = Observable.forkJoin(
            this._githubService.getUsers("octocat"),
            this._githubService.getFollowers("octocat"))
            .subscribe(res => { this.userGit = res[0]; this.followersGit = res[1] }, null,
            () => { this.isLoading = false; });

           
    }


}