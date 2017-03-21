import { Component, AfterViewInit } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import{FormGroup,FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {PostService} from './connectingServer/post.service';
import {OnInit} from '@angular/core';
import {TableComponent} from './table-test/table.component';
import{Passengers} from './zippy/passengers';

import{GitHubComponent} from './github-list/github.component';

@Component({
  selector: 'my-app',
  template: `
      <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
      </div>
        <github></github>
  `//,
  //providers: [PostService]
})

export class AppComponent implements OnInit{
  //isLoading = true;


 //constructor(private _postService : PostService){
//
 //}

 ngOnInit(){
    //this._postService.getPosts()
      //            .subscribe(posts => {
        //          //this.isLoading = false;
          //        console.log(posts[0].id)
            //    });
 }



}



      //<div *ngIf="isLoading">Getting data...
      //<i class="fa fa-spinner fa-spin fa-3x"></i></div>
      //<passengers-table> </passengers-table>