import { Component, AfterViewInit } from '@angular/core';
import{Observable} from 'rxjs/Rx';
//import * as $ from 'jquery';

////<reference path="./observable-test/typings/tsd.d.ts"/>

@Component({
  selector: 'my-app',
  template: `
      <input id="search" type="text" class="form-control" placeholder="Search...">
  `
})

export class AppComponent implements AfterViewInit {

  ngAfterViewInit(){
//....
  var keyups = Observable.fromEvent($("#search"),"keyup")
  //.map(e => e.target.value)
  //.filter(text=> text.length >= 3)
  .debounceTime(400)
  .distinctUntilChanged() 
  //.flatMap(searchTerm => {
    //  var url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
      //var promise = $.getJSON(url);
      //return Observable.fromPromise(promise);
  //})
  ; 
  //tira error: al querer hacer npm start
  //Property '[Symbol.toStringTag]' is missing in type 'JQueryXHR'.
  //  keyups.subscribe(data => console.log(data));

    
  }

}